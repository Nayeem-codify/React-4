import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import About from './pages/about/About'
import Blog from './pages/blog/Blog'
import Contant from './pages/contant/Contant'
import Home from './pages/home/Home'
import RootLayout from "./Layout/RootLayout";
import ErrorPage from "./pages/error/ErrorPage";

function App() {

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route element={<RootLayout/>}>
    <Route path="/About" element={<About/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/Blog" element={<Blog/>}/>
    <Route path="/Contant" element={<Contant/>}/>
    </Route>
    <Route path="*" element={<ErrorPage/>}/>
    </>
  )
);

  return (

    <RouterProvider
    router={router}
  />
    
  )
}

export default App
