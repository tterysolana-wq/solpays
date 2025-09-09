import { Hero } from "./Hero";
import { Features } from "./Features";
import { HowItWorks } from "./HowItWorks";
import { TokenInfo } from "./TokenInfo";
import { Dashboard } from "./Dashboard";

export function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <TokenInfo />
      <Dashboard />
    </>
  );
}