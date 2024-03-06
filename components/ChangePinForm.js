import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ChangePinForm = ({ onSubmit }) => {
  const [old_pin, setOldPin] = useState('');
  const [new_pin, setNewPin] = useState('');
  const [new_pin_confirmation, setConfirmPin] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!old_pin || !new_pin || !new_pin_confirmation) {
      setError('Please fill in all fields.');
      return;
    }

    if (new_pin !== new_pin_confirmation) {
      setError('New PIN and Confirm PIN must match.');
      return;
    }

    onSubmit({ old_pin, new_pin, new_pin_confirmation });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Old PIN:</Text>
      <TextInput
        style={styles.input}
        value={old_pin}
        onChangeText={setOldPin}
        secureTextEntry={true}
        keyboardType="numeric"
      />
      <Text style={styles.label}>New PIN:</Text>
      <TextInput
        style={styles.input}
        value={new_pin}
        onChangeText={setNewPin}
        secureTextEntry={true}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Confirm PIN:</Text>
      <TextInput
        style={styles.input}
        value={new_pin_confirmation}
        onChangeText={setConfirmPin}
        secureTextEntry={true}
        keyboardType="numeric"
      />
      <Text style={styles.errorText}>{error}</Text>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ChangePinForm;
