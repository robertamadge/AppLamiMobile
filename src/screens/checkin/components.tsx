import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { SwipeRow } from 'react-native-swipe-list-view';
import  { Pecas } from '../../models/pecas';
import { Divider } from 'react-native-elements/dist/divider/Divider';

export interface CarrinhoProps {
    pecas: Pecas;
    onEditar(pecas: Pecas): void;
    onExcluir(id?:string): void;
}

export function Carrinho (props: CarrinhoProps) {

    const { pecas } = props;

    return (

            <View>
            <SwipeRow leftOpenValue={120} stopLeftSwipe={120} disableRightSwipe >

                {/*Oculto*/}
                <View style={styles.btn}>
                    <Button containerStyle={styles.btnExcluir} 
                         buttonStyle={{borderRadius: 0}} 
                            title='Excluir' onPress={()=> props.onExcluir(pecas.id)}/>
                    <Button containerStyle={styles.btnEditar} 
                            buttonStyle={{borderRadius: 0}} 
                            title='Editar' onPress={()=> props.onEditar(pecas)}/>
                </View>

                <View style={styles.container}>
                    
                        <Text style={styles.textoContainer}>{pecas.descricao}</Text>
                        <Text style={styles.textoContainer}>{pecas.preco}</Text>
                </View>
                
            </SwipeRow>
            <Divider style={{ backgroundColor: 'white', width: '100%', height: 2, marginBottom: 0 }} />
            </View>
      
    );
}


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor:'#rgba(245, 205, 142,1)',

    },
    btn:{
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    btnExcluir:{ width:80, backgroundColor:'red'},
    btnEditar:{ width:80, backgroundColor:'blue'},  
    textoContainer: {
        color:'white',
        fontSize: 15,
    }
});
