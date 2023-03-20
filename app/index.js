import { useState } from 'react';
import { SafeAreaView, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { NearbyJobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';
import ListItem from '../components/listItem/ListItem.js';
import styles from '../components/listItem/listItem.style'
import Settings from "../assets/svg/settings.svg"

const Home = () => {
const router = useRouter();
const [task, setTask] = useState();
const [taskItems, setTaskItems] = useState([])

const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
    }

const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
}
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

    //Header Section
      <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>My List</Text>
        <View style = {styles.items}>
        {
            //Complete item
            taskItems.map((item,index) => {
                return (
                    <TouchableOpacity key = {index} onpress = {() => completeTask(index)}>
                        <ListItem text = {item}/>
                    </TouchableOpacity>
                )

            })
        }
        </View>
        </View>

        <View>
            <ListItem text={'Task 1'}/>
            <ListItem text = {'task 2'}/>
        </View>

    </ScrollView>


    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.writeTaskWrapper}
    >

        <TextInput style={styles.input} placeholder={'Write aasdf task'} placeholderTextColor='white' value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
            </View>
        </TouchableOpacity>
            
    </KeyboardAvoidingView>
    </SafeAreaView>
    
)
}
export default Home;