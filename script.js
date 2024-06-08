function GERAR() {

    // VARIAVEIS
    let select = document.getElementById('select').value;
    let numeros = document.getElementById('numeros').value;
    let num_letras = document.getElementById('num_letras').value;
    let tamanho = document.getElementById('tamanho').value;

    // MINIMO E MAXIMO NUMERO ALEATORIO
    let min = 0;
    let max = 9;

    if (select === numeros) {
        document.getElementById('resul').innerHTML = '<input type="text" readonly id="resultado" class="senha">';

        for (let i = 0; i < tamanho; i++) {
            let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
            document.getElementById('resultado').value += numeroAleatorio;
        }
    }
    else if (select === num_letras) {
        document.getElementById('resul').innerHTML = '<input type="text" readonly id="resultado" class="senha">';

        for (let i = 0; i < tamanho; i++) {
            let min_1 = 0;
            let max_1 = 69;
            let caracteres = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '&', '*', '-', '_'];
            let numeroAleatorio = Math.floor(Math.random() * (max_1 - min_1 + 1)) + min_1;
            document.getElementById('resultado').value += caracteres[numeroAleatorio];

        }
    }

}
