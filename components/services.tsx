"use client"

import { GraduationCap, Stamp, FileStack, Home, Car, UserCheck, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Services() {
  const { t, dir } = useLanguage()
  
  const services = [
    {
      icon: GraduationCap,
      key: "admission" as const,
      gradient: "from-amber-500/20 to-orange-500/20",
      iconBg: "bg-amber-500/10 text-amber-400 group-hover:bg-amber-500",
    },
    {
      icon: Stamp,
      key: "visa" as const,
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconBg: "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500",
    },
    {
      icon: FileStack,
      key: "documents" as const,
      gradient: "from-emerald-500/20 to-teal-500/20",
      iconBg: "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500",
    },
    {
      icon: Home,
      key: "accommodation" as const,
      gradient: "from-purple-500/20 to-violet-500/20",
      iconBg: "bg-purple-500/10 text-purple-400 group-hover:bg-purple-500",
    },
    {
      icon: Car,
      key: "airport" as const,
      gradient: "from-rose-500/20 to-red-500/20",
      iconBg: "bg-rose-500/10 text-rose-400 group-hover:bg-rose-500",
    },
    {
      icon: UserCheck,
      key: "followup" as const,
      gradient: "from-indigo-500/20 to-violet-500/20",
      iconBg: "bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500",
    },
  ]

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] translate-x-1/2" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm font-medium text-primary">{t.services.label}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-6">
            <span className="text-foreground">{t.services.title.split(" ").slice(0, -1).join(" ")} </span>
            <span className="gradient-text">{t.services.title.split(" ").slice(-1)}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const data = t.services.items[service.key]
            return (
              <div
                key={index}
                className="group relative rounded-3xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card/50 hover:shadow-2xl hover:shadow-primary/5"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${service.iconBg} transition-all duration-300 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg`}>
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-foreground">{data.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{data.description}</p>
                  
                  {/* Learn More Link */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary hover:bg-transparent group/btn" asChild>
                      <Link href="#apply">
                        <span className="text-sm font-medium">{t.services.learnMore}</span>
                        <ArrowRight className={`w-4 h-4 transition-transform group-hover/btn:translate-x-1 ${dir === "rtl" ? "mr-2 rotate-180 group-hover/btn:-translate-x-1" : "ml-2"}`} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Button className="gold-gradient text-primary-foreground hover:opacity-90 px-8 py-6 text-lg font-semibold shadow-lg shadow-primary/25" asChild>
            <Link href="#apply">
              {t.services.cta}
              <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "mr-2 rotate-180" : "ml-2"}`} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
