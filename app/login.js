import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Stack, Link } from 'expo-router';
import LargeButton from '../components/button/LargeButton';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = async () => {};
    const signIn = async () => {};
    const auth = getAuth();
    const handleLogin= () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
        })
        .catch(error => alert(error.message))
    }

    return (
        <View style= {styles.container}>
            <Stack.Screen
                options = {{
                    headerStyle: { backgroundColor: '#FFFFFF'},
                    headerShadowVisible: true,
                    headerTitle: '',
                    headerTitleStyle: {fontSize: 20},
                    headerBackTitle: 'back',
                }}

            />

            <Text style={styles.sectionTitle}>Log In</Text>
            <Text style={styles.subHeader}>Enter your email and password</Text>
            <Text style={styles.textStyle}>Email</Text>
            <TextInput style = {styles.input} 
                placeholder='' 
                value={email}
                onChangeText={text => setEmail(text)}/>
            <Text style={styles.textStyle}>Password</Text>
            <TextInput style = {styles.input} 
                value={password} 
                secureTextEntry
                onChangeText={text => setPassword(text)}/>
            <Text styles={styles.forgotPassword}>Forgot Password?</Text>
            <View>
                <Text>

                </Text>
            </View>
            <Link href="/list" asChild >
            <TouchableOpacity onPress={handleLogin}>
                <LargeButton text = {'Log In'}/>
            </TouchableOpacity>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: 150,
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
        marginTop: 10,
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
        marginBottom: 10,
    }
})

export default Login;
