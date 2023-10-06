import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Signin() {

const navigation = useNavigation();

const [text, setText] = useState('');
const [password, setPassword] = useState('');

const emailChange = (newText) => {
    setText(newText);
}

const passwordChange = (newText) => {
    setPassword(newText);
}

 return (
   <View style={styles.container}>
        <Image
            style={styles.logoCarrerPro}
            source={require('../../../assets/logoCarrerPro.png')}
        />
        <TextInput
            style={styles.input}
            placeholder='Digite seu e-mail...'
            onChangeText={emailChange}
            value={text}
        />
        <TextInput
            style={styles.input}
            placeholder='Digite sua senha...'
            secureTextEntry={true}
            onChangeText={passwordChange}
            value={password}
        />
        <View style={styles.buttonArea}>
            <TouchableOpacity
                style={styles.buttonSignin}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonSingup}
                onPress={() => navigation.navigate('Signup')}
            >
                <Text style={styles.buttonText}>Cadastre-se</Text>
            </TouchableOpacity>
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
        width: 350,
        height: 350,
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: '#fafafa',
        marginBottom: 30,
        elevation: 5,
    },
    buttonArea: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSignin: {
        width: '35%',
        backgroundColor: '#0e7114',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginRight: 25,
        borderRadius: 5,
        elevation: 5,
    },
    buttonSingup: {
        width: '35%',
        backgroundColor: '#b41919',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        elevation: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    }
})