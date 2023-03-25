import React, {useState, useEffect} from 'react';
import { SafeAreaView, KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, FlatList } from 'react-native';
import { Stack } from 'expo-router';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { db } from '../';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import DeleteItem from '../components/delItem/DeleteItem'
import ListItem from '../components/listItem/ListItem'
import styles from '../components/listItem/listItem.style';
import Settings from "../assets/svg/settings.svg";
import AddItemIcon from '../assets/svg/addItemIcon.svg';


const List = () => {
    const Tab = createBottomTabNavigator();

    function MyTabs() {
        return (
        <Tab.Navigator>
            <Tab.Screen name="Lists" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
        );
    }

    const [items, setItems] = useState([]);
    const [itemVal, setItem] = useState({ itemName: "" });
    const [loading, setLoading] = useState(false);

    const renderItem = ({item}) => (
        <View style = {styles.item}>
            <ListItem text={item.itemName}></ListItem>
            <DeleteItem id = {item.id} />
            {/* <text>{item.itemName}</text> */}
        </View>
    )


    useEffect(() => {
        setLoading(true)
        const itemsQuery = collection(db, 'items')
        onSnapshot(itemsQuery, (snapshot) => {
            let itemsList = []
            snapshot.docs.map((doc) => itemsList.push({...doc.data(), id: doc.id}))
            setItems(itemsList)
            setLoading(false)
        })
    }, []);

    function addItem() {
        const itemDb = collection(db, 'items')
        addDoc(itemDb,{
            itemName: itemVal.itemName,
            itemDone: false,
        })
    }

    function deleteItem(id){
        const itemEntry = doc(db, 'items', id)
        deleteDoc(itemEntry)
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


    <View contentContainerStyle = {{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
        <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>My List</Text>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                styles = {styles.flat}
            />
        </View>
    </View>

    <KeyboardAvoidingView 
        keyboardVerticalOffset={60 + 47}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
    >
        <TextInput style={styles.input} 
        placeholder={'Write a list item'} 
        placeholderTextColor="#B7B7B7" 
        onChangeText={text => setItem({...itemVal, itemName: text})}/>
        
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
