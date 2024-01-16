import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React, { useState } from 'react'
import { generalStyles } from '../utils/generatStyles'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard } from 'react-native'
import { COLORS } from '../../theme/theme'
import { useNavigation } from '@react-navigation/native'
import { ActivityIndicator } from '../../components/ActivityIndicator'
import { APP_USERS } from '../utils/constants/constants'
import { showMessage } from 'react-native-flash-message'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { REGISTER } from '../utils/constants/routes'
import { validateEmail } from '../utils/helpers/helpers'

const Register = () => {

  const navigation = useNavigation<any>();
  const [fullName, setfullName] = React.useState<any>('');
  const [phoneNumber, setPhoneNumber] = React.useState<any>('');
  const [email, setEmail] = React.useState<any>('');
  const [password, setPassword] = React.useState<any>('');
  const [confirmPassword, setConfirmPassword] = React.useState<any>('');

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

      phoneNumber: phoneNumber.trim(),
    };
    setLoading(true)
    Keyboard.dismiss()

    try {
      // const headers = new Headers();
      // headers.append('Accept', 'application/json');

      // const body = new FormData();
      // body.append('email', email.toLowerCase());
      // body.append('password', password);
      // body.append("phone_number", phoneNumber)
      // body.append("full_name", fullName);
      // body.append("role", APP_USERS.RECEIVER);
      // body.append("confirm_password", confirmPassword);
      // fetch(`${REGISTER}`, {
      //   method: 'POST',
      //   headers,
      //   body,
      // })
      //   .then(response => response.json())
      //   .then(async result => {
      //     console.log(result);

      //     if (result?.errors) {
      //       setErrors(result.errors);
      //       showMessage({
      //         message: "Error",
      //         description: "Invalid email or password",
      //         type: "info",
      //         autoHide: true,
      //         duration: 3000,
      //         icon: "danger"
      //       })
      //       return setLoading(false);
      //     }

      //     if (result.response === 'failure') {
      //       setErrors({
      //         // email: [result?.message],
      //         password: [result?.message],
      //       });
      //       showMessage({
      //         message: "Error",
      //         description: "Invalid email or password",
      //         type: "info",
      //         autoHide: true,
      //         duration: 3000,
      //         icon: "danger"
      //       })
      //       return setLoading(false);
      //     }

      //     if (result?.response === 'success') {
      //       showMessage({
      //         message: "VerifyEmail",
      //         description: "An verification code has been sent to your email",
      //         type: "success",
      //         autoHide: true,
      //         duration: 3000,
      //         icon: "success"
      //       })
      // navigation.navigate("VerifyEmail", { email: email })
      // setLoading(false);

      //     }




      //     setLoading(false);
      //   })
      //   .catch(error => {
      //     console.log('error', error);

      //     setLoading(false);
      //   });

      setTimeout(() => {
        setLoading(false);
        navigation.navigate("VerifyEmail", { email: email })
        setLoading(false);
      }, 3000)
    }
    catch (error) {
      setLoading(false);
      showMessage({
        message: "Error",
        description: "An error occured while creating your account",
        type: "info",
        autoHide: true,
        duration: 3000,
        icon: "danger"
      })
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
            style={generalStyles.formInput}
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
          <TextInput
            style={generalStyles.formInput}
            placeholder="Enter phone number with country code"
            placeholderTextColor={COLORS.primaryLightGreyHex}
            keyboardType="number-pad"
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}

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
            style={generalStyles.formInput}
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
        <View style={generalStyles.formContainer}>
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
        {/* conform passsword */}



        {/* <View style={styles.forgotPasswordContainer}>
      <TouchableOpacity onPress={() => onForgotPassword()}>
        <Text style={styles.forgotPasswordText}>
          {'Forgot password?'}
        </Text>
      </TouchableOpacity>
    </View> */}

        <TouchableOpacity
          activeOpacity={1}
          style={generalStyles.loginContainer}
          onPress={() => onRegister()}>
          <Text style={generalStyles.loginText}>{'Register'}</Text>
        </TouchableOpacity>
        <>
          {/* <Text style={styles.orTextStyle}> {'OR'}</Text>
      <Text style={styles.facebookText}>
        {'Login With Google'}
      </Text> */}
        </>


        {/* <IMGoogleSignInButton
      containerStyle={styles.googleButtonStyle}
      onPress={onGoogleButtonPress}
    /> */}

        {/* <TouchableOpacity
      style={styles.phoneNumberContainer}
      onPress={() => navigation.navigate('Sms', { isSigningUp: false })}>
      <Text style={styles.phoneNumber}>
        Login with phone number
      </Text>
    </TouchableOpacity> */}

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
  viewStyles: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})