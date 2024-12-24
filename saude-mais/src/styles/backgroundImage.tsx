import { StyleSheet }  from "react-native";

export const getStylesBG = () => 
{
    return StyleSheet.create({
        container: {
            flex           : 1,
            alignItems     : 'center',
            justifyContent : 'flex-start',
        },
        container2: {
            flex           : 1,
            alignItems:'center'
        },
        iconLogo : {
            width  : 60,
            height : 60,
            marginTop:100
        }
    });
}