import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements/dist/input/Input';

export interface InputFieldProps {
  icon?:string;
  senha?:boolean;
}

export function InputField (props: InputFieldProps) {
    return (
      <View>
         <Input inputContainerStyle={styles.inputText} inputStyle={{color:'white'}} 
                leftIcon={{name: props.icon, color:'#FCC9BD'}} secureTextEntry={props.senha}/>
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