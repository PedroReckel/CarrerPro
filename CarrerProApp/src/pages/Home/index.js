import React from 'react';
import { View, Text, TextInput, Image, ScrollView, StyleSheet } from 'react-native';

import Header from '../../components/Header';
import Menu from '../../components/Menu';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logoCarrerPro}
        source={require('../../../assets/logoCarrerProMenor.png')}
      />
      <Header />
      <Menu />

      <View style={styles.main}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.question}>Quais são seus interesses pessoais?</Text>
          <TextInput
              style={styles.input}
          />

          <Text style={styles.question}>Quais são suas habilidades e aptidões?</Text>
          <TextInput
              style={styles.input}
          />

          <Text style={styles.question}>Quais são seus valores?</Text>
          <TextInput
              style={styles.input}
          />

          <Text style={styles.question}>Quais são seus objetivos de longo prazo?</Text>
          <TextInput
              style={styles.input}
          />

          <Text style={styles.question}>Que tipo de ambiente de trabalho você prefere? </Text>
          <TextInput
              style={styles.input}
          />

          <Text style={styles.question}>Quais são suas preocupações financeiras?</Text>
          <TextInput
              style={styles.input}
          />

          <Text style={styles.question}>Você prefere uma carreira com crescimento e oportunidades de avanço?</Text>
          <TextInput
              style={styles.input}
          />

          <Text style={styles.question}>Existe uma profissão que você admira ou que gostaria de explorar mais?</Text>
          <TextInput
              style={styles.input}
          />

          <Text style={styles.question}>Você está disposto a mudar de localização para seguir uma carreira?</Text>
          <TextInput
              style={styles.input}
          />

          <Text style={styles.question}>Você já tem alguma experiência em um campo de interesse?</Text>
          <TextInput
              style={styles.input}
          />
          
          <Text style={styles.question}>Como sua escolha de carreira afetará sua qualidade de vida e equilíbrio entre trabalho e vida pessoal?</Text>
          <TextInput
              style={styles.input}
          />
        </ScrollView>
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
  logoCarrerPro: {
    marginBottom: -30,
  },
  main: {
    width: '90%',
    height: '66%',
    borderWidth: 2,
    marginTop: 25,
    backgroundColor: '#3496ff',
    borderRadius: 5,
    elevation: 5,
    padding: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: '#fafafa',
    marginBottom: 30,
    elevation: 5,
  },
  question: {
    fontSize: 16,
    marginBottom: 10,
  }
});