import * as React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView, Share, LogBox } from 'react-native';
import { CardsHome, CarouselItem } from './components';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import Carousel  from 'react-native-snap-carousel';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { useNavigation, useRoute } from '@react-navigation/core';
import { ToolBar } from '../../components/toolbar';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { useNetInfo } from '@react-native-community/netinfo';
import firebase from 'firebase';
import { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
export interface HomeScreenProps {}

export function HomeScreen (props: HomeScreenProps) {

    const [ itensCarousel, setItensCarousel ] = React.useState([
      {onPress:()=>nav.navigate('Catalogo'), image:require('./../../img/fotoHome4.png'), text:'Anéis'},
      {onPress:()=>nav.navigate('Catalogo'), image:require('./../../img/fotoHome5.png'), text:'Várias combinações'},
      {onPress:()=>nav.navigate('Catalogo'), image:require('./../../img/fotoHome6.png'), text:'Conjutos'},
      {onPress:()=> nav.navigate('Catalogo'), image:require('./../../img/fotoHome7.png'), text:'E muito mais...'}
    ])

    const [ usuarioEmail, setUsuarioEmail ] = useState<any>('');

    useFocusEffect(() => {
      setUsuarioEmail(firebase.auth().currentUser?.email);
    })

    const nav = useNavigation();
    const home = useRoute();
    const netInfo = useNetInfo();

    const share = () =>{
       Share.share({message:"Escolha entre as opções abaixo:"});
       {/*Conexão*/}
       console.log(netInfo.isConnected)
       console.log(netInfo.type)
    }
    const sair = async() => {
      await firebase.auth().signOut();
      nav.navigate('Login/Cadastrar');
    }


    return (
        <ImageBackground source={require('../../img/backsoft.png')} style={styles.imgbackground}>
         <ToolBar menu />

         <Button style={styles.estilo} onPress={share} icon={{name:"open-in-new", color:'white'}} title="Compartilhe essa página"></Button>

         <View style={{flexDirection: 'row', justifyContent:'center', marginTop:5}}>
            <Text style={styles.emailAutenticado}>{usuarioEmail}</Text>
         </View>

         <View style={{flexDirection: 'row', justifyContent:'space-evenly'}} >
           {firebase.auth().currentUser != null && <Button title='Editar' style={styles.btnEditar} onPress={() => nav.navigate('Cadastro')}/>}
           {firebase.auth().currentUser != null && <Button title='Sair'style={styles.btnSair} onPress={sair} />}            
         </View>
          
         <Divider style={{ backgroundColor: 'white', width: '100%', height: 2 }} />
            <ScrollView>
            <View style={styles.container}>
              <Image source={require('../../img/headersoft.png')} style={styles.imgLami}/>
              <Divider style={{ backgroundColor: 'white', width: '100%', height: 2 }} />
              {/* CAROUSEL  */}
              <Carousel
                  data={itensCarousel}
                  //@ts-ignore
                  renderItem={({item}) => (      
                    <CarouselItem 
                      text={item.text}
                      onPress={item.onPress}
                      image={item.image}
                    />
                  )}
                  sliderWidth={300}
                  itemWidth={250}/>
              <Divider style={{ backgroundColor: 'white', width: '100%', height: 2, marginBottom: 10, marginTop: 5 }} />
              {/* CARDS */}
              <CardsHome 
                texto="Nós separamos aqui as melhores novidades"
                sourceimg={require('./../../img/fotoHome.png')}
                icon='add'/>
              <CardsHome 
                texto="Uma seleção de anéis para todos os gostos"
                sourceimg={require('./../../img/fotoHome2.png')}
                icon='add'/>
              <CardsHome 
                texto="Variedade de brincos!"
                sourceimg={require('./../../img/fotoHome3.png')}
                icon='add'/>
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
    estilo: {
      width: '100%',
      alignSelf:'center',
      backgroundColor:'#ED795F',
  },
    emailAutenticado: {
      fontSize: 15,
      color:'white',
      alignSelf:'center',
      fontWeight:'bold',
    },   
    btnSair:{
       width:80,
       height:40, 
       backgroundColor:'#rgba(237, 121, 95, 0.7)',
       padding:1,
       borderRadius:10,
       marginTop:5,
       marginBottom:5
    
      },
    btnEditar:{ 
      width:80,
      height:40,  
      backgroundColor:'#ED795F',
      padding:1,
      borderRadius:10,
      marginTop:5,
      marginBottom:5
    },
});
