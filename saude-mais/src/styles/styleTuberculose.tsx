import { StyleSheet }  from "react-native";


export const STuberculose = () => 
{
    return StyleSheet.create({
        viewMain : {
            justifyContent : 'center',
            alignItems     : 'center',
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
        image: {
            width: 300,
            height: 250,
        },
        viewImage : {
            marginTop : 20,
            alignItems:'center',
            justifyContent: "center",
        },
        text_ : {
            marginBottom : 10,
            fontFamily:14,
        }
    });
}