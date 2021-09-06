import styled from "styled-components"

function Button ({ kind="primary" | "secundary", children }) {
    return (
        <ButtonPrimary kind={kind}>
            {children}
        </ButtonPrimary>
    )
}
export default Button

const ButtonPrimary = styled.button`
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.4s;
    ${(props) => (
        props.kind === 'primary' &&  `
            padding: 15px 20px;
            font-size: 1.1rem;
            font-weight: 700;
            font-family: monospace;
            background: linear-gradient(0deg, #f36, #ff5680);
            color: #fff;

            :hover {
                filter: contrast(1.5);
            }
        ` 
    )}
    ${(props) => (
        props.kind === 'secundary' && `
        padding: 10px;
        font-size: 1rem;
        background: #232323;
        color: #cecece;
        
        :hover {
            filter: brightness(1.1);
            box-shadow: 1px 3px 3px 3px #7777;
        }
        `
    )}
    
`