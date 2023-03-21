import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './listItem.style';
import Unchecked from "../../assets/svg/unchecked.svg";

const ListItem = (props) => { 
  return (  
      <View style={styles.item}>
        <View style = {styles.itemRight}>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={{ width: 30, height: 30}}>
        <Unchecked width = {30} height = {30}/>
        </View>


    </View>
    )
}

export default ListItem;