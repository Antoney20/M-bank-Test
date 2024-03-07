import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PinForm = ({ onSubmit }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handlePinSubmit = () => {
    if (!pin) {
      setError('Please enter your PIN.');
      return;
    }

    onSubmit(pin);
    console.log(pin)
  
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter PIN:</Text>
      <TextInput
        style={styles.input}
        value={pin}
        onChangeText={setPin}
        keyboardType="numeric"
        secureTextEntry={true}
      />
      <Text style={styles.errorText}>{error}</Text>
      <TouchableOpacity style={styles.button} onPress={handlePinSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f0f8ff', 
    marginTop: 50,

  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#007bff', 
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#45b3e0',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#f1f1f1',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PinForm;
