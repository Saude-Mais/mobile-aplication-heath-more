import { StyleSheet }  from "react-native";

export const getStylesMain = () => 
{

    const Style = StyleSheet.create({
        viewMain : {
            justifyContent : 'center',
            alignItems     : 'center',
        },
        viewIcon : {
            marginTop : 10,
        },
        viewGroupButton : {
            marginTop : 100
        },
        viewButtons : {
            marginTop : 14
        }
    });
    
    return Style;
}