// IPI: IPI Divisiones y Subclases, Índice 2004 = 100
const ipi='453.1_SERIE_ORIGNAL_0_0_14_46,453.1_SERIE_DESEADA_0_0_24_58,453.1_SERIE_TENDCLO_0_0_21_61'
const ipi_div= '453.1_SERIE_ORIGNAL_0_0_14_46,453.2_ALIMENTOS_DAS_0_0_17_18,453.2_PRODUCTOS_ACO_0_0_16_81,453.2_PRODUCTOS_LES_0_0_18_32,453.2_PRENDAS_VEADO_0_0_28_88,453.2_MADERA_PAPION_0_0_30_66,453.2_REFINACIONEAR_0_0_45_82,453.2_SUSTANCIASCOS_0_0_29_82,453.2_PRODUCTOS_ICO_0_0_25_26,453.2_PRODUCTOS_COS_0_0_32_70,453.2_INDUSTRIASCAS_0_0_28_0,453.2_PRODUCTOS_TAL_0_0_15_15,453.2_MAQUINARIAIPO_0_0_17_14,453.2_OTROS_EQUITOS_0_0_35_77,453.2_VEHICULOS_TES_0_0_54_37,453.2_OTRO_EQUIPRTE_0_0_25_29,453.2_MUEBLES_CORAS_0_0_49_35'
const ipi_sub_alybeb = '453.2_ALIMENTOS_DAS_0_0_17_18,453.2_CARNE_VACUUNA_0_0_12_53,453.2_CARNE_AVIAIAR_0_0_11_85,453.2_FIAMBRES_EDOS_0_0_18_46,453.2_PREPARACIORES_0_0_39_24,453.2_MOLIENDA_OSAS_0_0_20_8,453.2_PRODUCTOS_EOS_0_0_17_89,453.2_MOLIENDA_CLES_0_0_17_71'
const ipi_sub_alybeb_cont = '453.2_ALIMENTOS_DAS_0_0_17_18,453.2_GALLETITASTAS_0_0_27_88,453.2_AZUCAR_CONATE_0_0_27_68,453.2_YERBA_TE_CAFE_0_0_13_44,453.2_GASEOSAS_ASAS_0_0_55_90,453.2_VINOINO_0_0_4_89,453.2_OTROS_PRODIOS_0_0_28_20'

const ipi_sub_tabaco = '453.2_PRODUCTOS_ACO_0_0_16_81,453.2_PREPARACIOACO_0_0_24_1,453.2_CIGARRILLOLOS_0_0_11_16'
const ipi_sub_textil = '453.2_PRODUCTOS_LES_0_0_18_32,453.2_PREPARACIOTIL_0_0_29_69,453.2_HILADOS_ALDON_0_0_15_97,453.2_TEJIDOS_ACLES_0_0_34_1,453.2_OTROS_PRODLES_0_0_24_67'
const ipi_sub_vestycalz = '453.2_PRENDAS_VEADO_0_0_28_88,453.2_PRENDAS_VETIR_0_0_14_10,453.2_CURTIDO_ARERO_0_0_23_60,453.2_CALZADOADO_0_0_7_59'
const ipi_sub_madepapeimp = '453.2_MADERA_PAPION_0_0_30_66,453.2_PRODUCTOS_CHO_0_0_23_95,453.2_PRODUCTOS_PEL_0_0_15_66,453.2_EDICION_IMION_0_0_17_59'
const ipi_sub_refin = '453.2_REFINACIONEAR_0_0_45_82,453.2_NAFTASTAS_0_0_6_13,453.2_GASOILOIL_0_0_6_78,453.2_FUELOILOIL_0_0_7_2,453.2_ASFALTOSTOS_0_0_8_16,453.2_OTROS_PRODION_0_0_26_12'
const ipi_sub_sustquim = '453.2_SUSTANCIASCOS_0_0_29_82,453.2_GASES_INDULES_0_0_18_56,453.2_PRODUCTOS_COS_0_0_26_42,453.2_AGROQUIMICCOS_0_0_12_6,453.2_MATERIAS_PICO_0_0_44_25,453.2_PINTURASRAS_0_0_8_67,453.2_PRODUCTOS_COS_0_0_23_90,453.2_DETERGENTELES_0_0_40_99,453.2_OTROS_PRODCOS_0_0_24_57'
const ipi_sub_cauyplast = '453.2_PRODUCTOS_ICO_0_0_25_26,453.2_NEUMATICOSCOS_0_0_10_63,453.2_OTROS_PRODCHO_0_0_22_35,453.2_MANUFACTURICO_0_0_21_9'
const ipi_sub_nometalicos = '453.2_PRODUCTOS_COS_0_0_32_70,453.2_PRODUCTOS_RIO_0_0_16_39,453.2_PRODUCTOS_ICA_0_0_26_20,453.2_CEMENTONTO_0_0_7_59,453.2_CAL_YESOESO_0_0_8_92,453.2_ARTICULOS_ESO_0_0_22_22,453.2_OTROS_PRODCOS_0_0_38_93'
const ipi_sub_metbasicas = '453.2_INDUSTRIASCAS_0_0_28_0,453.2_INDUSTRIA_ICA_0_0_21_100,453.2_ALUMINIO_OSOS_0_0_34_69,453.2_FUNDICION_LES_0_0_17_29'
const ipi_sub_metal = '453.2_PRODUCTOS_TAL_0_0_15_15,453.2_PRODUCTOS_RAL_0_0_35_79,453.2_ENVASES_MECOS_0_0_17_38,453.2_OTROS_PRODIOS_0_0_33_55'
const ipi_sub_maqyequip = '453.2_MAQUINARIAIPO_0_0_17_14,453.2_MAQUINARIARAL_0_0_22_43,453.2_MAQUINARIARIA_0_0_23_78,453.2_OTRA_MAQUIIAL_0_0_28_5,453.2_APARATOS_UICO_0_0_22_48'
const ipi_sub_otrosequip = '453.2_OTROS_EQUITOS_0_0_35_77,453.2_EQUIPOS_INCOS_0_0_70_37,453.2_EQUIPOS_ELCOS_0_0_18_68,453.2_INSTRUMENTION_0_0_38_2' 
const ipi_sub_vehiculos = '453.2_VEHICULOS_TES_0_0_54_37,453.2_VEHICULOS_RES_0_0_21_54,453.2_CARROCERIAUES_0_0_36_15,453.2_AUTOPARTESTES_0_0_10_100' 
const ipi_sub_otrostransp = '453.2_OTRO_EQUIPRTE_0_0_25_29,453.2_OTRO_EQUIPRTE_0_0_22_9,453.2_MOTOCICLETTAS_0_0_12_50' 
const ipi_sub_mueblesyresto = '453.2_MUEBLES_CORAS_0_0_49_35,453.2_MUEBLES_CONES_0_0_17_98,453.2_OTRAS_INDURAS_0_0_31_41,453.2_RECLICLAMINTO_0_0_51_47'

const ipi_proxi_alybeb='453.2_ALIMENTOS_DAS_0_0_17_18,453.1_SERIE_ORIGNAL_0_0_14_46'
const ipi_proxi_tabaco='453.2_PRODUCTOS_ACO_0_0_16_81,453.1_SERIE_ORIGNAL_0_0_14_46'
const ipi_proxi_textil='453.1_SERIE_ORIGNAL_0_0_14_46,453.2_PRODUCTOS_LES_0_0_18_32'
const ipi_proxi_vestycalz='453.2_PRENDAS_VEADO_0_0_28_88,453.1_SERIE_ORIGNAL_0_0_14_46'
const ipi_proxi_madepapeimp='453.1_SERIE_ORIGNAL_0_0_14_46,453.2_MADERA_PAPION_0_0_30_66'
const ipi_proxi_refin='453.2_REFINACIONEAR_0_0_45_82,453.1_SERIE_ORIGNAL_0_0_14_46'
const ipi_proxi_sustquim='453.2_SUSTANCIASCOS_0_0_29_82,453.1_SERIE_ORIGNAL_0_0_14_46'
const ipi_proxi_cauyplast='453.1_SERIE_ORIGNAL_0_0_14_46,453.2_PRODUCTOS_ICO_0_0_25_26'
const ipi_proxi_nometalicos='453.2_PRODUCTOS_COS_0_0_32_70,453.1_SERIE_ORIGNAL_0_0_14_46'
const ipi_proxi_metbasicas='453.2_INDUSTRIASCAS_0_0_28_0,453.1_SERIE_ORIGNAL_0_0_14_46'
const ipi_proxi_metal='453.2_PRODUCTOS_TAL_0_0_15_15,453.1_SERIE_ORIGNAL_0_0_14_46'
const ipi_proxi_maqyequip='453.2_MAQUINARIAIPO_0_0_17_14,453.1_SERIE_ORIGNAL_0_0_14_46'
const ipi_proxi_otrosequip='453.2_OTROS_EQUITOS_0_0_35_77,453.1_SERIE_ORIGNAL_0_0_14_46'
const ipi_proxi_vehiculos='453.2_VEHICULOS_TES_0_0_54_37,453.1_SERIE_ORIGNAL_0_0_14_46'
const ipi_proxi_otrostransp='453.2_OTRO_EQUIPRTE_0_0_25_29,453.1_SERIE_ORIGNAL_0_0_14_46'
const ipi_proxi_mueblesyresto='453.2_MUEBLES_CORAS_0_0_49_35,453.1_SERIE_ORIGNAL_0_0_14_46'

// UCI: Utilización de la capacidad instalada en la industria. Base 2004. Valores mensuales en porcentaje
const uci = '31.3_UNG_2004_M_18,31.3_UPAB_2004_M_35,31.3_UPT_2004_M_21,31.3_UPT_2004_M_23,31.3_UPC_2004_M_17,31.3_UEI_2004_M_22,31.3_URP_2004_M_24'
const uci_ = '31.3_UNG_2004_M_18,31.3_USPQ_2004_M_34,31.3_UCP_2004_M_20,31.3_UMNM_2004_M_27,31.3_UIMB_2004_M_33,31.3_UV_2004_M_25,31.3_UMNIA_2004_M_42'

const drawSectoresProductivos = (vl) => {
    let tg = container_h()
    let serie = vl
    let d = []
    switch(serie){
      case 'ipi_sub_alybeb':
        d=[ipi_sub_alybeb,ipi_proxi_alybeb,'Alimentos y Bebidas']
        break;
      case 'ipi_sub_alybeb_cont':
         d=[ipi_sub_alybeb_cont,ipi_proxi_alybeb,'Alimentos y Bebidas (cont.)']
         break;        
      case 'ipi_sub_tabaco':
        d=[ipi_sub_tabaco,ipi_proxi_tabaco,'Productos del tabaco']
        break;
      case 'ipi_sub_textil':
        d=[ipi_sub_textil,ipi_proxi_textil,'Productos textiles']
        break;
      case 'ipi_sub_vestycalz':
        d=[ipi_sub_vestycalz,ipi_proxi_vestycalz,'Prendas de vestir, cuero y calzado']
        break;
      case 'ipi_sub_madepapeimp':
        d=[ipi_sub_madepapeimp,ipi_proxi_madepapeimp,'Madera, papel, edición e impresión']
        break;
      case 'ipi_sub_refin':
        d=[ipi_sub_refin,ipi_proxi_refin,'Refinación del pretróleo']
        break;
      case 'ipi_sub_sustquim':
        d=[ipi_sub_sustquim,ipi_proxi_sustquim,'Sustancias y productos químicos']
        break;
      case 'ipi_sub_cauyplast':
        d=[ipi_sub_cauyplast,ipi_proxi_cauyplast,'Productos de caucho y plástico']
        break;
      case 'ipi_sub_nometalicos':
        d=[ipi_sub_nometalicos,ipi_proxi_nometalicos,'Productos minerales no metálicos']
        break;
      case 'ipi_sub_metbasicas':
        d=[ipi_sub_metbasicas,ipi_proxi_metbasicas,'Industrias metálicas básicas']
        break;
      case 'ipi_sub_metal':
        d=[ipi_sub_metal,ipi_proxi_metal,'Productos de metal']
        break;
      case 'ipi_sub_maqyequip':
        d=[ipi_sub_maqyequip,ipi_proxi_maqyequip,'Maquinaria y equipo']
        break;
      case 'ipi_sub_otrosequip':
        d=[ipi_sub_otrosequip,ipi_proxi_otrosequip,'Otros equipos, aparatos e instrumentos']
        break;  
      case 'ipi_sub_vehiculos':
        d=[ipi_sub_vehiculos,ipi_proxi_vehiculos,'Vehículos automotores, carrocerías, remolques y autopartes']
        break;      
      case 'ipi_sub_otrostransp':
        d=[ipi_sub_otrostransp,ipi_proxi_otrostransp,'Otro equipo de transporte']
        break;
      case 'ipi_sub_mueblesyresto':
        d=[ipi_sub_mueblesyresto,ipi_proxi_mueblesyresto,'Muebles y colchones, y otras industrias manufactureras']
        break;
      case 'nivelgral':
        d=[ipi_div,ipi]
            break;
      case 'uci':
        d=[uci_,uci,'UCI. Nivel General y bloques']
            break;            
    }

    if(serie==='uci'){
        Graficar(d[0],tg[2],true,'','','UCI. Nivel General y bloques (Cont.)','Como % de la capacidad total del sector. INDEC')
        Graficar(d[0],tg[3],true,'bar','anual',d[2],'Variación %')
        Graficar(d[1],tg[0],true,'','','UCI. Nivel General y bloques.','Como % de la capacidad total del sector. INDEC')
        Graficar(d[1],tg[1],true,'bar','anual',d[2],'Variación %')
      } 

    if(serie==='nivelgral'){
        Graficar(d[0],tg[2],true,'','','ïndice de Produción Industrial (IPI)','Índice Base=2004. INDEC')
        Graficar(d[0],tg[3],true,'bar','anual','ïndice de Produción Industrial (IPI)','Variación %')
        Graficar(d[1],tg[0],true,'','','ïndice de Produción Industrial (IPI)','Índice Base=2004. INDEC')
        Graficar(d[1],tg[1],true,'bar','anual','ïndice de Produción Industrial (IPI)','Variación %')
    } 
    
    if(serie!=='uci' && serie!=='nivelgral') {
        Graficar(d[1],tg[0],true,'','','IPI División y comparación con el Nivel General','Índice Base=2004. INDEC')
        Graficar(d[1],tg[1],true,'bar','anual','IPI División y comparación con el Nivel General','Variación %')
        Graficar(d[0],tg[2],true,'','','Division y Subclases','Índice Base=2004. INDEC')
        Graficar(d[0],tg[3],true,'bar','anual','Division y Subclases','Variación %')
    }

}



