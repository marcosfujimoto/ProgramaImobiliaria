let imoveis = []
let opcao = ''

do {
    opcao = parseInt(prompt(
        "Bem vindo ao cadastro de imóveis! \n" + 
        "Imóveis cadastrados: " + imoveis.length +
        "\n\n Escolha uma opção: \n 1 - Cadastrar imóvel \n 2 - Consultar imóveis \n 3 - Sair"
    ))

    switch (opcao) {
        case 1: 
            let imovel = {}

            imovel.proprietario = prompt("Digite o nome do proprietário")
            imovel.quantidadeQuartos = prompt("Digite a quantidade de quartos")
            imovel.quantidadeBanheiros = prompt("Digite a quantidade de banheiros")
            imovel.garagem = prompt("Imóvel possui garagem? SIM/NÃO")

            imoveis.push(imovel)
            break 

        case 2: 
            for (let i = 0; i < imoveis.length; i++) {
                let imovel = imoveis[i]
                alert(
                    "Imóvel " + (i+1) + ":\n" +
                    "Proprietário: " + imovel.proprietario + "\n" +
                    "Quartos: " + imovel.quantidadeQuartos + "\n" +
                    "Banheiros: " + imovel.quantidadeBanheiros + "\n" +
                    "Garagem: " + imovel.garagem
                )
            }
            break

        case 3: 
            alert("Encerrando")
            break

        default: 
            alert("Opção inválida")
    }

} while (opcao !== 3)
