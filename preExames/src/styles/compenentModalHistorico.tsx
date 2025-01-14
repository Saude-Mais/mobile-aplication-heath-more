import { StyleSheet } from "react-native";

export const SComponentMMH = ()=>{
    return StyleSheet.create({
        modal:{
            alignItems:'center',
            justifyContent:'center'
        },
        viewMain : {
            alignItems:'center',
            justifyContent:'center',
            marginTop:50,
            height   :"82%",
            width    :"95%",
            borderRadius:10,
            backgroundColor: "white"
        },
        text : {
            color     :'rgb(0, 228, 228)', 
            fontWeight:'bold', 
            fontSize  :14
        },
        textScrollTitle:{
            fontSize: 20,
            fontWeight:'bold',
            marginTop:20,
            marginBottom:10,
        },
        textScrollTexto:{
            fontSize: 14,
            textAlign:'justify'
        },
        touch : {
            padding:30,
            marginBottom:20,
            backgroundColor:'rgb(255, 53, 53)',
            padding: 10,
            borderRadius:10,
        },
        touchText: {
            color:'rgb(255, 255, 255)'
        }
        
    });
}