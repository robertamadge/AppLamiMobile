import * as React from 'react';
import { View, Image, StyleSheet, Text, LogBox, Alert } from 'react-native';
import {  Carrinho } from '../checkin/components';
import { Pecas } from '../../models/pecas';
import { useNavigation, useRoute } from '@react-navigation/core';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { ToolBar } from '../../components/toolbar';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Button } from 'react-native-elements';
import 'firebase/firestore';
import firebase from 'firebase';
import { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Input } from 'react-native-elements/dist/input/Input';


export interface CheckInScreenProps {
}

export function CheckInScreen (props: CheckInScreenProps) {

  const nav = useNavigation();
  const route = useRoute();

  const [ pecas, setPecas] = React.useState<any[]>([
    new Pecas("Anel", 10 , "1"),
    new Pecas("Brinco", 10 , "4"),
    new Pecas("Colar", 10 , "7"),
    new Pecas("Pulseira", 10 , "8"),
    new Pecas("Tornozeleira", 10 , "9"),
  ])

  const [ nome, setNome] = useState('');
  const [ preco, setPreco ] = useState('');

      {/*Ignora mensagens de erro*/}
      LogBox.ignoreLogs(['Setting a timer']);

      const db = firebase.firestore().collection('usuario');

      const inserir = async() => {
        const doc = db.doc();
        doc.set({nome, preco, id: doc.id})
       
        setNome('');
        setPreco('');
        getPecas();
      }

      const getPecas = async() => {

        db.get().then(resultados => {
          let newPecas:any[] = [];

          resultados.forEach(usuario =>{
            const peca = usuario.data();
            newPecas.push(peca)
          })
          console.log(newPecas);
          setPecas(newPecas);
        })
      }

      const listaPecas = async() => {
        
        firebase.firestore().collection('usuario').where('nome', '==', 'Anel 3').get().then((resultados) => {
          let newPecas: any [] = [];
          resultados.forEach(dados =>{
            newPecas.push(dados.data())

            console.log('-----------------')
            console.log(dados.data())
            console.log(dados.id)
            console.log('-----------------')

          })
          setPecas(newPecas)
        })
      }

      const remover = async(pecas: Pecas) => { 
      Alert.alert('Remover', `Deseja remover ${pecas.nome}?`, [
          {text: 'Não'},
          {text: 'Sim', onPress: async () =>{
           await db.doc(pecas.id).delete();
           getPecas()
          }}
        ])
      }

      useFocusEffect(React.useCallback(() => {
        getPecas();
      }, [setPecas]))


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
                  contentContainerStyle={{minHeight: 200}}
                  renderItem={(item)=> (
              <Carrinho 
                  pecas={item.item}
                  onEditar={(pecas) => nav.navigate('pecas', {pecas})}
                  onExcluir={(pecas: Pecas) => remover(pecas)}/>
              )}
        /> 
        

        <ScrollView>
        <View style={{flexDirection: 'row', justifyContent:'space-evenly'}}>
            <Button type="solid" containerStyle={{width: '45%', marginTop: 5, borderRadius: 20}} 
                      buttonStyle={{backgroundColor:'#A33B24'}} titleStyle={{fontSize: 20, color: '#FCC9BD'}}  
                      title="Check-In" onPress={function() {console.log('Check-In')}}/>
       </View>

       <View style={{ flexDirection:'row', justifyContent:'space-around'}}>
          <Input inputContainerStyle={styles.inputText} placeholder={'Peça'} onChangeText={(texto:string) => setNome(texto)}
                 inputStyle={{color:'white'}} leftIcon={<Icon name='add'color='white' size={20} ></Icon>}/>
          <Input inputContainerStyle={styles.inputText} placeholder={'Preço'} onChangeText={(texto:string) => setPreco(texto)}
                 inputStyle={{color:'white'}} leftIcon={<Icon name='add'color='white' size={20} ></Icon>}/>
       </View>
       
       <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
       
        <Button type="solid" containerStyle={{width: '45%', borderRadius: 20}} 
                                                          buttonStyle={{backgroundColor:'#A33B24'}} titleStyle={{fontSize: 20, color: '#FCC9BD'}}  
                                                          title="Inserir" onPress={inserir}/>
      
        <Button type="solid" containerStyle={{width: '45%', borderRadius: 20}} 
                             buttonStyle={{backgroundColor:'#A33B24'}} titleStyle={{fontSize: 20, color: '#FCC9BD'}}  
                             title="Buscar" onPress={listaPecas}/>
       </View>
       <View>
            {pecas.map((pecas, index) =>(
                <Text  style={styles.busca}key={String(index)}>{pecas.nome} - {pecas.preco} </Text>
            ))}
        </View>
    
        <View style={{flexDirection:'row', marginBottom:20, justifyContent:'center', marginTop:40}}>
            <Icon name='logo-instagram' color='white' type='ionicon' onPress={() => console.log('https://www.instagram.com/loja_lami/')}/>
            <Text style={styles.textoLami}>loja_lami</Text>
        </View>
        </ScrollView>
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
    },
    inputText: {
    backgroundColor: '#rgba(237, 121, 95, 0.6)',
    width: '50%',
    height: 50,
    borderRadius: 30,
    paddingLeft: 10,
    borderColor: '#FCC9BD',
    borderStyle: 'solid',
    alignSelf: 'center',
    marginTop: 20,
  },
  busca: {
    color:'white',
    padding: 10,
    alignSelf:'center'
  }

});