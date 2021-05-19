const varAnual = (series) => {
    const conj=[]
    for(let i=0;i<series.length;i++){
        let var_conj= {
            name:  series[i].name,
            data: [parseFloat(((series[i].data[12]/series[i].data[0]-1)*100).toFixed(1)), parseFloat(((series[i].data[12]/series[i].data[11]-1)*100).toFixed(1))],
            periodo: ['anual','mensual']   
        }
        conj.push(var_conj)
    }
    return conj
}

const varAnualSingle = (series) => {
    const conj=[]
    for(let i=0;i<series.length;i++){
        let var_conj= {
            name:  series[i].name,
            data: [parseFloat(((series[i].data[12]/series[i].data[0]-1)*100).toFixed(1))],
            periodo: ['anual']   
        }
        conj.push(var_conj)
    }
    return conj
}

const varMensualSingle = (series) => {
    const conj=[]
    for(let i=0;i<series.length;i++){
        let var_conj= {
            name:  series[i].name,
            data: [parseFloat(((series[i].data[12]/series[i].data[11]-1)*100).toFixed(1))],
            periodo: ['mensual']   
        }
        conj.push(var_conj)
    }
    return conj
}

const varTrimestral = (series) => {
    const conj=[]
    for(let i=0;i<series.length;i++){
        let var_conj= {
            name:  series[i].name,
            data: [parseFloat(((series[i].data[4]/series[i].data[0]-1)*100).toFixed(1)), parseFloat(((series[i].data[4]/series[i].data[3]-1)*100).toFixed(1))],
            periodo: ['anual','trimestral']   
        }
        conj.push(var_conj)
    }
    return conj
}

const varAnualTrimestral = (series) => {
    const conj=[]
    for(let i=0;i<series.length;i++){
        let var_conj= {
            name:  series[i].name,
            data: [parseFloat(((series[i].data[4]/series[i].data[0]-1)*100).toFixed(1))],
            periodo: ['anual']   
        }
        conj.push(var_conj)
    }
    return conj
}

const varTrimestralSingle = (series) => {
    const conj=[]
    for(let i=0;i<series.length;i++){
        let var_conj= {
            name:  series[i].name,
            data: [parseFloat(((series[i].data[4]/series[i].data[3]-1)*100).toFixed(1))],
            periodo: ['trimestral']   
        }
        conj.push(var_conj)
    }
    return conj
}

const ultimoMes = (series) => {
    const conj=[]
    for(let i=0;i<series.length;i++){
        let var_conj= {
            name:  series[i].name,
            data: [parseFloat(series[i].data[series[i].data.length-1]).toFixed(1)],
            periodo: series[i].periodo[series[i].data.length-1]   
        }
        conj.push(var_conj)
    }
    return conj
}

const variaciones = (frecuencia,series,varPor) => {
    if (frecuencia==='month' || frecuencia === 'year') {
        switch (varPor) {
            case 'anualymensual':
                return varAnual(series)
              break;
            case 'anual':
                return varAnualSingle(series)
              break;
            case 'mensual':
                return varMensualSingle(series)
              break;
            case 'ultimomes':
                return ultimoMes(series)
              break;
            default:
              console.log('Default: variaciones()')
              break;
          }
    }    
    else {
        switch (varPor) {
            case 'anualymensual':
                return varTrimestral(series)
              break;
            case 'anual':
                return varAnualTrimestral(series)
              break;
            case 'trimestral':
                return varTrimestralSingle(series)
              break;
            case 'ultimomes':
                return ultimoMes(series)
            default:
              console.log('Default: variaciones()')
              break;
          }
    }    

}



