import Home from "./Pages/Home"
import Face from "./Pages/Face"
import Hair from "./Pages/Hair"
import NotFound from "./Pages/NotFound"
import Products from "./Pages/Products"
import Trackorder from "./Pages/Trackorder"
import Trimmer from "./Pages/Trimmer"
import Contact from "./Pages/Contact"

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/Face" element={<Face/>} />
      <Route path="/Hair" element={<Hair/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/Products" element={<Products/>} />
      <Route path="/Trackorder" element={<Trackorder/>} />
      <Route path="/Trimmer" element={<Trimmer/>} />
      <Route path="/Contact" element={<Contact/>} />

    </Route>
  )
);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
