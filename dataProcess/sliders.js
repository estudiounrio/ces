const diapo = (lado) => {
    let diapositivas = `
        <div class="carousel-item active">
            <img src="img/sliders/${lado}/Diapositiva1.PNG" class="d-block w-100" alt="...">
        </div>
    `
    for(let i=2;i<7;i++){
        diapositivas += `
        <div class="carousel-item">
            <img src="img/sliders/${lado}/Diapositiva${i}.PNG" class="d-block w-100" alt="...">
        </div>
        `
    }
    return diapositivas
}

document.getElementById('diapositivasIzquierda').innerHTML = diapo('izquierda')
document.getElementById('diapositivasDerecha').innerHTML = diapo('derecha')

document.getElementById('cerrar').addEventListener('click', e =>
    document.getElementById('slider').innerHTML = ''
)