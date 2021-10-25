import {ageCalculate,splitDate,ageCalculate3006} from './dateHandler'

export const handleLastName = (
   event,
   datosAlumno,
   setIsFiltredStage1,
   setFiltredDatosAlumnoStage1,
   isFiltredStage1,
   filtredDatosAlumnoStage1,
   setFiltredDatosAlumnoStage2,
   setIsFiltredStage2
)=> {
   let newArray = []
   if(event.target.value.length >= 3 && isFiltredStage1 === true){
      newArray = filtredDatosAlumnoStage1.filter((dataFilter) => dataFilter.APELLIDO.indexOf(event.target.value.toUpperCase()) > -1)
      setIsFiltredStage2(true)
      setFiltredDatosAlumnoStage2(newArray)
   }
   if(event.target.value.length >= 3 && isFiltredStage1 === false){
      newArray = datosAlumno.filter((dataFilter) => dataFilter.APELLIDO.indexOf(event.target.value.toUpperCase()) > -1)
      setIsFiltredStage2(true)
      setFiltredDatosAlumnoStage2(newArray)
   }
   if(event.target.value.length === 0){
      setFiltredDatosAlumnoStage2([])
      setIsFiltredStage2(false)
   }
}

export const handleFirstName = (
   event,
   datosAlumno,
   setIsFiltredStage1,
   setFiltredDatosAlumnoStage1,
   isFiltredStage1,
   filtredDatosAlumnoStage1,
   setFiltredDatosAlumnoStage2,
   setIsFiltredStage2
)=> {
   let newArray = []
   if(event.target.value.length >= 3 && isFiltredStage1 === true){
      newArray = filtredDatosAlumnoStage1.filter((dataFilter) => dataFilter.NOMBRE.indexOf(event.target.value.toUpperCase()) > -1)
      setIsFiltredStage2(true)
      setFiltredDatosAlumnoStage2(newArray)
   }
   if(event.target.value.length >= 3 && isFiltredStage1 === false){
      newArray = datosAlumno.filter((dataFilter) => dataFilter.NOMBRE.indexOf(event.target.value.toUpperCase()) > -1)
      setIsFiltredStage2(true)
      setFiltredDatosAlumnoStage2(newArray)
   }
   if(event.target.value.length === 0){
      setFiltredDatosAlumnoStage2([])
      setIsFiltredStage2(false)
   }
}

export const handleNivelChange =(event,setNivel) => {
   setNivel(event.nativeEvent.target.value)
}

export const handleGradoChange =(event,setGrado) => {
   setGrado(event.nativeEvent.target.value)
}

export const handleDivisionChange =(event,setDivision) => {
   setDivision(event.nativeEvent.target.value)
}

export const handleEdad = (
   event,
   datosAlumno,
   setIsFiltredStage1,
   setFiltredDatosAlumnoStage1,
   isFiltredStage1,
   filtredDatosAlumnoStage1,
   setFiltredDatosAlumnoStage2,
   setIsFiltredStage2
)=> {
   let newArray = []
   if(event.target.value.length >= 1 && isFiltredStage1 === true){
      console.log('asdf')
      newArray = filtredDatosAlumnoStage1.filter((dataFilter) => ageCalculate(splitDate(dataFilter.FECHA_NACIMIENTO,3)) == parseInt(event.target.value))
      setIsFiltredStage2(true)
      setFiltredDatosAlumnoStage2(newArray)
   }
   if(event.target.value.length >= 1 && isFiltredStage1 === false){
      newArray = datosAlumno.filter((dataFilter) => ageCalculate(splitDate(dataFilter.FECHA_NACIMIENTO,3)) == parseInt(event.target.value))
      setIsFiltredStage2(true)
      setFiltredDatosAlumnoStage2(newArray)
   }
   if(event.target.value.length === 0){
      setFiltredDatosAlumnoStage2([])
      setIsFiltredStage2(false)
   }
}

export const handleEdad3006 = (
   event,
   datosAlumno,
   setIsFiltredStage1,
   setFiltredDatosAlumnoStage1,
   isFiltredStage1,
   filtredDatosAlumnoStage1,
   setFiltredDatosAlumnoStage2,
   setIsFiltredStage2
)=> {
   let newArray = []
   if(event.target.value.length >= 1 && isFiltredStage1 === true){
      newArray = filtredDatosAlumnoStage1.filter((dataFilter) => ageCalculate3006(splitDate(dataFilter.FECHA_NACIMIENTO,3)) == parseInt(event.target.value))
      setIsFiltredStage2(true)
      setFiltredDatosAlumnoStage2(newArray)
   }
   if(event.target.value.length >= 1 && isFiltredStage1 === false){
      newArray = datosAlumno.filter((dataFilter) => ageCalculate3006(splitDate(dataFilter.FECHA_NACIMIENTO,3)) == parseInt(event.target.value))
      setIsFiltredStage2(true)
      setFiltredDatosAlumnoStage2(newArray)
   }
   if(event.target.value.length === 0){
      setFiltredDatosAlumnoStage2([])
      setIsFiltredStage2(false)
   }
}


export const handleEdit = (data,setAlumnoEditModal,setSelectedAlumnoForEdit) => {
   setSelectedAlumnoForEdit(data)
   setAlumnoEditModal(true)
}

export const handleClickApplyFilter = (
   nivel,
   grado,
   division,
   datosAlumno,
   setIsFiltredStage1,
   setFiltredDatosAlumnoStage1
)=> {
   let newArray = []     
   switch(true){
      case nivel !== 'Nivel' && grado === 'Grado' && division === 'Division':
         newArray = datosAlumno.filter((dataFilter) => dataFilter.NIVEL === nivel)
         setIsFiltredStage1(true)
         setFiltredDatosAlumnoStage1(newArray)  
         break
      case nivel !== 'Nivel' && grado !== 'Grado' && division === 'Division':
         console.log(grado)
         newArray = datosAlumno.filter((dataFilter) => dataFilter.NIVEL === nivel && dataFilter.GRADO === parseInt(grado))
         setIsFiltredStage1(true)
         setFiltredDatosAlumnoStage1(newArray)
         break
      case nivel !== 'Nivel' && grado !== 'Grado' && division !== 'Division':
         newArray = datosAlumno.filter((dataFilter) => dataFilter.NIVEL === nivel && dataFilter.GRADO === parseInt(grado) && dataFilter.DIVISION === division)
         setIsFiltredStage1(true)
         setFiltredDatosAlumnoStage1(newArray)
         break
   }
}

export const handleClickLimpiarFiltros = (
   setIsFiltredStage1,
   setIsFiltredStage2,
   setFiltredDatosAlumnoStage1,
   setFiltredDatosAlumnoStage2,
   matriculaRef,
   setNivel,
   setGrado,
   setDivision
)=> {
   setNivel('Nivel')
   setGrado('Grado')
   setDivision('Division')
   setIsFiltredStage1(false)
   setIsFiltredStage2(false)
   setFiltredDatosAlumnoStage1([])
   setFiltredDatosAlumnoStage2([])
   matriculaRef.current[0].options.selectedIndex = 0
   matriculaRef.current[1].options.selectedIndex = 0
   matriculaRef.current[2].options.selectedIndex = 0
   matriculaRef.current[3].value = ''
   matriculaRef.current[4].value = ''
   matriculaRef.current[5].value = ''
   matriculaRef.current[6].value = ''
}
