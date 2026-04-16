"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight, MessageCircle, GraduationCap, Building2, Trophy, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  const { t, dir } = useLanguage()

  const stats = [
    { icon: GraduationCap, value: "10,000+", label: t.hero.studentsPlaced },
    { icon: Building2, value: "500+", label: t.hero.partnerUniversities },
    { icon: Trophy, value: "98%", label: t.hero.successRate },
    { icon: Clock, value: "9+", label: t.hero.yearsExperience },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Students celebrating graduation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
        <div className="absolute inset-0 grid-pattern" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-glow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[150px] animate-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container relative z-10 px-4 py-20 md:py-32 mx-auto max-w-7xl">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-foreground/90">{t.hero.badge}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            <span className="text-foreground">{t.hero.title}</span>
            <br />
            <span className="gradient-text">{t.hero.titleHighlight}</span>
            <br />
            <span className="text-foreground">{t.hero.titleEnd}</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="gold-gradient text-primary-foreground hover:opacity-90 transition-all duration-300 px-8 py-6 text-lg font-semibold shadow-lg shadow-primary/25 w-full sm:w-auto"
              asChild
            >
              <Link href="#apply">
                {t.hero.applyNow}
                <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${dir === "rtl" ? "mr-2 rotate-180" : "ml-2"}`} />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border/50 hover:bg-secondary/50 px-8 py-6 text-lg w-full sm:w-auto"
              asChild
            >
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <MessageCircle className={`w-5 h-5 ${dir === "rtl" ? "ml-2" : "mr-2"}`} />
                {t.hero.chatWhatsApp}
              </a>
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 text-center hover:bg-secondary/30 transition-all duration-300 group"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
