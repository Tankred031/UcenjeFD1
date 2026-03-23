import { vina } from "./VinaPopis";


async function get(VinaPopis) {
    return pravilaUparivanja[VinaPopis] || [] 
}


export default {
    get
}