import * as React from 'react';
import { ImageBackground, View , StyleSheet, Image, ScrollView} from 'react-native';
import { Text } from 'react-native-elements';
import { Card } from 'react-native-elements/dist/card/Card';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { ButtonCatalogo, SearchBar } from './components';
import { useNavigation } from '@react-navigation/core';
import { ToolBar } from '../../components/toolbar';


export interface BrincoScreenProps {
 
}

export function BrincoScreen (props: BrincoScreenProps) {

    const search = (texto: string)=> {
    console.log(texto);
  }
  const nav = useNavigation();
  return (
    <ImageBackground source={require('../../img/backsoft.png')} style={styles.imgbackground}>
        <ToolBar menu/>
        <ScrollView>
        <View style={styles.container}>
        <Image source={require('../../img/headersoft.png')} style={styles.imgLami}/>
        <SearchBar onChangeText={search}/>

        <Divider style={{ backgroundColor: 'white', width: '100%', height: 2, marginBottom: 5 }} />
        
        <View style={{flexDirection:'column'}}>
          <View style={{flexDirection:'row'}}>
            <Card containerStyle={styles.cards}>
              <Image source={require('../../img/brinco1.png')} style={styles.imgCard}/>
              <Text style={styles.textoClique}>Brinco Argola</Text>
              <Text style={styles.textoClique}>R$: 10,00</Text>            
              <ButtonCatalogo icon='cart-outline'/>
            </Card>

            <Card containerStyle={styles.cards}>
              <Image source={require('../../img/brinco2.png')} style={styles.imgCard}/>
              <Text style={styles.textoClique}>Brinco Coração</Text>
              <Text style={styles.textoClique}>R$: 10,00</Text>             
               <ButtonCatalogo icon='cart-outline'/>
            </Card>
          </View>
          <View style={{flexDirection:'row'}}>
            <Card containerStyle={styles.cards}>
              <Image source={require('../../img/brinco3.png')} style={styles.imgCard}/>
              <Text style={styles.textoClique}>Brinco Raio</Text>
              <Text style={styles.textoClique}>R$: 10,00</Text>             
              <ButtonCatalogo icon='cart-outline'/>
            </Card>

            <Card containerStyle={styles.cards}>
              <Image source={require('../../img/brinco4.png')} style={styles.imgCard}/>
              <Text style={styles.textoClique}>Brinco Triângulo</Text>
              <Text style={styles.textoClique}>R$: 10,00</Text>             
               <ButtonCatalogo icon='cart-outline'/>
            </Card>
          </View>
          <View style={{flexDirection:'row'}}>
            <Card containerStyle={styles.cards}>
              <Image source={require('../../img/brinco5.png')} style={styles.imgCard}/>
              <Text style={styles.textoClique}>Brinco Flor</Text>
              <Text style={styles.textoClique}>R$: 10,00</Text>             
              <ButtonCatalogo icon='cart-outline'/>
            </Card>

            <Card containerStyle={styles.cards}>
              <Image source={require('../../img/brinco6.png')} style={styles.imgCard}/>
              <Text style={styles.textoClique}>Brinco Olho Grego</Text>
              <Text style={styles.textoClique}>R$: 10,00</Text>             
               <ButtonCatalogo icon='cart-outline'/>
            </Card>
          </View>
        </View>

          <View style={{flexDirection:'row', marginTop:10}}>
            <Icon name='logo-instagram' color='white' type='ionicon' onPress={() => console.log('https://www.instagram.com/loja_lami/')}/>
            <Text style={styles.textoLami}>loja_lami</Text>
          </View>

        </View>
        </ScrollView>
    </ImageBackground>
  )
};

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
      cards: {
        backgroundColor: '#rgba(245, 205, 142, 0.2)',
        color: 'white',
        alignItems: 'baseline',
        borderRadius: 20,
        borderColor: 'white',
        width: '45%',
        height: 250,
        padding: 15,
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
      },
      imgCard: {
        width: 130,
        height: 130,
        alignContent: 'center',
        borderRadius: 20,
      },
});