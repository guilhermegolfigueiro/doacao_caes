let form = document.getElementById('formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valido = true;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let cpf = document.getElementById('cpf').value;
    let nascimento = document.getElementById('nascimento').value;
    let cidade = document.getElementById('cidade').value;
    let moradia = document.getElementById('moradia').value;
    let horas = document.getElementById('horas').value;
    let motivo = document.getElementById('motivo').value;

    let quintal_sim = document.getElementById('quintal_sim').checked;
    let quintal_nao = document.getElementById('quintal_nao').checked;
    let cuidou_sim = document.getElementById('cuidou_sim').checked;
    let cuidou_nao = document.getElementById('cuidou_nao').checked;
    let permite = document.getElementById("permite").checked;
    let seguro = document.getElementById("seguro").checked;
    let financeiro = document.getElementById("financeiro").checked;
    let impulso = document.getElementById("impulso").checked;
    let termo = document.getElementById('termo').checked;

    let cpf_cadastrados = ["123456789", "987654321", "543219876", "678912345"];

    document.getElementById('erro_nome').textContent = '';
    document.getElementById('erro_email').textContent = '';
    document.getElementById('erro_telefone').textContent = '';
    document.getElementById('erro_cpf').textContent = '';
    document.getElementById('erro_nascimento').textContent = '';
    document.getElementById('erro_cidade').textContent = '';
    document.getElementById('erro_quintal').textContent = '';
    document.getElementById('erro_cuidou').textContent = '';
    document.getElementById('erro_horas').textContent = '';
    document.getElementById('erro_motivo').textContent = '';
    document.getElementById('erro_termo').textContent = '';

    if (nome.length < 3) {
        document.getElementById('erro_nome').textContent = 'O seu nome deve ter pelo menos 3 caracteres';
        valido = false;
    }

    if (!email.includes('@')) {
        document.getElementById('erro_email').textContent = 'Insira um e-mail válido.';
        valido = false;
    }

    if (telefone.length < 8) {
        document.getElementById('erro_telefone').textContent = 'Insira no mínimo os 8 dígitos';
        valido = false;
    }

    if (cpf === '') {
        document.getElementById('erro_cpf').textContent = 'Seu CPF é obrigatório';
        valido = false;
    } else if (cpf_cadastrados.includes(cpf)) {
        document.getElementById('erro_cpf').textContent = 'Seu CPF já está cadastrado';
        valido = false;
    }

    if (nascimento) {
        let dataNasc = new Date(nascimento);
        let hoje = new Date();
        let idade = hoje.getFullYear() - dataNasc.getFullYear();
        let mes = hoje.getMonth() - dataNasc.getMonth();

        if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
            idade--;
        }

        if (idade < 18) {
            document.getElementById('erro_nascimento').textContent = 'Você deve ser maior de 18 anos';
            valido = false;
        }
    } else {
        document.getElementById('erro_nascimento').textContent = 'A data de nascimento é obrigatória';
        valido = false;
    }

    if (cidade === '') {
        document.getElementById('erro_cidade').textContent = 'Sua cidade é obrigatória';
        valido = false;
    }

    if (!quintal_sim && !quintal_nao) {
        document.getElementById('erro_quintal').textContent = 'Essa informação é obrigatória';
        valido = false;
    }

    if (!cuidou_sim && !cuidou_nao) {
        document.getElementById('erro_cuidou').textContent = 'Essa informação é obrigatória';
        valido = false;
    }

    if (!termo) {
        document.getElementById('erro_termo').textContent = 'Aceite os termos de responsabilidade para a adoção';
        valido = false;
    }

    if (motivo.length < 10) {
        document.getElementById('erro_motivo').textContent = 'Insira no mínimo 10 caracteres';
        valido = false;
    }

    if (moradia === "apartamento" && quintal_sim) {
        alert('Seu apartamento tem quintal por acaso?');
        valido = false;
    }

    if (valido) {
        alert("Formulário validado com sucesso!");
    }
});