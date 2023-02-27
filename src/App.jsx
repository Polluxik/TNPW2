import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NewJob from "./pages/NewJob";


import Layout from "./components/layout/MainLayout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<NewJob />} />
      </Routes>
    </Layout>
  );
}

export default App;
