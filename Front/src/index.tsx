import { StyledEngineProvider } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom/client";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./components/RootLayout.tsx";
import { ThemeContextProvider } from "./context/ThemeContext.tsx";
import NotFoundRedirect from "./pages/NotFoundRedirect.tsx";
import ThemeInit from "./themeInit.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<ThemeInit />} />
      <Route path="*" element={<NotFoundRedirect />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
