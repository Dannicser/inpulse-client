import ReactDOM from "react-dom/client";
import App from "./app/App";

import { Suspense } from "react";

import "./style/index.css";

import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Suspense fallback={""}>
    {/* <I18nextProvider i18n={i18next}> */}
    <App />
    {/* </I18nextProvider> */}
  </Suspense>
);
