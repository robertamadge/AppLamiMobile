import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';

export interface InputFieldProps {
  icon:string;
  texto?:string;
  senha?:boolean;
  onBlur?(): void;
  onChangeText(texto:string): void;
}

export function InputField (props: InputFieldProps) {
    return (
      <View>
         <Input inputContainerStyle={styles.inputText} 
                inputStyle={{color:'white'}} 
                leftIcon={{name: props.icon, color:'#FCC9BD'}} 
                secureTextEntry={props.senha} 
                onChangeText={(texto) => props.onChangeText(texto)} 
                onBlur={props.onBlur}/>
      </View>
    );
}

const styles = StyleSheet.create({
  inputText: {
    backgroundColor: '#rgba(237, 121, 95, 0.6)',
    width: '85%',
    height: 50,
    borderRadius: 30,
    paddingLeft: 10,
    borderColor: '#FCC9BD',
    borderStyle: 'solid',
    alignSelf: 'center',
    marginTop: 20,
  },
});