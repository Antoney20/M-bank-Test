import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <FontAwesome name="bank" size={120} color="black" />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to M-Bank!</Text>
        <Text style={styles.description}>Your mobile banking solution</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
          color="#007bff"
          style={styles.loginButton}
        />
        <View style={styles.buttonSpacer} />
        <Button
          title="Register"
          onPress={() => navigation.navigate('Register')}
          color="#007bff"
          style={styles.registerButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff', 
  },
  content: {
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007bff', 
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: '#000000', 
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    padding: 10,
  },
  loginButton: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#007bff', 
    backgroundColor: '#ffffff', 
    marginBottom: 10,
    color: '#007bff', 
  },
  registerButton: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#007bff', 
    backgroundColor: '#ffffff', 
    color: '#007bff', 
  },
  buttonSpacer: {
    height: 10,
  },
});

export default Welcome;