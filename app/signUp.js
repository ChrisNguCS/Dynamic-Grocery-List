import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Stack, Link } from 'expo-router';
import LargeButton from '../components/button/LargeButton';
// import { auth } from '../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import CheckIcon from '../assets/svg/check.svg';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkValidEmail, setCheckValidEmail] = useState(false);

    const signUp = async () => {};
    const signIn = async () => {};

    // Sign up function
    const auth = getAuth();
    const handleSignUp = () => {
            createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch(error => alert(error.message))
    }

    const handleCheckEmail = text => {
        let re = /\S+@\S+\.\S+/;
        let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    
        setEmail(text);
        if (re.test(text) || regex.test(text)) {
            setCheckValidEmail(false);
        } else {
            setCheckValidEmail(true);
        }
    };

    return (
        <View style= {styles.container}>
            {/* Header */}
            <Stack.Screen
                options = {{
                    headerShown: true,
                    headerTitle: ''
                }}

            />

            {/* Titles */}
            <Text style={styles.sectionTitle}>Sign Up</Text>
            <Text style={styles.subHeader}>Enter your email and password</Text>

            {/* Email Input */}
            <Text style={styles.textStyle}>Email</Text>
            <View style={styles.inputWrapper}>
            <TextInput style = {styles.input} 
                placeholder='' 
                value={email}
                onChangeText={text => handleCheckEmail(text)}/>
            {checkValidEmail ? (
                <Text></Text>
            ) : (
                <CheckIcon width={30} height={30}/>
            )}

            </View>

            {/* Password Input */}
            <Text style={styles.textStyle}>Password</Text>
            <TextInput style = {styles.input} 
                value={password} 
                secureTextEntry
                onChangeText={text => setPassword(text)}/>
            {/* <Text styles={styles.subHeader}>By continuing you agree to our Terms of Service
            and Privacy Policy.</Text> */}
            
            {/* Sign Up Button */}
            <Link href="/login" asChild >
            <TouchableOpacity onPress={handleSignUp}>
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
        paddingTop: 150,
        paddingHorizontal: 30,
        alignItems: 'left',
        backgroundColor:'#ffffff'
    },
    textStyle:{
        color:'#7C7C7C'
    },
    inputWrapper:{
        width: "100%",
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    input:{

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
