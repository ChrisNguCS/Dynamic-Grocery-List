import React from 'react';
import { SafeAreaView, KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { Stack } from 'expo-router';

import styles from '../components/listItem/listItem.style';
import Settings from "../assets/svg/settings.svg";
import AddItemIcon from '../assets/svg/addItemIcon.svg';

const List = () => {

return(
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FCFCFC'}}>
            <Stack.Screen
                options = {{
                    headerShown: false,
                }}
        />


    <ScrollView contentContainerStyle = {{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
        <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>My List</Text>
            </View>
    </ScrollView>
    <AddItemIcon height='30' width = '30'/>
    </SafeAreaView>
    
);
};
export default List;
