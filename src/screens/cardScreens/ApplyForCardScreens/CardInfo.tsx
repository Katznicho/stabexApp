import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { generalStyles } from '../../utils/generatStyles';
import { COLORS } from '../../../theme/theme';
import PhoneInput from "react-native-phone-number-input";
import { Picker } from '@react-native-picker/picker';

const CardInfo = ({ cardApplication, setCardApplication, goToNextStep, errors, setErrors }: any) => {

    const tabBarHeight = useBottomTabBarHeight();
    const phoneInput = useRef<PhoneInput>(null);

    // cardType: '',
    // cardHolderName: '',
    // cardHolderEmail: '',
    // cardHolderMobile: '',
    // cardHolderDob: '',
    // idType

    const [idTypes, setIdTypes] = useState([
        {
            id: 1,
            name: 'National Identity Card',
        }, {
            id: 2,
            name: 'Passport'
        }, {
            id: 3,
            name: 'Driving License'
        }
    ])


    return (
        <View style={{ flex: 1, paddingBottom: tabBarHeight }}>
            <View style={[styles.viewStyles]}>
                <Text style={[{ fontSize: 20 }, generalStyles.textStyle]}>
                    Provide Card Information
                </Text>
            </View>
            <View style={[styles.viewStyles]}>
                <Text style={[generalStyles.textStyle]}>
                    This will be displayed on your card once it is issued
                </Text>
            </View>
            {/* card holder name */}
            <View style={styles.formContainer}>
                <View>
                    <Text style={generalStyles.formInputTextStyle}>
                        Card Holder Name*</Text>
                </View>
                <View>
                    <TextInput
                        style={[generalStyles.formInput, styles.borderStyles, styles.extraMargingRight]}
                        placeholderTextColor={COLORS.primaryWhiteHex}
                        // placeholderStyle={{ borderColor: 'red' }}
                        keyboardType="default"
                        placeholder={'enter card holder name'}
                        onChangeText={text => setCardApplication((prev: any) => {
                            return { ...prev, cardHolderName: text }
                        })}
                        value={cardApplication.cardHolderName}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"

                    />
                </View>

                <View>
                    {errors.year_started && <Text style={generalStyles.errorText}>{errors.year_started}</Text>}
                </View>

            </View>
            {/* card holder name */}

            {/* mobile number */}
            <View style={generalStyles.formContainer}>
                <View>
                    <Text style={generalStyles.formInputTextStyle}>
                        Mobile Number </Text>
                </View>
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={cardApplication.cardHolderMobile}
                    defaultCode="UG"
                    layout="second"
                    onChangeFormattedText={(text) => {
                        // setPhoneNumber(text);
                        setCardApplication((prev: any) => {
                            return { ...prev, cardHolderMobile: text }
                        })
                    }}
                    placeholder={'enter phone number'}
                    containerStyle={[generalStyles.formInput, styles.borderStyles, { backgroundColor: COLORS.primaryLightWhiteGrey, }]}
                    textContainerStyle={{ paddingVertical: 0, backgroundColor: COLORS.primaryLightWhiteGrey }}
                    textInputProps={{
                        placeholderTextColor: COLORS.primaryWhiteHex
                    }}
                />
                <View>
                    {errors.phoneNumber && <Text style={generalStyles.errorText}>{errors.phoneNumber}</Text>}
                </View>

            </View>
            {/* mobile number */}

            {/* id type */}
            <View style={styles.formContainer}>
                <View>
                    <Text style={generalStyles.formInputTextStyle}>
                        Select ID Type</Text>
                </View>
                <Picker
                    // style={[generalStyles.formInput, styles.borderStyles]}
                    placeholder=" select community category"
                    selectedValue={cardApplication.idType}
                    onValueChange={(itemValue, itemIndex) => {
                        setCardApplication((prev: any) => {
                            return { ...prev, idType: itemValue }
                        })
                    }}
                    itemStyle={{
                        color: COLORS.primaryWhiteHex,
                        backgroundColor: COLORS.primaryBlackHex,
                        borderWidth: 1
                    }}
                    selectionColor={COLORS.primaryWhiteHex}
                    accessibilityActions={[{ name: 'done', label: 'Done' }]}

                    mode="dropdown"
                    enabled
                    dropdownIconColor={COLORS.primaryWhiteHex}
                >
                    {idTypes.map((item: any) => {

                        return (<Picker.Item
                            color={COLORS.primaryWhiteHex}
                            style={[{
                                backgroundColor: COLORS.primaryBlackHex,
                                borderColor: COLORS.primaryWhiteHex,
                                borderRadius: 10,
                                borderWidth: 1
                            }]}
                            key={item.id}
                            value={item.id}
                            label={item.name}
                        />)
                    })}
                </Picker>
            </View>
            {/* id type */}

            {/* id number */}
            <View style={styles.formContainer}>
                <View>
                    <Text style={generalStyles.formInputTextStyle}>
                        ID Number*</Text>
                </View>
                <View>
                    <TextInput
                        style={[generalStyles.formInput, styles.borderStyles, styles.extraMargingRight]}
                        placeholderTextColor={COLORS.primaryWhiteHex}
                        // placeholderStyle={{ borderColor: 'red' }}
                        keyboardType="default"
                        placeholder={'enter id number'}
                        onChangeText={text => setCardApplication((prev: any) => {
                            return { ...prev, idNumber: text }
                        })}
                        value={cardApplication.idNumber}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"

                    />
                </View>

                <View>
                    {errors.year_started && <Text style={generalStyles.errorText}>{errors.year_started}</Text>}
                </View>

            </View>
            {/* id number */}

            {/* button section */}
            <View>
                <TouchableOpacity
                    activeOpacity={1}
                    style={[generalStyles.loginContainer,
                    styles.buttonStyles,
                        // { backgroundColor: isDisabled() ? COLORS.primaryLightGreyHex : COLORS.primaryOrangeHex }
                    ]}
                    onPress={goToNextStep}
                // disabled={isDisabled()}
                // disabled={count.some((item: any) => item.imagePath === null) || uploadingImages}
                >
                    <Text style={generalStyles.loginText}>{'Next'}</Text>
                </TouchableOpacity>

            </View>
            {/* button section */}
        </View>
    )
}

export default CardInfo

const styles = StyleSheet.create({
    viewStyles: {
        marginHorizontal: 10, marginVertical: 5
    },
    borderStyles: {
        borderWidth: 0.5,
        borderBottomWidth: 0.5,
        height: 45,
        borderColor: COLORS.primaryLightGreyHex,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    formContainer: {
        marginVertical: 10,
        marginHorizontal: 15
    },
    inlineTextInputStyles: {
        width: "100%"
    },
    buttonStyles: {
        width: "80%",
        marginTop: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10
    },
    extraMargingRight: {
        marginRight: 30
    }

})