import { TouchableOpacity , Image } from "react-native";

//icone
import visibilidade from "@assets/icons/iconOlho.png"

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
