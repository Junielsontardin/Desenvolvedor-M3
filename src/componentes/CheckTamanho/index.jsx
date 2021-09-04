import React, {useState} from 'react';
import './style.css'

const CheckTamanho = (props) => {

    const [clicked, setClicked] = useState(false)

    return (
        <div className={clicked ? "box-clicked" : "box"} onClick={() => setClicked(!clicked)}>
            <p className="tamanho">{props.tamanho}</p>
        </div>
    )
}

export default CheckTamanho;