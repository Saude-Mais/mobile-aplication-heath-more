import React ,{ useState } from "react";
import { View , Text , TextInput , ImageBackground , Image, Alert  } from "react-native";

import { StackNavigationProp } from '@react-navigation/stack';

// Imagens, Icones
import PlanoDeFundo from "@assets/image/drawerFundo.png";

// Funçoes 'Css_' abaixo
import { getStylesBG }    from "styles/backgroundImage";


const StyleBG = getStylesBG();

export default function Ajuda(){
    return(
        <ImageBackground source={PlanoDeFundo} style={StyleBG.container}>
            <Text>Proximas atualições ...........</Text>
        </ImageBackground>
    )
}