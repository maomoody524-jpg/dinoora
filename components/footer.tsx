"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, MessageCircle, GraduationCap, Instagram, Facebook, Linkedin, Youtube } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t, locale } = useLanguage()
  
  const quickLinks = [
    { href: "#why-us", label: t.nav.whyUs },
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#services", label: t.nav.services },
    { href: "#programs", label: t.nav.programs },
    { href: "#testimonials", label: t.nav.testimonials },
  ]

  const destinations = [
    { href: "#destinations", label: `${t.footer.studyIn} ${t.destinations.countries.china.name}` },
    { href: "#destinations", label: `${t.footer.studyIn} ${t.destinations.countries.malaysia.name}` },
    { href: "#destinations", label: `${t.footer.studyIn} ${t.destinations.countries.turkey.name}` },
  ]

  const services = [
    { href: "#services", label: t.services.items.admission.title },
    { href: "#services", label: t.services.items.visa.title },
    { href: "#services", label: t.services.items.accommodation.title },
    { href: "#services", label: t.services.items.documents.title },
  ]

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="relative border-t border-border/50 bg-card/30 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold gradient-text">DINNOORA</span>
                <span className="text-xs text-muted-foreground tracking-wider">{t.footer.tagline}</span>
              </div>
            </Link>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              {t.footer.description}
            </p>
            
            {/* Certifications */}
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
              <span className="text-xs font-medium text-primary">{t.footer.certifications}</span>
            </div>
            
            {/* Social Links */}
            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/50 border border-border/50 text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-105"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-6">{t.footer.quickLinks}</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations & Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-6">{t.footer.destinations}</h3>
            <ul className="space-y-4 mb-8">
              {destinations.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-6">{t.footer.servicesTitle}</h3>
            <ul className="space-y-4">
              {services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-6">{t.footer.contactUs}</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/50 border border-border/50 text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-muted-foreground text-sm leading-relaxed">
                  {locale === "ar" ? (
                    <>123 شارع التعليم، جناح 500<br />دبي، الإمارات</>
                  ) : (
                    <>123 Education Street, Suite 500<br />Dubai, UAE</>
                  )}
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/50 border border-border/50 text-primary shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary text-sm" dir="ltr">
                  +1 234 567 890
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/50 border border-border/50 text-primary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <a href="mailto:contact@dinnoora.com" className="text-muted-foreground hover:text-primary text-sm">
                  contact@dinnoora.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl gold-gradient text-primary-foreground shrink-0">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary text-sm font-medium">
                  {t.footer.whatsappSupport}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} DINNOORA. {t.footer.copyright}
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t.footer.privacyPolicy}
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t.footer.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
