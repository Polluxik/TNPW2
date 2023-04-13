import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewJob from "./pages/NewJob";
import Account from "./pages/Account";


import Layout from "./components/layout/MainLayout";

//Layout a routy pro zmenu stranek
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/create" element={<NewJob />} />
      </Routes>
    </Layout>
  );
}

export default App;
