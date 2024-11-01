import { StyleSheet }  from "react-native";

export const getStylesBG = () => 
{

    const Style = StyleSheet.create({
        container: {
            flex           : 1,
            alignItems     : 'center',
            justifyContent : 'flex-start',
        },
        iconLogo : {
            width : 72,
            height : 72,
            marginTop:100
        }
    });

    return Style;
}