import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, doc, getFirestore, setDoc } from 'firebase/firestore';
import { Auth, App, DB } from 'services/firebase';

interface dados{
    nome_ : string;
    data_ : string;
    rg_   : Number;
    cpf_  : string;
    cep_   : string;
    nome_rua : string;
    numero_rua: string;
    cidade :string;
    estado:string;
    email: string;            
    senha: string;
}
export const CadastrarUsuario = async(dados : dados) =>{
    console.log(dados)
    try{
        const user_ = await createUserWithEmailAndPassword(
            Auth, dados.email, dados.senha
        );
        const id_ = user_.user.uid;
        
        await addDoc( collection(DB, 'usuario'), dados);
        
        return true;

    }catch(error){
        alert(error.message);
    }
}