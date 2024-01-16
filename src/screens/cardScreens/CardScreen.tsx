import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { generalStyles } from '../utils/generatStyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import UserWallet from '../../components/UserWallet';

const CardScreen = () => {
    const tabBarHeight = useBottomTabBarHeight();
    return (
        <KeyboardAwareScrollView
            style={[{ flex: 1, width: '100%' }, generalStyles.ScreenContainer]}
            keyboardShouldPersistTaps="always"
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: tabBarHeight }}
                keyboardShouldPersistTaps="always"
            >
                {/* user wallet */}
                <UserWallet />
                {/* user waller */}




            </ScrollView>
        </KeyboardAwareScrollView>
    )
}

export default CardScreen

const styles = StyleSheet.create({})