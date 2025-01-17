
import { useState } from "react";
interface Button {
    textContent: string;
    onClick?: () => void;
    onHover?: React.CSSProperties;
    style?: React.CSSProperties;
}

export default function Button({
    textContent,
    onClick,
    onHover,
    style
}: Button) {
    const [isHover, setIsHover] = useState(false);

    return (
        <button
            onMouseEnter={() => { setIsHover(true) }}
            onMouseLeave={() => { setIsHover(false) }}
            style={isHover && onHover ? onHover : style}
            onClick={onClick}>
            {textContent}
        </button>
    );
}
