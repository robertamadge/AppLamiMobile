import { useNavigation, useRoute } from '@react-navigation/core';
import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { ScrollView } from 'react-native-gesture-handler';
import { ToolBar } from '../../components/toolbar';

export interface ContatoScreenProps {
}

export function ContatoScreen (props: ContatoScreenProps) {

  const nav = useNavigation();
  const home = useRoute();

    return (

      <ImageBackground source={require('../../img/backsoft.png')} style={styles.imgbackground}>
         <ToolBar menu />
            <ScrollView>
            <View style={styles.container}>
              <Image source={require('../../img/headersoft.png')} style={styles.imgLami}/>
              <Divider style={{ backgroundColor: 'white', width: '100%', height: 2 }} />

              <Text style={styles.textoContato}> Para mais informações entre em contato pelo instagram abaixo:</Text>
              <Divider style={{ backgroundColor: 'white', width: '100%', height: 2 }} />
              <Image source={require('../../img/contato.png')} style={styles.imgContato}/> 
              <View style={{flexDirection:'row', marginTop:10}}>
                <Icon name='logo-instagram' color='white' type='ionicon' style={{marginRight: 5}} onPress={() => console.log('https://www.instagram.com/loja_lami/')}/>
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
      marginBottom: 10,
    },
    imgbackground: {
        height: '100%',
        width: '100%',
        flex: 1
    },
    imgLami: {
      width: 400,
      height: 120,
      marginBottom: 5,
      alignSelf: 'center',
    },
      textoLami: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 5,
    },
    textoContato: {
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 20,
  },
  imgContato:{
    width:400,
    height: 180,
    marginTop: 20,
    alignSelf: 'center',

  }
});

