import Form from "@/components/Form/Form";
import LandingPage from "@/components/Home/LandingPage";
import BannerSection from "@/components/InfoSections/BannerSection";
import ChooseSection from "@/components/InfoSections/ChooseSection";
import PlanSection from "@/components/InfoSections/PlanSection";

export default function Home() {
  return (
    <>
      <LandingPage />
      <Form />
      <PlanSection />
      <BannerSection />
      <ChooseSection />
    </>
  );
}
