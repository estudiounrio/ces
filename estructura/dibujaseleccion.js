const dt  = {
// EMAE. Índice Base 2004. Valores mensuales.
    'emae' : {
        'servicios': '11.3_AGCS_2004_M_41,11.3_P_2004_M_20,11.3_EMC_2004_M_25,11.3_IM_2004_M_25,11.3_SEGA_2004_M_48,11.3_C_2004_M_60,11.3_CMMR_2004_M_10,11.3_HR_2004_M_24,11.3_TAC_2004_M_60,11.3_IF_2004_M_25',
        'bienes':'11.3_VMASD_2004_M_23,11.3_ISOM_2004_M_39,11.3_VIPAA_2004_M_5,11.3_ISD_2004_M_26,11.3_ITC_2004_M_21,11.3_VMATC_2004_M_12',
        'emae_indices' : '143.3_NO_PR_2004_A_21,143.3_NO_PR_2004_A_31,143.3_NO_PR_2004_A_28',
        'emae_varporc' :'143.3_ICE_SERVIA_2004_A_25,143.3_ICE_SER_VM_2004_A_34,143.3_ICE_SER_VM_2004_A_31',
    },
// OFERTA Y DEMANDA GLOBAL. En millones de pesos de 2004. Valores trimestrales
    'pbi' : {
        'dem_global':'4.2_DGE_2004_T_26,4.2_MGCP_2004_T_25,4.2_DGCP_2004_T_30,4.2_DGIT_2004_T_25,4.2_VE_2004_T_21,4.2_OBJETOS_VASOS_2004_T_16_84',
        'of_global': '4.2_OGP_2004_T_17,4.2_OGI_2004_T_25'
    },

// EMPLEO. En cantidad de Personas 
    'empleo' : {
        'empleo_oede' :  '155.1_TLTAL_C_0_0_5',
        'empleo_oede_bsyss': '155.1_ISTRIARIA_C_0_0_9,155.1_ACULTURSCA_C_0_0_27,155.1_MRIA_PELEO_C_0_0_16,155.1_ETRICIDGUA_C_0_0_21,155.1_CTRUCCIION_C_0_0_12,155.1_CRCIOCIO_C_0_0_8,155.1_SICIOSIOS_C_0_0_9',
        'empleo_hac_bs_sinest' : '152.1_ACULTUREST_2009_M_47,152.1_PA_SIN_EST_2009_M_13,152.1_EOTACIOEST_2009_M_34,152.1_ISTRIASEST_2009_M_33,152.1_SNISTROEST_2009_M_40,152.1_CTRUCCIEST_2009_M_20',
        'empleo_hac_ss_sinest' : '152.1_CRCIO_REST_2009_M_29,152.1_HLES_REEST_2009_M_28,152.1_TSPORTEEST_2009_M_39,152.1_IRMEDIAEST_2009_M_33,152.1_AVIDADEEST_2009_M_56,152.1_ENANZA_EST_2009_M_17,152.1_SICIOS_EST_2009_M_32,152.1_SICIOS_EST_2009_M_50,152.1_SESPECIEST_2009_M_23',
        
    },

// EMPLEO PROVINCIAL. En cantidad de Personas. MAPA     
    'empleo_provincial' : {
        'empleo_hac_prov_sinest_pampeana' : '154.2_BOS_AIRRES_S_0_0_12,154.2_CABA_S_0_0_4,154.2_LAMPAMPA_S_0_0_8,154.2_COBAOBA_S_0_0_7,154.2_SA_FE_FE_S_0_0_8',
        'empleo_hac_prov_sinest_cuyo' : '154.2_MOZAOZA_S_0_0_7,154.2_SJUANUAN_S_0_0_8,154.2_SLUISUIS_S_0_0_8',
        'empleo_hac_prov_sinest_patagonia' : '154.2_NUENUEN_S_0_0_7,154.2_RNEGROGRO_S_0_0_9,154.2_SA_CRUZRUZ_S_0_0_10,154.2_TRA_FUEEGO_S_0_0_12,154.2_CUTBUT_S_0_0_6',
        'empleo_hac_prov_sinest_norte' : '154.2_JYJUY_S_0_0_5,154.2_LIOJAOJA_S_0_0_8,154.2_SALTA_S_0_0_5,154.2_CMARCARCA_S_0_0_9,154.2_TMANMAN_S_0_0_7',
        'empleo_hac_prov_sinest_litoral' : '154.2_CIENTESTES_S_0_0_10,154.2_FOSAOSA_S_0_0_7,154.2_EE_RIOSIOS_S_0_0_10,154.2_MONESNES_S_0_0_8,154.2_SIAGO_EERO_S_0_0_15,154.2_COACO_S_0_0_5'
        },


// EXPORTACIONES, IMPORTACIONES Y SALDO COMERCIAL. Millones de dólares. Valores mensuales 
    'comex' : {
        'expo':'75.3_IETPP_0_M_43,75.3_ITMOA_0_M_13,75.3_ITM_0_M_13,75.3_ITCE_0_M_30',
        'impo':'74.3_IIBCA_0_M_32,74.3_IIBCO_0_M_32,74.3_IIBI_0_M_36,74.3_IICL_0_M_42,74.3_IIVAP_0_M_49,74.3_IIR_0_M_23,74.3_IIPABC_0_M_50',
        'saldo':'74.3_ISC_0_M_19,74.3_IET_0_M_16,74.3_IIT_0_M_25'
    },

// IPI: IPI Divisiones y Subclases, Índice 2004 : 100    
    'ipi_obj' : {
            'ipi':'453.1_SERIE_ORIGNAL_0_0_14_46,453.1_SERIE_DESEADA_0_0_24_58,453.1_SERIE_TENDCLO_0_0_21_61',
            'ipi_div': '453.1_SERIE_ORIGNAL_0_0_14_46,453.2_ALIMENTOS_DAS_0_0_17_18,453.2_PRODUCTOS_ACO_0_0_16_81,453.2_PRODUCTOS_LES_0_0_18_32,453.2_PRENDAS_VEADO_0_0_28_88,453.2_MADERA_PAPION_0_0_30_66,453.2_REFINACIONEAR_0_0_45_82,453.2_SUSTANCIASCOS_0_0_29_82,453.2_PRODUCTOS_ICO_0_0_25_26,453.2_PRODUCTOS_COS_0_0_32_70,453.2_INDUSTRIASCAS_0_0_28_0,453.2_PRODUCTOS_TAL_0_0_15_15,453.2_MAQUINARIAIPO_0_0_17_14,453.2_OTROS_EQUITOS_0_0_35_77,453.2_VEHICULOS_TES_0_0_54_37,453.2_OTRO_EQUIPRTE_0_0_25_29,453.2_MUEBLES_CORAS_0_0_49_35',
            'ipi_sub_alybeb' : '453.2_ALIMENTOS_DAS_0_0_17_18,453.2_CARNE_VACUUNA_0_0_12_53,453.2_CARNE_AVIAIAR_0_0_11_85,453.2_FIAMBRES_EDOS_0_0_18_46,453.2_PREPARACIORES_0_0_39_24,453.2_MOLIENDA_OSAS_0_0_20_8,453.2_PRODUCTOS_EOS_0_0_17_89,453.2_MOLIENDA_CLES_0_0_17_71',
            'ipi_sub_alybeb_cont' : '453.2_ALIMENTOS_DAS_0_0_17_18,453.2_GALLETITASTAS_0_0_27_88,453.2_AZUCAR_CONATE_0_0_27_68,453.2_YERBA_TE_CAFE_0_0_13_44,453.2_GASEOSAS_ASAS_0_0_55_90,453.2_VINOINO_0_0_4_89,453.2_OTROS_PRODIOS_0_0_28_20',
        
            'ipi_sub_tabaco' : '453.2_PRODUCTOS_ACO_0_0_16_81,453.2_PREPARACIOACO_0_0_24_1,453.2_CIGARRILLOLOS_0_0_11_16',
            'ipi_sub_textil' : '453.2_PRODUCTOS_LES_0_0_18_32,453.2_PREPARACIOTIL_0_0_29_69,453.2_HILADOS_ALDON_0_0_15_97,453.2_TEJIDOS_ACLES_0_0_34_1,453.2_OTROS_PRODLES_0_0_24_67',
            'ipi_sub_vestycalz' : '453.2_PRENDAS_VEADO_0_0_28_88,453.2_PRENDAS_VETIR_0_0_14_10,453.2_CURTIDO_ARERO_0_0_23_60,453.2_CALZADOADO_0_0_7_59',
            'ipi_sub_madepapeimp' : '453.2_MADERA_PAPION_0_0_30_66,453.2_PRODUCTOS_CHO_0_0_23_95,453.2_PRODUCTOS_PEL_0_0_15_66,453.2_EDICION_IMION_0_0_17_59',
            'ipi_sub_refin' : '453.2_REFINACIONEAR_0_0_45_82,453.2_NAFTASTAS_0_0_6_13,453.2_GASOILOIL_0_0_6_78,453.2_FUELOILOIL_0_0_7_2,453.2_ASFALTOSTOS_0_0_8_16,453.2_OTROS_PRODION_0_0_26_12',
            'ipi_sub_sustquim' : '453.2_SUSTANCIASCOS_0_0_29_82,453.2_GASES_INDULES_0_0_18_56,453.2_PRODUCTOS_COS_0_0_26_42,453.2_AGROQUIMICCOS_0_0_12_6,453.2_MATERIAS_PICO_0_0_44_25,453.2_PINTURASRAS_0_0_8_67,453.2_PRODUCTOS_COS_0_0_23_90,453.2_DETERGENTELES_0_0_40_99,453.2_OTROS_PRODCOS_0_0_24_57',
            'ipi_sub_cauyplast' : '453.2_PRODUCTOS_ICO_0_0_25_26,453.2_NEUMATICOSCOS_0_0_10_63,453.2_OTROS_PRODCHO_0_0_22_35,453.2_MANUFACTURICO_0_0_21_9',
            'ipi_sub_nometalicos' : '453.2_PRODUCTOS_COS_0_0_32_70,453.2_PRODUCTOS_RIO_0_0_16_39,453.2_PRODUCTOS_ICA_0_0_26_20,453.2_CEMENTONTO_0_0_7_59,453.2_CAL_YESOESO_0_0_8_92,453.2_ARTICULOS_ESO_0_0_22_22,453.2_OTROS_PRODCOS_0_0_38_93',
            'ipi_sub_metbasicas' : '453.2_INDUSTRIASCAS_0_0_28_0,453.2_INDUSTRIA_ICA_0_0_21_100,453.2_ALUMINIO_OSOS_0_0_34_69,453.2_FUNDICION_LES_0_0_17_29',
            'ipi_sub_metal' : '453.2_PRODUCTOS_TAL_0_0_15_15,453.2_PRODUCTOS_RAL_0_0_35_79,453.2_ENVASES_MECOS_0_0_17_38,453.2_OTROS_PRODIOS_0_0_33_55',
            'ipi_sub_maqyequip' : '453.2_MAQUINARIAIPO_0_0_17_14,453.2_MAQUINARIARAL_0_0_22_43,453.2_MAQUINARIARIA_0_0_23_78,453.2_OTRA_MAQUIIAL_0_0_28_5,453.2_APARATOS_UICO_0_0_22_48',
            'ipi_sub_otrosequip' : '453.2_OTROS_EQUITOS_0_0_35_77,453.2_EQUIPOS_INCOS_0_0_70_37,453.2_EQUIPOS_ELCOS_0_0_18_68,453.2_INSTRUMENTION_0_0_38_2',
            'ipi_sub_vehiculos' : '453.2_VEHICULOS_TES_0_0_54_37,453.2_VEHICULOS_RES_0_0_21_54,453.2_CARROCERIAUES_0_0_36_15,453.2_AUTOPARTESTES_0_0_10_100',
            'ipi_sub_otrostransp' : '453.2_OTRO_EQUIPRTE_0_0_25_29,453.2_OTRO_EQUIPRTE_0_0_22_9,453.2_MOTOCICLETTAS_0_0_12_50',
            'ipi_sub_mueblesyresto' : '453.2_MUEBLES_CORAS_0_0_49_35,453.2_MUEBLES_CONES_0_0_17_98,453.2_OTRAS_INDURAS_0_0_31_41,453.2_RECLICLAMINTO_0_0_51_47',
        
            'ipi_proxi_alybeb':'453.2_ALIMENTOS_DAS_0_0_17_18,453.1_SERIE_ORIGNAL_0_0_14_46',
            'ipi_proxi_tabaco':'453.2_PRODUCTOS_ACO_0_0_16_81,453.1_SERIE_ORIGNAL_0_0_14_46',
            'ipi_proxi_textil':'453.2_PRODUCTOS_LES_0_0_18_32,453.1_SERIE_ORIGNAL_0_0_14_46',
            'ipi_proxi_vestycalz':'453.2_PRENDAS_VEADO_0_0_28_88,453.1_SERIE_ORIGNAL_0_0_14_46',
            'ipi_proxi_madepapeimp':'453.2_MADERA_PAPION_0_0_30_66,453.1_SERIE_ORIGNAL_0_0_14_46',
            'ipi_proxi_refin':'453.2_REFINACIONEAR_0_0_45_82,453.1_SERIE_ORIGNAL_0_0_14_46',
            'ipi_proxi_sustquim':'453.2_SUSTANCIASCOS_0_0_29_82,453.1_SERIE_ORIGNAL_0_0_14_46',
            'ipi_proxi_cauyplast':'453.2_PRODUCTOS_ICO_0_0_25_26,453.1_SERIE_ORIGNAL_0_0_14_46',
            'ipi_proxi_nometalicos':'453.2_PRODUCTOS_COS_0_0_32_70,453.1_SERIE_ORIGNAL_0_0_14_46',
            'ipi_proxi_metbasicas':'453.2_INDUSTRIASCAS_0_0_28_0,453.1_SERIE_ORIGNAL_0_0_14_46',
            'ipi_proxi_metal':'453.2_PRODUCTOS_TAL_0_0_15_15,453.1_SERIE_ORIGNAL_0_0_14_46',
            'ipi_proxi_maqyequip':'453.2_MAQUINARIAIPO_0_0_17_14,453.1_SERIE_ORIGNAL_0_0_14_46',
            'ipi_proxi_otrosequip':'453.2_OTROS_EQUITOS_0_0_35_77,453.1_SERIE_ORIGNAL_0_0_14_46',
            'ipi_proxi_vehiculos':'453.2_VEHICULOS_TES_0_0_54_37,453.1_SERIE_ORIGNAL_0_0_14_46',
            'ipi_proxi_otrostransp':'453.2_OTRO_EQUIPRTE_0_0_25_29,453.1_SERIE_ORIGNAL_0_0_14_46',
            'ipi_proxi_mueblesyresto':'453.2_MUEBLES_CORAS_0_0_49_35,453.1_SERIE_ORIGNAL_0_0_14_46'
        },

// INFLACIÓN
    'inflacion' : {
        'pr2' : '146.3_IALIMENNAL_DICI_M_45,146.3_IBEBIDANAL_DICI_M_39,146.3_IPRENDANAL_DICI_M_35,146.3_IEQUIPANAL_DICI_M_46,146.3_IVIVIENNAL_DICI_M_52,146.3_ITRANSPNAL_DICI_M_23',
        'pr3' : '146.3_ISALUDNAL_DICI_M_18,146.3_IRESTAUNAL_DICI_M_33,146.3_IRECREANAL_DICI_M_31,146.3_IEDUCACNAL_DICI_M_22,146.3_ICOMUNINAL_DICI_M_27,146.3_IBIENESNAL_DICI_M_36',

        'ipc_ng_reg' : '148.3_INIVELUYO_DICI_M_22,148.3_INIVELNOA_DICI_M_21,148.3_INIVELNIA_DICI_M_27,148.3_INIVELNEA_DICI_M_21,148.3_INIVELNAL_DICI_M_26,148.3_INIVELGBA_DICI_M_21,148.3_INIVELANA_DICI_M_26',
        'ipc':'173.1_ECIONALLES_DIC-_0_12,173.1_INUCLEOLEO_DIC-_0_10,173.1_RLADOSDOS_DIC-_0_9',
        'ipc_ng' : '148.3_INIVELNAL_DICI_M_26,147.3_IBIENESNAL_DICI_T_19,147.3_ISERVICNAL_DICI_T_22',

        'canasta' : '150.1_CSTA_BARIA_0_D_26,150.1_CSTA_BATAL_0_D_20',
        'indigencia' : '150.1_LA_INDICIA_0_D_16,150.1_LA_POBREZA_0_D_13',

        // PRECIOS MAYORISTAS
        'sipim' : '450.1_NIVEL_GENERAL_0_0_13_92,448.1_NIVEL_GENERAL_0_0_13_46,449.1_NIVEL_GENERAL_0_0_13_97'
    },


    'uci' : {
        'uci' : '31.3_UNG_2004_M_18,31.3_UPAB_2004_M_35,31.3_UPT_2004_M_21,31.3_UPT_2004_M_23,31.3_UPC_2004_M_17,31.3_UEI_2004_M_22,31.3_URP_2004_M_24',
        'uci_' : '31.3_UNG_2004_M_18,31.3_USPQ_2004_M_34,31.3_UCP_2004_M_20,31.3_UMNM_2004_M_27,31.3_UIMB_2004_M_33,31.3_UV_2004_M_25,31.3_UMNIA_2004_M_42'
    },

    'ipi' : {
        'ipi' :'453.1_SERIE_ORIGNAL_0_0_14_46,453.1_SERIE_DESEADA_0_0_24_58,453.1_SERIE_TENDCLO_0_0_21_61',
        'ipi_div' : '453.1_SERIE_ORIGNAL_0_0_14_46,453.2_ALIMENTOS_DAS_0_0_17_18,453.2_PRODUCTOS_ACO_0_0_16_81,453.2_PRODUCTOS_LES_0_0_18_32,453.2_PRENDAS_VEADO_0_0_28_88,453.2_MADERA_PAPION_0_0_30_66',
        'ipi_div_':'453.1_SERIE_ORIGNAL_0_0_14_46,453.2_REFINACIONEAR_0_0_45_82,453.2_SUSTANCIASCOS_0_0_29_82,453.2_PRODUCTOS_ICO_0_0_25_26,453.2_PRODUCTOS_COS_0_0_32_70,453.2_MUEBLES_CORAS_0_0_49_35',
        'ipi_div__' : '453.1_SERIE_ORIGNAL_0_0_14_46,453.2_INDUSTRIASCAS_0_0_28_0,453.2_PRODUCTOS_TAL_0_0_15_15,453.2_MAQUINARIAIPO_0_0_17_14,453.2_OTROS_EQUITOS_0_0_35_77,453.2_VEHICULOS_TES_0_0_54_37,453.2_OTRO_EQUIPRTE_0_0_25_29'

    }

}

const dibujaSeleccion = (seleccion) => {
    
    let tg = container_h()
   
    if(seleccion===' Actividad Económica') {
        Graficar(dt.emae.emae_indices,tg[0],false,'','','Estimador Mensual de la Actividad (EMAE)','Índice Base=2004. INDEC')
        Graficar(dt.emae.emae_indices,tg[1],false,'','anualymensual','Estimador Mensual de la Actividad (EMAE)','Variación %')
        Graficar(dt.emae.bienes,tg[2],true,'','','EMAE. Sectores productores de Bienes','Índice Base=2004. INDEC')
        Graficar(dt.emae.bienes,tg[3],true,'bar','anual','EMAE. Sectores productores de Bienes','Variación %')
        Graficar(dt.emae.servicios,tg[4],true,'','','EMAE. Sectores productores de Servicios','Índice Base=2004. INDEC')
        Graficar(dt.emae.servicios,tg[5],true,'bar','anual','EMAE. Sectores productores de Servicios','Variación %')
    }

    if(seleccion===' Demanda y Oferta Global') {
        Graficar(dt.pbi.of_global,tg[0],true,'area','','Oferta Global a precios de comprador','En millones de pesos del 2004. INDEC')
        Graficar(dt.pbi.of_global,tg[1],true,'','anualymensual','Oferta Global a precios de comprador','Variación %')
        Graficar(dt.pbi.dem_global,tg[2],true,'area','','Demanda Global a precios de comprador','En millones de pesos del 2004. INDEC')
        Graficar(dt.pbi.dem_global,tg[3],true,'','anualymensual','Demanda Global a precios de comprador','Variación %')
      }

    if(seleccion===' Industria Manufacturera'){
        Graficar(dt.ipi.ipi,tg[0],true,'','','ïndice de Produción Industrial (IPI)','Índice Base=2004. INDEC')
        Graficar(dt.ipi.ipi,tg[1],true,'bar','anual','ïndice de Produción Industrial (IPI)','Variación %')
        Graficar(dt.ipi.ipi_div,tg[2],true,'','','ïndice de Produción Industrial (IPI). Por divisiones','Índice Base=2004. INDEC')
        Graficar(dt.ipi.ipi_div,tg[3],true,'bar','anual','ïndice de Produción Industrial (IPI). Por Divisiones','Variación %')
        Graficar(dt.ipi.ipi_div_,tg[4],true,'','','ïndice de Produción Industrial (IPI). Por divisiones (Cont)','Índice Base=2004. INDEC')
        Graficar(dt.ipi.ipi_div_,tg[5],true,'bar','anual','ïndice de Produción Industrial (IPI). Por Divisiones','Variación %')
        Graficar(dt.ipi.ipi_div__,tg[6],true,'','','ïndice de Produción Industrial (IPI). Por divisiones (Cont)','Índice Base=2004. INDEC')
        Graficar(dt.ipi.ipi_div__,tg[7],true,'bar','anual','ïndice de Produción Industrial (IPI). Por Divisiones','Variación %')


    }

    if(seleccion===' Empleo Formal') {
        Graficar(dt.empleo.empleo_oede,tg[0],true,'','','Empleo Asalariado Privado Total','Cantidad de personas. OEDE. Ministerio de Trabajo de la Nación')
        Graficar(dt.empleo.empleo_oede,tg[1],true,'','anualymensual','Empleo Asalariado Privado Total','Variación %')
        Graficar(dt.empleo.empleo_oede_bsyss,tg[2],true,'area','','Empleo Asalariado Privado. Por Sectores','Cantidad de personas. OEDE. Ministerio de Trabajo de la Nación')
        Graficar(dt.empleo.empleo_oede_bsyss,tg[3],true,'bar','anual','Empleo Asalariado Privado. Por Sectores','Variación %')
        Graficar(dt.empleo.empleo_hac_bs_sinest,tg[4],true,'line','','Empleo Asalariado Privado. Sectores de Bienes.','Cantidad de personas. Ministerio de Hacienda')
        Graficar(dt.empleo.empleo_hac_bs_sinest,tg[5],true,'bar','anual','Variación respecto al mismo mes del año anterior','Variación %')
        Graficar(dt.empleo.empleo_hac_ss_sinest,tg[6],true,'line','','Empleo Asalariado Privado. Sectores de Servicios.','Cantidad de personas. Ministerio de Hacienda')
        Graficar(dt.empleo.empleo_hac_ss_sinest,tg[7],true,'bar','anual','Variación respecto al mismo mes del año anterior','Variación %')
    }

    if(seleccion===' Empleo Provincial') {
 
        MapaEmpleo(dt.empleo_provincial.empleo_hac_prov_sinest_pampeana,tg[0],true,'','Región Pampeana. En miles de personas','pampeana')
        Graficar(dt.empleo_provincial.empleo_hac_prov_sinest_pampeana,tg[1],true,'','anual','Región Pampeana. Empleo Asalariado Privado','Variación %')
        
        MapaEmpleo(dt.empleo_provincial.empleo_hac_prov_sinest_patagonia,tg[2],true,'','Región Patagónica. En miles de personas','patagonica')
        Graficar(dt.empleo_provincial.empleo_hac_prov_sinest_patagonia,tg[3],true,'bar','anual','Región Patagónica. Empleo Asalariado Privado','Variación %')


        MapaEmpleo(dt.empleo_provincial.empleo_hac_prov_sinest_litoral,tg[4],true,'','Región Litoral. En miles de personas','litoral')
        Graficar(dt.empleo_provincial.empleo_hac_prov_sinest_litoral,tg[5],true,'bar','anual','Región Litoral. Empleo Asalariado Privado','Variación %')

        MapaEmpleo(dt.empleo_provincial.empleo_hac_prov_sinest_cuyo,tg[6],true,'','Región Cuyo. En miles de personas','cuyo')
        Graficar(dt.empleo_provincial.empleo_hac_prov_sinest_cuyo,tg[7],true,'bar','anual','Región Cuyo. Empleo Asalariado Privado','Variación %')
        

        MapaEmpleo(dt.empleo_provincial.empleo_hac_prov_sinest_norte,tg[8],true,'','Región Norte. En miles de personas','norte')
        Graficar(dt.empleo_provincial.empleo_hac_prov_sinest_norte,tg[9],true,'bar','anual','Región Norte. Empleo Asalariado Privado','Variación %')
    }
    
    if(seleccion===' Comercio Exterior') {
        Graficar(dt.comex.saldo,tg[0],true,'','','Intercambio Comercial Argentino (ICA)','En millones de dólares. INDEC')
        Graficar(dt.comex.saldo,tg[1],true,'','anual','Intercambio Comercial Argentino (ICA)','Variación %')
        Graficar(dt.comex.expo,tg[2],true,'area','','Exportaciones Totales. Grandes Rubros','En millones de dólares. INDEC')
        Graficar(dt.comex.expo,tg[3],true,'bar','anual','Exportaciones Totales. Grandes Rubros','Variación %')
        Graficar(dt.comex.impo,tg[4],true,'area','','Importaciones Totales. Usos Económicos','En millones de dólares. INDEC')
        Graficar(dt.comex.impo,tg[5],true,'bar','anual','Importaciones Totales. Usos Económicos','Variación %')
    }

    if(seleccion===' Precios Minoristas') {
        Graficar(dt.inflacion.ipc_ng,tg[0],true,'','','IPC-Nacional. Nivel General','Índice Base= 2016. INDEC')
        Graficar(dt.inflacion.ipc_ng,tg[1],true,'','anualymensual','IPC-Nacional. Nivel General','Variación %')
        // Graficar(dt.inflacion.ipc,tg[2],false,'','','IPC-Nacional. Nivel General','Variación % menual. INDEC')
        Graficar(dt.inflacion.pr2,tg[2],true,'','','IPC-Nacional. Nivel General. Divisiones','Índice Base= 2016. INDEC')
        Graficar(dt.inflacion.pr2,tg[3],true,'','anualymensual','IPC-Nacional. Nivel General. Divisiones','Variación %')
        Graficar(dt.inflacion.pr3,tg[4],true,'','','IPC-Nacional. Nivel General. Divisiones (Cont.)','Índice Base= 2016. INDEC')
        Graficar(dt.inflacion.pr3,tg[5],true,'','anualymensual','IPC-Nacional. Nivel General. Divisiones (Cont.)','Variación %')
    }

    if(seleccion===' Canasta Básica') {
        Graficar(dt.inflacion.canasta,tg[0],false,'','','Canasta Básica','Pesos corrientes. INDEC')
        Graficar(dt.inflacion.canasta,tg[1],false,'','anualymensual','Canasta Básica','Variación %')
        Graficar(dt.inflacion.indigencia,tg[2],false,'','','Pobreza e Indigencia','Pesos corrientes. INDEC')
        Graficar(dt.inflacion.indigencia,tg[3],false,'','anualymensual','Pobreza e Indigencia','Variación %')
   }

    if(seleccion===' Brechas Tecnológicas') {
        GraficarJson('comex','totales',tg[0],true,'','','Comercio Exterior Argentino','En millones de dólares')
        GraficarJson('comex','saldo comercial',tg[1],true,'column','','Saldo comercial según su Contenido Tecnológico','En millones de dólares')
        GraficarJson('comex','exportaciones',tg[2],true,'area','','Exportaciones según su Contenido Tecnológico','En millones de dólares')
        GraficarJson('comex','importaciones',tg[3],true,'area','','Importaciones según su Contenido Tecnológico','En millones de dólares')
    }

    if(seleccion===' Capacidad Instalada') {
        Graficar(dt.uci.uci,tg[0],true,'','','UCI. Nivel General y bloques.','Como % de la capacidad total del sector. INDEC')
        Graficar(dt.uci.uci,tg[1],true,'bar','anual','UCI. Nivel General y bloques','Variación %')
        Graficar(dt.uci.uci_,tg[2],true,'','','UCI. Nivel General y bloques (Cont.)','Como % de la capacidad total del sector. INDEC')
        Graficar(dt.uci.uci_,tg[3],true,'bar','anual','UCI. Nivel General y bloques (Cont.)','Variación %')
        // descr(seleccion)
    }

    if(seleccion===' Precios Mayoristas') {
        Graficar(dt.inflacion.sipim,tg[0],false,'','','Sistema de Índices de Precios Mayoristas','Índice Base= Dic 2015. INDEC. Nota: el celeste es el Indice de precios básicos del productor (IPP)')
        Graficar(dt.inflacion.sipim,tg[1],false,'','anualymensual','Sistema de Índices de Precios Mayoristas','Variación %')
    }

}

document.getElementById('warn').addEventListener('click', function(e){
    document.getElementById('nav-contenedor').innerHTML = ''
    borr()
    const el = document.getElementById('warn-contain') 
    const fill = () => {el.innerHTML = `
       <div class="alert alert-danger w-75" role="alert">
        <p>No tiene suficientes permisos para acceder a esta sección.</p>
        <p>La sección a la que está tratando de acceder es exclusiva para suscriptores y administradores.</p>
        <p>Comuniquese con el proyecto para acceder a más información.
        <a class="text-muted" href="https://forms.gle/WUnaZoehY2benBrH6" target="_blank"><i class="info bi bi-info-circle"></i></a>
        </p>
        <hr>
        <button id="close" type="button" class="btn btn-danger btn-sm">Cerrar</button>                 
       </div>     
    ` 
   }
 
   const close = (el) => { document.getElementById('close').addEventListener('click', function(e){
    el.innerHTML= ''
      })
   }

   fill()
   close(el)
   
})


// const dc = {
//     'uci' : `La utilización de la capacidad instalada mide el % de bla bla bla del bla bla bla en el parrafo
//     La utilización de la capacidad instalada mide el % de bla bla bla del bla bla bla en el parrafo
//     La utilización de la capacidad instalada mide el % de bla bla bla del bla bla bla en el parrafo
//     La utilización de la capacidad instalada mide el % de bla bla bla del bla bla bla en el parrafo
//     La utilización de la capacidad instalada mide el % de bla bla bla del bla bla bla en el parrafo
//     La utilización de la capacidad instalada mide el % de bla bla bla del bla bla bla en el parrafo
//     `
// }

// const descr = (el) => {
//     const elementP = document.getElementById('descripcion')
   
//     if(el===' Capacidad Instalada') { 
//         elementP.innerHTML = dc.uci
    
//     }

// }

