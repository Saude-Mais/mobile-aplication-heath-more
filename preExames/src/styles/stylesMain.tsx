import { StyleSheet }  from "react-native";

export const getStylesMain = () => 
{
    return StyleSheet.create({
        viewMain : {
            justifyContent : 'center',
            alignItems     : 'center',
        },
        viewIcon : {
            marginTop : 10,
            alignItems:'center',
            justifyContent:'center'
        },
        viewGroupButton : {
            marginTop : 100
        },
        viewButtons : {
            marginTop : 14
        }
    });
}