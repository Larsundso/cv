import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import "@unocss/reset/eric-meyer.css";
import "@unocss/reset/normalize.css";
import "@unocss/reset/sanitize/assets.css";
import "@unocss/reset/sanitize/sanitize.css";
import "@unocss/reset/tailwind.css";
import "virtual:uno.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
 <StrictMode>
  <App />
 </StrictMode>
);