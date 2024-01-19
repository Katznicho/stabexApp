import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import TransactionCard from './TransactionCard'
import { transactionsData } from '../data/TransactionData'
import { generalStyles } from '../screens/utils/generatStyles'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

const TransactionFlatList = () => {
    const tabBarHeight = useBottomTabBarHeight();
    return (
        <FlatList
            data={transactionsData}
            contentContainerStyle={{ paddingBottom: tabBarHeight }}
            renderItem={({ item }) => <View style={[generalStyles.viewStyles]}><TransactionCard data={item} /></View>}
            keyExtractor={(item) => item.id}
        />
    )
}

export default TransactionFlatList

const styles = StyleSheet.create({})