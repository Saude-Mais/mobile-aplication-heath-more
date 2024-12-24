import { StyleSheet }   from "react-native";



export const SCadastrar = () => 
{
    return StyleSheet.create({
        viewFormulario : {
            backgroundColor:'rgba(255, 255, 255, 0.450)',
            alignItems :  'center',
            width      : 350,
            height: 600,
            borderRadius : 20,
              
        },  
        viewSpace : {
            alignItems: 'center',
            justifyContent:'center',
            marginTop : 30,
            padding : 10
        },
        text : {
            fontSize : 15,
        },
        button_ : {
            marginTop : 10
        },
        scroll:{
            flexGrow:1,
        }
    });
    
}