import { StyleSheet, View, ImageBackground, Text } from 'react-native'
import React from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'

const CardBackGroundImage: React.FC = () => {
    return (
        <View style={styles.viewStyles}>
            <View

                style={styles.ItemBackgroundImage}>

                <View style={styles.ImageInfoOuterContainer}>
                    <View style={styles.ImageInfoInnerContainer}>
                        <Text>Katende Nicholas</Text>
                    </View>
                    <View style={styles.ImageInfoInnerContainer}>
                        <Text>Katende Nicholas</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default CardBackGroundImage

const styles = StyleSheet.create({
    ItemBackgroundImage: {
        width: '100%',
        // aspectRatio: 20 / 25,
        justifyContent: 'space-between',
        height: 250,
        // borderRadius: 50,
        backgroundColor: COLORS.primaryBlackRGBA,
        borderRadius: BORDERRADIUS.radius_10,
    },
    viewStyles: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    ImageInfoOuterContainer: {
        paddingVertical: SPACING.space_24,
        paddingHorizontal: SPACING.space_30,
        backgroundColor: COLORS.primaryBlackRGBA,
        borderTopLeftRadius: BORDERRADIUS.radius_20 * 2,
        borderTopRightRadius: BORDERRADIUS.radius_20 * 2,
    },
    ImageInfoInnerContainer: {
        justifyContent: 'space-between',
        gap: SPACING.space_15,
    },
    InfoContainerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ItemTitleText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_24,
        color: COLORS.primaryWhiteHex,
    },
    ItemSubtitleText: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_12,
        color: COLORS.primaryWhiteHex,
    },
    ItemPropertiesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.space_20,
    }
})

//