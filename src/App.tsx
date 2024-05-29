import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import MenuTop from "./components/MenuTop";

function App() {
  return (
    <BrowserRouter>
        <div className="bg-lavanda-white text-lavanda-basic font-syne text-3xl">
          <MenuTop />
          <div className="">
            {/* <Header /> */}
            <div className="">
              <Routes />
            </div>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
