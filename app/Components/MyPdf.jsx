import React from 'react'
import {PDFViewer,Text,Page,Document,View,Font,StyleSheet} from '@react-pdf/renderer'

import {splitDate} from './dateHandler.js'

const styles = StyleSheet.create ({
   container:{
      display:'flex',
      height:'50vh',
      flexDirection:'column',
   },
   body: {
      margin:'auto',
      marginTop:12,
      height: '44vh',
      width:'95vw',
   },
   header:{
      height:'3vh',
      width:'95vw',
      border: 1,
   },
   contentBody:{
      height:'44vh',
      width:'95vw',
      flexDirection:'row',
      justifyContent:'space-between',
      textAlign:'center',
      flexWrap:'wrap',
      border: 1,
      padding:2,
   },
   marginTop:{
      flexDirection:'row',
      justifyContent:'space-between',
      textAlign:'center',
      flexWrap:'wrap',
      borderTop: 1,
   },
   marginTop2:{
      flexDirection:'column',
      justifyContent:'flex-start',
      textAlign:'left',
   },
   headerText1:{
      fontSize:11,
      margin:'auto',
   },
   headertText2:{
      fontSize:8,
      margin:'auto',
   },
   contentBodyText1:{
      margin:1,
      border:0.5,
      fontSize:9,
   },
   contentBodyText2:{
      margin:1,
      fontSize:7,
   },
   footer:{
      height:'4vh',
      textAlign:'center',
   }
})

const Pdf = ({datosAlumno,selectedItems}) => (
   <PDFViewer style={{height:'90vh',width:'90vw'}}>
      <Document
            loading
      >
         <Page>
            {datosAlumno.map((dato) => 
            <View key={dato.N_DNI_ALUMNO} style={styles.container}>
               <View style={styles.body}>
                  <View style={styles.header}>
                     <Text style={styles.headerText1}>RATIFICACIÓN INSCRIPCÍON PARA CICLO LECTIVO 2022</Text>
                     <Text style={styles.headertText2}>ESCUELA PÚBLICA AUTOGESTIONADA Nº 9 "DR. HORACIO DE LA MOTA"</Text>
                  </View>
                  <View style={styles.contentBody}>
                     <Text style={[styles.contentBodyText1,{width:'30vw'}]}>Apellido/s</Text>
                     <Text style={[styles.contentBodyText1,{width:'30vw'}]}>Nombre/s</Text>
                     <Text style={[styles.contentBodyText1,{width:'30vw'}]}>Legajo Nº</Text>
                     <Text style={[styles.contentBodyText1,{width:'30vw'}]}>{selectedItems[0] === 'APELLIDO' ? dato.APELLIDO : ''}</Text>
                     <Text style={[styles.contentBodyText1,{width:'30vw'}]}>{selectedItems[1] === 'NOMBRE' ? dato.NOMBRE : ''}</Text>
                     <Text style={[styles.contentBodyText1,{width:'30vw'}]}>{selectedItems[2] === 'NRO_LEGAJO' ? dato.NRO_LEGAJO : ''}</Text>
                     <View style={styles.marginTop}>
                        <Text style={[styles.contentBodyText1,{width:'20vw'}]}>Grado:</Text>
                        <Text style={[styles.contentBodyText1,{width:'20vw'}]}>{selectedItems[3] === 'GRADO' ? dato.GRADO : ''}</Text>
                        <Text style={[styles.contentBodyText1,{width:'20vw'}]}>Agrupamiento:</Text>
                        <Text style={[styles.contentBodyText1,{width:'20vw'}]}>{selectedItems[4] === 'DENOMINACION' ? dato.DENOMINACION : ''}</Text>
                        <View style={styles.marginTop}>
                           <Text style={[styles.contentBodyText1,{width:'15vw'}]}>Nacido en:</Text>
                           <Text style={[styles.contentBodyText1,{width:'15vw'}]}>{selectedItems[5] === 'LUGAR_NACIMIENTO' ? dato.LUGAR_NACIMIENTO : ''}</Text>
                           <Text style={[styles.contentBodyText1,{width:'15vw'}]}>Departamento:</Text>
                           <Text style={[styles.contentBodyText1,{width:'15vw'}]}></Text>
                           <Text style={[styles.contentBodyText1,{width:'15vw'}]}>Provincia:</Text>
                           <Text style={[styles.contentBodyText1,{width:'15vw'}]}>{selectedItems[6] === 'PROVINCIA' ? dato.PROVINCIA : ''}</Text>
                           <Text style={[styles.contentBodyText1,{width:'11vw'}]}>El día:</Text>
                           <Text style={[styles.contentBodyText1,{width:'11vw'}]}>{selectedItems[7] === 'FECHA_NACIMIENTO' ? splitDate(dato.FECHA_NACIMIENTO,0) : ''}</Text>
                           <Text style={[styles.contentBodyText1,{width:'11vw'}]}>Mes:</Text>
                           <Text style={[styles.contentBodyText1,{width:'11vw'}]}>{selectedItems[7] === 'FECHA_NACIMIENTO' ? splitDate(dato.FECHA_NACIMIENTO,1) : ''}</Text>
                           <Text style={[styles.contentBodyText1,{width:'11vw'}]}>Año:</Text>
                           <Text style={[styles.contentBodyText1,{width:'11vw'}]}>{selectedItems[7] === 'FECHA_NACIMIENTO' ? splitDate(dato.FECHA_NACIMIENTO,2) : ''}</Text>
                           <Text style={[styles.contentBodyText1,{width:'11vw'}]}>Edad:</Text>
                           <Text style={[styles.contentBodyText1,{width:'11vw'}]}>{selectedItems[7] === 'FECHA_NACIMIENTO' ? dato.FECHA_NACIMIENTO : ''}</Text>
                           <Text style={[styles.contentBodyText1,{width:'15vw'}]}>Direccion: Calle</Text>
                           <Text style={[styles.contentBodyText1,{width:'55vw'}]}>{selectedItems[8] === 'CALLE' ? dato.CALLE : ''}</Text>
                           <Text style={[styles.contentBodyText1,{width:'10vw'}]}>Nº:</Text>
                           <Text style={[styles.contentBodyText1,{width:'10vw'}]}>{selectedItems[9] === 'NRO' ? dato.NRO : ''}</Text>
                           <Text style={[styles.contentBodyText1,{width:'10vw'}]}>Barrio:</Text>
                           <Text style={[styles.contentBodyText1,{width:'40vw'}]}>{selectedItems[10] === 'BARRIO' ? dato.BARRIO : ''}</Text>
                           <Text style={[styles.contentBodyText1,{width:'10vw'}]}>Manzana:</Text>
                           <Text style={[styles.contentBodyText1,{width:'10vw'}]}></Text>
                           <Text style={[styles.contentBodyText1,{width:'10vw'}]}>Casa Nº:</Text>
                           <Text style={[styles.contentBodyText1,{width:'10vw'}]}></Text>
                           <Text style={[styles.contentBodyText1,{width:'9vw'}]}>Localidad</Text>
                           <Text style={[styles.contentBodyText1,{width:'15vw'}]}>{selectedItems[13] === 'LOCALIDAD' ? dato.LOCALIDAD : ''}</Text>
                           <Text style={[styles.contentBodyText1,{width:'13vw'}]}>Telefonos: Fijo:</Text>
                           <Text style={[styles.contentBodyText1,{width:'20vw'}]}>{selectedItems[14] === 'TEL_FIJO' ? dato.TEL_FIJO : ''}</Text>
                           <Text style={[styles.contentBodyText1,{width:'8vw'}]}>Celular:</Text>
                           <Text style={[styles.contentBodyText1,{width:'25vw'}]}>{selectedItems[15] === 'TEL_CELULAR' ? dato.TEL_CELULAR : ''}</Text>
                           <View style={[styles.marginTop]}>
                              <Text style={[styles.contentBodyText1,{width:'25vw'}]}>Nombre y Apellido del Tutor:</Text>
                              <Text style={[styles.contentBodyText1,{width:'65vw'}]}>{selectedItems[16] === 'NOMBRE_TUTOR' ? `${dato.NOMBRE_TUTOR} ${dato.APELLIDO_TUTOR}` : ''}</Text>
                              <Text style={[styles.contentBodyText1,{width:'25vw'}]}>CUIL:</Text>
                              <Text style={[styles.contentBodyText1,{width:'65vw'}]}>{selectedItems[18] === 'DNI_TUTOR' ? dato.DNI_TUTOR : ''}</Text>
                              <Text style={[styles.contentBodyText1,{width:'25vw'}]}>Relacion de Parentesco:</Text>
                              <Text style={[styles.contentBodyText1,{width:'65vw'}]}>{selectedItems[19] === 'RELACION_TUTOR' ? dato.RELACION_TUTOR : ''}</Text>
                              <Text style={[styles.contentBodyText1,{width:'25vw'}]}>Firma:</Text>
                              <Text style={[styles.contentBodyText1,{width:'65vw'}]}></Text>
                              <Text style={[styles.contentBodyText1,{width:'25vw',marginTop:10}]}>Nombre y Apellido del Tutor:</Text>
                              <Text style={[styles.contentBodyText1,{width:'65vw',marginTop:10}]}></Text>
                              <Text style={[styles.contentBodyText1,{width:'25vw'}]}>CUIL:</Text>
                              <Text style={[styles.contentBodyText1,{width:'65vw'}]}></Text>
                              <Text style={[styles.contentBodyText1,{width:'25vw'}]}>Relacion de Parentesco:</Text>
                              <Text style={[styles.contentBodyText1,{width:'65vw'}]}></Text>
                              <Text style={[styles.contentBodyText1,{width:'25vw'}]}>Firma:</Text>
                              <Text style={[styles.contentBodyText1,{width:'65vw'}]}></Text>
                              <View style={styles.marginTop2}>
                                 <Text style={styles.contentBodyText2}>Adjuntar</Text>
                                 <Text style={styles.contentBodyText2}>Fotocopia de Libreta Salud con Apto Fisico con control medico acorde a la edad.</Text>
                                 <Text style={styles.contentBodyText2}>Fotocoia de Control Bucodental (en el caso de que figure en el control médico no es necesario el certificado)</Text>
                                 <Text style={styles.contentBodyText2}>Fotocopia de Vacunas Completas</Text>
                                 <Text style={styles.contentBodyText2}>Fotocopia de DNI actualizado del Alumno y Tutor</Text>
                                 <Text style={styles.contentBodyText2}>Fotocopia de CUIL del Alumno y Tutor</Text>
                                 <Text style={styles.contentBodyText2}>(Traer todo en un folio)</Text>
                                 <Text style={styles.contentBodyText2}>En mi carácter de Tutor del Alumno................................................................................................. DNI..................................................................... me comprometo a favorecer el cumplimiento, del "Acuerdo Institucional de Convivenvia" del Establecimiento.</Text>
                                 <View style={styles.footer}>
                                    <Text style={[styles.contentBodyText2,{paddingTop:40}]}>Firma:....................................................................... Aclaración:............................................................................................. DNI:..................................................</Text>
                                 </View>
                              </View>
                           </View>
                        </View>
                     </View>
                  </View>
               </View>
            </View>
            )}
         </Page>
      </Document>
   </PDFViewer>
)
export default Pdf
