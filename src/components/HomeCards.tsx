import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { generalStyles } from '../screens/utils/generatStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// type Props = {
//     openPicker: boolean;
//     setOpenPicker: (openPicker: boolean) => void;
// };

const HomeCards: React.FC = () => {
    return (
        <View>
            <View style={[styles.viewStyles, generalStyles.flexStyles, styles.overAllContainer, { alignItems: 'center', justifyContent: 'space-between' }]}>
                <TouchableOpacity style={[styles.CardContainer, styles.additionCardContainerStyles]}
                    activeOpacity={1}
                // onPress={() => setOpenPicker(true)}
                >
                    <View style={[generalStyles.flexStyles, { alignItems: 'center', justifyContent: 'space-between' }]}>
                        <AntDesign
                            name="find"
                            size={30}
                            color={COLORS.primaryGreenHex}
                        // onPress={() => setOpenPicker(true)}
                        />
                        <Text style={[styles.CardSubtitle]}>Station Discovery</Text>

                    </View>


                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={1}
                    style={[styles.CardContainer]}
                >
                    <View style={[generalStyles.flexStyles, { alignItems: 'center', justifyContent: 'space-between' }]}>
                        <AntDesign
                            name="creditcard"
                            size={30}
                            color={COLORS.primaryGreenHex}
                        />
                        <Text style={[styles.CardSubtitle]}>Stabex Card </Text>

                    </View>

                </TouchableOpacity>

            </View>

            <View style={[styles.viewStyles, generalStyles.flexStyles, styles.overAllContainer, { alignItems: 'center', justifyContent: 'space-between' }]}>
                <TouchableOpacity style={[styles.CardContainer, styles.additionCardContainerStyles]}
                    activeOpacity={1}
                >
                    <View style={[generalStyles.flexStyles, { alignItems: 'center', justifyContent: 'space-between' }]}>
                        <MaterialIcons
                            name="payments"
                            size={30}
                            color={COLORS.primaryGreenHex}
                        />
                        <Text style={[styles.CardSubtitle]}>Pay On Site</Text>

                    </View>


                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={1}
                    style={[styles.CardContainer]}
                >
                    <View style={[generalStyles.flexStyles, { alignItems: 'center', justifyContent: 'space-between' }]}>
                        <MaterialCommunityIcons
                            name="gas-cylinder"
                            size={30}
                            color={COLORS.primaryGreenHex}
                        />
                        <Text style={[styles.CardSubtitle]}>Stabex Gas </Text>

                    </View>

                </TouchableOpacity>

            </View>

            {/* last section */}
            <View style={[styles.viewStyles, generalStyles.flexStyles, styles.overAllContainer, { alignItems: 'center', justifyContent: 'space-between' }]}>
                <TouchableOpacity style={[styles.CardContainer, styles.additionCardContainerStyles]}
                    activeOpacity={1}
                >
                    <View style={[generalStyles.flexStyles, { alignItems: 'center', justifyContent: 'space-between' }]}>
                        <MaterialCommunityIcons
                            name="tools"
                            size={30}
                            color={COLORS.primaryGreenHex}
                        />
                        <Text style={[styles.CardSubtitle]}>Lubricants</Text>

                    </View>


                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={1}
                    style={[styles.CardContainer]}
                >
                    <View style={[generalStyles.flexStyles, { alignItems: 'center', justifyContent: 'space-between' }]}>
                        <MaterialIcons
                            name="miscellaneous-services"
                            size={25}
                            color={COLORS.primaryGreenHex}
                        />
                        <Text style={[styles.CardSubtitle]}>Service Pay</Text>

                    </View>

                </TouchableOpacity>

            </View>
            {/* last section */}
        </View>
    )
}

export default HomeCards

const styles = StyleSheet.create({
    CardTitle: {
        fontFamily: FONTFAMILY.poppins_medium,
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_16,
    },
    CardSubtitle: {
        fontFamily: FONTFAMILY.poppins_light,
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_14,
        marginHorizontal: SPACING.space_10
    },
    CardPriceCurrency: {
        fontFamily: FONTFAMILY.poppins_semibold,
        color: COLORS.primaryOrangeHex,
        fontSize: FONTSIZE.size_18,
    },
    viewStyles: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    CardContainer: {
        // backgroundColor: COLORS.primaryBlackHex,
        paddingHorizontal: SPACING.space_28,
        paddingVertical: SPACING.space_15,
        // borderRadius: SPACING.space_8,
        width: 150
    },
    overAllContainer: {
        backgroundColor: COLORS.primaryBlackHex,
        borderRadius: SPACING.space_8,
        padding: SPACING.space_10,
        elevation: 10
    },
    additionCardContainerStyles: {
        borderRightWidth: 0.5, borderRightColor: COLORS.primaryLightGreyHex
    }
})