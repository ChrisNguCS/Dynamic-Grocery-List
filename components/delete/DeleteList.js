import React from "react"
import { Text, View, Pressable } from "react-native"
import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../../firebaseConfig.js"
import Unchecked from "../../assets/svg/unchecked.svg";
import styles from "../../styles/style.js";


export default function DeleteUser({ id }) {
  function deleteList() {
    const lists = doc(db, "lists", id)
    deleteDoc(lists)
  }

  return (
    <View style={styles.delItem}>
      <Pressable onPress={deleteList}>
      <Unchecked width = {40} height = {40}/>
      </Pressable>
    </View>
  )
}