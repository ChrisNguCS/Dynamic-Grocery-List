import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/style';
import Google from '../../assets/svg/Google'

const GoogleButton = (props) => { 
  return (  
      <View style={styles.GoogleButton}>
        <Google width = {20} height = {20}/>

        <View style = {styles.itemRight}>
        
          <Text style={styles.buttonText}>{props.text}</Text>
        </View>
    </View>
    )
}

export default GoogleButton;