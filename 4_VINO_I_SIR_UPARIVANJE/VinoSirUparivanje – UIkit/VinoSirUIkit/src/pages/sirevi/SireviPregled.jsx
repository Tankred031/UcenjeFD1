import { useEffect, useState } from "react";
import SireviService from "../../services/sirevi/SireviService"


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