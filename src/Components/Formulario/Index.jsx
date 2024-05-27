import { useState } from "react"

import styles from './Formulario.module.css'

const Formulario = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

const calculadora = () => {
    const altura2 = parseFloat(altura) * parseFloat(altura);
    const IMC = peso / altura2;

    if (IMC < 18,5) {
        return (
            <p>Seu Imc: {IMC.toFixed(2)}kg/m²</p>
        )
    } else if (IMC >= 18,5) {
        return (
            <p>Seu Imc: {IMC.toFixed(2)}kg/m²</p>
        )
    } else if (IMC >= 25,0) {
        return (
            <p>Seu Imc: {IMC.toFixed(2)}kg/m²</p>
        )
    } else if (IMC >= 30,0) {
        return (
            <p>Seu Imc: {IMC.toFixed(2)}kg/m²</p>
        )
    } else if (IMC >= 40,0) {
        return (
            <p>Seu Imc: {IMC.toFixed(2)}kg/m²</p>
        )
    }
}

return (
    <form>
        <input type="number" className="form-control-sm" placeholder="Sua altura (ex: 1,80)" onChange={evento => setAltura(evento.target.value)}/>
        <input type="number" className="form-control-sm" placeholder="Seu peso (ex: 60,0)" onChange={evento => setPeso(evento.target.value)}/>
        {calculadora()}
    </form>
)
}

export default Formulario;