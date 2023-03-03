class Cliente {
    constructor(pNome, pEndereco) {
        this.nome = pNome;
        this.endereco = pEndereco;
    }

    get Nome() {
        return this.nome;
    }

    set Nome(pNome) {
        this.nome = pNome;
    }

    get Endereco() {
        return this.endereco;
    }

    set Endereco(pEndereco) {
        this.endereco = pEndereco;
    }
}

// Criação da classe Pessoa Fisica

class PessoaFisica extends Cliente {
    constructor(pNome, pEndereco, pCpf,pDataNascimento) {
        super(pNome,pEndereco);
        this.cpf = pCpf;
        this.dataNascimento = pDataNascimento;
    }

    get Cpf() {
        return this.cpf;
    }

    set Cpf(pCpf) {
        this.cpf = pCpf;
    }

    get DataNascimento() {
        return this.dataNascimento;
    }

    set DataNascimento(pDataNascimento) {
        this.dataNascimento =  pDataNascimento;
    }
}

// Criação da classe Pessoa Jurídica

class PessoaJuridica extends Cliente {
    constructor(pNome, pEndereco, pCnpj,pRazaoSocial) {
        super(pNome,pEndereco);
        this.cnpj = pCnpj;
        this.razaoSocial = pRazaoSocial;
    }

    get Cnpj() {
        return this.cnpj;
    }

    set Cnpj(pCnpj) {
        this.cnpj = pCnpj;
    }

    get RazaoSocial() {
        return this.razaoSocial;
    }

    set RazaoSocial(pRazaoSocial) {
        this.razaoSocial = pRazaoSocial;
    }
}

var objetoPessoaFisica = new PessoaFisica("Augusto", "Rua X n897","000.111.222-33", "12/09/1912");
console.log(objetoPessoaFisica);
console.log("******************************************");
var objetoPessoaJuridica =  new PessoaJuridica("Sonic eletrônicos", "Av. X, n1895", "000.111.0001-22", "Sonic Eletrônicos SA");
console.log(objetoPessoaJuridica);
