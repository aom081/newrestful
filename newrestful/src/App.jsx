import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Restaurant from "./pages/Restaurant";

function App() {
 

  return (
    <>
     <BrowserRouter>
      <NavBar />
      <div className="App">
          <Routes>
            <Route path="/" element={<Restaurant />}/>

          </Routes>
      </div>
     </BrowserRouter>
    </>
  )
}

export default App
