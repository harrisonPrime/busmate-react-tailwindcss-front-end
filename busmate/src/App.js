import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from './components/landing/landing'
import Home from './components/home/home'
import Signup from './components/signup/signup'
import Signin from './components/signin/signin'
import Ticketbuild from './components/ticketBuild/ticketbuild'
import Tickets from './components/tickets/tickets'
import Payment from './components/payment/payment'
import Header from "./components/header/header"
import Footer from "./components/footer/footer"

function App() {
  return (
    <div className="">
      <Router>
        <main className="w-full flex flex-col bg-neutral-50 min-h-screen">
          {/* header */}
             <Header />
         <Routes>
            <Route path='/' element={ <Landing />} />
            <Route path='/home' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />  
            <Route path='/ticketbuild' element={ <Ticketbuild />} />
            <Route path='/tickets' element={<Tickets />} />
            <Route path='/payment' element={<Payment />} />
         </Routes>
         {/* Footer */}
            <Footer />
        </main>
      </Router>
    </div>
  );
}

export default App;
