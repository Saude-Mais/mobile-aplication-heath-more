import { StyleSheet } from "react-native";


export const SHomeCrianca = () => {
    return StyleSheet.create({
        container: {
            flex           : 1,
            alignItems     : 'center',
            justifyContent : 'flex-start',
            resizeMode:'center'

        },   
        containerButtonMenu:{
            marginTop:30,
            marginRight:320,
        },
        conteinerNomeCrianca:{
            marginTop:10
        },
        containerButtonAdcionar:{
            alignItems:'center'
        },
        scrollView:{
            marginTop:50,
        },
        iconeCrianca:{
            width:180,
            height:50,
            marginTop:15,
        },
        textCadastrarCrianca:{
            marginTop:10,
           
        }
        
    })
}
