import React from 'react';
import {
  StyleSheet, Dimensions, ScrollView
} from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { generalStyles } from './utils/generatStyles';
import { RootState } from '../redux/store/dev';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import HomeCards from '../components/HomeCards';
import useGetUserLocation from '../hooks/useGetUserLocation';


const { width, height } = Dimensions.get('window');

const HomeScreen = () => {

  const { user, isGuest } = useSelector((state: RootState) => state.user);

  const tabBarHeight = useBottomTabBarHeight();


  const { } = useGetUserLocation();

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
        {/* home cards */}
        <HomeCards />
        {/* home cards */}

      </ScrollView>
    </KeyboardAwareScrollView>
  );
};



export default HomeScreen;



const styles = StyleSheet.create({


  cardParent: { flex: 1, margin: 10 },
  cardRow: { flexDirection: 'row', alignItems: "center", marginVertical: 10, marginRight: 10 },

  cardContainer: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: { fontWeight: 'bold', color: '#000' },


})
