export const Loading: React.FC = () => {
    return (
        <div className={`z-3 fixed inset-0 flex items-center justify-center w-full h-full`}>
            <div className="rounded-full border border-[0.5rem] border-orange-500 border-t-transparent w-[5rem] h-[5rem] animate-spin"/>
        </div>
    )
}