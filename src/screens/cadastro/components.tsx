import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements/dist/input/Input';

export interface InputFieldProps {
    icon?:string;
    texto?:string;
    senha?:boolean;
}

export function InputField (props: InputFieldProps) {
    return (
      <View>
          <Text style={styles.textoCadastro}>{props.texto}</Text>
          <Input inputContainerStyle={styles.inputArea} inputStyle={{color:'white'}} 
                leftIcon={{name: props.icon, color:'#FCC9BD'}} secureTextEntry={props.senha}/>
      </View>
    );
}


const styles = StyleSheet.create({
    inputArea: {
        backgroundColor: '#rgba(237, 121, 95, 0.6)',
        width: '150%',
        height: 50,
        borderRadius: 30,
        paddingLeft: 10,
        borderColor: '#FCC9BD',
        borderStyle: 'solid',
        textAlign: 'center',
        marginTop: 1,
        marginBottom: 2,
        alignSelf:'center',
      },
      textoCadastro: {
        color: 'white',
        fontSize: 20,
        paddingHorizontal: 50,
        marginBottom: 2, 
        alignSelf:'center',
    },

});