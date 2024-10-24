import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./core/theme/index";

import OnboardingPage from "./components/pages/OnboardingPage";
import HomePage from "./components/pages/HomePage/HomePage";
import HomeLayout from "./components/layouts/HomeLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnboardingPage />} />
          <Route path="/home/:home_id" element={<HomePage />}>
            <Route path="" element={<HomeLayout />} />
            <Route path="parking" element={<p>Parking</p>} />
            <Route path="garden" element={<p>Garden</p>} />
          </Route>
          <Route path="*" element={<h2>Page doesn't exist :(</h2>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
