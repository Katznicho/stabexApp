import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React, { useState, useRef } from 'react'
import { generalStyles } from '../utils/generatStyles'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard, Button } from 'react-native'
import { COLORS } from '../../theme/theme'
import { useNavigation } from '@react-navigation/native'
import { ActivityIndicator } from '../../components/ActivityIndicator'
import { showMessage } from 'react-native-flash-message'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { REGISTER } from '../utils/constants/routes'
import { validateEmail } from '../utils/helpers/helpers';
import PhoneInput from "react-native-phone-number-input";

const Register = () => {

  const navigation = useNavigation<any>();
  const [fullName, setfullName] = React.useState<any>('');
  const [email, setEmail] = React.useState<any>('');
  const [password, setPassword] = React.useState<any>('');
  const [confirmPassword, setConfirmPassword] = React.useState<any>('');

  //phone number details
  const [phoneNumber, setPhoneNumber] = React.useState<any>('');
  const phoneInput = useRef<PhoneInput>(null);
  //phone number details


  //phone number details

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<any>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
  });

  const [showPassword, setShowPassword] = useState<boolean>(false)
  // Function to toggle the password visibility state 
  const toggleShowPassword = () => { setShowPassword(!showPassword); };


  const onRegister = async () => {

    // Validate email format
    if (!validateEmail(email)) {

      setErrors((prevErrors: any) => ({
        ...prevErrors,
        email: 'Invalid email format',
      }));
      return;

    } else {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        email: '',
      }));
    }

    // Validate password matching
    if (password !== confirmPassword) {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        passwordMatch: 'Passwords do not match',
      }));
      return;
    } else {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        passwordMatch: '',
      }));
    }

    const trimmedFields = {
      fullName: fullName.trim(),
      email: email.trim(),
      password: password.trim(),
      confirmPassword: confirmPassword.trim(),

      // phoneNumber: phoneNumber.trim(),
    };
    setLoading(true)
    Keyboard.dismiss()

    try {
      const headers = new Headers();
      headers.append('Accept', 'application/json');

      const body = new FormData();
      body.append('email', email.toLowerCase());
      body.append('password', password);
      body.append("phoneNumber", phoneNumber)
      body.append("fullName", fullName);
      body.append("confirmPassword", confirmPassword);
      fetch(`${REGISTER}`, {
        method: 'POST',
        headers,
        body,
      })
        .then(response => response.json())
        .then(async result => {
          console.log(result);

          if (result?.errors) {
            setErrors(result.errors);
            showMessage({
              message: "Error",
              description: "Invalid email or password",
              type: "info",
              autoHide: true,
              duration: 3000,
              icon: "danger"
            })
            return setLoading(false);
          }

          if (result.response === 'failure') {
            setErrors({
              // email: [result?.message],
              password: [result?.message],
            });
            showMessage({
              message: "Error",
              description: "Invalid email or password",
              type: "info",
              autoHide: true,
              duration: 3000,
              icon: "danger"
            })
            return setLoading(false);
          }

          if (result?.response === 'success') {
            showMessage({
              message: "VerifyEmail",
              description: "An verification code has been sent to your email",
              type: "success",
              autoHide: true,
              duration: 3000,
              icon: "success"
            })
            navigation.navigate("VerifyEmail", { email: email })
            setLoading(false);

          }




          setLoading(false);
        })
        .catch(error => {
          console.log('error', error);

          setLoading(false);
        });

      setTimeout(() => {
        setLoading(false);
        navigation.navigate("VerifyEmail", { email: email })
        setLoading(false);
      }, 3000)
    }
    catch (error) {
      setLoading(false);
      // showMessage({
      //   message: "Error",
      //   description: "An error occured while creating your account",
      //   type: "info",
      //   autoHide: true,
      //   duration: 3000,
      //   icon: "danger"
      // })
    }

  }



  return (
    <View style={generalStyles.ScreenContainer}>
      <KeyboardAwareScrollView
        style={{
          flex: 1,
          width: '100%',
        }}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}

      >
        {/* login and register */}
        {/* <Text style={styles.title}>{'Login'}</Text> */}

        {/* login and register */}
        <View
          style={[
            generalStyles.flexStyles,
            {
              alignItems: 'center',
            },
          ]}
        >


          <View>
            <TouchableOpacity
              onPress={() => {

                navigation.navigate('Login');
              }}
            >
              <Text style={generalStyles.authTitle}>Login</Text>
            </TouchableOpacity>
          </View>

          <View

          >
            <TouchableOpacity>
              <Text style={generalStyles.authTitle}>Register</Text>
            </TouchableOpacity>
            <View style={generalStyles.bottomHairline} />

          </View>
        </View>
        {/*  register */}

        {/* first name */}
        <View style={generalStyles.formContainer}>
          <View>
            <Text style={generalStyles.formInputTextStyle}>
              Full Name</Text>
          </View>

          <TextInput
            style={[generalStyles.formInput, styles.textInputMarginRight]}
            placeholder={'enter your full name name'}
            keyboardType="default"
            placeholderTextColor={COLORS.primaryWhiteHex}
            onChangeText={text => setfullName(text)}
            value={fullName}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <View>
            {errors.fullName && <Text style={generalStyles.errorText}>{errors.fullName}</Text>}
          </View>

        </View>
        {/* first name */}




        {/* phone number */}
        <View style={generalStyles.formContainer}>
          <View>
            <Text style={generalStyles.formInputTextStyle}>
              Phone Number </Text>
          </View>
          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            defaultCode="UG"
            layout="second"

            onChangeFormattedText={(text) => {
              setPhoneNumber(text);
            }}
            placeholder={'enter phone number'}
            containerStyle={[generalStyles.formInput, { backgroundColor: COLORS.primaryLightWhiteGrey, }]}
            textContainerStyle={{ paddingVertical: 0, backgroundColor: COLORS.primaryLightWhiteGrey }}
            textInputProps={{
              placeholderTextColor: COLORS.primaryWhiteHex
            }}
          />
          <View>
            {errors.phoneNumber && <Text style={generalStyles.errorText}>{errors.phoneNumber}</Text>}
          </View>

        </View>
        {/* phone number */}



        {/* email */}
        <View style={generalStyles.formContainer}>
          <View>
            <Text style={generalStyles.formInputTextStyle}>
              Email</Text>
          </View>

          <TextInput
            style={[generalStyles.formInput, styles.textInputMarginRight]}
            placeholder={'enter email'}
            keyboardType="email-address"
            placeholderTextColor={COLORS.primaryWhiteHex}
            onChangeText={text => setEmail(text)}
            value={email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <View>
            {errors.email && <Text style={generalStyles.errorText}>{errors.email}</Text>}
          </View>

        </View>
        {/* email */}

        {/* password */}
        {/* password */}
        <View style={[generalStyles.formContainer]}>
          <View>
            <Text style={generalStyles.formInputTextStyle}>
              Password</Text>
          </View>
          <View style={[generalStyles.flexStyles, styles.viewStyles]}>
            <TextInput
              style={[generalStyles.formInput, { flex: 1 }]}
              placeholderTextColor={COLORS.primaryWhiteHex}
              secureTextEntry={!showPassword}
              placeholder={'enter password'}
              onChangeText={text => setPassword(text)}
              value={password}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
            <MaterialCommunityIcons
              name={showPassword ? 'eye-off' : 'eye'}
              size={24}
              color={COLORS.secondaryGreyHex}
              style={styles.icon}
              onPress={toggleShowPassword}
            />
          </View>

          <View>
            {errors.password && <Text style={generalStyles.errorText}>{errors.password}</Text>}
          </View>

        </View>

        {/* password */}
        {/* password */}

        {/* confirm password */}
        {/* confirm password */}
        <View style={generalStyles.formContainer}>
          <View>
            <Text style={generalStyles.formInputTextStyle}>
              Confirm Password</Text>
          </View>
          <View style={[generalStyles.flexStyles, styles.viewStyles]}>
            <TextInput
              style={[generalStyles.formInput, { flex: 1 }]}
              placeholderTextColor={COLORS.primaryWhiteHex}
              secureTextEntry={!showPassword}
              placeholder={'confirm  password'}
              onChangeText={text => setConfirmPassword(text)}
              value={confirmPassword}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
            <MaterialCommunityIcons
              name={showPassword ? 'eye-off' : 'eye'}
              size={24}
              color={COLORS.secondaryGreyHex}
              style={styles.icon}
              onPress={toggleShowPassword}
            />

          </View>

          <View>
            {errors.confirmpassword && <Text style={generalStyles.errorText}>{errors.confirmpassword}</Text>}
          </View>

        </View>

        {/* confirm  password*/}

        <TouchableOpacity
          activeOpacity={1}
          style={generalStyles.loginContainer}
          onPress={() => onRegister()}>
          <Text style={generalStyles.loginText}>{'Register'}</Text>
        </TouchableOpacity>

        {loading && <ActivityIndicator />}
      </KeyboardAwareScrollView>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  icon: {
    marginLeft: -20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  viewStyles: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 15
  },
  phoneInput: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  countryButton: {
    marginBottom: 20,
  },
  countryPickerButton: {
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  countryPickerCloseButton: {
    width: 20,
    height: 20,
  },
  submitButton: {
    width: '100%',
  },
  textInputMarginRight: {
    marginRight: 15
  }
})