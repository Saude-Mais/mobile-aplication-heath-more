import { StyleSheet } from "react-native";

export const SComponentEM = ()=>{
    return StyleSheet.create({
        view : {
            marginBottom: 13, 
            marginRight : 15, 
            alignItems :'center', 
            justifyContent:'flex-start'
        },
        text : {
            color     :'rgb(0, 228, 228)', 
            fontWeight:'bold', 
            fontSize  :15
        }
    });
}