interface props {
    nome_ : string;
    email: string;            
    senha: string;
    rsenha: string;
}

export const UserVerify = (dados : props) =>{
    if (dados.senha !== dados.rsenha) {
        throw new Error("As senhas não correspondem.");
    }
    return true;
};
