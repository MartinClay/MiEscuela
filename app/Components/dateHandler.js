export const splitDate = (date,number) => {
   const myArr = date.split("/");
   if(number === 3){
      return myArr
   }else{
      return myArr[number]
   }
}

export const ageCalculate = (date) => {
   const dateToday = new Date()
   const day = dateToday.getDate()
   const month = dateToday.getMonth() + 1
   const year = dateToday.getFullYear()

   switch(true){
      case (month > parseInt(date[1])):
         console.log('month > datemonth')
         let anios = year - parseInt(date[2])
         return anios
      case (month === parseInt(date[1]) && day < parseInt(date[0])):
         console.log('month === datemont and day < dateday')
         let anios2 = (year - parseInt(date[2])) - 1
         return anios2
      case (month === parseInt(date[1]) && day >= parseInt(date[0])):
         console.log('month === datemonth && day >= dateday')
         let anios4 = year - (parseInt(date[2]))
         return anios4
      case (month < parseInt(date[1])):
         console.log('month < datemonth')
         let anios3 = (year - parseInt(date[2])) - 1
         return anios3
   }
}

