import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Header() {

const navigation = useNavigation();

 return (
  <View style={styles.header}>
    <Text style={styles.headerText}>Olá, Pedro</Text>
      <TouchableOpacity style={styles.buttonSair} onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
  },
  buttonSair: {
    backgroundColor: '#b41919',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
})