export function setPhoneList(allPhones) {
   console.log(allPhones)
    return {
       type: "PHONES_LIST",
       phones: allPhones
     }
  }