export const dniCheck = (ref,setIsValid,setIsInvalid,oldDNI) => {

   if(oldDNI){
      console.log('9')
      if(ref.current[2].value.length === 9){
         let newArray = ref.current[2].value.split('.')
         if(newArray[0].length < 1){
            setIsInvalid(true)
         }
         if(newArray[2] !== undefined){
            if(newArray[1].length < 3 || newArray[2].length < 3){
               setIsInvalid(true)
            }
         }
         if(newArray[2] !== undefined){
            if(newArray[0].length === 1 && newArray[1].length === 3 && newArray[2].length === 3 ){
               setIsInvalid(false)
               setIsValid(true)
            }
         }else{
            setIsInvalid(true)
         }
      }
   }

   if(ref.current[2].value.length < 9){
      setIsValid(false)
      setIsInvalid(true)
   }

   if (ref.current[2].value.length > 10){
      setIsInvalid(true)
   }

   if(ref.current[2].value.length === 10){
      let newArray = ref.current[2].value.split('.')
      if(newArray[0].length < 2){
         setIsInvalid(true)
      }
      if (newArray[2] !== undefined){
         if(newArray[1].length < 3 || newArray[2].length < 3){
         }
      }

      if(newArray[2] !== undefined){
         if(newArray[0].length === 2 && newArray[1].length === 3 && newArray[2].length === 3 ){
            setIsInvalid(false)
            setIsValid(true)
         }
      }else{
         setIsInvalid(true)
      }

   }
}
