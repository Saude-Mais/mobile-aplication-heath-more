import { DB , App, Auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDocs , collection, query  ,where} from "firebase/firestore";

export const Logar = (email:string, senha:string) =>{
    try{
        signInWithEmailAndPassword(Auth, email, senha)
            .then(() => {
                const result_ = getIdUser(email);
                return result_;
            })
            .catch((error) => {
                alert(error.code+"\n"+error.message);
            });

    }catch(error){
        alert(error.message);
    }
}

const getIdUser = async(email:string) =>{
    try{
        // Verificando o email para pegar o ID
        const cursor_ = await query(
            collection(DB, 'usuario'), where('email', '==', email)
        );

        // Pegando documento
        const Snapshot = await getDocs(cursor_);

        // Retornando ID do usuario;
        Snapshot.forEach((doc)=>{
            console.log(doc.id);
            return doc.id;
        })

    }catch(error){
        alert(error.message)
    }
}