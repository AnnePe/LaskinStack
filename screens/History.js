import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  FlatList} from 'react-native';

export default function History({navigation, route}) {
 
    let data =route.params.data;
  //   let language=route.params.language; omaa testiä parametrien kanssa
 //   let greetings = language === "swe" ? "Hi" : "päivää";
  return (
    
    <View style={styles.container}>
    <Text style={{ fontSize: 20, color: 'blue' }}> History</Text>
    <FlatList style={styles.list} 
      data={data}
      renderItem={({ item }) => 
        <Text>{item.key}</Text>}
        keyExtractor={(item, index) => index.toString()}
     />
      <StatusBar style="auto" />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});