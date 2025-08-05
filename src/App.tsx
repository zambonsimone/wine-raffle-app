import './App.css'
import { DefinitionList } from './component/DefinitionList'
import { TicketReservationPanel } from './component/TicketReservationPanel'

export const App: React.FC = () => {
    return (
        <main className="w-fit px-[2rem] mx-auto md:my-[2rem] bg-gray-200 shadow-md rounded">
            <h1 className="text-3xl font-bold mb-4 text-center pt-[2rem] pb-[0.5rem]">Wine Raffle</h1>
            <h2 className="text-2xl font-medium mb-4 text-center pt-[0.2rem] pb-[2rem]">Purchase at least one ticket to enter the lottery</h2>
            <DefinitionList />
            <TicketReservationPanel />
        </main>
    )
  
}
