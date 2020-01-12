export function setPhoneList(allPhones) {
   console.log(allPhones)
    return {
       type: "PHONES_LIST",
       phones: allPhones
     }
  }

  export function selectedPhone(id){
   return {
      type: "SELECTED_PHONE",
      selectedPhone: id
    }
  }