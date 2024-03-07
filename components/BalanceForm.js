import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { BASE_URL } from '@env';
import { FontAwesome } from '@expo/vector-icons';

const BalanceForm = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('accessToken');
        if (!accessToken) {
          setError('Access token not found.');
          return;
        }
        
        const response = await fetch(`${BASE_URL}/api/dashboard/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`, 
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Error fetching user data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);
  const handleOkPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.card}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <FontAwesome name="user" size={24} color="black" />
          <Text style={styles.userInfo}>
            {'\n'}
            <Text style={styles.label}>Account Number:</Text> {userData.user.account}{'\n'}
            <Text style={styles.label}>Name:</Text> {userData.user.name}{'\n'}
            <Text style={styles.label}>Balance:</Text> Ksh: {userData.balance}
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleOkPress}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </>
      )}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  userInfo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
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
    textAlign: 'center',
  },
  error: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default BalanceForm;