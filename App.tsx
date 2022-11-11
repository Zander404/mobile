import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Me Fodi Legal sksks</Text>
      <StatusBar style="auto" backgroundColor='red' />
      <Button text="Teste 1" style={styles.button} />
      
    </View>
  );
}
interface ButtonProps{
  text: string;

}

function Button(props: ButtonProps) {
  return <TouchableOpacity>
    <Text>{props.text}</Text>
  </TouchableOpacity>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 90,
  },
  button: {
    backgroundColor: '#fff',
    fontSize: 90,
  }
});
