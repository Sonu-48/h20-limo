
// import './App.css'
import { Box} from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayout from './HomeLayout'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import './fonts.css';

function App() {


  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomeLayout/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </Box>
  )
}

export default App
