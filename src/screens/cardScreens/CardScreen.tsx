import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { generalStyles } from '../utils/generatStyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import UserWallet from '../../components/UserWallet';
import { COLORS, FONTFAMILY, FONTSIZE } from '../../theme/theme';
import QuickActions from '../../components/QuickActions';
import CardBackGroundImage from '../../components/CardBackGroundImage';
import TransactionCard from '../../components/TransactionCard';
import { transactionsData } from '../../data/TransactionData';
import TopUpModal from '../../components/Modals/TopUpModal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


const CardScreen: React.FC = () => {
    const tabBarHeight = useBottomTabBarHeight();

    const [openTopUpModal, setOpenTopUpModal] = React.useState<boolean>(false);

    const navigation = useNavigation<any>();


    return (
        <KeyboardAwareScrollView
            style={[{ flex: 1, width: '100%' }, generalStyles.ScreenContainer]}
            keyboardShouldPersistTaps="always"
            contentContainerStyle={{ paddingBottom: tabBarHeight }}
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: tabBarHeight }}
                keyboardShouldPersistTaps="always"
            >
                {/* user wallet */}
                <UserWallet />
                {/* user waller */}

                {/* card image */}
                <CardBackGroundImage />
                {/* card image */}

                {/* quick actions */}
                <QuickActions
                    openPicker={openTopUpModal}
                    setOpenPicker={setOpenTopUpModal}
                />
                {/* quick actions */}

                {/* last 5 transactions */}
                <View style={[generalStyles.flexStyles, { alignItems: 'center', justifyContent: 'space-between' }]}>
                    <View style={[generalStyles.viewStyles]}>
                        <Text style={[styles.CardTitle]}>Transactions</Text>
                    </View>

                    <TouchableOpacity style={[generalStyles.viewStyles]}>
                        <AntDesign
                            name="arrowright"
                            size={25}
                            color={COLORS.primaryGreenHex}
                            onPress={() => navigation.navigate("CardTransactions")}
                        />

                    </TouchableOpacity>

                </View>

                <View style={[generalStyles.viewStyles]}>
                    {
                        transactionsData.slice(0.4).map((item: any, index: number) => {
                            return <TransactionCard key={index} data={item} />
                        })
                    }
                </View>
                {/* last 5 transactions */}

                {/* top up modal */}
                <TopUpModal
                    openPicker={openTopUpModal}
                    setOpenPicker={setOpenTopUpModal}
                />
                {/* top up modal */}




            </ScrollView>
        </KeyboardAwareScrollView>
    )
}

export default CardScreen

const styles = StyleSheet.create({
    CardTitle: {
        fontFamily: FONTFAMILY.poppins_medium,
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_16,
    },

})