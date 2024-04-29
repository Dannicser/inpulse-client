import { Divider } from "../components/Divider/Divider";
import { Header } from "../components/Header/Header";
import { Layout } from "../components/Layout/Layout";
import { LiquidAnimation } from "../components/LiquidAnimation/LiquidAnimation";
import { SectionDo } from "../components/SectionDo/SectionDo";
import { Slider } from "../components/Slider/Slider";
import { TitleDivider } from "../components/TitleDivider/TitleDivider";

import style from "./App.module.css";
import { Switcher } from "../components/Switcher/Switcher";
import { SectionExperience } from "../components/SectionExperience/SectionExperience";

function App() {
  return (
    <div className={`${style.App}`}>
      <Layout classes="xl:mt-[3rem] lg:mt-[3rem] md:mt-[3rem] sm:mt-[2rem] xs:mt-[1.6rem] us:mt-[1.6rem] xl:mx-[7.5rem] lg:mx-[5.5rem] md:mx-[3.5rem] sm:mx-[1rem] xs:mx-[1rem] us:mx-[1.875rem]">
        <Header classes="xl:mb-10 lg:mb-10 md:mb-10 sm:mb-7 xs:mb-4 us:mb-4" />
        <LiquidAnimation classes="mb-12" />
        {/* <Divider classes="mx-[8.5rem]" /> */}
        {/* <div className={`text-3xl font-medium mt-[4rem]`}>Prints & Editions</div> */}
      </Layout>
      {/* <Slider classes={`mt-[2rem]`} /> */}
      <TitleDivider />
      <Layout classes="xl:mx-[10rem] lg:mx-[5.5rem] md:mx-[3.5rem] sm:mx-[1rem] xs:mx-[1rem] us:mx-[1.875rem]">
        <SectionExperience />
      </Layout>
      <Layout classes={`max-lg:hidden xl:mx-[7.5rem] lg:mx-[5.5rem] md:mx-[3.5rem] mt-10`}>
        <SectionDo />
      </Layout>
    </div>
  );
}

export default App;
