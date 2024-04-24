import { Header } from "../components/Header/Header";
import { Layout } from "../components/Layout/Layout";
import { LiquidAnimation } from "../components/LiquidAnimation/LiquidAnimation";

import style from "./App.module.css";

function App() {
  return (
    <div className={style.App}>
      <Layout classes="mt-10 xl:mx-[7.5rem] lg:mx-[5.5rem] md:mx-[3.5rem] sm:mx-[1.175rem]">
        {/* xl:mx-10 lg:mx-10 md:mx-5 sm:mx-1 mb-14 */}
        <Header classes="mb-14" />
        {/* xl:mx-10 lg:mx-5 md:mx-10 sm:mx-1 */}
        <LiquidAnimation classes="" />
      </Layout>
    </div>
  );
}

export default App;
