import "bootstrap/dist/css/bootstrap.min.css";

import styles from './Tabela.module.css';


function Tabela() {
    return (
        <table className='table table-bordered'>
            <thead>
                <tr className="table-info">
                    <th id="titulo">IMC</th>
                    <th id="titulo">Classificação</th>
                </tr>
            </thead>
            <tbody>
                <tr id="1">
                    <td>Abaixo de 18,5</td>
                    <td>abaixo do peso</td>
                </tr>
                <tr>
                    <td>Entre 18,6 e 24,9</td>
                    <td>Peso ideal</td>
                </tr>
                <tr>
                    <td>Entre 25 e 29,9</td>
                    <td>Levemente acima do Peso</td>
                </tr>
                <tr>
                    <td>Entre 30 e 39,9</td>
                    <td>Obesidade</td>
                </tr>
                <tr>
                    <td>Acima de 40</td>
                    <td>Obesidade Mórbida</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Tabela