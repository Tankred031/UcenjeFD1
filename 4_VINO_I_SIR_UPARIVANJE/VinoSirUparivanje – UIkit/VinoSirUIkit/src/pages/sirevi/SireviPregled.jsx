import { useState, useEffect } from 'react'
import SireviService from '../services/SireviService.jsx'

export default function SireviPregled() {
    const [sirevi, setSirevi] = useState([])

    useEffect(() => {
        async function ucitajSireve() {
            const odgovor = await SireviService.get()
            setSirevi(odgovor.data)
        }
        ucitajSireve()
    }, [])


    return (
        <>
            <table className="uk-table uk-table-divider uk-margin-top">
                <caption>Pregled sireva</caption>
                <thead>
                    <tr>
                        <th>Naziv</th>
                        <th>Tip</th>
                        <th>Vrsta</th>
                        <th>Zrenje</th>
                        <th>Država</th>
                        <th>Regija</th>
                        <th>Intezitet</th>
                        <th>Masnoće</th>
                        <th>Tekstura</th>
                        <th>Okus</th>
                        <th>Akcija</th>
                    </tr>
                </thead>
                <tbody>
                    {sirevi.map((sirevi, idx) => (
                        <tr key={idx}>
                            <td>{sirevi.naziv}</td>
                            <td>{sirevi.tip}</td>
                            <td>{sirevi.vrsta}</td>
                            <td>{sirevi.zrenje}</td>
                            <td>{sirevi.drzava}</td>
                            <td>{sirevi.regija}</td>
                            <td>{sirevi.intezitet}</td>
                            <td>{sirevi.masnoce}</td>
                            <td>{sirevi.tekstura}</td>
                            <td>{sirevi.okus}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}