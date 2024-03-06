import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginForm from '../components/LoginForm';
import { useNavigation } from '@react-navigation/native';
import { BASE_URL } from '@env';

const LoginScreen = () => {
  const [error, setError] = useState(null);
  const navigation = useNavigation();
console.log('API Base URL:', BASE_URL);

  const handleSubmit = async (formData) => {
    try {

      const response = await fetch(`${BASE_URL}/api/login`, {
      
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data)

      if (!response.ok) {
        // If login is unsuccessful
        setError(data.message || 'Login failed');
        return;
      }

      // If login is successful,
      const accessToken = data.token;
      // Store the access token
      console.log('Access Token:', accessToken);
      
      await AsyncStorage.setItem('accessToken', accessToken);
      setError(null);

      navigation.navigate('Home');
    } catch (error) {
      console.error('Login failed:', error.message);
      setError('Login failed');
    }
  };

  return (
    <View style={styles.container}>
      <LoginForm onSubmit={handleSubmit} />
      {error && <Text style={styles.errorText}>{error}</Text>}
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
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default LoginScreen;

