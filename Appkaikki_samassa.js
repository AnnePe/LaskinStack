import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button, Image, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
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
  function Calculator({ navigation }) {
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
      </View>
        <Button
          title="History"
          onPress={() => navigation.navigate('History')}
        />
      </View>
    );
  }
  
  function History() {
    return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, color: 'blue' }}> History</Text>
      <FlatList style={styles.list} 
        data={data}
        renderItem={({ item }) => 
          <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
       />
    </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
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
  list: {
    
    margin:10,
    },
  button: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    margin:10,
   
    },
    button2: {
      flexDirection:'row',
      justifyContent: 'space-evenly',
      
      },
  image : {
    marginTop:30,
    marginBottom:30,
    width: 250,
    height: 100
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
