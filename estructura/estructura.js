// BORRA EL CONTENEDOR
const borr = () =>  {
    let del = document.querySelector('#contenedor')
    let del_i =del.querySelectorAll('.row')
    if(del_i.length>0) {
        for(let i=0;i<del_i.length;i++){
            del.removeChild(del_i[i])
        }
    }
}

// AGREGA EL DIV=CONTENEDOR Y EL NAV-CONTENEDOR
const navContenedor = document.getElementById('nav-contenedor')
document.getElementById('navig').addEventListener('click', function(e){
    if (document.getElementById('warn-contain').firstChild){
        document.getElementById('warn-contain').innerHTML=''
    }
    const crea = n => {
        for (let i=1;i<=n;i++){
            const f = ft()
            fragment.appendChild(f)
        }
    }

    if(e.target.name==='Sectores Productivos'){
        navContenedor.innerHTML = `
        <h5>${e.target.name}</h5>
        <select id="nav_select" aria-label="Default select example">
            <option selected disabled>Selecciones Sector</option>
            <option value="uci">Utilización de la Capacidad Instalada</option>
            <option value="nivelgral">IPI Nivel General</option>
            <option value="ipi_sub_alybeb">Alimentos y bebidas</option>
            <option value="ipi_sub_alybeb_cont">Alimentos y bebidas (cont.)</option>
            <option value="ipi_sub_tabaco">Productos de tabaco</option>
            <option value="ipi_sub_textil">Productos textiles</option>
            <option value="ipi_sub_vestycalz">Prendas de vestir, cuero y calzado</option>
            <option value="ipi_sub_madepapeimp">Madera, papel, edición e impresión</option>
            <option value="ipi_sub_refin">Refinación del petróleo, coque y combustible nuclear</option>
            <option value="ipi_sub_sustquim">Sustancias y productos químicos</option>
            <option value="ipi_sub_cauyplast">Productos de caucho y plástico</option>
            <option value="ipi_sub_nometalicos">Productos minerales no metálicos</option>
            <option value="ipi_sub_metbasicas">Industrias metálicas básicas</option>
            <option value="ipi_sub_metal">Productos de metal</option>
            <option value="ipi_sub_maqyequip">Maquinaria y equipo</option>
            <option value="ipi_sub_otrosequip">Otros equipos, aparatos e instrumentos</option>
            <option value="ipi_sub_vehiculos">Vehículos, carrocerías, remolques y autopartes</option>
            <option value="ipi_sub_otrostransp">Otro equipo de transporte</option>
            <option value="ipi_sub_mueblesyresto">Muebles y colchones, y otras industrias manufactureras</option>
        </select>       
        <hr/>
        `
        borr()

    } else { 
        navContenedor.innerHTML = `
        <h5>${e.target.textContent}</h5>
        <hr/>
        `    
        borr()
        if(e.target.textContent===' Actividad Económica'){ crea(3)}
        if(e.target.textContent===' Demanda y Oferta Global'){ crea(2) }
        if(e.target.textContent===' Empleo Formal'){ crea(4) }
        if(e.target.textContent===' Empleo Formal Provincial'){ crea(5) }
        if(e.target.textContent===' Comercio Exterior'){ crea(3)}
        if(e.target.textContent===' Precios'){ crea(4) }
        contenedor.appendChild(fragment)
        
    }
    e.stopPropagation()
    dibujaSeleccion(e.target.textContent)

})

// CREA LOS DIVs DEL CONTENEDOR
const fragment = document.createDocumentFragment()
const contenedor = document.getElementById('contenedor')
const templ = document.getElementById('templ').content

let cont = 0

const creadiv_int = () => {
    let dv= document.createElement('div')
    dv.classList.add('col-lg-6')
    dv.classList.add('d-flex')
    dv.classList.add('justify-content-center')
    cont+=1
    let identificador = 'container'+cont
    const dv_int = document.createElement('div')
    dv_int.classList.add('ancho')
    dv_int.setAttribute('id',identificador)
    dv.appendChild(dv_int)
    return dv
}

const ft = () => {
    let dv_cont= document.createElement('div')
    dv_cont.classList.add('row')
    dv_cont.classList.add('mb-1')
        for(let j=1;j<=2;j++){
            let ap = creadiv_int()
            dv_cont.appendChild(ap)
        }
        return dv_cont
}

// AGREGA LOS DIVs PARA SECTORES PRODUCTIVOS POR CHANGE
document.getElementById('nav-contenedor').addEventListener('change', function(e){
    borr() 
    const v= e.target.options[e.target.selectedIndex].text
    const titulo = document.querySelector('h5')
    titulo.textContent=v
    const vl = e.target.value

    e.stopPropagation()

    const uno = ft()
    const dos = ft()
    fragment.appendChild(uno)
    fragment.appendChild(dos)
    contenedor.appendChild(fragment)

    drawSectoresProductivos(vl)
    
})

const container_h = ( ) => {
    let h=[]
    let del_i =document.querySelector('#contenedor').querySelectorAll('.row')
    let inicial = cont+1-del_i.length*2
    for(let i=inicial; i<=cont;i++){
        let g = 'container'+i
        let d = document.getElementById(g)
        d.innerHTML = `
        <div class="text-center m-5">
        <div class="spinner-border m-5" role="status">
          <span class="visually-hidden"></span>
        </div>
      </div>
        `
        h.push(g)
    }
    return h
}


