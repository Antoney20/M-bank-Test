import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import PinForm from '../components/PinForm';
import BalanceForm from '../components/BalanceForm';
import { useNavigation } from '@react-navigation/native';
import { BASE_URL } from '@env';

import AsyncStorage from '@react-native-async-storage/async-storage'; 
console.log(BASE_URL)
const Balance = () => {
  const [pinEntered, setPinEntered] = useState(false);
  const navigation = useNavigation();

  const handlePinSubmit = async (pin) => {
    try {
        const accessToken = await AsyncStorage.getItem('accessToken');
        if (!accessToken) {
          setError('Access token not found.');
          return;
        }
        const response = await fetch(`${BASE_URL}/api/dashboard/verify-pin  `, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`, 
            },
            body: JSON.stringify({ pin }), 
          });

      if (response.ok) {
        setPinEntered(true);
      } else {
        // incorrect res PIN or other errors
        console.error(response);
      }
    } catch (error) {
      console.error('Error verifying PIN:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      {pinEntered ? (
        <BalanceForm />
      ) : (
        <PinForm onSubmit={handlePinSubmit} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});

export default Balance;
