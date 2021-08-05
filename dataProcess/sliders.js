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

document.getElementById('diapositivasIzquierda').innerHTML = diapo('izquierda',4)
document.getElementById('diapositivasDerecha').innerHTML = diapo('derecha',7)
document.getElementById('diapositivasDerecha_abajo').innerHTML = diapo('derecha_abajo',4)
document.getElementById('diapositivasIzquierda_abajo').innerHTML = diapo('izquierda_abajo',4)


document.getElementById('diapositivasDerechaCoyuntural').innerHTML = diapo('coyuntural_derecha',4)
document.getElementById('diapositivasDerechaCoyuntural_abajo').innerHTML = diapo('coyuntural_derecha-abajo',3)
document.getElementById('diapositivasIzquierdaCoyuntural').innerHTML = diapo('coyuntural_izquierda',3)
document.getElementById('diapositivasIzquierdaCoyuntural_abajo').innerHTML = diapo('coyuntural_Izquierda-abajo',4)

document.getElementById('cerrar').addEventListener('click', e =>
    document.getElementById('slider').innerHTML = ''
)