import { Header } from "../components/Header/Header";
import { Layout } from "../components/Layout/Layout";
import { LiquidAnimation } from "../components/LiquidAnimation/LiquidAnimation";

import style from "./App.module.css";

function App() {
  return (
    <div className={style.App}>
      <Layout classes="mt-10 xl:mx-[7.5rem] lg:mx-[5.5rem] md:mx-[3.5rem] sm:mx-[1rem] xs:mx-[1rem] us:mx-[1.875rem]">
        <Header classes="xl:mb-10 lg:mb-10 md:mb-10 sm:mb-7 xs:mb-4 us:mb-4" />
        <LiquidAnimation classes="" />
      </Layout>
    </div>
  );
}

export default App;
