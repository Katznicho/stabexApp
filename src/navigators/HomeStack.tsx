import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { generalStyles } from '../screens/utils/generatStyles';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import { COLORS } from '../theme/theme';
import DetailsScreen from '../screens/DetailsScreen';
import CartScreen from '../screens/CartScreen';
import PaymentScreen from '../screens/PaymentScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    const navigation = useNavigation<any>();
    return (
        <Stack.Navigator initialRouteName="HomeScreen" >
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ animation: 'slide_from_bottom', headerShown: false }}>

            </Stack.Screen>




            {/* product details */}
            <Stack.Screen
                name="Details"
                component={DetailsScreen}

                options={{
                    animation: 'slide_from_bottom',
                    headerShown: false
                }}
            >
            </Stack.Screen>
            {/* product details */}

            {/* cart item */}
            <Stack.Screen
                name="Cart"
                component={CartScreen}

                options={{
                    animation: 'slide_from_bottom',
                    title: 'My Cart',
                    headerStyle: generalStyles.headerStyle,
                    headerTitleStyle: generalStyles.titleHeaderStyles,
                    headerTintColor: COLORS.primaryBlackHex,
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => navigation.goBack()}
                            style={{ marginLeft: 10 }}
                        >
                            <Entypo
                                name="chevron-left"
                                color={COLORS.primaryBlackHex}
                                size={28}
                            />
                        </TouchableOpacity>
                    ),
                }}
            >
            </Stack.Screen>
            {/* cart item */}

            {/* payments screen  */}
            <Stack.Screen
                name="Payment"
                component={PaymentScreen}

                options={{
                    animation: 'slide_from_bottom',
                    title: 'Payment',
                    headerStyle: generalStyles.headerStyle,
                    headerTitleStyle: generalStyles.titleHeaderStyles,
                    headerTintColor: COLORS.primaryBlackHex,
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => navigation.goBack()}
                            style={{ marginLeft: 10 }}
                        >
                            <Entypo
                                name="chevron-left"
                                color={COLORS.primaryBlackHex}
                                size={28}
                            />
                        </TouchableOpacity>
                    ),
                }}
            >
            </Stack.Screen>
            {/* payments screen */}
        </Stack.Navigator>
    )
}

export default HomeStack

