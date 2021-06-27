import * as React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView, Alert, } from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { InputField } from './components';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ToolBar } from '../../components/toolbar';
import firebase from 'firebase';
import { Formik} from 'formik';
import * as Yup from 'yup';
import { ActivityIndicator } from 'react-native';

export interface CadastroScreenProps {
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;

}

export default function CadastroScreen (props: CadastroScreenProps) {

    const nav = useNavigation();

    const cadastrar = async (dados: CadastroScreenProps) => {
      console.log(dados);
     
      firebase.auth().createUserWithEmailAndPassword(dados.email, dados.senha)
        .then((usuario) => {
            Alert.alert("Usuário cadastrado com sucesso.");
            nav.navigate('Home');
        }).catch((error) => {
            Alert.alert('Erro ao cadastrar usuário.', error.message)
            console.log(error);
            console.log('Falhou', dados);
        })
      
    }

    return (
        <ImageBackground source={require('../../img/backsoft.png')} style={styles.imgbackground}>
        <ToolBar back/>
        <ScrollView>
        <View style={styles.container}>
          
          <Formik initialValues={{nome:'', sobrenome:'', email:'', senha:''}}
                validationSchema={Yup.object().shape({
                nome: Yup.string().required('Nome obrigatório'),
                sobrenome: Yup.string().required('Sobrenome obrigatório'),
                email: Yup.string().required('E-mail obrigatório').email('Precisa ser um e-mail válido'),
                senha: Yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres').max(12, 'No máximo 12 caracteres')
                
                })}

                /* Validado com sucesso*/
                onSubmit = {cadastrar} >

                  {({handleChange, handleSubmit, isSubmitting, errors, touched, handleBlur}) => (

                    <View style={styles.container}>
                      <Image source={require('../../img/lamilogobranco.png')} style={styles.imgLami}/>

                      <InputField  texto="Nome" onChangeText={handleChange('nome')}  onBlur={() => handleBlur('nome')}/>
                        { touched.nome && <Text style={styles.textoLami}>{errors.nome}</Text> }

                        <InputField  texto="Sobrenome" onChangeText={handleChange('sobrenome')}  onBlur={() => handleBlur('sobrenome')}/>
                        { touched.sobrenome && <Text style={styles.textoLami}>{errors.sobrenome}</Text> }

                      <InputField icon='person' texto="Email" onChangeText={handleChange('email')}  onBlur={() => handleBlur('email')}/>                        
                        { touched.email && <Text style={styles.textoLami}>{errors.email}</Text> }

                      <InputField icon='https' texto="Senha" senha={true} onChangeText={handleChange('senha')}  onBlur={() => handleBlur('senha')}/>
                        { touched.senha && <Text style={styles.textoLami}>{errors.senha}</Text> }


                      <View style={{flexDirection: 'row'}}>
                        { isSubmitting && <ActivityIndicator size={20} color='white' /> }
                        { !isSubmitting && <Button onPress={() => handleSubmit()} loading={isSubmitting} raised={true} 
                                                   containerStyle={{width: '93%', marginTop: 5, borderRadius: 20}} 
                                                   buttonStyle={{backgroundColor:'#A33B24', width:'100%', borderRadius: 20}} type='solid'
                                                   titleStyle={{fontSize: 20, color: '#FCC9BD', textAlign:'center'}} title="Cadastrar"/>}
                      </View>

                    </View>
                  )}
        </Formik>

          <View style={{flexDirection:'row', marginTop:10}}>
                <Icon name='logo-instagram' color='white' type='ionicon' style={{marginRight:5}} onPress={() => console.log('https://www.instagram.com/loja_lami/')}/>
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
      paddingBottom: 80,
    },
    imgLami: {
      width: 150,
      height: 100,
      marginTop: 50,
      marginBottom: 40,
    },
    imgbackground: {
      height: '100%',
      width: '100%',
      flex: 1
    },
    textoClique:{
      color: 'white',
      fontSize: 12,
      textDecorationLine: 'underline',
      textAlign: 'center',
      marginTop: 5,
      marginBottom:10
    },
    textoLami: {
      color: 'white',
      fontSize: 12,
      textAlign: 'center',
      marginTop: 5,
    },
  });
