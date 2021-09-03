import { Button } from './buttom'

type MessageBoxProps = {
    message: string;
    type: 'alert' | 'confirm';
    confirmAction: () => void;
    cancelAction?: () => void;
}
export function MessageBox({ message, type, confirmAction, cancelAction }:MessageBoxProps) {
    return (
        <div className="messagebox">
            <div className="messagebox-container">
                <div className="messagebox-modal">
                    <span>!</span>
                    <p>{message}</p>
                    <div className="messagebox-actions">
                        <Button kind="primary" onClick={confirmAction}>Ok</Button>
                        {type === 'confirm' && <Button kind="primary" onClick={cancelAction}>Cancel</Button>}
                    </div>
                </div>
            </div>
        </div>
    )
}