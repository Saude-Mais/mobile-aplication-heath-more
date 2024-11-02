import { StyleSheet }   from "react-native";


export const SFormulario = () => 
{
    return StyleSheet.create({
        viewFormulario : {
            backgroundColor:'rgba(255, 255, 255, 0.450)',
            alignItems :  'center',
            width      : 350,
            borderRadius : 20,
        },      
        containerBairroRua:{
            flexDirection:'row',
            marginTop:20
        },
        text : {
            fontSize : 15,
            marginTop : 25,
            marginLeft : 4,
        },
        textInput : {
            backgroundColor:'rgba(255, 255, 255, 0)',
            fontSize : 14,
            width  : 300,
            height : 40 ,
            paddingLeft : 12,
            paddingRight : 12,       
            borderBottomWidth : 1.5,
            marginTop : 2
        },
        textBairroRua : {
            fontSize   : 17,
            marginLeft : 4
        }, 
        textInputRua : {
            backgroundColor:'rgba(255, 255, 255, 0)',
            width        : 180,
            height       : 40,
            paddingLeft  : 12,
            paddingRight : 12, 
            borderBottomWidth : 1.5,
            marginTop : 2,
            marginBottom : 8
        },
        
        textInputNumero : {
            backgroundColor : 'rgba(255, 255, 255, 0)',
            width        : 100,
            height       : 40,
            paddingLeft  : 12,
            paddingRight : 12, 
            borderBottomWidth : 1.5,
            marginTop : 2,
            marginBottom : 8
        },
    
    })
};