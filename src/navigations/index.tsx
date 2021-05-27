import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/home/index.funcao';
import { CatalogoScreen } from '../screens/catalogo/index.funcao';
import { TelasSecundariasNavigation } from './stack';
import { MaterialIcons } from '@expo/vector-icons'
import { Image, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Card } from 'react-native-elements/dist/card/Card';


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
            <Icon name='logo-instagram' color='#ED795F' type='ionicon' style={{marginRight: 5, marginTop:170}} onPress={() => console.log('https://www.instagram.com/loja_lami/')}/>
            <Text style={styles.textoLami}>loja_lami</Text>
            <Button title='Sair' type='clear' style={styles.estilo} onPress={() => props.navigation.navigate("Home")}></Button>
          </View>
          
      )}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{drawerIcon: () => <MaterialIcons name='home' size={20} color='#rgba(237, 121, 95, 0.7)'/>}}/>
        <Drawer.Screen name="Login/Cadastrar" component={TelasSecundariasNavigation} options={{drawerIcon: () => <MaterialIcons name='account-circle' size={20} color='#rgba(237, 121, 95, 0.7)'/>}}/>
        <Drawer.Screen name="Catálogo" component={CatalogoScreen} options={{drawerIcon: () => <MaterialIcons name='menu-book' size={20} color='#rgba(237, 121, 95, 0.7)'/>}}/> 
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
    textoLami: {
      color: '#ED795F',
      fontSize: 12,
      textAlign: 'center',
      marginTop: 5,
      marginBottom:5
  },
  estilo: {
    width: '80%',
    marginTop: 5, 
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
  height: 300,
  padding: 15,
  marginTop: 10,
},
textoClique:{
  color: 'white',
  fontSize: 12,
  textAlign: 'center',
  marginTop: 5,
  fontWeight:'bold'
},
imgCard: {
  width: 220,
  height: 200,
  alignContent: 'center',
  borderRadius: 20,
},
});
