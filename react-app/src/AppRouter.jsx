import Home from "./telas/home"
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

const AppRouter = () => {
    return (
      <>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login"></Route>
            </Routes>
        </Router>
      </>
    );
  }
  
  export default AppRouter;