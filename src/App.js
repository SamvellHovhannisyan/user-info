import { Route, Routes} from "react-router-dom";

import UsersList from "./pages/UsersList";
import CurrentUser from "./pages/CurrentUser";


function App() {
    return (
        <div className="App container">
            <Routes>
                <Route path={'/'} element={<UsersList/>}/>
                <Route path={'/user/:id'} element={<CurrentUser/>}/>
            </Routes>
        </div>
    );
}

export default App;
