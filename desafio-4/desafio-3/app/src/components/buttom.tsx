import { ReactNode } from "react"
import styled from "styled-components"

type ButtonProp = {
    children: ReactNode;
    kind: 'primary' | 'secundary';
    onClick?: () => void;
}
type StyledButton = {
    kind: string;
}

export function Button({ children, kind, onClick }:ButtonProp) {
    return (
        <Buttons kind={kind} onClick={onClick}>
            {children}
        </Buttons>
    )
}
const Buttons = styled.button<StyledButton>`
    width: 100%;
    margin: 15px 0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s;
    font-size: 1rem;
    color: #fff;
    ${(props) => (
        props.kind === 'primary' && `
            padding: 15px 30px;
            background: linear-gradient(180deg, #ff5990, #f36);
        `
    )}
    ${(props) => (
        props.kind === 'secundary' && `
            padding: 10px;
            background: #181818;
            `
        )}
        :hover {
            filter: contrast(1.5);
        }
`