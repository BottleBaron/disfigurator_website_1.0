import { StyledEngineProvider } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom/client";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import App from "./App.tsx";
import RootLayout from "./components/RootLayout.tsx";
import { ThemeContextProvider } from "./context/ThemeContext.tsx";
import NewsPage from "./pages/NewsPage.tsx";
import NotFoundRedirect from "./pages/NotFoundRedirect.tsx";
import ContactPage from "./pages/ContactPage.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RootLayout />}>
            <Route path="/" element={<App />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
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
