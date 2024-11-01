import { TouchableOpacity , Image } from "react-native";

//icone
import visibilidade from "@assets/icons/icon_olho.png"

//estilo
import { SButtonVisibilidadeSenha } from "styles/buttonLoginVisibilidadeSenha";


const Style = SButtonVisibilidadeSenha();
export default function ButtonVisibilidadeSenha({onPress}){
    return(
        <TouchableOpacity onPress={onPress}>       
            <Image source={visibilidade} style={Style.icone}/>
        </TouchableOpacity>
    );
}
