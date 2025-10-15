import "./global.css";
import MainLayout from "./layouts/MainLayout.jsx";
import Main from "./components/main/Main.jsx";

import Ciber from "./components/ciber/Ciber.jsx";

import { useEffect } from "react";
import CodigoMundoComp from "./components/codigoMundos/CodigoMundosComp.jsx";

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "minimal");
  }, []);
  return (
    <MainLayout>
      <Main />
      {/*<Ciber />*/}
    </MainLayout>
  );
}
export default App;
