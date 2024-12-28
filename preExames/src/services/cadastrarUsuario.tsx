import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { Auth, DB } from 'services/firebase';

interface Dados {
    nome_: string;
    data_: string;
    email: string;            
    senha: string;
}

export const CadastrarUsuario = async (dados: Dados) => {
    console.log(dados);
    try {
        // Criação do usuário no Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(Auth, dados.email, dados.senha);
        const user = userCredential.user;

        // Agora que o usuário foi criado, podemos adicionar seus dados à coleção "usuario"
        const docRef = await addDoc(collection(DB, 'usuario'), {
            nome_: dados.nome_,
            data_: dados.data_,
            email: dados.email,
            userId: user.uid  // Podemos armazenar o ID do usuário para referência
        });
        return true;

    } catch (error: any) {
        alert(error.message);
    }
};
