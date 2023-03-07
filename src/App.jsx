import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewJob from "./pages/NewJob";
import NewUser from "./pages/NewUser";


import Layout from "./components/layout/MainLayout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<NewUser />} />
        <Route path="/create" element={<NewJob />} />
      </Routes>
    </Layout>
  );
}

export default App;
