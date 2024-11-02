import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { getAuth }     from 'firebase/auth';
import { app, db } from 'services/firebase';

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
    try{
       
        const auth  = getAuth(app);
        const user_ = await createUserWithEmailAndPassword(
            auth, dados.email, dados.senha
        );

        const id_ = user_.user.uid;

        await setDoc( doc(db, 'usuario', id_), {
            nome : dados.nome_,
            data_de_nascimento : dados.data_,
            registro_geral : dados.rg_,
            cpf : dados.cpf_,
            cep : dados.cep_,
            nome_da_rua : dados.nome_rua,
            numero      : dados.numero_rua,
            cidade : dados.cidade,
            estado : dados.estado
        });
        return true;
    }catch(error){
        alert(error.message)
    }
}