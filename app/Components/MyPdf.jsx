import React from 'react'
import {PDFViewer,Text,Page,Document,View} from '@react-pdf/renderer'


const Pdf = ({datosAlumno,selectedItems}) => (
   <PDFViewer style={{height:'90vh',width:'90vw'}}>
      <Document>
         <Page>
            {datosAlumno.map((dato) => 
            <View key={dato.N_DNI_ALUMNO}>
            <Text>{dato.NOMBRE}</Text>
               <Text>{dato.APELLIDO}</Text>
               <Text>{dato.N_DNI_ALUMNO}</Text>
               <Text>asdfasdfasdf</Text>
            </View>
            )}
         </Page>
      </Document>
   </PDFViewer>
)

export default Pdf
