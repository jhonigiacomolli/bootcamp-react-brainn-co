import styled from 'styled-components'
import { Button } from './buttom'

type MessageBoxProps = {
    message: string;
    type: 'alert' | 'confirm';
    confirmAction: () => void;
    cancelAction?: () => void;
}
export function MessageBox({ message, type, confirmAction, cancelAction }:MessageBoxProps) {
    return (
        <Messagebox>
            <MessageboxContainer>
                <MessageboxModal>
                    <Icon>!</Icon>
                    <Message>{message}</Message>
                    <Actions>
                        <Button kind="primary" onClick={confirmAction}>
                            Ok
                        </Button>
                        {type === 'confirm' && (
                            <Button kind="primary" onClick={cancelAction}>
                                Cancel
                            </Button>
                        )}
                    </Actions>
                </MessageboxModal>
            </MessageboxContainer>
        </Messagebox>
    )
}

const Messagebox = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #181818e0;
`
const MessageboxContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: center;
`
const MessageboxModal = styled.div`
    width: 500px;
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-template-areas: 
        "icon message"
        "button button"
    ;
    padding: 30px 20px 10px 20px;
    border-radius: 10px;
    background: #222;
`
const Icon = styled.span`
    grid-area: icon;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 900;
    font-size: 5rem;
    margin: 0;
    text-align: center;
    color: #f36;
`
const Message = styled.p`
    grid-area: message;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    padding: 5px;
`
const Actions = styled.div`
    grid-area: button;
`