import { useState } from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import InsertData from "./mysite/InsertData";
import ReadData from "./mysite/ReadData";
import UpdateData from "./mysite/UpdateData";
import DeleteData from "./mysite/DeleteData";
import Login from "./mysite/Login";
import ErrorPage from "./mysite/ErrorPage";
import Layout from "./mysite/Layout";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Layout />}>
              <Route index path="/" element={<Dashboard />} />
              <Route path="/insertdata" element={<InsertData />} />
              <Route path="/readdata" element={<ReadData />} />
              <Route path="/updatedata" element={<UpdateData />} />
              <Route path="/deletedata" element={<DeleteData />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
