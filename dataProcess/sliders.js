const diapo = (lado,cantidad) => {
    let diapositivas = `
        <div class="carousel-item active">
            <img src="img/sliders/${lado}/Diapositiva1.PNG" class="d-block w-100" alt="...">
        </div>
    `
    for(let i=2;i<=cantidad;i++){
        diapositivas += `
        <div class="carousel-item">
            <img src="img/sliders/${lado}/Diapositiva${i}.PNG" class="d-block w-100" alt="...">
        </div>
        `
    }
    return diapositivas
}

document.getElementById('diapositivasIzquierda').innerHTML = diapo('izquierda',7)
document.getElementById('diapositivasDerecha').innerHTML = diapo('derecha',3)
document.getElementById('diapositivasDerecha_abajo').innerHTML = diapo('derecha_abajo',7)

document.getElementById('cerrar').addEventListener('click', e =>
    document.getElementById('slider').innerHTML = ''
)