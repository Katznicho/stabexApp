import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { generalStyles } from '../utils/generatStyles'
import TransactionFlatList from '../../components/TransactionFlatList'

const CardTransactions = () => {
    return (
        <SafeAreaView style={[generalStyles.ScreenContainer]}>
            <TransactionFlatList />
        </SafeAreaView>
    )
}

export default CardTransactions

const styles = StyleSheet.create({})