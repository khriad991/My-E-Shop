import {useState} from "react";
import Router from "./router/Router";
import PublicRoutes from "./router/routes/publicRoutes";

function App (){
 let [allRoutes, setAllRoutes] = useState([...PublicRoutes]);
 console.log(allRoutes)
 return <Router allRoutes={allRoutes}/>

}

export default App;
