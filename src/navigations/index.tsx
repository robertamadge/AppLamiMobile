import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/home/index.funcao';
import { TelasSecundariasNavigation } from './stack';
import { MaterialIcons } from '@expo/vector-icons'
import { Image, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Card } from 'react-native-elements/dist/card/Card';
import { CheckInScreen } from '../screens/checkin/index.funcao';
import { ContatoScreen } from '../screens/contato/index.funcao';
import { BrincoScreen } from '../screens/brincos/index.funcao';
import { AneisScreen } from '../screens/aneis/index.funcao';
import { ColaresScreen } from '../screens/colares/index.funcao';
import { PulseirasScreen } from '../screens/pulseiras/index.funcao';
import { TornozeleirasScreen } from '../screens/tornozeleiras/index.funcao';
import { CatalogoScreen } from '../screens/catalogo/index.funcao';


const Drawer = createDrawerNavigator();

export const MainNavigation = () =>{

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerStyle={{backgroundColor:'#rgba(245, 205, 142, 1)'}} drawerContent={(props) => (
          <View style={{paddingTop: 50}}>
            <DrawerItemList {...props} />
            <Card containerStyle={styles.cards}>
              <Image source={require('../img/anel1.png')} style={styles.imgCard}/>

              <Text style={styles.textoClique}>Novidades</Text>
             
              <Button title='Saiba mais' style={styles.estilo} onPress={() => props.navigation.navigate('Catálogo')}/>
            </Card>
            <View style={{flexDirection:'row', marginTop:10, justifyContent:'center'}}>
              <Icon name='logo-instagram' color='white' type='ionicon' style={{marginRight:5}} onPress={() => console.log('https://www.instagram.com/loja_lami/')}/>
              <Text style={styles.textoLami}>loja_lami</Text>
            </View>            
          </View>
          
      )}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{drawerIcon: () => <MaterialIcons name='home' size={20} color='#rgba(237, 121, 95, 0.7)'/>}}/>
        <Drawer.Screen name="Login/Cadastrar" component={TelasSecundariasNavigation} options={{drawerIcon: () => <MaterialIcons name='account-circle' size={20} color='#rgba(237, 121, 95, 0.7)'/>}}/>
        <Drawer.Screen name="Catalogo" component={CatalogoScreen} options={{drawerIcon: () => <MaterialIcons name='menu-book' size={20} color='#rgba(237, 121, 95, 0.7)'/>}}/>
        <Drawer.Screen name="Aneis" component={AneisScreen} options={{drawerIcon: () => <MaterialIcons name='favorite-border' size={20} color='#rgba(237, 121, 95, 0.7)'/>}}/>
        <Drawer.Screen name="Brincos" component={BrincoScreen} options={{drawerIcon: () => <MaterialIcons name='favorite-border' size={20} color='#rgba(237, 121, 95, 0.7)'/>}}/>
        <Drawer.Screen name="Colares" component={ColaresScreen} options={{drawerIcon: () => <MaterialIcons name='favorite-border' size={20} color='#rgba(237, 121, 95, 0.7)'/>}}/>
        <Drawer.Screen name="Pulseiras" component={PulseirasScreen} options={{drawerIcon: () => <MaterialIcons name='favorite-border' size={20} color='#rgba(237, 121, 95, 0.7)'/>}}/>
        <Drawer.Screen name="Tornozeleiras" component={TornozeleirasScreen} options={{drawerIcon: () => <MaterialIcons name='favorite-border' size={20} color='#rgba(237, 121, 95, 0.7)'/>}}/>
        <Drawer.Screen name="Check-In" component={CheckInScreen} options={{drawerIcon: () => <MaterialIcons name='shopping-cart' size={20} color='#rgba(237, 121, 95, 0.7)'/>}}/>
        <Drawer.Screen name="Contato" component={ContatoScreen} options={{drawerIcon: () => <MaterialIcons name='email' size={20} color='#rgba(237, 121, 95, 0.7)'/>}}/>  
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
    textoLami: {
      color: 'white',
      fontSize: 12,
      textAlign: 'center',
      marginTop: 2,
      marginBottom:5
  },
  estilo: {
    width: '60%',
    marginTop: 2, 
    borderRadius: 20,
    marginRight: 10, 
    alignSelf:'center',
    backgroundColor:'#ED795F',
    marginLeft:10,
},
cards: {
  backgroundColor: '#rgba(245, 205, 142, 0.2)',
  color: 'white',
  alignItems: 'baseline',
  borderRadius: 20,
  borderColor: 'white',
  width: '90%',
  height: 130,
  padding: 5,
},
textoClique:{
  color: 'white',
  fontSize: 12,
  textAlign: 'center',
  marginTop: 5,
  fontWeight:'bold'
},
imgCard: {
  width: 240,
  height: 50,
  alignContent: 'center',
  borderRadius: 10,
},
});


