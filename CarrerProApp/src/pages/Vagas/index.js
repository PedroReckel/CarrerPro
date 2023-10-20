import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Header from '../../components/Header';
import Menu from '../../components/Menu';

export default function Vagas() {
  // Array de dados com os diferentes conteúdos
  const contentData = [
    { title: 'Desenvolvedor Java', imageSource: require('../../../assets/vixsystem.jpg') },
    { title: 'Assistente de TI', imageSource: require('../../../assets/gsm.jpg') },
    { title: 'Engenhero de dados', imageSource: require('../../../assets/picpay.png') },
    { title: 'DBA open DB', imageSource: require('../../../assets/at.jpg') },
  ];

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoCarrerPro}
        source={require('../../../assets/logoCarrerProMenor.png')}
      />
      <Header />
      <Menu />

      <View style={styles.main}>
        <View style={styles.title}>
          <Text style={styles.titleText}>VAGAS</Text>
        </View>

        {contentData.map((item, index) => (
          <View style={styles.content} key={index}>
            <View style={styles.cellContent}>
              <Image style={styles.image} source={item.imageSource} />
              <Text style={styles.jobsText}>{item.title}</Text>
            </View>
          </View>
        ))}
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
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40, // Adicione uma margem inferior para espaço vertical
  },
  cellContent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#242424',
    padding: 10,
    width: '95%',
    marginLeft: 10, // Adicione margem à esquerda para espaçamento horizontal
    elevation: 5,
    borderRadius: 5,
  },
  image: {
    width: 90,
    height: 90,
  },
  jobsText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 20, // Adicione margem à esquerda para separar a imagem do texto
  },
});