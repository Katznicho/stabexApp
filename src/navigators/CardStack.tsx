import { TouchableOpacity } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../theme/theme';
import { generalStyles } from '../screens/utils/generatStyles';
import Index from '../screens/cardScreens/Index';
import ApplyForCard from '../screens/cardScreens/ApplyForCard';
import Entypo from 'react-native-vector-icons/Entypo';
import CardScreen from '../screens/cardScreens/CardScreen';




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
            ></Stack.Screen>
            {/* linked card */}


        </Stack.Navigator>
    );
};

export default CardStack;
