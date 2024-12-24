import { StyleSheet }  from "react-native";

export const getStylesLogin = () => 
{
    return StyleSheet.create({
        containerLogin : {
            backgroundColor : 'rgb(255, 255, 255)',
            alignItems : 'center',
            width  : 330,
            height : 295,
            padding : 5,
            borderRadius : 20,
            marginTop:50,
        },

        viewIconOlho : {
            position  : 'absolute',
            marginTop : 23,
            marginLeft : 270,
            width :15,
            height:12,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:100,     
        },
        text : {
            fontSize   : 17,
            marginTop  : 20,
        },
        textInput : {
            backgroundColor : 'rgba(255, 255, 255, 0)',
            fontSize : 14,
            width    : 290,
            height   : 42 ,
            paddingLeft  : 12,
            paddingRight : 12,
            paddingTop   : 10,         
            borderRadius : 0 , 
            borderBottomWidth : 1.5
        },      
        ViewButtonEntrar : {
            marginTop:25,
        },
        ViewButtonEsqueciS : {
            marginTop:25
        },
        ViewButtonCadastrar : {
            marginTop:30
        },
        button_medico : {
            marginTop : 100,
            marginRight : 150
        }
    });
};