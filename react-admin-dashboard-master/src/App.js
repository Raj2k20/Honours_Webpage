import { Routes, Route } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import Information from "./scenes/information";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
function App() {
  const [theme, colorMode] = useMode();
  const isSidebar = true;
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Routes>
              <Route path="/" element={<Information />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;
