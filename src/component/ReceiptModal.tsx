import { forwardRef } from "react";
import type { ITicket } from "../api/ticketsApi";

interface IReceiptModalProps {
    purchased: ITicket[];
    clearSelection: () => void
}

export const ReceiptModal = forwardRef<HTMLDialogElement, IReceiptModalProps>(({ 
    purchased,
    clearSelection
}, ref) => {
    return (
        <dialog ref={ref} className="" onClose={clearSelection}>
            { purchased.map(tkt => (
                <div>{tkt.id}</div>
            ))}
        </dialog>
    )
})