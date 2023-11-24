import SimpleHero from "../components/simpleHero";
import FunHero from "../components/funHero";
import FinanceHero from "../components/financeHero";
import CanvaComponent from "@/components/canvaComponent";

export default function Home() {
  return (
    <main className="">
      <SimpleHero />
      <br />
      <FunHero />
      <br />
      <FinanceHero />
      <br />
      <CanvaComponent />
    </main>
  );
}
