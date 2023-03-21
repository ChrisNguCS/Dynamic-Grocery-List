import React from 'react';
import { View, Text } from 'react-native';
import styles from '../listItem/listItem.style';


const LargeButton = (props) => { 
  return (  
      <View style={styles.LargeButton}>
        <View style = {styles.itemRight}>
          <Text style={styles.buttonText}>{props.text}</Text>
        </View>
    </View>
    )
}

export default LargeButton;