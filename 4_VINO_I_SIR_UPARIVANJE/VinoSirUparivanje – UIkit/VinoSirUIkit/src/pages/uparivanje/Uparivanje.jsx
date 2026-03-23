import { useState, useEffect } from 'react'
import UparivanjeService from '../../services/uparivanje/UparivanjeService'

export default function Uparivanje() {

    const [pairings, setPairing] = useState({})

    useEffect(() => {
        async function fetchPairings() {
        const odgovor = await UparivanjeService.get()
        setPairings(odgovor.data)            
        }
        fetchPairings()
    }, [])

    return (
        <div>
            <h2>Uparivanje vina i sireva</h2>
            <ul className='uk-list uk-list-divider uk-margin-top'>
                {Object.entries(pairings).map(([vino, sirevi], idx) => (
                    <li key={idx}>
                        <strong>{vino}:</strong> {sirevi.join(", ")}
                    </li>
                ))}
            </ul>
        </div>
    )
}