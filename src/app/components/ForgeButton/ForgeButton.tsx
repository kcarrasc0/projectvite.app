import './ForgetButton.css'
import { useState } from "react";

interface WhiteButton {
    textContent: string
}

export default function TinyWhiteButton({textContent}: WhiteButton) {
    const [, setIsClicked] = useState(false);

    const handlerButton = () => {
        setIsClicked(true);
        console.log('clicado!')
        setTimeout(() => {
            setIsClicked(false);
            console.log('nao clicado')
        }, 3000);
    }

    return (
        <button id='ForgetButton' onClick={handlerButton}>{textContent}</button>
    );
}