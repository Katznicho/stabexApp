import React, { useRef, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import HeaderBar from '../components/HeaderBar';
import { generalStyles } from './utils/generatStyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RootState } from '../redux/store/dev';
import { useSelector } from 'react-redux';
import { useShowGreeting } from '../hooks/useShowGreetings';



const HomeScreen = () => {

  const { user, isGuest } = useSelector((state: RootState) => state.user);

  const tabBarHeight = useBottomTabBarHeight();
  const greetings = useShowGreeting();

  return (
    <KeyboardAwareScrollView
      style={[{ flex: 1, width: '100%' }, generalStyles.ScreenContainer]}
      keyboardShouldPersistTaps="always"
      contentContainerStyle={{ paddingBottom: tabBarHeight }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}

      >
        {/* App Header */}
        <HeaderBar
          title={` ${greetings} ${isGuest ? 'Guest' : user?.fullName}`}

        />


      </ScrollView>
    </KeyboardAwareScrollView>
  );
};



export default HomeScreen;

// Red: #d1111b
// Blue: #322f90
