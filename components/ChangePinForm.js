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
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    maxHeight: 400,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1, 
    borderColor: '#dcdcdc', 
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
  successText: {
    color: 'green',
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#45b3e0',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ChangePinForm;
