import React from "react"
import { Text, View, Pressable } from "react-native"
import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../../firebaseConfig.js"
import Unchecked from "../../assets/svg/unchecked.svg";
import styles from "../../styles/style";


export default function DeleteUser({ id }) {
  function deleteItem() {
    const items = doc(db, "items", id)
    deleteDoc(items)
  }

  return (
    <View style={styles.delItem}>
      <Pressable onPress={deleteItem}>
      <Unchecked width = {40} height = {40}/>
      </Pressable>
    </View>
  )
}