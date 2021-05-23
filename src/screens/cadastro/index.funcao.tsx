import * as React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView, } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';
import { Header } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { InputField } from './components';

export interface CadastroScreenProps {
}

export default function CadastroScreen (props: CadastroScreenProps) {
    return (
        <ImageBackground source={require('../../img/backsoft.png')} style={styles.imgbackground}>
          <Header containerStyle={{backgroundColor:'#rgba(237, 121, 95, 0.7)'}} leftComponent={{ icon: 'menu', color: 'white' }}
                    centerComponent={{ text: 'LAMI', style: { color: 'white' } }}
                    rightComponent={{ icon: 'home', color: 'white' }}/>
        <ScrollView>
        <View style={styles.container}>
          <Image source={require('../../img/lamilogobranco.png')} style={styles.imgLami}/>
            <View style={{alignContent: 'center', justifyContent:'center'}}>
              <InputField texto="Nome" ></InputField>
              <InputField texto="Sobrenome"></InputField>
              <InputField texto="E-mail" icon='person-outline'></InputField>
              <InputField texto="Senha" icon='https' senha={true}></InputField>
              </View>

          <View style={{flexDirection: 'row'}}>
            <Button type="solid" containerStyle={{width: '40%', marginTop: 5, borderRadius: 20, marginRight: 10}} 
                      buttonStyle={{backgroundColor:'#A33B24'}} titleStyle={{fontSize: 20, color: '#FCC9BD'}}  
                      title="Cadastrar" onPress={function() {console.log('Teste')}}/>
          </View>
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
      paddingBottom: 80,
    },
    imgLami: {
      width: 150,
      height: 100,
      marginTop: 50,
      marginBottom: 40,
    },
    imgbackground: {
      height: '100%',
      width: '100%',
      flex: 1
    },
    textoClique:{
      color: 'white',
      fontSize: 12,
      textAlign: 'center',
      marginTop: 5,
    },
    textoLami: {
      color: 'white',
      fontSize: 12,
      textAlign: 'center',
      marginTop: 5,
    },
  });
