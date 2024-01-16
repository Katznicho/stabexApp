import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text, FlatList, TouchableOpacity, View, Dimensions, Image
} from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { generalStyles } from './utils/generatStyles';
import { RootState } from '../redux/store/dev';
import { useSelector } from 'react-redux';
import { useShowGreeting } from '../hooks/useShowGreetings';
import { COLORS, FONTFAMILY } from '../theme/theme';
import Carousel from 'react-native-reanimated-carousel';
import { cards } from '../data/CardsData';
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');

const HomeScreen = () => {

  const { user, isGuest } = useSelector((state: RootState) => state.user);

  const tabBarHeight = useBottomTabBarHeight();
  const greetings = useShowGreeting();

  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={[{ flex: 1, width: '100%' }, generalStyles.ScreenContainer]}>
      <FlatList
        contentContainerStyle={{
          paddingBottom: tabBarHeight,
          paddingHorizontal: 10,
          paddingTop: 10,
          opacity: 1
        }}
        data={cards}
        keyExtractor={item => item.route}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              key={index}
              style={{
                marginHorizontal: 10,
                marginVertical: 10
              }}
              onPress={() => {
                // navigation.navigate(item.route)
                //Alert.alert("pressed")
              }
              }
            >
              <View>

                <Carousel
                  loop
                  width={item.isBig ? width / 1.1 : width / 2.4}
                  height={180}
                  autoPlay={true}
                  data={item.arrayImages}
                  scrollAnimationDuration={1000}
                  style={{
                    borderRadius: 10,
                    opacity: 0.8,
                    backgroundColor: COLORS.primaryWhiteHex,
                    elevation: 5,
                  }}

                  renderItem={({ index }) => (
                    <Image
                      source={{ uri: item.arrayImages[index] }}
                      style={{
                        width: item.isBig ? width / 1.1 : width / 2.4,
                        height: height / 4,
                        borderRadius: 10,
                        opacity: 0.8,
                        backgroundColor: COLORS.primaryWhiteHex,
                      }}
                    />
                  )}
                />
                {/* absolute pos */}
                <View
                  style={{
                    position: 'absolute',
                    bottom: 5,
                    left: 8,
                    padding: 5,
                    borderRadius: 10,
                    // backgroundColor: theme.colors.primary,

                  }}
                >
                  <View
                    style={{
                      borderTopColor: COLORS.primaryRedHex,
                      borderTopWidth: 5,
                      borderStyle: 'solid',
                      width: 82,
                      marginBottom: -8,
                    }}
                  />
                  <View style={[
                    generalStyles.flexStyles, {
                      marginVertical: 5,
                      marginBottom: -8,
                      marginLeft: -5
                    }
                  ]}>

                    <Text style={[generalStyles.textStyle, { color: COLORS.primaryBlackHex, fontSize: 20, fontFamily: FONTFAMILY.poppins_light, marginLeft: 5 }]}>
                      {item.name}
                    </Text>
                  </View>

                </View>
                {/* absolute pos */}
              </View>


            </TouchableOpacity>
          )
        }}
      />



    </SafeAreaView>
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
