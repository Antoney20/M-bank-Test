import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DepositForm from '../components/DepositForm';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { BASE_URL } from '@env';

const Deposit = ({ navigation }) => {
  const [error, setError] = useState('');

  const handleDeposit = async (formData) => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      if (!accessToken) {
        setError('Access token not found.');
        return;
      } 
      const response = await fetch(`${BASE_URL}/api/dashboard/deposit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`, 
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log(response)
      navigation.goBack();
    } catch (error) {
      console.error('Deposit failed:', error.message);
      // Set error state to display error message
      setError('Deposit failed. Please try again.');
    }
  };

  const handleCancel = () => {
    
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
  
      <DepositForm onDeposit={handleDeposit} onCancel={handleCancel} error={error} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Deposit;
