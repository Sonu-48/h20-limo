
// import './App.css'
import { Box} from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayout from './HomeLayout'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import List_All_Charts from './pages/Home/Charts/List_All_Charts';
import Active_Tickets from './pages/Home/MyTickets/Active_Tickets';
import Approved_Tickets from './pages/Home/MyTickets/Approved_Tickets';
import Pending_Tickets from './pages/Home/MyTickets/Pending_Tickets';
import Ticket_History from './pages/Home/MyTickets/Ticket_History';
import View_Cart from './pages/Home/MyCart/View_Cart';
import Checkout_Address from './Components/Checkout_Address';

function App() {


  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomeLayout/>}/>
          <Route exact path='/all-charts' element={<List_All_Charts/>}/>
          <Route exact path='/active-ticket' element={<Active_Tickets/>}/>
          <Route exact path="/approved-ticket" element={<Approved_Tickets/>}/>
          <Route exact path="/pending-ticket" element={<Pending_Tickets/>}/>
          <Route exact path="/ticket-history" element={<Ticket_History/>}/>
          <Route exact path="/view-cart" element={<View_Cart/>}/>
          <Route exact path="/order-address" element={<Checkout_Address/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </Box>
  )
}

export default App
