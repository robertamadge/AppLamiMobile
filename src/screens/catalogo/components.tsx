import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Input } from 'react-native-elements/dist/input/Input';
import { MaterialIcons } from '@expo/vector-icons';


// ========================================== BUTTON =========================================================//

export interface SearchBarProps {}

export interface ButtonCatalogoProps {
    texto?:string;
    icon?:string;
    onPress(): any;
}

export function ButtonCatalogo (props: ButtonCatalogoProps) {
   

    return (
            <View>
                <Button style={styles.estilo} title="Ver Mais" onPress={()=> props.onPress()}
                        icon={{name:props.icon, color:'white', type:'ionicon'}} />
            </View>
    );
}

const styles = StyleSheet.create({
    estilo: {
        width: '95%',
        marginTop: 15, 
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
