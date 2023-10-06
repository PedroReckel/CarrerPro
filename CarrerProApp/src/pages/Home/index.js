import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoCarrerPro}
        source={require('../../../assets/logoCarrerProMenor.png')}
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>Olá, Pedro</Text>
        <TouchableOpacity style={styles.buttonSair} onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menu}>
        <View style={styles.menuView}>
          <Text style={styles.menuText}>Casa</Text>        
        </View>
        <View style={styles.menuView}>
          <Text style={styles.menuText}>Cursos</Text>
        </View>
        <View style={styles.menuView}>
          <Text style={styles.menuText}>Vagas</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3496ff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
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
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  logoCarrerPro: {
    marginBottom: -30,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 0, // Remova o padding horizontal
    width: '90%',
    marginTop: 25,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  menuText: {
    color: '#3496ff',
    borderColor: '#3496ff',
    fontSize: 17,
    borderWidth: 1, // Largura da borda das células
    paddingHorizontal: 10, // Espaçamento interno das células
    textAlign: 'center', // Alinha horizontalmente o texto ao centro
  },
  menuView: {
    flex: 1, // Distribui o espaço igualmente entre as células
  },
});
