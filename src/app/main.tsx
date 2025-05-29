import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "../styles/global.css";
import "../index.css";
// import "@fontsource/inter/variable.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { queryClient } from "./queryClient";

// ✅ Import Sonner
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster position="top-right" richColors closeButton /> {/* ✅ Add this */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
