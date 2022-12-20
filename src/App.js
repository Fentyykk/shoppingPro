import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import About from "./component/About";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import SingleItem from "./component/SingleItem"

import { createStore } from "redux"
import { Provider } from "react-redux"

import "./component/style.css"
import gymReducer from "./reducer/gymReducer"

function App() {
  const store = createStore(gymReducer)
  return (
    <BrowserRouter>
      <div>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="home" element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="single-product/:name" element={<SingleItem/>} />
          </Routes>
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
