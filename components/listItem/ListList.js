import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/style';
import Unchecked from "../../assets/svg/unchecked.svg";

const ListList = (props) => { 
  return (  
    <View style={styles.listWrapper}>
          <Text style={styles.listText}>{props.text}</Text>
    </View>
    );
};

export default ListList;