import { DB  } from './firebase';
import  { addDoc  ,collection ,doc  } from "firebase/firestore";



export const AddHistoric = async(data:[], userID:string) => {
    try{
        const collecRef = await collection(doc(DB, "usuario",userID), "historico");
        
        await addDoc(collecRef, data); 

    }catch(error){
        alert(error.message);
    }
}