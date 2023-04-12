import { View, Text, Image, TouchableOpacity } from 'react-native';
import { React, useEffect } from 'react';
import { Stack, useRouter, Link } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import * as Svg from 'react-native-svg';
import LargeButton from '../components/button/LargeButton';
import styles from '../styles/style';

const Settings = () => {
    return (
        <View contentContainerStyle = {{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
        <View style={styles.tasksWrapper}>

            {/* Task Title */}
            <Text style={styles.sectionTitle}>Settings</Text>
            

        </View>
    </View>
    );
}


export default Settings;
