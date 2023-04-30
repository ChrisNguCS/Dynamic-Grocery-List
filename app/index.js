import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { React, useEffect } from 'react';
import { Stack, useRouter, Link } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import * as Svg from 'react-native-svg';
import LargeButton from '../components/button/LargeButton';
import GoogleButton from '../components/button/GoogleButton';
import Google from '../assets/svg/Google'
import styles from '../styles/style';
import * as Application from 'expo-application';


const Home = () => {
const router = useRouter();
const id = Application.androidId;
console.log(id);
  let [fontsLoaded] = useFonts({
    "Gilroy-SemiBold": require("../assets/fonts/Gilroy-SemiBold.ttf")
  });

  useEffect(() => {
    async function prepare(){
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  },[])

  if (!fontsLoaded){
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return(
    <View style = {styles.container}>
    {/* header options */}
      <Stack.Screen 
      options = {{
        headerShown: false,
      }}
      />
      <Image source={require('../assets/images/loginStockPhoto.png')}></Image>
      <Link href="/login" asChild >
        <TouchableOpacity>
          <LargeButton text = {'Login'}/>
        </TouchableOpacity>
      </Link>

      <Link href="/signUp" asChild >
        <TouchableOpacity>
          <LargeButton text = {'Sign Up'}/>
        </TouchableOpacity>
      </Link>

      {/* <Link href="/index" asChild > */}
        <TouchableOpacity onPress={() => {
          Linking.openURL('https://accounts.google.com/v3/signin/identifier?dsh=S-200610498%3A1682824985316625&continue=https%3A%2F%2Fwww.google.com%3Fhl%3Den-US&ec=GAlA8wE&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession')
        }}>
          <GoogleButton text = {'Continue with Google'}/>
          
        </TouchableOpacity>
      {/* </Link> */}
    </View>
  );
};
export default Home;