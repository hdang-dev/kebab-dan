import { Route, Routes, BrowserRouter } from "react-router-dom";

// import pages
import Layout from "./pages/layout";
import Home from "./pages/home";
import Admin from "./pages/admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
