// Declaração de variáveis
var nomeHeroi = "Matheus Aquino";
var xpHeroi = 11000;
var nivelHeroi;

// true: código ser executado pelo menos uma vez 
// Criação do switch case para verificar o nível do herói em relaçao ao seu XP
switch (true) {
    case xpHeroi <= 1000:
        nivelHeroi = "Ferro";
        break;
    case xpHeroi <= 2000:
        nivelHeroi = "Bronze";
        break;
    case xpHeroi <= 5000:
        nivelHeroi = "Prata";
        break;
    case xpHeroi <= 7000:
        nivelHeroi = "Ouro";
        break;
    case xpHeroi <= 8000:
        nivelHeroi = "Platina";
        break;
    default:
        nivelHeroi = "Ascendente";
}

// Exibição do nome e nível do herói que foi atribuído no início do código
console.log ("O nome do herói é " + nomeHeroi + " e o seu nível é o " + nivelHeroi);