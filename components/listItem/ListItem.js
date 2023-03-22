import React from 'react';
import { View, Text } from 'react-native';

import styles from './listItem.style';
import Unchecked from "../../assets/svg/unchecked.svg";

const ListItem = (props) => { 
  return (  
      <View style={styles.item}>
        <View style = {styles.itemRight}>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <Unchecked width = {30} height = {30}/>


    </View>
    );
};

export default ListItem;