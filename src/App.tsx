import './App.css'
import { TicketList } from './component/TicketList'

export const App: React.FC = () => {
    return (
        <main className="p-4 max-w-4xl mx-auto bg-red-200">
            <h1 className="text-2xl font-bold mb-4">Wine Raffle</h1>
            <TicketList />
        </main>
    )
  
}
