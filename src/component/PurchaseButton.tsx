interface IPurchaseButtonProps {
    selectedTicketsAmount: number;
    startPurchase: () => void;
}

export const PurchaseButton: React.FC<IPurchaseButtonProps> = ({
    selectedTicketsAmount,
    startPurchase
}) => {
    return (
        <button 
            disabled={!selectedTicketsAmount}
            onClick={startPurchase}
            className={`p-2 rounded text-black bg-white`}
        >
            Buy ({selectedTicketsAmount})
        </button>
    )
}