import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../theme/theme';
import { generalStyles } from '../screens/utils/generatStyles';
import HeaderBar from '../components/HeaderBar';




const Stack = createNativeStackNavigator();


const OrderScreen = () => {
    return (
        <View>
            <Text>order screen</Text>
        </View>
    )
}

const OrderStack = () => {
    const navigation = useNavigation<any>();

    return (
        <Stack.Navigator initialRouteName="OrderScreen">
            <Stack.Screen

                name="OrderScreen"
                component={OrderScreen}
                options={{
                    animation: 'slide_from_bottom',
                    // headerShown: true
                    header: () => <HeaderBar
                        title={` Your Orders`}
                    />
                }}>

            </Stack.Screen>



        </Stack.Navigator>
    );
};

export default OrderStack;
