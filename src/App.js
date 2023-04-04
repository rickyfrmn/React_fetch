

import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Header from "./components/Header";
import ProductList from "./components/ProductList";
// import About from "./components/About";
// import Contact from "./components/Contact";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
// import { useParams } from "react-router-dom";

function App() {
  // const title = "welcome to my app";
  // const age = 20;

  // use state hook 
  // const [title, setTitle] = useState("welcome to my app") ;
  
  // const [age, setAge] = useState(20);

  // const {id} = useParams(); 

  

  return (
    
    <div className="container">
      <BrowserRouter> 
        
        <Routes>
          <Route exact path="/" element={<ProductList />}>
            
          </Route>
          <Route path="/add" element={<AddProduct/>}>
            
          </Route>
          <Route path="/edit/:id" element={<EditProduct/>}>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
