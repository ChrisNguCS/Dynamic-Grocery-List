import { View, Text, Image } from 'react-native';
import React from 'react';
import { Stack, useRouter, Link } from 'expo-router';
import { useFonts } from 'expo-font';

import LargeButton from '../components/button/LargeButton';
import styles from '../components/listItem/listItem.style';


const Home = () => {
const router = useRouter();

  const [fontsLoaded] = useFonts({
    "Gilroy-SemiBold": require("../assets/fonts/Gilroy-SemiBold.ttf")
  }) 

  return(
    <View style = {styles.container}>
    {/* header options */}
      <Stack.Screen 
      options = {{
        headerShown: false,
      }}
      />

      <Image source={require('../assets/images/loginStockPhoto.png')}></Image>
      {/* <TouchableOpacity onPress={() => } */}
      <Link href={"/list"}>
        <LargeButton text = {'Login'} />
      </Link>

      <LargeButton text = {'Sign Up'}/>
      <Text>hello</Text>
    </View>
  );
};
export default Home;