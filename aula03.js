let carreira = prompt(
    "Olá, Dev!\nQual área você quer seguir? 'Front-End' ou 'Back-End'?\nResponda aqui:"
);
let linguagem = "";
if (carreira == "Front-End") {
    linguagem = prompt("Você quer aprender Vue ou React?");
} else if (carreira == "Back-End") {
    linguagem = prompt("Você quer aprender C# ou Java?");
} else {
    alert("Mensagem inválida!");
}

let fullStack = prompt(
    "Digite 1 para seguir sua especidalidade escolhida.\nDigite 2 para seguir desenvolvendo-se para Fullstack."
);
if (fullStack == 1) {
    alert(
        `Continue especializando-se em ${linguagem} para dominar a área de ${carreira}!`
    );
} else if (fullStack == 2) {
    alert(
        `Chegou a hora de aprender novas linguagens de programação, Dev.\nCaso realmente queira ser FullStack!`
    );
} else {
    alert("Mensagem invalida!");
}

let pergunta = prompt(
    "Tem alguma tecnologia que você quer de aprender?\nDigite 'Sim' caso positivo.\nDigite 'Não'caso negativo."
);
while (pergunta == "Sim") {
    let tech = prompt("Me conta.. Qual seria?");
    alert(`${tech}! Uau!!! Realmente, é uma tecnologia muito legal. Parabéns!!!`);
    pergunta = prompt(
        "Tem alguma tecnologia que você quer de aprender?\nDigite 'Sim'caso positivo.\nDigite 'Não'caso negativo."
    );
}