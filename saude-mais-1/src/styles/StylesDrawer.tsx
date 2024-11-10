import { StyleSheet } from "react-native";

export const SDrawer = () =>{
    return StyleSheet.create({
        View_itens:{
        },
    
        View_Usuario:{
            alignItems:'center',
            marginTop   :20,
            marginBottom:20,
        },

        Imagem:{
            width:60,
            height:60,
        },
        NomeUsuario:{
            marginTop:10,
        }

    });
}