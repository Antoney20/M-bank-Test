import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeForm = () => {
  const navigation = useNavigation();

  // navigate on press
  const handleDepositPress = () => {
    navigation.navigate('Deposit');
  };

  const handleBalancePress = () => {
    navigation.navigate('Balance');
  };

  const handleChangePinPress = () => {
    navigation.navigate('Change-pin');
  };

  const handleChequePress = () => {
    navigation.navigate('Cheque');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleDepositPress}>
        <Text style={styles.buttonText}>Deposit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleBalancePress}>
        <Text style={styles.buttonText}>Balance Enquiry</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleChequePress}>
        <Text style={styles.buttonText}>Stop Cheque</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleChangePinPress}>
        <Text style={styles.buttonText}>Change PIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#131415',
    width: screenWidth * 0.9, 
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeForm;
