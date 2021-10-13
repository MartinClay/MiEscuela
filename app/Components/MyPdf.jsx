import React from 'react'
import {PDFViewer,Text,Page,Document,View,Font} from '@react-pdf/renderer'


import RobotoFont from './Assets/Fonts/Roboto/Roboto-Regular.ttf'

Font.register({family: 'Roboto-Regular',src:RobotoFont})

const styles = StyleSheet.create ({
   container:{
      display:'flex',
      height:'100vh',
      width:'100vw',
      flexDirection:'column',
      fontFamily: 'Roboto-Regular',
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
      <Document>
         <Page>
            {datosAlumno.map((dato) => 
               <View style={styles.container}>
                  <View style={styles.body}>
                     <View style={styles.header}>
                        <Text style={styles.headerText1}>RATIFICACIÓN INSCRIPCÍON PARA CICLO LECTIVO 2022</Text>
                        <Text style={styles.headertText2}>ESCUELA PÚBLICA AUTOGESTIONADA Nº 9 "DR. HORACIO DE LA MOTA"</Text>
                     </View>
                     <View style={styles.contentBody}>
                        <Text style={[styles.contentBodyText1,{width:'30vw'}]}>Apellido/s</Text>
                        <Text style={[styles.contentBodyText1,{width:'30vw'}]}>Nombre/s</Text>
                        <Text style={[styles.contentBodyText1,{width:'30vw'}]}>Legajo Nº</Text>
                        <Text style={[styles.contentBodyText1,{width:'30vw'}]}>Variable Apellido/s</Text>
                        <Text style={[styles.contentBodyText1,{width:'30vw'}]}>Varialbe Nombre/s</Text>
                        <Text style={[styles.contentBodyText1,{width:'30vw'}]}>Variable Legajo Nº</Text>
                        <View style={styles.marginTop}>
                           <Text style={[styles.contentBodyText1,{width:'20vw'}]}>Grado:</Text>
                           <Text style={[styles.contentBodyText1,{width:'20vw'}]}>6º</Text>
                           <Text style={[styles.contentBodyText1,{width:'20vw'}]}>Agrupamiento:</Text>
                           <Text style={[styles.contentBodyText1,{width:'20vw'}]}>Bichitos de Luz</Text>
                           <View style={styles.marginTop}>
                              <Text style={[styles.contentBodyText1,{width:'15vw'}]}>Nacido en:</Text>
                              <Text style={[styles.contentBodyText1,{width:'15vw'}]}>V_nacido_en</Text>
                              <Text style={[styles.contentBodyText1,{width:'15vw'}]}>Departamento:</Text>
                              <Text style={[styles.contentBodyText1,{width:'15vw'}]}>V_Departamento</Text>
                              <Text style={[styles.contentBodyText1,{width:'15vw'}]}>Provincia:</Text>
                              <Text style={[styles.contentBodyText1,{width:'15vw'}]}>Variable Provincia</Text>
                              <Text style={[styles.contentBodyText1,{width:'11vw'}]}>El día:</Text>
                              <Text style={[styles.contentBodyText1,{width:'11vw'}]}>V_Dia</Text>
                              <Text style={[styles.contentBodyText1,{width:'11vw'}]}>Mes:</Text>
                              <Text style={[styles.contentBodyText1,{width:'11vw'}]}>V_Mes</Text>
                              <Text style={[styles.contentBodyText1,{width:'11vw'}]}>Año:</Text>
                              <Text style={[styles.contentBodyText1,{width:'11vw'}]}>V_Año</Text>
                              <Text style={[styles.contentBodyText1,{width:'11vw'}]}>Edad:</Text>
                              <Text style={[styles.contentBodyText1,{width:'11vw'}]}>V_Edad</Text>
                              <Text style={[styles.contentBodyText1,{width:'15vw'}]}>Direccion: Calle</Text>
                              <Text style={[styles.contentBodyText1,{width:'55vw'}]}>V_Calle</Text>
                              <Text style={[styles.contentBodyText1,{width:'10vw'}]}>Nº:</Text>
                              <Text style={[styles.contentBodyText1,{width:'10vw'}]}>V_Nº</Text>
                              <Text style={[styles.contentBodyText1,{width:'10vw'}]}>Barrio:</Text>
                              <Text style={[styles.contentBodyText1,{width:'40vw'}]}>V_Barrio</Text>
                              <Text style={[styles.contentBodyText1,{width:'10vw'}]}>Manzana:</Text>
                              <Text style={[styles.contentBodyText1,{width:'10vw'}]}>V_Manzana</Text>
                              <Text style={[styles.contentBodyText1,{width:'10vw'}]}>Casa Nº:</Text>
                              <Text style={[styles.contentBodyText1,{width:'10vw'}]}>V_Casa_Nº</Text>
                              <Text style={[styles.contentBodyText1,{width:'9vw'}]}>Localidad</Text>
                              <Text style={[styles.contentBodyText1,{width:'15vw'}]}>V_Localidad</Text>
                              <Text style={[styles.contentBodyText1,{width:'13vw'}]}>Telefonos: Fijo:</Text>
                              <Text style={[styles.contentBodyText1,{width:'20vw'}]}>V_TEL_FIJO</Text>
                              <Text style={[styles.contentBodyText1,{width:'8vw'}]}>Celular:</Text>
                              <Text style={[styles.contentBodyText1,{width:'25vw'}]}>V_Celular</Text>
                              <View style={[styles.marginTop]}>
                              <Text style={[styles.contentBodyText1,{width:'25vw'}]}>Nombre y Apellido del Tutor:</Text>
                              <Text style={[styles.contentBodyText1,{width:'65vw'}]}>V_N_A_Tutor</Text>
                              <Text style={[styles.contentBodyText1,{width:'25vw'}]}>CUIL:</Text>
                              <Text style={[styles.contentBodyText1,{width:'65vw'}]}>V_CUIL_Tutor</Text>
                              <Text style={[styles.contentBodyText1,{width:'25vw'}]}>Relacion de Parentesco:</Text>
                              <Text style={[styles.contentBodyText1,{width:'65vw'}]}>V_RELACION</Text>
                              <Text style={[styles.contentBodyText1,{width:'25vw'}]}>Firma:</Text>
                              <Text style={[styles.contentBodyText1,{width:'65vw'}]}>V_Firma</Text>
                                 <Text style={[styles.contentBodyText1,{width:'25vw',marginTop:10}]}>Nombre y Apellido del Tutor:</Text>
                                 <Text style={[styles.contentBodyText1,{width:'65vw',marginTop:10}]}>V_N_A_Tutor</Text>
                              <Text style={[styles.contentBodyText1,{width:'25vw'}]}>CUIL:</Text>
                              <Text style={[styles.contentBodyText1,{width:'65vw'}]}>V_CUIL_Tutor</Text>
                              <Text style={[styles.contentBodyText1,{width:'25vw'}]}>Relacion de Parentesco:</Text>
                              <Text style={[styles.contentBodyText1,{width:'65vw'}]}>V_RELACION</Text>
                              <Text style={[styles.contentBodyText1,{width:'25vw'}]}>Firma:</Text>
                              <Text style={[styles.contentBodyText1,{width:'65vw'}]}>V_Firma</Text>
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
                                    <Text style={[styles.contentBodyText2,{paddingTop:20}]}>Firma:....................................................................... Aclaración:............................................................................................. DNI:..................................................</Text>
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
