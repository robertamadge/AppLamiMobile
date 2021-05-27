import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { Header } from 'react-native-elements';
import { DrawerActions } from '@react-navigation/routers';
import { useNavigation } from '@react-navigation/core';
import { View } from 'react-native';

export interface ToolBarProps {
    menu?:boolean;
    back?:boolean;
}

export function ToolBar (props: ToolBarProps) {
    const nav = useNavigation();

    let leftComponent = <View/>

    if(props.menu)
        leftComponent = <TouchableOpacity onPress={() => nav.dispatch(DrawerActions.openDrawer())}>
                            <MaterialIcons name="menu" size={20} color='white'/>
                        </TouchableOpacity>
        else if(props.back)
        leftComponent = <TouchableOpacity onPress={() => nav.goBack()}>
                            <MaterialIcons name='arrow-back' size={20} color='white'/>
                        </TouchableOpacity>


    return (
          <Header containerStyle={{backgroundColor:'#rgba(237, 121, 95, 0.7)'}} 
                  leftComponent={leftComponent}
                  centerComponent={{ text: 'LAMI', style: { color: 'white' } }}
                  rightComponent={(<TouchableOpacity onPress={() => nav.navigate('Home')} >
                      <MaterialIcons name="home" size={20} color='white'/>
                   </TouchableOpacity>)} />
      
    );
}
