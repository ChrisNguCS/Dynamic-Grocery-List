import { useState } from 'react';
import { SafeAreaView, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import ListItem from '../components/listItem/ListItem.js';
import styles from '../components/listItem/listItem.style';
import Settings from "../assets/svg/settings.svg";
import AddItemIcon from '../assets/svg/addItemIcon.svg';

const list = () => {
const router = useRouter();
const [task, setTask] = useState();
const [taskItems, setTaskItems] = useState([]);

const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
    };

const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
};

return(
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
        <Stack.Screen
            options={{
                headerStyle: { backgroundColor: COLORS.lightWhite},
                headerShadowVisible: true,
                headerTitle: '',
                headerTitleStyle: {fontSize: 20},
                
            
            headerRight: () => (
                <Settings width = {20} height = {20}/>
            )
        }}
    />


    <ScrollView
        contentContainerStyle = {{
            flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
    >


      <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>My List</Text>
      {/* task section*/}
        <View style = {styles.items}>
        {

            taskItems.map((item,index) => {
                return (
                    <TouchableOpacity key = {index} onpress = {() => completeTask(index)}>
                        <ListItem text = {item} />
                    </TouchableOpacity>
                )

            })
        }
        </View>
        </View>
    </ScrollView>


    <KeyboardAvoidingView 
        keyboardVerticalOffset={60 + 47}d
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
    >
        <TextInput style={styles.input} placeholder={'Write a task'} placeholderTextColor="#B7B7B7"value={task} onChangeText={text => setTask(text)}/>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <AddItemIcon width = {60} height = {60}/>
            {/* <Text style={styles.addText}>+</Text> */}
          </View>
        </TouchableOpacity>

    </KeyboardAvoidingView>
    </SafeAreaView>
    
);
};
export default list;
