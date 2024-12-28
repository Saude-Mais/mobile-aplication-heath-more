import { StyleSheet }  from "react-native";


export const SRaioxClassificacao = () => 
{
    return StyleSheet.create({
        viewMain : {
            justifyContent : 'center',
            alignItems     : 'center',
        },
        container: {
            minHeight: 128,
        },
        viewIcon : {
            marginTop : 10,
        },
        viewGroupButton : {
            marginTop : 50
        },
        viewButtons : {
            marginTop : 20
        },
        dropDown :{
            width : 100,
        },
        image: {
            width: 300,
            height: 250,
        },
        viewImage : {
            marginTop : 20,
            alignItems:'center',
            justifyContent: "center",
        },
        viewButtonVisible : {
            marginTop : 20,
        },
        text_ : {
            marginBottom : 10,
            fontFamily:14,
        },
    });
}