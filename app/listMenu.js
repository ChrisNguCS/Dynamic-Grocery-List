import React, {useState, useEffect} from 'react';
import { SafeAreaView, KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, FlatList } from 'react-native';
import { Stack, Link } from 'expo-router';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { db } from '../firebaseConfig';
import { addDoc, collection, onSnapshot, doc, setDoc, get, updateDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import DeleteList from '../components/delete/DeleteList'
import ListItem from '../components/listItem/ListItem'
import styles from '../styles/style';
import Settings from "../assets/svg/settings.svg";
import AddItemIcon from '../assets/svg/addItemIcon.svg';


//Bottom navigation bar
const ListMenu = () => {
    const [lists, setLists] = useState([]);
    const [listVal, setList] = useState({ listName: "" });
    const [loading, setLoading] = useState(false);

    const renderItem = ({item}) => (
        <View style = {styles.item}>
            <ListItem text={item.listName}></ListItem>
            <DeleteList id = {item.id} />
            {/* <text>{list.listName}</text> */}
        </View>
    )

    // Load items from firebase
    useEffect(() => {
        setLoading(true)
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
            const uid = user.uid;
            console.log(uid)
            } else {
                // User is signed out
                // ...
            }
        });
        const listQuery = collection(db, 'lists')
        onSnapshot(listQuery, (snapshot) => {
            let listsList = []
            snapshot.docs.map((doc) => listsList.push({...doc.data(), id: doc.id}))
            setLists(listsList)
            setLoading(false)
        })
    }, []);

    //Add items to firebase
    async function addList() {
        const listDB = collection(db, 'lists')
        const listDoc = addDoc(listDB,{
            listID: '',
            listName: listVal.listName,
            // listItems: [],
            // listMembers: [getAuth().currentUser.uid],
        })
    .then(
        function(docRef){
        const listRef = docRef.id;
        updateDoc(docRef, {
            listID: listRef
        })
    })
    }

    // collection(db, 'lists', listRef, 'listMembers');

        
        
        // setDoc(doc(listDB, 'lists', documentId));


        Keyboard.dismiss();
    

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
                        <Link href='/settings' asChild>
                            <TouchableOpacity>
                            <Settings width = {20} height = {20}/>
                            </TouchableOpacity>
                        </Link>

                    )
                }}
        />

    
    <View contentContainerStyle = {{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
        <View style={styles.tasksWrapper}>

            {/* Task Title */}
            <Text style={styles.sectionTitle}>My List</Text>

            {/* Task list list */}
            <FlatList
                data={lists}
                renderItem={renderItem}
                keyExtractor={(list) => list.id}
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
        placeholder={'Write a list'} 
        placeholderTextColor="#B7B7B7" 
        onChangeText={text => setList({...listVal, listName: text})}/>

        
        {/* Add list button */}
        <TouchableOpacity onPress={addList}>
            <View style={styles.addWrapper}>
                <AddItemIcon width = {60} height = {60}/>
            </View>
        </TouchableOpacity>

    </KeyboardAvoidingView>
    </SafeAreaView>
    
);
};
export default ListMenu;
