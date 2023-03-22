import React, {useState} from 'react';
import { SafeAreaView, KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Pressable } from 'react-native';
import { Stack } from 'expo-router';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { db } from '../firebaseConfig';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

import styles from '../components/listItem/listItem.style';
import Settings from "../assets/svg/settings.svg";
import AddItemIcon from '../assets/svg/addItemIcon.svg';
import { async } from '@firebase/util';
import { Button } from 'react-native-web';

const List = () => {
    const Tab = createBottomTabNavigator();

    function MyTabs() {
        return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
        );
    }

    const [items, setItems] = useState([]);
    const [item, setItem] = useState({ itemName: "" });
    function addItem() {
        const itemDb = collection(db, 'items')
        addDoc(itemDb,{
            itemName: item.itemName,
            itemDone: false,
        })
    }
    // const addItem = async () => {
    //     const doc = addDoc(collection(db, 'item'), {title: 'test', done: false})
    //     console.log("test");
    // };
return(
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FCFCFC'}}>
            <Stack.Screen
                options = {{
                    headerStyle: { backgroundColor: '#FFFFFF'},
                    headerShadowVisible: true,
                    headerTitle: '',
                    headerTitleStyle: {fontSize: 20},
                    headerRight: () => (
                        <Settings width = {20} height = {20}/>
                    )
                }}
        />


    <ScrollView contentContainerStyle = {{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
        <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>My List</Text>
        </View>
    </ScrollView>
    <KeyboardAvoidingView 
        keyboardVerticalOffset={60 + 47}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
    >
        <TextInput style={styles.input} placeholder={'Write a task'} placeholderTextColor="#B7B7B7" onChangeText={text => setItem({...item, itemName: text})}/>
        {/* add item button */}
        <TouchableOpacity onPress={addItem}>
            <View style={styles.addWrapper}>
                <AddItemIcon width = {60} height = {60}/>
            </View>
        </TouchableOpacity>

    </KeyboardAvoidingView>
    </SafeAreaView>
    
);
};
export default List;
