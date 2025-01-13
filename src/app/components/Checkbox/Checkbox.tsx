import './Checkbox.css'

interface CheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}


export default function Checkbox({checked, onChange}: CheckboxProps) {

    return (<input type="checkbox" id='checkbox' checked={checked} onChange={(e) => onChange(e.target.checked)}></input>);
}