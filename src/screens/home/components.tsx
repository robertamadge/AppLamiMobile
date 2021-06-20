import * as React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Card } from 'react-native-elements/dist/card/Card';
import { Input } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// ========================================== CARDS =========================================================//
export interface CardsHomeProps {
    texto?:string;
    icon?:string;
    sourceimg?:any;
}

export function CardsHome (props: CardsHomeProps) {
  const nav = useNavigation();
  
    return (
      <View>
        <Card containerStyle={stylesCards.cards}>
             <Image source={props.sourceimg} style={stylesCards.imgCard}/>

             <Text style={stylesCards.textoClique}>{props.texto}</Text>
             
             <Button title='Saiba mais' style={stylesCards.estilo} onPress={() => nav.navigate('Catálogo')}
                icon={{name:props.icon, color:'white'}} />
        </Card>
        
            
      </View>
    );
}
const stylesCards = StyleSheet.create({
    estilo: {
        width: '50%',
        marginTop: 5, 
        borderRadius: 20,
        marginRight: 10, 
        alignSelf:'center',
        backgroundColor:'#ED795F',
    },
    imgCard: {
        width: 300,
        height: 100,
        alignContent: 'center',
        borderRadius: 20,
      },
      cards: {
        backgroundColor: '#rgba(245, 205, 142, 0.2)',
        color: 'white',
        alignItems: 'baseline',
        borderRadius: 20,
        borderColor: 'white',
        width: '90%',
        height: 190,
        padding: 15,
        marginTop: 10,
      },
      textoClique:{
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 5,
      },
   
});


// ========================================== SEARCH BAR =========================================================//
export interface SearchBarProps {
  onChangeText:any;
}

export function SearchBar (props: SearchBarProps) {
    return (
      <Input
        clearButtonMode="always"
        onChangeText={props.onChangeText}
        inputStyle={{color:'white'}}
        placeholder="O que você está procurando?"
        placeholderTextColor="white"
        leftIcon={() => <MaterialIcons name="search" style={{color:'white', marginLeft:10}} />}
        inputContainerStyle={{backgroundColor:'rgba(237, 121, 95, 0.7)', marginBottom:1, borderRadius:30, borderBottomWidth:0, marginVertical: 12}}
      />
    );
}

// =========================================== Carousel Item =================================================//
interface CarouselItemProps {
  text: String;
  image: any;
  onPress():any;
}

export function CarouselItem (props: CarouselItemProps) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View>
        <Image source={props.image} style={{width:250, height: 120, borderRadius:20}} />
        <Text style={{color:'white', textAlign: 'center', fontSize:15, fontWeight: 'bold', marginTop:2}}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};



