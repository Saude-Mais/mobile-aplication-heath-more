import { StyleSheet } from "react-native";

export const SButtonCadastrarUser = () => 
{
    return StyleSheet.create({
        text : {
            color    : 'white',
            fontSize : 18,
        },
        view : {
            alignItems : 'center',
            justifyContent: 'center',
            backgroundColor : 'rgb(84, 255, 124)',
            padding      : 10,
            borderRadius : 12,
            width        : 100,
        }
    });
}