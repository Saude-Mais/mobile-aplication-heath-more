import { DB , App, Auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDocs , collection, query  ,where} from "firebase/firestore";

export const Logar = (email:string, senha:string) =>{
    try{
        // Verificando user
        signInWithEmailAndPassword(Auth, email, senha)
        // retornando email
        return true;
    }catch(error){
        alert(error.message);
    }
}

export const getIdUser = async (email: string) => {
    try {
        // Verificando o email para pegar o ID
        const cursor_ = query(
            collection(DB, 'usuario'), where('email', '==', email)
        );
  
         // Pegando documento
        const Snapshot = await getDocs(cursor_);
  
        // Obtendo o ID do usuário
        var userId = null; // Variável para armazenar o ID do usuário

        Snapshot.forEach((doc) => {
            userId = doc.id; // Pegue o primeiro ID (caso haja mais de um)
        });
        console.log(userId);
        return userId; // Retorne o ID fora do forEach
    } catch (error) {
        alert(error.message);
    }
  };
  