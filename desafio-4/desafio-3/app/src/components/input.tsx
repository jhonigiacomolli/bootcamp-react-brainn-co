import { Dispatch } from "react"
import styled from "styled-components"

type InputProps = {
    label: string;
    id: string;
    type: 'text' | 'number' | 'color' | 'email' | 'url';
    value: string | number;
    setValue: Dispatch<any>;
}
export function Input({ label, id, type, value, setValue }:InputProps) {
    return (
        <FormLabel htmlFor={id}>
            <FormTextLabel>
                {label}
            </FormTextLabel>
            <FormInput 
                type={type} 
                id={id} 
                value={value} 
                onChange={(e) => setValue(e.currentTarget.value)} 
            />
        </FormLabel>
    )
}

const FormLabel = styled.label`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: -1px;
    font-size: 0.875rem;
`
const FormTextLabel = styled.p`
    margin: 3px 10px;
`
const FormInput = styled.input`
    width: 100%;
    padding: 5px 20px;
    border: solid 2px #404040;
    border-top: 2px solid #181818;
    border-left: 2px solid #181818;
    border-radius: 5px;
    font-size: 1.1rem;
    font-family: Arial, Helvetica, sans-serif;
    background: #282828;
    color:#fff;
    :focus-visible {
        outline: none;
        box-shadow: 0 0 0 2px #f36;
        border-color: transparent;
    }    
    ${(props) => (
        props.type === 'color' && 'height: 50px'
)}
`