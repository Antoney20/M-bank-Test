import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { BASE_URL } from '@env';

const StopChequeForm = () => {
  const [chequeNo, setChequeNo] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigation = useNavigation();

  const handleStopCheque = async () => {

    if (!chequeNo) {
      setError('Please enter cheque number.');
      return;
    }

    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      if (!accessToken) {
        setError('Access token not found.');
        return;
      }
      const response = await fetch(`${BASE_URL}/api/cheques/stop`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chequeNo }),
      });

      const data = await response.json();

      if (!response.ok) {
        // If the request is not successful, display error message
        setError(data.message || 'Failed to stop cheque.');
        return;
      }

      // If the request is successful, display success message
      setSuccess('Cheque stopped successfully.');

      // Reset form fields
      setChequeNo('');
      setError('');
    } catch (error) {
      console.error('Failed to stop cheque:', error.message);
      setError('Failed to stop cheque. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Cheque Number:</Text>
      <TextInput
        style={styles.input}
        value={chequeNo}
        onChangeText={setChequeNo}
        keyboardType="numeric"
      />
      <Text style={styles.errorText}>{error}</Text>
      <Text style={styles.successText}>{success}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={handleStopCheque}>
          <Text style={styles.buttonText}>Stop Cheque</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    maxHeight: 300,
    backgroundColor: '#f0f8ff',
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
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default StopChequeForm;