import { ChangeEvent, SetStateAction } from "react"

type InputProps = {
    label: string;
    id: string;
    type: 'text' | 'number' | 'color' | 'email' | 'url';
    value: string | number;
    setValue: SetStateAction<any>;
}
export function Input({ label, id, type, value, setValue }:InputProps) {
    return (
        <label htmlFor={id}>
            <p>{label}</p>
            <input type={type} id={id} value={value} onChange={(e) => setValue(e.currentTarget.value)} />
        </label>
    )
}