/* eslint-disable prettier/prettier */
import { ImageBackground, View, Image, ScrollView,  TouchableOpacity,  Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

// Imagens, Ícones
import PlanoDeFundo from "@assets/image/drawerFundo.png";
import Icon         from "@assets/icons/Iconlogo.png";
import IconSort     from "@assets/icons/iconSort.png"
// Funções de estilo
import { getStylesBG } from "styles/backgroundImage";
import { SHitorico }   from 'styles/styleHistorico';
// Serviços
import { ReadHistoric } from "@services/readHistorico";

// Componentes
import ModalHistorico from '@components/historico/modalHistorico';


// Estilos
const StyleBD = getStylesBG();
const Style   = SHitorico();

// Constantes para navegação
type RootStackParamList = {
    OutraTela: undefined;
    Login: { email: string };
};

type OutraTelaNavigationProp = StackNavigationProp<RootStackParamList, 'OutraTela'>;

interface Props {
    navigation: OutraTelaNavigationProp;
}

interface Historico {
    id  : number; data: object;  tipo: string; texto:string;
}

export default function Historico({ navigation }: Props):JSX.Element {
    const route = useRoute(); 
    const [dicionario, setDicionario] = useState<Historico[]>([]);
    const [item, setItem]            = useState<Historico[] >([]);
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        async function fetchHistorico(): Promise<void> {
            try {
                const historico:Historico[] = await ReadHistoric(route.params.userID) || [];
                setDicionario(historico); 
            } catch (error) {
                console.error("Erro ao carregar histórico:", error);
            }
        }
        fetchHistorico(); // Chama a função assíncrona
    }, [route.params.userID]); // Adiciona dependência para garantir consistência

    const toDateTime = async(timestamp: { seconds: number; nanoseconds: number }) =>{
        return (new Date(timestamp.seconds * 1000)).toLocaleString();
    }
    const inverterOrdem = (): void =>{
        setDicionario(dicionario.toReversed())
    }
    const visualizar = (item_:Historico[]):void =>{
        setItem(item_);
        setModalVisible(!modalVisible);
    }
    return (
        <ImageBackground source={PlanoDeFundo} style={StyleBD.container}>
            <View style={StyleBD.viewLogo}>
                <Image source={Icon} style={StyleBD.iconLogo} />
            </View>
            
            <View style={Style.viewTitle}>
                <Text style={Style.textTitle}>Histórico</Text>
            </View>
            <View style={Style.viewIcon}>
                <TouchableOpacity onPress={()=>{inverterOrdem();}} >
                    <Image source={IconSort} style={Style.viewImage}/>
                </TouchableOpacity>
            </View>
            <ScrollView style={Style.scrollview}>
                {dicionario.map((items)=>
                    <TouchableOpacity key={items.id} style={Style.touch} onPress={()=>{visualizar(items)}}>
                        <View>
                            <Text style={Style.touchText}>Dia..: {toDateTime(JSON.parse(JSON.stringify(items.data)))}</Text>
                            <Text style={Style.touchText}>Tipo: {items.tipo}</Text>
                        </View>
                    </TouchableOpacity>  
                )}
            </ScrollView>
            <ModalHistorico visible={modalVisible} item={item} onClose={() => setModalVisible(false)}/>
        </ImageBackground>
    );
}
