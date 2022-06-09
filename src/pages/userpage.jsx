import { useParams } from "react-router-dom"
import Challenger from "../images/challenger.png"


export const Userpage = () => {
    const params = useParams()
    return(
        <>
            <h1>Olá, invocador{params.name}</h1>
            <label className='invocador'>
                <img className='elo' src={Challenger}></img>
            </label>
        </>
    )
}