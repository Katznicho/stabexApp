import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React, { useState, useRef } from 'react'
import { generalStyles } from '../utils/generatStyles';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../theme/theme';
import { ActivityIndicator } from '../../components/ActivityIndicator';
import { showMessage } from 'react-native-flash-message';
import { LOGIN } from '../utils/constants/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateUserState } from '../../redux/store/slices/UserSlice';
import { useDispatch } from 'react-redux';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import PhoneInput from "react-native-phone-number-input";
import { Buffer } from "buffer"


const Login = () => {
  const dispatch = useDispatch<any>()

  const navigation = useNavigation<any>();
  const [password, setPassword] = React.useState<any>('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState<boolean>(false)
  // Function to toggle the password visibility state 

  //phone number details
  const [phoneNumber, setPhoneNumber] = React.useState<any>('');
  const phoneInput = useRef<PhoneInput>(null);
  //phone number details

  const toggleShowPassword = () => { setShowPassword(!showPassword); };

  const [errors, setErrors] = useState<any>({
    phoneNumber: '',
    password: '',
  });



  const onPressLogin = async () => {
    if (phoneNumber == "") {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        phoneNumber: "phone number is required"
      }));
      return;
    }
    else {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        phoneNumber: ""
      }));
    }


    if (password == "") {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        password: "Passsword is required"
      }));
      return;
    }
    else {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        password: ""
      }));
    }

    try {
      setLoading(true)

      const headers = new Headers();
      headers.append('Content-Type', 'application/json');

      const body = {
        password: password.trim(),
        msisdn: phoneNumber.replace(/\+/g, '').trim(),
        emailAddress: ''
      }

      console.log(body);

      fetch(`${LOGIN}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
      })
        .then(response => response.json())
        .then(async result => {
          console.log(result);

          if (result?.status === 200) {
            console.log("===========token==================")
            console.log(result?.token)
            console.log("============token========================")

            const parts: Buffer[] = result?.token.split('.').map((part: string): Buffer => {
              return Buffer.from(part.replace(/-/g, '+').replace(/_/g, '/'), 'base64');
            });
            const payload = JSON.parse(parts[1].toString());

            console.log(payload)




            console.log("logged in")

            //store the token in the async storage
            // AsyncStorage.setItem('token', result?.token);
            //"name": "Katende Nicholas"
            // let name = result.user.name;
            // let firstName = name.split(' ')[0];
            // let lastName = name.split(' ')[1];

            dispatch(
              updateUserState({
                isLoggedIn: true,
                user: {
                  fullName: payload?.fullName,
                  email: payload?.email,
                  phone: payload?.phoneNumber,
                  displayPicture: payload?.displayPicture,

                },
                authToken: result?.token,
                isGuest: false
              }),
            );

            setLoading(false);
            setPhoneNumber('');
            setPassword('');
          }
          else {
            setLoading(false);
            setErrors({

            })
            return showMessage({
              message: "Login Failed",
              description: "Wrong Credentials",
              type: "info",
              // autoHide: true,
              duration: 3000
            })
          }

          setLoading(false);
        })
        .catch(error => {
          console.log('error', JSON.stringify(error.message));

          setLoading(false);
        });


    } catch (error) {
      setLoading(false)
      showMessage({
        message: "Error",
        description: "Wrong Credentials",
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
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{ paddingBottom: 50 }}
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
          <View

          >
            <TouchableOpacity>
              <Text style={generalStyles.authTitle}>Login</Text>
            </TouchableOpacity>
            <View style={generalStyles.bottomHairline} />

          </View>

          <View>
            <TouchableOpacity
              onPress={() => {

                navigation.navigate('Register');
              }}
            >
              <Text style={generalStyles.authTitle}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* login and register */}

        {/* center logo */}
        <View style={generalStyles.centerContent}>
          <Image
            source={require('../../assets/app_images/stabex.png')}
            style={{
              width: 100,
              height: 100,
              // tintColor: COLORS.primaryBlackHex,
              borderRadius: 20
            }}
            resizeMode="contain"
          />

        </View>
        {/* center logo */}

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


        <View style={generalStyles.formContainer}>
          <View>
            <Text style={generalStyles.formInputTextStyle}>
              Password</Text>
          </View >
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



        <View style={generalStyles.forgotPasswordContainer}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={generalStyles.forgotText}>
              {'Forgot password?'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          activeOpacity={1}
          style={generalStyles.loginContainer}
          onPress={() => onPressLogin()}>
          <Text style={generalStyles.loginText}>{'Login'}</Text>
        </TouchableOpacity>


        {loading && <ActivityIndicator />}
      </KeyboardAwareScrollView>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({

  icon: {
    marginLeft: -20,
  },
  viewStyles: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 15
  },

});

