import { Header } from "../components/Header/Header";
import { Layout } from "../components/Layout/Layout";
import { LiquidAnimation } from "../components/LiquidAnimation/LiquidAnimation";

import style from "./App.module.css";

function App() {
  return (
    <div className={style.App}>
      <Layout classes="mx-10 mt-10">
        <Header classes="mx-8 mb-14" />
        <LiquidAnimation classes={"mx-6 "} />
      </Layout>
    </div>
  );
}

export default App;
