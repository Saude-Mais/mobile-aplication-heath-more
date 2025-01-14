import { DB  } from './firebase';
import  { getDocs  ,collection ,doc, query, orderBy  } from "firebase/firestore";



export const ReadHistoric = async(userID:string) => {
    try{
        const dicionario:any[] = [];
        const collecRef = await collection(doc(DB, "usuario",userID), "historico");
        
         
        const cursor_exe    = query((collecRef),orderBy('data'));
        const querySnapshot = await getDocs(cursor_exe);

        let enum_ = 0;
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            data['id'] = enum_;
            dicionario.push(data);  
            enum_ ++; 
        });
        return dicionario;
    }catch(error){
        alert(error.message);
    }
}