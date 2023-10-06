import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Home() {

const navigation = useNavigation();

 return (
   <View style={styles.container}>
      <Image
          style={styles.logoCarrerPro}
          source={require('../../../assets/logoCarrerProMenor.png')}
      />
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3496ff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
})