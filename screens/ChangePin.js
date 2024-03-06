import React from 'react';
import { View, StyleSheet } from 'react-native';
import ChangePinForm from '../components/ChangePinForm';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { BASE_URL } from '@env';

const ChangePin = () => {
  const handleSubmit = async (formData) => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      if (!accessToken) {
        throw new Error('Access token not found.');
      }

      const response = await fetch(`${BASE_URL}/api/dashboard/change-pin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to change PIN.');
      }
      console.log(response)

      // Return success message to the user
      return 'PIN changed successfully.';
    } catch (error) {
      console.error('Failed to change PIN:', error.message);
    
    }
  };

  return (
    <View style={styles.container}>
      <ChangePinForm onSubmit={handleSubmit} />
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

export default ChangePin;
