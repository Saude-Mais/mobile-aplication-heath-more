import { TouchableOpacity , Image } from "react-native";

import { SButtonHomeCriancaMenu } from "styles/buttonHomeCriancaMenu";
import  iconMenu                 from '@assets/icons/iconMenu.png';

const Style = SButtonHomeCriancaMenu();

export default function ButtonMenu({onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <Image source={iconMenu} style={Style.iconMenu}/>
        </TouchableOpacity>
    );
}

