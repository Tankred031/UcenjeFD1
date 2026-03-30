import { vina } from "./VinaPodaci";

async function get() {
    return {data: [...vina]}    
}

export default{
    get
}