import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef, useEffect } from 'react';
import RBSheet from "react-native-raw-bottom-sheet";
import { COLORS } from '../../theme/theme';
import { generalStyles } from '../../screens/utils/generatStyles';
import AmountScroller from '../AmountScroller';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from '../ActivityIndicator';

type Props = {
    openPicker: boolean;
    setOpenPicker: (openPicker: boolean) => void;
};

const amounts = ["1,000", "2,000", "3,000", "50,000", "12,000", "40,000"];

const TopUpModal: React.FC<Props> = ({ openPicker, setOpenPicker }: Props) => {

    const refRBSheet = useRef<any>();

    useEffect(() => {
        if (openPicker) {
            refRBSheet.current?.open();
        } else {
            refRBSheet.current?.close();
        }
    }, [openPicker]);

    const [amount, setAmount] = React.useState<string>('');
    const [loading, setLoading] = React.useState<boolean>(false)

    const navigation = useNavigation<any>();

    const handleTopUp = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            navigation.navigate('TopToYourCard', { amount });
        }, 5000)

    }


    return (
        <RBSheet
            ref={refRBSheet}
            height={300}
            closeOnDragDown={false}
            closeOnPressMask={false}
            // openDuration={250}
            customStyles={{
                container: {
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    backgroundColor: COLORS.primaryBlackHex,
                    borderRadius: 10,
                    elevation: 10
                },

                wrapper: {
                    backgroundColor: 'transparent',
                },
                draggableIcon: {
                    backgroundColor: '#000',
                },
            }}
        >
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => setOpenPicker(false)}
                style={[generalStyles.centerContent, { position: 'absolute', top: 10, right: 10 }]}
            >
                <AntDesign
                    name="close"
                    size={25}
                    color={COLORS.primaryRedHex}
                    onPress={() => setOpenPicker(false)}
                />

            </TouchableOpacity>
            <View style={[generalStyles.formContainer]}>
                <View>
                    <Text style={generalStyles.formInputTextStyle}>
                        Top Up
                    </Text>
                </View>
                <Text style={[generalStyles.textStyle]}>Please follow the prompts below to top up your card</Text>
                <View>
                    <TextInput
                        style={styles.formInput}
                        placeholder={'enter amount'}
                        keyboardType="number-pad"
                        placeholderTextColor={COLORS.secondaryGreyHex}
                        onChangeText={text => setAmount(text)}
                        value={amount}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                </View>

                {/* amount scroller */}
                <View>
                    <AmountScroller
                        amounts={amounts} amount={amount}
                        setAmount={setAmount}
                    />
                </View>
                {/* amount scroller */}

                <TouchableOpacity
                    style={[generalStyles.loginContainer, styles.buttonCardStyles]}
                    onPress={handleTopUp}

                >
                    <Text style={[generalStyles.loginText, { color: COLORS.primaryBlackHex }]}>
                        {'Proceed'}
                    </Text>
                </TouchableOpacity>
                {loading && <ActivityIndicator />}

            </View>
        </RBSheet>
    )
}

export default TopUpModal

const styles = StyleSheet.create({
    formInput: {
        color: COLORS.primaryWhiteHex,
        fontSize: 15,
        borderWidth: 0.4,
        borderColor: COLORS.primaryLightGreyHex,
        borderRadius: 10,
    },
    buttonCardStyles: {
        width: "80%",
        // marginHorizontal: 20,
        backgroundColor: COLORS.primaryGreenHex,
    },
})