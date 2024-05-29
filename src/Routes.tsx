import { Routes as Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Kits from "./pages/Kits";
import Aromas from "./pages/Aromas";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/kits" element={<Kits />} />
      <Route path="/aromas" element={<Aromas />} />
    </Switch>
  );
}
