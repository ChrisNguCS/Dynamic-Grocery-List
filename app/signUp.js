import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Stack, Link } from 'expo-router';
import LargeButton from '../components/button/LargeButton';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = async () => {};
    const signIn = async () => {};

    return (
        <View style= {styles.container}>
            <Stack.Screen
                options = {{
                    headerShown: true,
                    headerTitle: ''
                }}

            />

            <Text style={styles.sectionTitle}>Sign Up</Text>
            <Text style={styles.subHeader}>Enter your email and password</Text>
            <Text style={styles.textStyle}>Email</Text>
            <TextInput style = {styles.input} placeholder='Email' onChangeText={text => setEmail(text)}/>
            <Text style={styles.textStyle}>Password</Text>
            <TextInput style = {styles.input} textContentType = "password" placeholder='Password' onChangeText={text => setPassword(text)}/>
            <Text styles={styles.subHeader}>By continuing you agree to our Terms of Service
            and Privacy Policy.</Text>
            <Link href="/" asChild >
            <TouchableOpacity>
                <LargeButton text = {'Sign Up'}/>
            </TouchableOpacity>
            </Link>
            <Text styles={styles.textStyle}>Already have an account? Log In</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: 230,
        paddingHorizontal: 30,
        alignItems: 'left',
        backgroundColor:'#ffffff'
    },
    textStyle:{
        color:'#7C7C7C'
    },
    input:{
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginBottom: 30,
        backgroundColor: '#ffffff',
        borderColor: '#E2E2E2',
        borderBottomWidth: 1,
        borderWidth: 0,
        width: '90%',
        height: 60,
        alignItems: 'center',
        
    },
    LargeButton:{
        backgroundColor: '#53B175',
        padding: 25,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 20,
        marginTop: 20,
        fontSize: 58,
        width: 200,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    subHeader:{
        paddingBottom:40,
        color:'#7C7C7C'
    },
    forgotPassword:{
        marginBottom: 40,
    }
})


export default SignUp;
