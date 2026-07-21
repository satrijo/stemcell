import { HomeClosing } from "./HomeClosing";
import { HomeHero } from "./HomeHero";
import { HomeMalaysia } from "./HomeMalaysia";
import { HomeOverview } from "./HomeOverview";
import { HomePathways } from "./HomePathways";

export default function ClinicHomepage() {
  return (
    <main id="main-content">
      <HomeHero />
      <HomeOverview />
      <HomePathways />
      <HomeMalaysia />
      <HomeClosing />
    </main>
  );
}
