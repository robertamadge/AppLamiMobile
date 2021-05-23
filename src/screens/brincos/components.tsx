import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Input } from 'react-native-elements/dist/input/Input';
import { MaterialIcons } from '@expo/vector-icons';

export interface ButtonBrincosProps {
    texto?:string;
    novoTextoServidor(texto:string):any;
    icon?:string;
}

export function ButtonBrincos (props: ButtonBrincosProps) {
    return (
    <View>
        <Button title='Comprar' style={styles.estilo} onPress={() => props.novoTextoServidor('Comprar esse item.')}
                icon={{name:props.icon, color:'white', type:'ionicon'}} />
    </View>
    );
}

const styles = StyleSheet.create({
    estilo: {
        width: '95%',
        marginTop: 5, 
        borderRadius: 20,
        marginRight: 10, 
        alignSelf:'center',
        backgroundColor:'#ED795F',
        marginStart: 4,
        marginEnd: 10,
     
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