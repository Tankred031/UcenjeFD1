import { uparivanje } from "./UparivanjePopis";
  
  
async function get() {  
    return { data: uparivanje};
}


export default {
    get
}