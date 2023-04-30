import { StyleSheet } from "react-native";
import { useFonts } from 'expo-font';



const styles = StyleSheet.create({
item: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderColor: "#53B175",
    borderWidth: 0,
    
    
},
list: {
  backgroundColor: '#FFF',
  padding: 10,
  borderRadius: 10,
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: 10,
  width: '95%',
  borderColor: "#53B175",
  borderWidth: 1,
  shadowOpacity: .2,
  shadowOffset: {width:-1,height:-1},
  shadowRadius: 5,
  backgroundColor: "#FFFFFF",
},
listWrapper: {
  backgroundColor: '#FFF',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 20,
  borderColor: "#53B175",
  borderWidth: 0,
  fontWeight: 100,
  backgroundColor: "#FFFFFF",
},
itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
},
container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FCFCFC',
    paddingHorizontal: 30,
    

},
tasksWrapper: {
  paddingTop: 20,
  paddingHorizontal: 20,
  
},
sectionTitle: {
  fontSize: 30,
  fontWeight: 'bold',
  marginBottom: 30,
},
items: {
  marginTop: 30,
  
},
writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,

    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',


},
input: {
  paddingVertical: 15,
  paddingHorizontal: 10,
  backgroundColor: '#ffffff',
  borderRadius: 15,
  borderColor: '#53B175',
  borderWidth: 1,
  
  width: 280,
  height: 60,
},
addWrapper: {
  width: 60,
  height: 60,
  backgroundColor: '#FFF',
  borderRadius: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#C0C0C0',
  borderWidth: 1,
},
addText: {},
LargeButton:{
  backgroundColor: '#53B175',
  padding: 25,
  borderRadius: 10,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  marginBottom: 20,
  fontSize: 58,
  width: '100%',
},
GoogleButton:{
  backgroundColor: '#5383EC',
  padding: 25,
  borderRadius: 10,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  marginBottom: 20,
  fontSize: 58,
  width: '100%',
},
buttonText:{
  fontFamily: 'Gilroy-SemiBold',
  fontSize: 18,
  color: "white",
},
flat:{
  alignItems: 'flex-start',
},
itemText:{
  fontSize: 20,
  marginTop: 20,
  borderColor: '#AAAAAA',
  marginLeft: 10,
},
listText:{
  fontSize: 20,
  marginTop: 20,
  borderColor: '#AAAAAA',
  fontWeight: "400",
  marginLeft: 10,
},
delItem:{
  justifyContent: 'center'
  
},
});

export default styles;
