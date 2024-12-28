import { StyleSheet } from "react-native";

export const SButtonEnviarFoto = () => 
{
    return StyleSheet.create({
        text : {
            color    : 'Black',
            fontSize : 16,
        },
        view : {
            backgroundColor : 'rgb(0, 180, 69)',
            padding : 15,
            borderRadius : 20,
            borderWidth : 0 ,
            alignItems  : 'center',
            justifyContent : 'center',
        }
    });
}