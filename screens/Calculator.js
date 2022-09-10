import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button, Image, FlatList} from 'react-native';

export default function Calculate({navigation}) {
 
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
 
  const buttonPressedPlus = () => { 
    setText('');
    const texti= (number1+' + '+ number2 + ' = '+ (parseInt(number1) + parseInt(number2)));//tehdään lokaali muuttuja että synkronoituu oikein
    console.log(texti);
    const plussa= [...data,{key:texti}];//spread funktio,ensin vanhat elementit, ja sitten lisätään key:text(syöttökentän teksti)
    setData(plussa);
    console.log(plussa);
   //Alert.alert('Result: ' + (parseInt(number1) + parseInt(number2))); 
   setText(parseInt(number1) + parseInt(number2)); 
     setNumber1(0);
     setNumber2(0);
     
  };
  const buttonPressedMinus = () => { 
    setText('');
    const texti= (number1+' - '+ number2 + ' = '+ (parseInt(number1) - parseInt(number2)));//tehdään lokaali muuttuja että synkronoituu oikein
    console.log(texti);
    const plussa= [...data,{key:texti}];//spread funktio,ensin vanhat elementit, ja sitten lisätään key:text(syöttökentän teksti)
    setData(plussa);
    console.log(plussa);
 //  Alert.alert('Result: ' + (parseInt(number1) - parseInt(number2))); 
 setText(parseInt(number1) - parseInt(number2)); 
    setNumber1(0);
    setNumber2(0);
    
    
  };

 
 
 
  return (
    <View style={styles.container}>
    <Text> Result: {text}</Text> 
    
      <TextInput placeholder='Anna numero1' keyboardType="numeric" style={styles.input} onChangeText={number1 => setNumber1(number1)} value={number1}/>
      <TextInput placeholder='Anna numero2' keyboardType="numeric" style={styles.input} onChangeText={number2 => setNumber2(number2)} value={number2}/>
    <View style={styles.button2}>
        <View style={styles.button}>
           <Button onPress={buttonPressedPlus} title="+" />
        </View>
        <View style={styles.button}>
          <Button onPress={buttonPressedMinus} title="-" />
        </View>
        <Button style={styles.button}
          title="History"
          onPress={() => navigation.navigate('History', { data: data} )}
         // onPress={() => navigation.navigate('History', {language: "swe", data: data} )} omaa testiä paramrien välitys
        />
    </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin:60,
  },
 
  button: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    margin:5,
    fontSize:10,
    width: 25,
   
    },
   
    button2: {
      flexDirection:'row',
      justifyContent: 'space-evenly',
      
      },
 
  input : {
    width:'50%'  , 
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius:10,
    padding: 5,
    margin:10,
  }
});
