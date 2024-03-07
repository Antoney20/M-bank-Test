import React from 'react';
import { View, StyleSheet } from 'react-native';
import StopChequeForm from '../components/StopChequeForm';

const StopCheque = () => {
  return (
    <View style={styles.container}>
      <StopChequeForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#ffffff', 
    borderRadius: 10, 
    borderWidth: 1, 
    borderColor: '#dcdcdc', 
  },
});

export default StopCheque;