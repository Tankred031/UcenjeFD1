import { useState, useEffect } from 'react'
import VinaService from '../services/VinaService.jsx'

export default function VinaPregled() {
    const [vina, setVina] = useState([])

    useEffect(() => {
        async function ucitajVina() {
            const odgovor = await VinaService.get()
            setVina(odgovor.data)
        }
        ucitajVina()
    }, [])

    return (
        <table className="uk-table uk-table-divider uk-margin-top">
            <caption>Pregled vina</caption>
            <thead>
                <tr>
                    <th>Naziv</th>
                    <th>Tip</th>
                    <th>Država</th>
                    <th>Regija</th>
                    <th>Jačina</th>
                    <th>Temperatura</th>
                    <th>Slatkoća</th>
                    <th>Arome</th>
                    <th>Tijelo</th>
                    <th>Alkohol</th>
                    <th>Akcija</th>
                </tr>
            </thead>
            <tbody>
                {vina.map((vina, idx) => (
                    <tr key={idx}>
                        <td>{vina.naziv}</td>
                        <td>{vina.tip}</td>
                        <td>{vina.drzava}</td>
                        <td>{vina.regija}</td>
                        <td>{vina.jacina}</td>
                        <td>{vina.temperatura}</td>
                        <td>{vina.slatkoca}</td>
                        <td>{vina.arome}</td>
                        <td>{vina.tijelo}</td>
                        <td>{vina.alkohol}</td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
