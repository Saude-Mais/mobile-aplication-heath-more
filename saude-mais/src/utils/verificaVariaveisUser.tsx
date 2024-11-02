import { Alert } from "react-native";


export const UserVerify = (dados) =>{
    dados.cpf_ = dados.cpf_.replace('.', '').replace('-', '')

    if (!dados.nome_ || dados.nome_.length < 3) {
        alert("O nome deve ter pelo menos 3 caracteres.");
        return false;
    }
    if (!dados.cpf_ || dados.cpf_.length != 14) {
        alert("O CPF deve ter 11 dígitos.");
        return false;
    }
    if (dados.senha !== dados.rsenha) {
        alert("As senhas não correspondem.");
        return false;
    }
    return true;
};
