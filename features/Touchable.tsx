import { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Touchable() {
  const [name, setName] = useState<string>('');
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const onPressHandler = () => {
    if (name.length > 0) {
      setIsLogged(!isLogged);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Please write your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. John"
        onChangeText={val => setName(val)}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={onPressHandler}
      >
        <Text style={styles.text}>{isLogged ? 'clear' : 'submit'}</Text>
      </TouchableOpacity>
      {isLogged && (
        <Text style={styles.text}>You are registered as {name}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    width: 250,
    height: 50,
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    paddingHorizontal: 5,
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'orange',
    width: 200,
    color: 'white',
    borderRadius: 30,
  },
});