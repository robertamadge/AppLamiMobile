import * as React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
import { Header, Input } from 'react-native-elements';
import { CardsHome, CarouselItem, SearchBar } from './components';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import Carousel  from 'react-native-snap-carousel';
import { divide } from 'react-native-reanimated';
import { Divider } from 'react-native-elements/dist/divider/Divider';

export interface HomeScreenProps {
  
}

export function HomeScreen (props: HomeScreenProps) {

    const [ itensCarousel, setItensCarousel ] = React.useState([
      {onPress:()=>console.log('Clicou'), image:require('./../../img/fotoHome4.png'), text:'Anéis'},
      {onPress:()=>console.log('Clicou'), image:require('./../../img/fotoHome5.png'), text:'Várias combinações'},
      {onPress:()=>console.log('Clicou'), image:require('./../../img/fotoHome6.png'), text:'Conjutos'},
      {onPress:()=>console.log('Clicou'), image:require('./../../img/fotoHome7.png'), text:'E muito mais...'}
    ])
    
    const search = (texto: string)=> {
      console.log(texto);
    }


    return (
        <ImageBackground source={require('../../img/backsoft.png')} style={styles.imgbackground}>
          <Header containerStyle={{backgroundColor:'#rgba(237, 121, 95, 0.7)'}} leftComponent={{ icon: 'menu', color: 'white' }}
                    centerComponent={{ text: 'LAMI', style: { color: 'white' } }}
                    rightComponent={{ icon: 'home', color: 'white' }}/>
            <ScrollView>
            <View style={styles.container}>
              <Image source={require('../../img/headersoft.png')} style={styles.imgLami}/>
              
              {/* SEARCHBAR */}
              <SearchBar
                onChangeText={search}/>

              <Divider style={{ backgroundColor: 'white', width: '100%', height: 2, marginBottom: 5 }} />

              {/* CAROUSEL  */}
              <Carousel
                  data={itensCarousel}
                  renderItem={({item}) => (      
                    <CarouselItem 
                      text={item.text}
                      onPress={item.onPress}
                      image={item.image}
                    
                    />
                  )}
                  sliderWidth={300}
                  itemWidth={200}
               />

              <Divider style={{ backgroundColor: 'white', width: '100%', height: 2, marginBottom: 10 }} />

              {/* CARDS */}
              <CardsHome 
                texto="Nós separamos aqui as melhores novidades"
                sourceimg={require('./../../img/fotoHome.png')}
                novoTextoServidor={(texto) => console.log(texto)} 
                icon='add'/>

            <CardsHome 
                texto="Uma seleção de anéis para todos os gostos"
                sourceimg={require('./../../img/fotoHome2.png')}
                novoTextoServidor={(texto) => console.log(texto)} 
                icon='add'/>

            <CardsHome 
                texto="Variedade de brincos!"
                sourceimg={require('./../../img/fotoHome3.png')}
                novoTextoServidor={(texto) => console.log(texto)} 
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
    }
});
