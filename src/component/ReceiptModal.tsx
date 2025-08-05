import { forwardRef, useImperativeHandle, useRef } from "react";
import type { ITicket } from "../api/models";

interface IReceiptModalProps {
    purchased: ITicket[];
    onClose: () => void
}

/**
 * Modal component that shows the receipt for the purchased tickets after the purchase has been performed successfully.
 *
 * @param purchased - List of purchased tickets to show in the modal
 * @param onClose - Function to call on modal closure
 * @param ref - Ref to the `HTMLDialogElement` rendered by the component to handle the dialog from outer components
 */
export const ReceiptModal = forwardRef<HTMLDialogElement, IReceiptModalProps>(({ 
    purchased,
    onClose
}, ref) => {

    const modalRef = useRef<HTMLDialogElement>(null);
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    useImperativeHandle(ref, () => modalRef?.current!);

    return (
        <dialog ref={modalRef} className="p-[2rem] pt-[1rem] w-full max-w-[30rem] m-auto" onClose={onClose}>
            <button className="border px-[0.4rem] block text-3xl ml-auto cursor-pointer" onClick={() => modalRef?.current?.close()}>
                X
            </button>
            <span className="block text-2xl font-bold uppercase text-center tracking-wide">Receipt</span>
            <ul>
                { purchased.map(tkt => (
                    <li key={tkt.id}>
                        <span>Ticket N. <strong>#{tkt.id}</strong></span>
                    </li>
                ))}
            </ul>
            
        </dialog>
    )
})