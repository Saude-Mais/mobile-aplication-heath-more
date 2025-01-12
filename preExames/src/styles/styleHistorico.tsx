import { StyleSheet } from 'react-native';

export const SHitorico = () =>{
    return StyleSheet.create({  
        viewTitle  : {
            marginTop:10,
            alignItems:'center',
            justifyContent:'center'
        },
        textTitle : {
            fontSize:20,
            fontWeight:'bold'

        },
        scrollview : {
            marginTop:10,
            
        },
        touch : {
            backgroundColor : 'rgb(255, 255, 255)',
            borderRadius:12,
            borderWidth :1,
            width:300,
            padding:10,
            marginTop:20
        },
        touchText:{
            fontSize:16
        },
        touchInverterOrdem : {
            backgroundColor : 'rgb(255, 255, 255)',
            borderRadius:12,
        }
    });
}