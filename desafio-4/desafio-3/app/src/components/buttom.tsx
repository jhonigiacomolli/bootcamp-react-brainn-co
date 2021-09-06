import { ReactNode } from "react"

type ButtonProp = {
    children: ReactNode;
    kind: 'primary' | 'secundary';
    onClick?: () => void;
}

export function Button({ children, kind, onClick }:ButtonProp) {
    return (
        <button className={`button-${kind}`} onClick={onClick}>
            {children}
        </button>
    )
}
