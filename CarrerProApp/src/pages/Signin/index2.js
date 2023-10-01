import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Teste = () => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };

  const handleButtonPress = () => {
    // Faça algo com a senha, por exemplo, exibindo-a em um alerta
    alert(`Senha inserida: ${password}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha..."
        secureTextEntry={true}
        onChangeText={handlePasswordChange}
        value={password}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleButtonPress}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green', // Cor de fundo verde
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white', // Cor do texto branco
    fontSize: 18,
  },
});

export default Teste;
