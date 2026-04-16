"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyChooseUs } from "@/components/why-choose-us"
import { HowItWorks } from "@/components/how-it-works"
import { Services } from "@/components/services"
import { Destinations } from "@/components/destinations"
import { Programs } from "@/components/programs"
import { Universities } from "@/components/universities"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { ApplicationForm } from "@/components/application-form"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/lib/language-context"

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <WhyChooseUs />
        <HowItWorks />
        <Services />
        <Destinations />
        <Programs />
        <Universities />
        <Testimonials />
        <CTA />
        <ApplicationForm />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
