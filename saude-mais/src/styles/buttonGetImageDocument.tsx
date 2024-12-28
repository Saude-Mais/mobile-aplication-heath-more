import { StyleSheet } from "react-native";


export const SButtonGetImageDocument = () =>{
    return StyleSheet.create({
        view : {
            backgroundColor : 'rgba(255, 255, 255, 0.532)',
            padding : 20,
            borderRadius : 20,
            borderWidth : 0.5 ,
            alignItems  : 'center',
            justifyContent : 'center',
        },
        text : {
            fontSize : 15,
        },     
    });
}