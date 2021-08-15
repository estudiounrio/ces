
const diapo = (lado,cantidad,nro) => {

    let carrousel = `
        <div id="carouselExampleIndicators${nro}" class="carousel" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="img/sliders/${lado}/Diapositiva1.PNG" class="d-block w-100" alt="...">
                </div>
    `
            for(let i=2;i<=cantidad;i++){
                carrousel += `
                <div class="carousel-item">
                    <img src="img/sliders/${lado}/Diapositiva${i}.PNG" class="d-block w-100" alt="...">
                </div>
                    `
            }

        carrousel+= `
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${nro}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${nro}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
        `
    return carrousel
    
}



document.getElementById('ipi').innerHTML = diapo('ipi',5,1)
document.getElementById('emae').innerHTML = diapo('emae',3,2)
document.getElementById('uci').innerHTML = diapo('uci',4,3)
document.getElementById('sipim').innerHTML = diapo('sipim',4,4)


document.getElementById('cerrar').addEventListener('click', e =>
    document.getElementById('slider').innerHTML = ''
)