import { useEffect, useState } from "react";

export default function SireviPregled() {

    const [sirevi, setSirevi] = useState([])

    useEffect(() => {
        ucitajSirevi()
    },[])

    async function ucitajSirevi() {
        await SireviService.get().then((odgovor) => {
            setSirevi(odgovor.data)
        })
    }
}

return (
    <>
    
    </>
)