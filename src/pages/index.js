import Footer from "@/components/Footer/Footer"
import Form from "@/components/Form/Form"
import LandingPage from "@/components/Home/LandingPage"
import BannerSection from "@/components/InfoSections/BannerSection"
import ChooseSection from "@/components/InfoSections/ChooseSection"
import DownloadSection from "@/components/InfoSections/DownloadSection"
import FAQSection from "@/components/InfoSections/FAQSection"
import PlanSection from "@/components/InfoSections/PlanSection"
import TestimonialSection from "@/components/InfoSections/TestimonialSection"
import VehicleFleet from "@/components/InfoSections/VehicleFleet"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Car Rental</title>
      </Head>
      <LandingPage />
      <Form />
      <PlanSection />
      <VehicleFleet />
      <BannerSection />
      <ChooseSection />
      <TestimonialSection />
      <FAQSection />
      <DownloadSection />
      <Footer />
    </>
  )
}
