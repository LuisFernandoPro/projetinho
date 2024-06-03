// Simulando dados de estudantes
const estudante1 = {
    nome: "João Silva",
    email: "joao@example.com",
    ra: "12345",
    curso: "Engenharia",
    disciplinas: ["Cálculo I", "Física I", "Algoritmos"],
    primeiraDisciplina: function() {
        return this.disciplinas[0];
    },
    ultimaDisciplina: function() {
        return this.disciplinas[this.disciplinas.length - 1];
    }
};

const estudante2 = {
    nome: "Maria Souza",
    email: "maria@example.com",
    ra: "54321",
    curso: "Administração",
    disciplinas: ["Economia", "Contabilidade", "Gestão de Pessoas"],
    primeiraDisciplina: function() {
        return this.disciplinas[0];
    },
    ultimaDisciplina: function() {
        return this.disciplinas[this.disciplinas.length - 1];
    }
};

// Função para preencher as informações do estudante no HTML
function preencherInformacoes(estudante, numEstudante) {
    document.getElementById("nome" + numEstudante).textContent = estudante.nome;
    document.getElementById("email" + numEstudante).textContent = estudante.email;
    document.getElementById("ra" + numEstudante).textContent = estudante.ra;
    document.getElementById("curso" + numEstudante).textContent = estudante.curso;

    const disciplinasList = document.getElementById("disciplinas" + numEstudante);
    disciplinasList.innerHTML = "";
    estudante.disciplinas.forEach(disciplina => {
        const listItem = document.createElement("li");
        listItem.textContent = disciplina;
        disciplinasList.appendChild(listItem);
    });

    document.getElementById("primeira-disciplina" + numEstudante).textContent = estudante.primeiraDisciplina();
    document.getElementById("ultima-disciplina" + numEstudante).textContent = estudante.ultimaDisciplina();
}

// Chamando a função para preencher as informações dos estudantes
preencherInformacoes(estudante1, 1);
preencherInformacoes(estudante2, 2);
