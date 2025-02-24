interface props {
    nome_ : string;
    email: string;            
    senha: string;
    rsenha: string;
}
const isUsernameInPassword = (username: string, password: string): boolean => {
    if (!username || !password) return false;
  
    // Remove espaços extras e converte tudo para minúsculas para evitar diferenças de capitalização
    const cleanedUsername = username.trim().toLowerCase();
    const cleanedPassword = password.trim().toLowerCase();
  
    return cleanedPassword.includes(cleanedUsername);
  };

export const UserVerify = (dados : props) =>{
    if (dados.senha !== dados.rsenha) {
        throw new Error("As senhas não correspondem.");
    }
    if (isUsernameInPassword(dados.nome_, dados.senha)){
        throw new Error("O nome do usuário deve ser diferente da senha.");
    }

    return true;
};
