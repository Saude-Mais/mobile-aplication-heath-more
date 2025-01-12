import { StyleSheet } from "react-native";


export const SButtonGetImageDocument = () =>{
    return StyleSheet.create({
        view : {
            backgroundColor : 'rgb(255, 255, 255)',
            padding : 10,
            borderRadius : 10,
            borderWidth : 1 ,
            alignItems  : 'center',
            justifyContent : 'center',
        },
        text : {
            fontSize : 14,
        },     
    });
}