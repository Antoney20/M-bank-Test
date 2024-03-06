import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeForm from '../components/HomeForm';
import { BASE_URL } from '@env';

const Home = ({ navigation }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('accessToken');
        if (accessToken) {
          const response = await fetch( `${BASE_URL}/api/dashboard/`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          if (response.ok) {
            const userData = await response.json();
            setUserData(userData);
          } else {
            navigation.navigate('Login');
          }
        } else {
          navigation.navigate('Login');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    getUserData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to M-Bank</Text>
      {userData ? (
        <View>
          <Text style={styles.userInfo}>Welcome, {userData.user.name}</Text>
          <HomeForm />
        </View>
      ) : null}
      <View style={styles.tipsContainer}>
        <Text style={styles.tipsTitle}>Financial Tips</Text>
        <Text><Text style={styles.boldText}>Tip 1:</Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Text><Text style={styles.boldText}>Tip 2:</Text> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#f0f8ff', 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userInfo: {
    marginBottom: 20, 
    fontWeight: 'bold', 
  },
  tipsContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#dcdcdc',
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default Home;
