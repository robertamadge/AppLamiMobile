import * as React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView } from 'react-native';
import { CardsHome, CarouselItem } from './components';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import Carousel  from 'react-native-snap-carousel';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { useNavigation, useRoute } from '@react-navigation/core';
import { ToolBar } from '../../components/toolbar';

export interface HomeScreenProps {}

export function HomeScreen (props: HomeScreenProps) {

    const [ itensCarousel, setItensCarousel ] = React.useState([
      {onPress:()=>nav.navigate('Catálogo'), image:require('./../../img/fotoHome4.png'), text:'Anéis'},
      {onPress:()=>nav.navigate('Catálogo'), image:require('./../../img/fotoHome5.png'), text:'Várias combinações'},
      {onPress:()=>nav.navigate('Catálogo'), image:require('./../../img/fotoHome6.png'), text:'Conjutos'},
      {onPress:()=> nav.navigate('Catálogo'), image:require('./../../img/fotoHome7.png'), text:'E muito mais...'}
    ])

    const nav = useNavigation();
    const home = useRoute();
    

    return (
        <ImageBackground source={require('../../img/backsoft.png')} style={styles.imgbackground}>
         <ToolBar menu />
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
