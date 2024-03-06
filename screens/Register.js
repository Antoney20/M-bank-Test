import React from 'react';
import { View, StyleSheet } from 'react-native';
import RegistrationForm from '../components/RegistrationForm'; 
import { BASE_URL } from '@env';

const Register = () => {
  const handleSubmit = async (formData) => {
    try {
      const response = await fetch(`${BASE_URL}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Registration successful:', data);
      
    } catch (error) {
      console.error('Registration failed:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <RegistrationForm onSubmit={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    backgroundColor: '#f0f8ff', 
  },
});

export default Register;
