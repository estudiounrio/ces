
const carru = (lado,cantidad,nro) => {

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


let elmodal = document.querySelector('.fichas')
console.log(elmodal)
elmodal.setAttribute('data-bs-toggle','modal')
elmodal.setAttribute('data-bs-target','#staticBackdrop')

elmodal.addEventListener('click', e => {
        let cantidad
        switch (e.target.name) {
            case 'ipi': cantidad=5
                break;
            case 'sipim': cantidad=4
                break;
            case 'uci': cantidad=4
                break;
            case 'emae': cantidad=3
                break;
            case 'pbi': cantidad=4
                break;
            default: cantidad=0
                break;
        }
        if(cantidad>0){
            let dv= document.createElement('div')
            dv.setAttribute('id','dv')
            document.getElementById('modalInner').appendChild(dv)
            document.getElementById('dv').innerHTML = carru(e.target.name,cantidad,0)
        }
    e.stopPropagation()
})






// document.getElementById('cerrar').addEventListener('click', e =>
//     document.getElementById('slider').innerHTML = ''
// )