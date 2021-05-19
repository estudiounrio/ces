const Graficar = (url,container,etiq,tipo='line',varPor,titulo,subtitulo) => {
    const grafico = getData(url,etiq,varPor)
    grafico.then( 
        res => Highcharts.chart( {
            chart: {
                renderTo:container,
                type:varPor ? 'bar' : tipo
            },
            title: { text:titulo },
            subtitle:{ text: subtitulo },
            xAxis: { categories: res.datos[0].periodo },
            series: res.datos
        })
    ).catch( error => console.log(error))
}

////// ESTILOS HIGHCHART ///////
Highcharts.theme = {
    // colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572',   
    //          '#FF9655', '#FFF263', '#6AF9C4'],
    chart: {
        style: {
            fontFamily: 'Montserrat'
        },
        // backgroundColor: {
        //     linearGradient: [0, 0, 500, 500],
        //     stops: [
        //         [0, 'rgb(255, 255, 255)'],
        //         [1, 'rgb(240, 240, 255)']
        //     ]
        // },
    },
    title: {
        style: {
            color: '#000',
            font: 'bold 16px Montserrat, Verdana, sans-serif'
        }
    },
    subtitle: {
        style: {
            color: '#666666',
            font: 'bold 12px Montserrat, Verdana, sans-serif'
        }
    },
    legend: {
        // enabled: true,
        // layout: 'horizontal',
        // align: 'right',
        // verticalAlign: 'middle',
        // floating: true,
        itemStyle: {
            font: '9pt Montserrat, Verdana, sans-serif',
            // color: 'red'
        },
        itemHoverStyle:{
            color: 'gray'
        }   
    },

    credits:false,
    yAxis: {
        title: false,
        labels: {
            enabled:false,
        },
    },
    plotOptions: {
        series: {
            lineWidth: 1.5,
            marker: {
                radius:2.5
            }, 
            label: {
                connectorAllowed: false
            },
        },
        // column: {
        //     stacking: 'percent'
        // },
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        },
        bar: {
            dataLabels: {
                enabled: true,
                overflow: 'justify',
            }
        }
    },
    // tooltip: {
    //     pointFormat: "Value: {point.y:.1f}"
    // },
    // responsive: {
    //     rules: [{
    //         condition: {
    //             maxWidth: 768
    //         },
    //         chartOptions: {
    //             legend: {
    //                 layout: 'horizontal',
    //                 align: 'center',
    //                 verticalAlign: 'bottom'
    //             }
    //         }
    //     }]
    // }

};
// Apply the theme
Highcharts.setOptions(Highcharts.theme);