import { StyleSheet } from "react-native";

export const SButtonEnviarFoto = () => 
{
    return StyleSheet.create({
        text : {
            color    : 'Black',
            fontSize : 16,
        },
        view : {
            backgroundColor : 'rgb(0, 224, 86)',
            padding : 15,
            borderRadius : 10,
            borderWidth : 0 ,
            alignItems  : 'center',
            justifyContent : 'center',
        }
    });
}