import { useEffect, useState } from "react";
import VinaService from "../../services/vina/VinaService"

export default function VinaPregled() {

    const [vina, setVina] = useState([])

    useEffect(() => {
        ucitajVina()
    },[])
}

async function ucitajVina() {
    await VinaService.get().then((odgovor) => {
        setVina(odgovor.data)
    })
}


return (
    <>
    <table class="uk-table">
    <caption>Table Caption</caption>
    <thead>
        <tr>
            <th>Table Heading</th>
            <th>Table Heading</th>
            <th>Table Heading</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
        </tr>
        <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Table Footer</td>
            <td>Table Footer</td>
            <td>Table Footer</td>
        </tr>
    </tfoot>
</table>
    
    
    
    
    
    </>
)