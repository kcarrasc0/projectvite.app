import { useState } from 'react';
import './ToggleSwitch.css'

interface switchParams {
    toggle?: boolean,
    colorOn?: string,
    colorOff?: string,
    onClickHandler: (toggle: boolean) => void
}

export default function ToggleSwitch({ onClickHandler }: switchParams) {
    const [isToggled, setIsToggled] = useState(false);

    return (
        <div className="Switch">
            <div className={`toggle-btn ${isToggled ? "toggled" : ""}`} onClick={() => { onClickHandler(!isToggled), setIsToggled(!isToggled) }}>
                <div className="thumb"></div>
            </div>
        </div >
    );
}