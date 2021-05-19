const Tablas = (url,container='container',etiq,varPor) => {
    const tabla = getData(url,etiq,varPor)
    const el=document.getElementById(container)
    const creaTabla = (res) => {
                var tbl = `<table class="table">
                    <caption>Fuente: ${res.fuente}</caption>
                    <thead>
                        <tr>
                            <th scope="col">${res.descripcion}</th>
                            <th scope="col">${res.datos[0].periodo}</th>
                        </tr>
                    </thead>
                <tbody>`
                for(let i=0;i<res.datos.length;i++){
                    tbl +=`
                        <tr>
                            <td> ${res.datos[i].name} </td>
                            <td> ${res.datos[i].data[0]}</td>
                        </tr>          
                    `
                }
                tbl+=`</tbody></table>`,
                el.innerHTML = tbl
    }
    tabla.then( 
        res => creaTabla(res),
        
    ).catch( error => console.log(error))
}