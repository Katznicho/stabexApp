import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../theme/theme';
import { generalStyles } from '../screens/utils/generatStyles';
import Index from '../screens/cardScreens/Index';
import ApplyForCard from '../screens/cardScreens/ApplyForCard';
import CardScreen from '../screens/cardScreens/CardScreen';
import CardTransactions from '../screens/cardScreens/CardTransactions';
import HeaderBar from '../components/HeaderBar';
import ArrowBack from '../components/ArrowBack';
import PaymentMethods from '../screens/cardScreens/PaymentMethods';
import PaymentSummary from '../screens/cardScreens/PaymentSummary';




const Stack = createNativeStackNavigator();

const CardStack = () => {
    const navigation = useNavigation<any>();

    return (
        <Stack.Navigator initialRouteName="CardScreen">
            <Stack.Screen

                name="CardScreen"
                component={Index}
                options={{
                    animation: 'slide_from_bottom',
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="ApplyForCard"
                component={ApplyForCard}
                options={{
                    animation: 'slide_from_bottom',
                    title: 'Self Registration',
                    headerStyle: generalStyles.headerStyle,
                    headerTitleStyle: generalStyles.titleHeaderStyles,
                    headerTintColor: COLORS.primaryBlackHex,
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <ArrowBack />
                    ),
                }}
            >

            </Stack.Screen>

            {/* linked card */}
            <Stack.Screen
                name="LinkedCard"
                component={CardScreen}
                options={{
                    animation: 'slide_from_bottom',
                    title: 'Linked Card',
                    headerStyle: generalStyles.headerStyle,
                    headerTitleStyle: generalStyles.titleHeaderStyles,
                    headerTintColor: COLORS.primaryBlackHex,
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <ArrowBack />
                    ),
                }}
            ></Stack.Screen>
            {/* linked card */}

            {/* card transactions */}
            <Stack.Screen
                name="CardTransactions"
                component={CardTransactions}
                options={{
                    animation: 'slide_from_bottom',
                    // headerShown: true
                    header: () => <HeaderBar
                        title={` Card Transactions`}

                    />
                }}>

            </Stack.Screen>
            {/* card transactions */}

            {/* saved payment method */}
            <Stack.Screen
                name="TopToYourCard"
                component={PaymentMethods}
                options={{
                    animation: 'slide_from_bottom',
                    title: 'Top To Your Card',
                    headerStyle: generalStyles.headerStyle,
                    headerTitleStyle: generalStyles.titleHeaderStyles,
                    headerTintColor: COLORS.primaryBlackHex,
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <ArrowBack />
                    ),
                }}
            ></Stack.Screen>
            {/* saved payment method */}

            {/* summary */}
            <Stack.Screen
                name="PaymentSummary"
                component={PaymentSummary}
                options={{
                    animation: 'slide_from_bottom',
                    title: 'Payment Summary',
                    headerStyle: generalStyles.headerStyle,
                    headerTitleStyle: generalStyles.titleHeaderStyles,
                    headerTintColor: COLORS.primaryBlackHex,
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <ArrowBack />
                    ),
                }}
            ></Stack.Screen>
            {/* summary */}


        </Stack.Navigator>
    );
};

export default CardStack;
