import React, { useState } from 'react';
import { View, Text } from 'react-native';
import PinForm from './PinForm';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage'; 

const Verify = () => {
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const handlePinSubmit = async (pin) => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      if (!accessToken) {
        setError('Access token not found.');
        return;
      }

      const response = await fetch('https://115a-41-209-57-167.ngrok-free.app/api/dashboard/verify-pin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`, 
        },
        body: JSON.stringify({ pin }), 
      });

      if (!response.ok) {
        const responseData = await response.json();
        setError(responseData.error || 'Error verifying PIN.');
      } else {
        navigation.navigate('Balance');
      }
    } catch (error) {
      console.error('Error verifying PIN:', error);
      setError('An unexpected error occurred.');
    }
  };

  return (
    <View>
      <Text>Verify Screen</Text>
      <PinForm onSubmit={handlePinSubmit} />
      <Text style={{ color: 'red' }}>{error}</Text>
    </View>
  );
};

export default Verify;
