import { StyleSheet } from "react-native";

export const SButtonEntrar = () => 
{
    return StyleSheet.create({
        text : {
            color    : 'white',
            fontSize : 16,
        },
        view : {
            alignItems : 'center',
            justifyContent: 'center',
            backgroundColor : 'rgb(31, 138, 239)',
            padding      : 10,
            borderRadius : 12,
            width        : 100,
        }
    });
}