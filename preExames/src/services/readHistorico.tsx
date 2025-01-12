import { DB  } from './firebase';
import  { getDocs  ,collection ,doc, query, orderBy  } from "firebase/firestore";



export const ReadHistoric = async(userID:string) => {
    try{
        const dicionario = []
        const collecRef = await collection(doc(DB, "usuario",userID), "historico");
        
         
        const cursor_exe    = query((collecRef),orderBy('data'));
        const querySnapshot = await getDocs(cursor_exe);
        var enum_ = 0
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            data['id_'] = enum_;
            dicionario.push(doc.data());   
            enum_ ++;          
        });

        return dicionario;
    }catch(error){
        alert(error.message);
    }
}