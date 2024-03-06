import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginForm = ({ onSubmit }) => {
  const [account, setAccount] = useState('');
  const [pin, setPin] = useState('');

  const handleSubmit = () => {
    if (account && pin) {
      onSubmit({ account, pin });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Account:</Text>
      <TextInput
        style={styles.input}
        value={account}
        onChangeText={setAccount}
        keyboardType="numeric"
      />
      <Text style={styles.label}>PIN:</Text>
      <TextInput
        style={styles.input}
        value={pin}
        onChangeText={setPin}
        secureTextEntry={true}
        keyboardType="numeric"
      />
      <Button title="Login" onPress={handleSubmit} color="#007bff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '75%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f0f8ff', 
    borderRadius: 10,
    marginTop: '10%', 
    
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#007bff', // Blue label color
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#007bff', // Blue border color
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff', // White input background color
  },
});

export default LoginForm;



