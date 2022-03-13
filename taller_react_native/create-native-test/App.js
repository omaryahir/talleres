import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
//import image from 'assets/106821.png';

export default function App() {
  return (
    <View style={styles.container}>
       <Image 
        source={{uri: 'https://picsum.photos/50/70'}}
        style={{height:50, width:70}}
      />
      <Text style={styles.title}>Hola Yahir !!!</Text>
      <Text style={styles.label}>Usuario</Text>
      <TextInput 
        placeholder='Usuario'
        style={{height:50, color: '#fff'}}
      />
     <Image 
        source={{uri: 'https://media4.giphy.com/media/RhjkouiMdXMyDTkac8/giphy.gif'}}
        style={{height:200, width:300}}
      />
      <Image 
        source={{uri: 'https://i.pinimg.com/originals/0e/c9/89/0ec989dde8b5fc0deef4e5b09292b605.gif'}}
        style={{height:200, width:300}}
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
  title: {
    color: '#555555',
    fontSize: 30, 
    fontWeight: "bold",
  },
  label: {
    color: '#555555',
  },
});
