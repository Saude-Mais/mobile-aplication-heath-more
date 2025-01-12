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
            alignItems:'center',
            resizeMode: 'cover'
        },
        iconLogo : {
            width  : 66,
            height : 66,
            marginLeft:10,
        },
        viewLogo : {
            alignContent:'center',
            justifyContent:'center',
            marginTop:100,
        }
    });
}