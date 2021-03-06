const getData = async(url,etiq,varPor) => {
    try {
        const datos = await fetch(`https://apis.datos.gob.ar/series/api/series?ids=${url}&format=json&limit=1000`)
        const data = await datos.json()
        let periodo = []
        let etiquetas = []
        let arr_int = []
        let serie = []
        let series =[]
        let inicio
        if(data.meta[0].frequency==='quarter') { inicio = data.data.length-5} else {inicio =data.data.length-13}
        for(let j=1;j<data.meta.length;j++){ etiquetas.push(data.meta[j].field.description) }
        
        for (let i=inicio;i<data.data.length;i++){periodo.push(data.data[i][0])}
        
        for(let h=1;h<data.meta.length;h++){
            for(let k=inicio;k<data.data.length;k++){
                let single=data.data[k][h]
                // arr_int.push(single)
                arr_int.push(parseFloat((single).toFixed(1)))
            }
            serie.push(arr_int)
            arr_int=[]
        }
        let etiquetas_ = etiqueta(etiquetas,etiq)
        for(let m=0;m<serie.length;m++){
            let conj={
                name:etiquetas_[m],
                data:serie[m],
                periodo: fechas(periodo,data.meta[0].frequency)
            }
            series.push(conj)
        } 
        
        let meta = {
            frecuencia: data.meta[0].frequency,
            titulo: data.meta[1].distribution.title,
            fuente: data.meta[1].dataset.source,
            fuente_d: data.meta[1].catalog.title,
            descripcion: data.meta[1].dataset.description,
            datos: varPor ? variaciones(data.meta[0].frequency,series,varPor) : series
        }
        return meta
        
    } catch (error) {
        console.log(error)
    }
}

const getDataJson = async(let1,let2) => {

    try {
        const file = let1
        const file_ = let2

        const datos_ = await fetch(`data/${file}.json`)
        const datos__ = await datos_.json();
        const data_ = datos__[file_]

        const dt = []
        const oBName = Object.keys(data_.Data)
        const oBData = Object.values(data_.Data)
        const oBLength = oBName.length
        
        for(let i =0; i<oBLength; i++){
            for(let j=0;j<oBName.length;j++){
                if(oBName[i]===oBName[j]){
                    const sr = {
                        name: oBName[i],
                        data: oBData[i],
                        periodo: data_.Per??odo
                    }
                    dt.push(sr)
                }
            }
        }
        
        return dt
    
    } catch(error) {
        console.log(error)
    }

}

const fechas = (periodo,frecuencia) => {
    let arr_periodo=[]
    if(frecuencia==='quarter'){
        periodo.forEach( e => {
            let fecha= e.split('-')
            let a??o=fecha[0]
            let mes=fecha[1]
            let text=''
            switch (mes) {
                case '01':
                    text = "1T";
                    break;
                case '04':
                    text = "2T";
                    break;
                case '07':
                    text = "3T";
                    break;
                case '10':
                    text = "4T";
                    break;    
                default:
                    text = "No se encontro fecha";
            }
            text+='-'+a??o.substring(a??o.length-2)
             arr_periodo.push(text)
        })
    }   
    if(frecuencia==='month'){
        periodo.forEach( e=> {
            let fecha= e.split('-')
            let a??o=fecha[0]
            let mes=fecha[1]
            let text=''
            switch (mes) {
                case '01':
                    text = "Ene";
                    break;
                case '02':
                    text = "Feb";
                    break;
                case '03':
                    text = "Mar";
                    break;
                case '04':
                    text = "Abr";
                    break; 
                case '05':
                    text = "May";
                    break;
                case '06':
                    text = "Jun";
                    break;
                case '07':
                    text = "Jul";
                    break;
                case '08':
                    text = "Ago";
                    break;
                case '09':
                    text = "Set";
                    break;
                case '10':
                    text = "Oct";
                    break;
                case '11':
                    text = "Nov";
                    break;
                case '12':
                    text = "Dic";
                    break;
                default:
                    text = "No se encontro fecha";
            }
            text+='-'+a??o.substring(a??o.length-2)
            arr_periodo.push(text)
        })
    }
    if (frecuencia==='year'){
        periodo.forEach( e => {
            let fecha= e.split('-')
            let a??o=fecha[0]
            arr_periodo.push(a??o)
        })
    }
    return arr_periodo    
}

const etiqueta = (etiquetas,etiq=true) => {
    if(etiq){
        let terminos=['. Millones de USD. Anual.',', en millones de pesos de 2004 y Trimestral','IPI Nivel General ','Empleo registrado. Sector Privado. ',' Nacional. Base dic 2016. Mensual.','Asalariados. Sector privado. ', 'IPI Divisiones y Subclases ','EMAE. ','Utilizaci??n de la capacidad instalada en la industria ','. En millones de d??lares FOB','. En millones de d??lares.']
        let descrip=''
        let arr_etiquetas=[]
        for(let c=0;c<etiquetas.length;c++){
            let nombre=etiquetas[c]
            terminos.forEach( e => {let re =e
                if(nombre.includes(re)){
                    descrip=re
                    let nombre1=nombre.replace(re,'')
                    arr_etiquetas.push(nombre1)
                }
            })               
        }
        return arr_etiquetas
    }
    else {
        return etiquetas
    }
}