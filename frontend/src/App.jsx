import { Routes, Route } from "react-router-dom";

import Homemain from "./pages/Homemain";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homemain />} />
      <Route path="/notecard" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/note/:id" element={<NoteDetailPage />} />
    </Routes>
  );
};

export default App;
