import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { generalStyles } from '../screens/utils/generatStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
    openPicker: boolean;
    setOpenPicker: (openPicker: boolean) => void;
};

const QuickActions: React.FC<Props> = ({ openPicker, setOpenPicker }: Props) => {
    return (
        <View>
            <View style={[styles.viewStyles]}>
                <Text style={[styles.CardTitle]}>Quick Actions</Text>
            </View>

            <View style={[styles.viewStyles, generalStyles.flexStyles, { alignItems: 'center', justifyContent: 'space-between' }]}>
                <TouchableOpacity style={[styles.CardContainer]}
                    activeOpacity={1}
                    onPress={() => setOpenPicker(true)}
                >
                    <View style={[generalStyles.flexStyles, { alignItems: 'center', justifyContent: 'space-between' }]}>
                        <Text style={[styles.CardSubtitle]}>Top Up</Text>
                        <AntDesign
                            name="totop"
                            size={25}
                            color={COLORS.primaryGreenHex}
                            onPress={() => setOpenPicker(true)}
                        />

                    </View>


                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={1}
                    style={[styles.CardContainer]}
                >
                    <View style={[generalStyles.flexStyles, { alignItems: 'center', justifyContent: 'space-between' }]}>
                        <Text style={[styles.CardSubtitle]}>Add New </Text>
                        <AntDesign
                            name="pluscircle"
                            size={25}
                            color={COLORS.primaryGreenHex}
                        />

                    </View>

                </TouchableOpacity>

            </View>

            <View style={[styles.viewStyles, generalStyles.flexStyles, { alignItems: 'center', justifyContent: 'space-between' }]}>
                <TouchableOpacity style={[styles.CardContainer]}
                    activeOpacity={1}
                >
                    <View style={[generalStyles.flexStyles, { alignItems: 'center', justifyContent: 'space-between' }]}>
                        <Text style={[styles.CardSubtitle]}>Settings</Text>
                        <Feather
                            name="settings"
                            size={25}
                            color={COLORS.primaryRedHex}
                        />

                    </View>


                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={1}
                    style={[styles.CardContainer]}
                >
                    <View style={[generalStyles.flexStyles, { alignItems: 'center', justifyContent: 'space-between' }]}>
                        <Text style={[styles.CardSubtitle]}>Delink Card </Text>
                        <MaterialCommunityIcons
                            name="link-off"
                            size={25}
                            color={COLORS.primaryRedHex}
                        />

                    </View>

                </TouchableOpacity>

            </View>
        </View>
    )
}

export default QuickActions

const styles = StyleSheet.create({
    CardTitle: {
        fontFamily: FONTFAMILY.poppins_medium,
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_16,
    },
    CardSubtitle: {
        fontFamily: FONTFAMILY.poppins_light,
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_10,
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
        backgroundColor: COLORS.primaryBlackHex,
        paddingHorizontal: SPACING.space_28,
        paddingVertical: SPACING.space_15,
        borderRadius: SPACING.space_8,
        width: 150

    },
})