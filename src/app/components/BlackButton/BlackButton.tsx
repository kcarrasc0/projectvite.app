import './BlackButton.css'
// import { useState } from "react";

interface BlackButton {
    textContent: string
    onClick?: () => void
}

export default function BlackButton({ textContent, onClick }: BlackButton) {
    // const [, setIsClicked] = useState(false);

    return (
        <button id='loginButton' onClick={onClick}>
            {textContent} 
        </button>
    );
}