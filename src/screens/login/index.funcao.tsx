import { useNavigation } from '@react-navigation/core';
import  React, { useState } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView } from 'react-native';
import { Button, } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { InputField } from './components';
import { ToolBar } from '../../components/toolbar';

export interface LoginScreenProps {}

export default function LoginScreen (props: LoginScreenProps) {

    const nav = useNavigation()
    
    return (
        <ImageBackground source={require('../../img/backsoft.png')} style={styles.imgbackground}>
          <ToolBar back/>
         <ScrollView>
        <View style={styles.container}>
          <Image source={require('../../img/lamilogobranco.png')} style={styles.imgLami}/>
          <InputField icon='person'/>
          <InputField icon='https' senha={true}/>

          <View style={{flexDirection: 'row'}}>
              <Button type="solid" containerStyle={{width: '50%', marginTop: 5, borderRadius: 20, marginRight: 10}} 
                      buttonStyle={{backgroundColor:'#A33B24'}} titleStyle={{fontSize: 20, color: '#FCC9BD'}}  
                      title="Login" onPress={function() {console.log('Teste')}}/>
          </View>

          <TouchableOpacity onPress={() => nav.navigate('Cadastro')}>
            <Text style={styles.textoClique}>Não possui conta?{'\n'}CLique aqui para se cadastrar</Text>
          </TouchableOpacity>
          
          <View style={{flexDirection:'row', marginTop:10}}>
            <Icon name='logo-instagram' color='white' type='ionicon' style={{marginRight:5}} onPress={() => console.log('https://www.instagram.com/loja_lami/')}/>
            <Text style={styles.textoLami}>loja_lami</Text>
          </View>
          
        </View>
        </ScrollView>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imgLami: {
      width: 350,
      height: 250,
      marginTop: 50,
      marginBottom: 20,
    },
    
    textoClique:{
      color: 'white',
      fontSize: 12,
      textDecorationLine: 'underline',
      textAlign: 'center',
      marginTop: 20,
    },
    imgbackground: {
      height: '100%',
      width: '100%',
      flex: 1,
    },
    textoLami: {
      color: 'white',
      fontSize: 12,
      textAlign: 'center',
      marginTop: 5,
    },
  });
  