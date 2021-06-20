import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { Button, } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { InputField } from './components';
import { ToolBar } from '../../components/toolbar';
import { Formik} from 'formik';
import * as Yup from 'yup';


export interface LoginScreenProps {}

export default function LoginScreen (props: LoginScreenProps) {

    const nav = useNavigation()

    const logar = async ({email, senha}:any) => {
      
      await new Promise(resolve => setTimeout(resolve, 1000)); 


      if (email == 'robertamadge@gmail.com' && senha == '123456')
        console.log('Logado com sucesso!');
      else {
        console.log('Dados incorretos');
        Alert.alert("Atenção","Senha ou Email Incorretos");
      }
    }
    
    return (
        <ImageBackground source={require('../../img/backsoft.png')} style={styles.imgbackground}>
          <ToolBar back/>
         <ScrollView>

        <Formik initialValues={{email:'', senha:''}}
                validationSchema={Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('Precisa ser um e-mail válido'),
                senha: Yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres').max(12, 'No máximo 12 caracteres')
                })}

                /* Validado com sucesso*/
                onSubmit = {logar} >

                  {({handleChange, handleSubmit, isSubmitting, errors, touched, handleBlur}) => (

                    <View style={styles.container}>
                      <Image source={require('../../img/lamilogobranco.png')} style={styles.imgLami} />

                      <InputField icon='person' onChangeText={handleChange('email')}  onBlur={() => handleBlur('email')}/>                        
                        { touched.email && <Text style={styles.textoLami}>{errors.email}</Text> }

                      <InputField icon='https' senha={true} onChangeText={handleChange('senha')}  onBlur={() => handleBlur('senha')}/>
                        { touched.senha && <Text style={styles.textoLami}>{errors.senha}</Text> }


                      <View style={{flexDirection: 'row'}}>
                        { isSubmitting && <ActivityIndicator size={20} color='white' /> }
                        { !isSubmitting && <Button onPress={() => handleSubmit()} loading={isSubmitting} raised={true} 
                                                   containerStyle={{width: '80%', marginTop: 5, borderRadius: 20}} 
                                                   buttonStyle={{backgroundColor:'#A33B24', width:'100%', borderRadius: 20}} type='solid'
                                                   titleStyle={{fontSize: 20, color: '#FCC9BD', textAlign:'center'}} title="Login"/>}
                      </View>

                    </View>
                  )}
        </Formik>

        <TouchableOpacity onPress={() => nav.navigate('Cadastro')}>
            <Text style={styles.textoClique}>Não possui conta?{'\n'}CLique aqui para se cadastrar</Text>
          </TouchableOpacity>
          
          <View style={{flexDirection:'row', marginTop:10, justifyContent:'center'}}>
            <Icon name='logo-instagram' color='white' type='ionicon' style={{marginRight:5}} onPress={() => console.log('https://www.instagram.com/loja_lami/')}/>
            <Text style={styles.textoLami}>loja_lami</Text>
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
    },
    imgLami: {
      width: 350,
      height: 250,
      marginTop: 50,
      marginBottom: 20,
    },

    textoClique:{
      color: 'white',
      fontSize: 12,
      textDecorationLine: 'underline',
      textAlign: 'center',
      marginTop: 20,
    },
    imgbackground: {
      height: '100%',
      width: '100%',
      flex: 1,
    },
    textoLami: {
      color: 'white',
      fontSize: 12,
      textAlign: 'center',
      marginTop: 5,
    },
  });
  