import * as React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import {  Carrinho } from '../checkin/components';
import { Pecas } from '../../models/pecas';
import { useNavigation, useRoute } from '@react-navigation/core';
import { FlatList } from 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { ToolBar } from '../../components/toolbar';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Button } from 'react-native-elements';

export interface CheckInScreenProps {
}

export function CheckInScreen (props: CheckInScreenProps) {

  const nav = useNavigation();
  const route = useRoute();

  const [ pecas, setPecas] = React.useState([
    new Pecas("Anel", 10 , "1"),
    new Pecas("Brinco", 10 , "4"),
    new Pecas("Colar", 10 , "7"),
    new Pecas("Pulseira", 10 , "8"),
    new Pecas("Tornozeleira", 10 , "9"),
  ])


    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../img/backsoft.png')} style={styles.imgbackground}>
        <ToolBar menu/> 
        <Image source={require('../../img/headersoft.png')} style={styles.imgLami}/>
        <Divider style={{ backgroundColor: 'white', width: '100%', height: 2, marginBottom: 0 }} />

        <View style={styles.headerTabela}>  
        <Text style={styles.textoHeader}>Peça(s)</Text>
        <Text style={styles.textoHeader}>Preço(s)</Text>
        </View>
        <Divider style={{ backgroundColor: 'white', width: '100%', height: 2, marginBottom: 0 }} />

        <FlatList data={pecas}
                  keyExtractor={(item) => String(item.id)}
                  renderItem={(item)=> (
                    
              <Carrinho 
                  pecas={item.item}
                  onEditar={(pecas) => nav.navigate('pecas', {pecas})}
                  onExcluir={(id) => console.log(id)}/>
              )}
        /> 

        <View style={{flexDirection: 'row', justifyContent:'center', marginBottom:180}}>
            <Button type="solid" containerStyle={{width: '90%', marginTop: 5, borderRadius: 20}} 
                      buttonStyle={{backgroundColor:'#A33B24'}} titleStyle={{fontSize: 20, color: '#FCC9BD'}}  
                      title="Check-In" onPress={function() {console.log('Teste')}}/>
          </View>

        <View style={{flexDirection:'row', marginBottom:60, justifyContent:'center'}}>
            <Icon name='logo-instagram' color='white' type='ionicon' onPress={() => console.log('https://www.instagram.com/loja_lami/')}/>
            <Text style={styles.textoLami}>loja_lami</Text>
        </View>

        </ImageBackground>
      </View>

     
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgLami: {
    width: 400,
    height: 120,
    marginBottom: 30,
    alignSelf: 'center',
  },
    imgbackground: {
        height: '100%',
        width: '100%',
        flex: 1
    },
    textoLami: {
      color: 'white',
      fontSize: 12,
      textAlign: 'center',
      marginTop: 5,
    },
    headerTabela:{
      flexDirection:'row', 
      justifyContent: 'space-between',
      backgroundColor:'#rgba(163, 59, 36, 0.4)',
    },
    textoHeader:{
      color:'white',
      fontWeight:'bold',
      fontSize:20, 
      marginTop: 5,
      marginBottom:5,
      padding:5
    }

});