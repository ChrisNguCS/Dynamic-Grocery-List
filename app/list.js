import React, {useState, useEffect} from 'react';
import { SafeAreaView, KeyboardAvoidingView, Text, View, TextInput, Pressable, TouchableOpacity, Keyboard, ScrollView, FlatList, Alert } from 'react-native';
import { Stack, Link } from 'expo-router';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { db } from '../firebaseConfig';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import DeleteItem from '../components/delete/DeleteItem'
import ListItem from '../components/listItem/ListItem'
import styles from '../styles/style';
import Settings from "../assets/svg/settings.svg";
import AddItemIcon from '../assets/svg/addItemIcon.svg';


//Bottom navigation bar
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

    // Load items from firebase
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

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        } else {
            // User is signed out
            // ...
        }
    });

    //Add items to firebase
    function addItem() {
        const itemDb = collection(db, 'items')
        addDoc(itemDb,{
            itemName: itemVal.itemName,
            itemDone: false,
        })
        Keyboard.dismiss();
    }

    //Delete items from firebase
    function deleteItem(id){
        const itemEntry = doc(db, 'items', id)
        deleteDoc(itemEntry)
    }

return(
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FCFCFC'}}>
            {/* Header */}
            <Stack.Screen
                options = {{
                    headerStyle: { backgroundColor: '#FFFFFF'},
                    headerShadowVisible: true,
                    headerTitle: '',
                    headerTitleStyle: {fontSize: 20},
                    headerBackButtonMenuEnabled: false,
                    headerRight: () => (
                        // <Link href='/settings' asChild>
                            <Settings width = {20} height = {20}/>
                        // {/* </Link> */}

                    )
                }}
        />

    
    <View contentContainerStyle = {{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
        <View style={styles.tasksWrapper}>

            {/* Task Title */}
            <Text style={styles.sectionTitle}>Test List</Text>

            {/* Task item list */}
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                styles = {styles.flat}
            />
        </View>
    </View>
    
    {/* List input */}
    <KeyboardAvoidingView 
        keyboardVerticalOffset={60 + 47}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
    >
        {/* Item name input box */}
        <TextInput style={styles.input} 
        placeholder={'Write a list item'} 
        placeholderTextColor="#B7B7B7" 
        onChangeText={text => setItem({...itemVal, itemName: text})}/>

        
        {/* Add item button */}
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
