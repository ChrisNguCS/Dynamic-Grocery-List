import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/style';
import Unchecked from "../../assets/svg/unchecked.svg";

const ListItem = (props) => { 
  return (  
    <View style={styles.item}>
          <Text style={styles.itemText}>{props.text}</Text>
    </View>
    );
};

export default ListItem;