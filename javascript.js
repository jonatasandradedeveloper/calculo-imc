function calculaimc() {
    let Weight = parseFloat(document.getElementById('floatingWeight').value);
    let height = parseFloat(document.getElementById('floatingheight').value);

    const imc = Weight / (height * height);

    if (isNaN(imc)) return;

    let type = "Obesidade";

    switch (true) {
        case (imc < 18.5):
            type = "Magreza";
            break;
        case (imc < 24.9):
            type = "Normal";
            break;
        case (imc < 30):
            type = "Sobre o peso";
            break;
    }

    document.querySelector('#imc').innerHTML = type + " - " + imc.toFixed(2);
}