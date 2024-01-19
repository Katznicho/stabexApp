import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { generalStyles } from '../screens/utils/generatStyles'
import { COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme'



const TransactionCard: React.FC<{ data: any }> = ({ data }: any) => {
    return (
        <View>
            <View style={[generalStyles.flexStyles, { justifyContent: 'space-between' }]}>
                <View>
                    <Text style={styles.CardTitle}>{data.month}</Text>
                    <Text style={styles.CardSubtitle}>{data.day}</Text>
                    <Text style={styles.CardSubtitle}>/{data.year}</Text>
                </View>
                <View style={[styles.cardContainer]}>
                    <Text style={styles.CardTitle}>{data.transactionType}</Text>
                    <Text style={[styles.CardSubtitle, { color: COLORS.secondaryDarkGreyHex }]}>{data.time}</Text>
                    <Text style={[styles.CardSubtitle, { color: COLORS.secondaryDarkGreyHex }]}>{data.cardNumber}</Text>
                    <Text style={[styles.CardSubtitle, { color: COLORS.primaryGreenHex }]}>{data.status}</Text>
                </View>
                <View style={[{ alignItems: 'center' }]}>
                    <Text style={styles.CardPriceCurrency}>UGX </Text>
                    <Text style={styles.CardPriceCurrency}> {data.amount} </Text>
                </View>
            </View>
        </View>
    )
}

export default TransactionCard

const styles = StyleSheet.create({
    cardContainer: {
        // padding: 10,
        // backgroundColor: COLORS.primaryBlueHex,
        // margin: 10,
        // borderRadius: SPACING.space_5,
        flex: 0.7
    },
    CardTitle: {
        fontFamily: FONTFAMILY.poppins_medium,
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_14,
    },
    CardSubtitle: {
        fontFamily: FONTFAMILY.poppins_light,
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_10,
        // marginHorizontal: SPACING.space_10
    },
    CardPriceCurrency: {
        fontFamily: FONTFAMILY.poppins_semibold,
        color: COLORS.primaryOrangeHex,
        fontSize: FONTSIZE.size_12,
    },
})