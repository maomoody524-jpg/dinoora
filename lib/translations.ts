export type Locale = "en" | "ar"

export const translations = {
  en: {
    // Header
    nav: {
      whyUs: "Why DINNOORA",
      howItWorks: "Our Process",
      services: "Services",
      destinations: "Destinations",
      programs: "Programs",
      testimonials: "Success Stories",
      contact: "Contact",
      applyNow: "Start Your Journey",
    },
    // Hero
    hero: {
      badge: "The #1 Choice for Arab Students Studying in China",
      title: "Transform Your Future with",
      titleHighlight: "World-Class Education",
      titleEnd: "in China",
      description: "DINNOORA is your premium gateway to top Chinese universities. We provide complete support from admission to graduation - visas, accommodation, airport pickup, and continuous follow-up. Your success is our commitment.",
      applyNow: "Apply Now - Free Consultation",
      chatWhatsApp: "WhatsApp Us Directly",
      studentsPlaced: "Successful Students",
      partnerUniversities: "Partner Universities",
      successRate: "Success Rate",
      yearsExperience: "Years of Excellence",
    },
    // Why Choose Us
    whyChooseUs: {
      label: "The DINNOORA Difference",
      title: "Why 10,000+ Students Trust Us",
      description: "We don't just help you apply - we ensure your success. Our proven track record and dedicated team make your study abroad dreams a reality.",
      features: {
        directAdmission: {
          title: "Direct University Partnerships",
          description: "Exclusive agreements with 500+ top Chinese universities. Skip the middlemen and get priority admission processing.",
        },
        fastProcessing: {
          title: "Guaranteed Fast Processing",
          description: "Average admission time of just 2-3 weeks. We expedite every step so you can start your journey sooner.",
        },
        fullSupport: {
          title: "360° Student Support",
          description: "From your first inquiry to graduation day - we're with you. Airport pickup, accommodation, registration, and ongoing mentorship.",
        },
        globalNetwork: {
          title: "Scholarship Experts",
          description: "We've secured over $15 million in scholarships for our students. Full and partial funding opportunities available.",
        },
        secureTrusted: {
          title: "Licensed & Certified",
          description: "Officially recognized education consultancy with government certifications. Your documents are in safe, professional hands.",
        },
        dedicatedAdvisors: {
          title: "Arabic-Speaking Advisors",
          description: "Native Arabic speakers who understand your culture and needs. 24/7 support in your language throughout your journey.",
        },
      },
    },
    // How It Works
    howItWorks: {
      label: "Your Journey With Us",
      title: "From Dream to Reality in 6 Steps",
      description: "Our streamlined process has helped thousands of students successfully enroll in their dream universities.",
      steps: {
        submit: {
          title: "Free Consultation",
          description: "Share your goals, budget, and preferences. We'll create a personalized university shortlist within 24 hours.",
        },
        match: {
          title: "University Matching",
          description: "Our experts analyze 50+ factors to match you with universities where you'll thrive academically and personally.",
        },
        apply: {
          title: "Application Handling",
          description: "We prepare and submit your applications with precision. Document preparation, translation, and authentication included.",
        },
        acceptance: {
          title: "Acceptance & Scholarship",
          description: "Receive your acceptance letter! We also negotiate scholarships and financial aid on your behalf.",
        },
        visa: {
          title: "Visa Success",
          description: "98% visa approval rate. Complete guidance, interview preparation, and document verification.",
        },
        travel: {
          title: "Welcome to China",
          description: "VIP airport pickup, accommodation setup, university registration, and city orientation included.",
        },
      },
    },
    // Services
    services: {
      label: "Premium Services",
      title: "Everything You Need for Success",
      description: "Comprehensive end-to-end services designed for ambitious students who want the best.",
      items: {
        admission: {
          title: "University Admission",
          description: "Priority applications to 500+ Chinese universities. Program selection guidance, document preparation, and direct communication with admissions offices.",
        },
        visa: {
          title: "Visa Processing",
          description: "98% success rate. Complete document preparation, embassy guidance, interview coaching, and appointment scheduling. We handle everything.",
        },
        documents: {
          title: "Document Services",
          description: "Professional translation, notarization, authentication, and verification. Chinese embassy attestation and Ministry of Foreign Affairs processing.",
        },
        accommodation: {
          title: "Housing Solutions",
          description: "University dormitories or private apartments. We inspect, negotiate, and secure the best housing options near your campus.",
        },
        airport: {
          title: "VIP Airport Service",
          description: "Personal meet and greet at the airport. Comfortable transportation to your accommodation. 24/7 arrival support.",
        },
        followup: {
          title: "Ongoing Support",
          description: "Monthly check-ins, academic guidance, emergency assistance, and career advice throughout your studies. We're always here for you.",
        },
      },
    },
    // Destinations
    destinations: {
      label: "Study Destinations",
      title: "Premier Education Destinations",
      description: "Choose from three world-class countries offering exceptional education and life experiences.",
      universities: "Universities",
      explore: "Explore Programs",
      featured: "Featured Destination",
      countries: {
        china: {
          name: "China",
          tagline: "The Future of Global Education",
          description: "Home to 7 of the world's top 100 universities. Study cutting-edge technology, medicine, and business in the world's fastest-growing economy. Affordable tuition with world-class facilities.",
          highlights: ["Top 100 World Universities", "CSC Scholarships Available", "MBBS in English", "Tech & Innovation Hub"],
          stats: {
            universities: "200+",
            programs: "5000+",
            scholarships: "Full Funding Available",
          },
        },
        malaysia: {
          name: "Malaysia",
          tagline: "Where East Meets West",
          description: "UK and Australian university branches in a tropical paradise. English-taught programs, multicultural environment, and affordable living costs make Malaysia perfect for international students.",
          highlights: ["UK University Campuses", "100% English Programs", "Halal Lifestyle", "Low Cost of Living"],
          stats: {
            universities: "50+",
            programs: "1500+",
            scholarships: "Merit-Based",
          },
        },
        turkey: {
          name: "Turkey",
          tagline: "Bridge Between Continents",
          description: "European-quality education at affordable costs. Rich history, vibrant culture, and modern universities make Turkey an ideal destination for Arab students.",
          highlights: ["European Standards", "Turkish Government Scholarships", "Cultural Familiarity", "Strategic Location"],
          stats: {
            universities: "100+",
            programs: "3000+",
            scholarships: "Government Funded",
          },
        },
      },
    },
    // Programs
    programs: {
      label: "Academic Programs",
      title: "World-Class Programs Await You",
      description: "From MBBS to AI Engineering, find the perfect program to launch your career.",
      viewAll: "View All Programs",
      items: {
        engineering: {
          title: "Engineering & Technology",
          description: "Study at universities ranked in the global top 50 for engineering. Cutting-edge labs and industry partnerships.",
          courses: ["Civil Engineering", "Mechanical Engineering", "Electrical Engineering", "Computer Engineering"],
          stats: { duration: "4 Years", language: "English/Chinese", scholarship: "Up to 100%" },
        },
        medicine: {
          title: "Medicine & Healthcare",
          description: "WHO-recognized MBBS programs taught in English. Clinical training in state-of-the-art hospitals.",
          courses: ["MBBS (English Medium)", "Pharmacy", "Nursing", "Traditional Chinese Medicine"],
          stats: { duration: "5-6 Years", language: "English", scholarship: "Up to 100%" },
        },
        business: {
          title: "Business & Management",
          description: "Learn from world-class faculty. Internship opportunities with Fortune 500 companies in China.",
          courses: ["MBA", "International Finance", "Marketing", "E-Commerce"],
          stats: { duration: "2-4 Years", language: "English", scholarship: "Up to 75%" },
        },
        it: {
          title: "AI & Computer Science",
          description: "Study AI where it's being revolutionized. Access to leading research labs and tech giants.",
          courses: ["Artificial Intelligence", "Data Science", "Cybersecurity", "Software Engineering"],
          stats: { duration: "4 Years", language: "English", scholarship: "Up to 100%" },
        },
        architecture: {
          title: "Architecture & Design",
          description: "Blend ancient wisdom with modern innovation. Study in cities that showcase architectural marvels.",
          courses: ["Architecture", "Urban Planning", "Interior Design", "Landscape Architecture"],
          stats: { duration: "4-5 Years", language: "English/Chinese", scholarship: "Up to 50%" },
        },
        arts: {
          title: "Arts & Media",
          description: "Express your creativity in a culture with 5000 years of artistic heritage.",
          courses: ["Fine Arts", "Graphic Design", "Film Production", "Digital Media"],
          stats: { duration: "4 Years", language: "English/Chinese", scholarship: "Up to 50%" },
        },
      },
    },
    // Universities
    universities: {
      label: "Partner Universities",
      title: "500+ World-Class Universities",
      description: "From Tsinghua to Peking University, access China's most prestigious institutions.",
      moreUniversities: "And 488+ more elite universities across China, Malaysia, and Turkey",
      topRanked: "Top Ranked",
      viewDetails: "View Programs",
    },
    // Testimonials
    testimonials: {
      label: "Success Stories",
      title: "Students Who Made It",
      description: "Real stories from students who transformed their futures with DINNOORA.",
      readMore: "Read Full Story",
    },
    // CTA
    cta: {
      title: "Your Dream University Awaits",
      description: "Join the 10,000+ students who trusted DINNOORA to guide them to success. Free consultation, no obligations - just expert guidance to your future.",
      applyNow: "Start Free Application",
      whatsapp: "WhatsApp: +86 XXX XXXX",
      benefits: {
        consultation: "Free Expert Consultation",
        noFees: "No Hidden Fees",
        support: "24/7 WhatsApp Support",
        guarantee: "Acceptance Guarantee",
      },
    },
    // Application Form
    applicationForm: {
      label: "Free Application",
      title: "Begin Your Journey Today",
      description: "Complete this form and receive a personalized university recommendation within 24 hours. Our experts will contact you to discuss scholarships and the best programs for your goals.",
      benefits: {
        consultation: "Free one-on-one consultation with education experts",
        recommendations: "Personalized university shortlist based on your profile",
        costs: "Complete cost breakdown and scholarship opportunities",
        response: "Guaranteed response within 24 hours",
      },
      form: {
        fullName: "Full Name",
        fullNamePlaceholder: "Enter your full name as on passport",
        country: "Nationality",
        countryPlaceholder: "Select your country",
        major: "Preferred Program",
        majorPlaceholder: "What do you want to study?",
        whatsapp: "WhatsApp Number",
        whatsappPlaceholder: "+XXX XXX XXX XXXX",
        destination: "Preferred Destination",
        destinationPlaceholder: "Where do you want to study?",
        submit: "Get Free Consultation",
        submitting: "Processing...",
        agreement: "By submitting, you agree to receive information about study opportunities. Your data is protected.",
      },
      success: {
        title: "Application Received!",
        description: "Thank you for choosing DINNOORA. Our expert advisors will contact you within 24 hours with personalized university recommendations and scholarship information.",
        submitAnother: "Submit Another Application",
      },
    },
    // Footer
    footer: {
      description: "DINNOORA - Your trusted partner for international education since 2015. We've helped over 10,000 students achieve their dreams of studying abroad.",
      quickLinks: "Quick Links",
      destinations: "Destinations",
      studyIn: "Study in",
      servicesTitle: "Services",
      contactUs: "Contact Us",
      copyright: "All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      whatsappSupport: "WhatsApp Support",
      tagline: "Your Gateway to Global Education",
      certifications: "Licensed & Certified Education Consultancy",
    },
  },
  ar: {
    // Header
    nav: {
      whyUs: "لماذا دينورا",
      howItWorks: "خطوات العمل",
      services: "خدماتنا",
      destinations: "الوجهات",
      programs: "البرامج",
      testimonials: "قصص النجاح",
      contact: "تواصل معنا",
      applyNow: "ابدأ رحلتك",
    },
    // Hero
    hero: {
      badge: "الخيار الأول للطلاب العرب للدراسة في الصين",
      title: "حول مستقبلك مع",
      titleHighlight: "تعليم عالمي المستوى",
      titleEnd: "في الصين",
      description: "دينورا هي بوابتك الاحترافية لأفضل الجامعات الصينية. نقدم دعماً كاملاً من القبول حتى التخرج - التأشيرات، السكن، الاستقبال من المطار، والمتابعة المستمرة. نجاحك هو التزامنا.",
      applyNow: "قدم الآن - استشارة مجانية",
      chatWhatsApp: "تواصل معنا عبر واتساب",
      studentsPlaced: "طالب ناجح",
      partnerUniversities: "جامعة شريكة",
      successRate: "نسبة النجاح",
      yearsExperience: "سنوات من التميز",
    },
    // Why Choose Us
    whyChooseUs: {
      label: "تميز دينورا",
      title: "لماذا يثق بنا أكثر من 10,000 طالب",
      description: "نحن لا نساعدك فقط في التقديم - نضمن نجاحك. سجلنا الحافل وفريقنا المتفاني يحولون أحلام الدراسة في الخارج إلى واقع.",
      features: {
        directAdmission: {
          title: "شراكات جامعية مباشرة",
          description: "اتفاقيات حصرية مع أكثر من 500 جامعة صينية متميزة. تجاوز الوسطاء واحصل على معالجة قبول ذات أولوية.",
        },
        fastProcessing: {
          title: "معالجة سريعة مضمونة",
          description: "متوسط وقت القبول 2-3 أسابيع فقط. نُسرّع كل خطوة لتبدأ رحلتك بأسرع وقت.",
        },
        fullSupport: {
          title: "دعم شامل 360°",
          description: "من استفسارك الأول حتى يوم التخرج - نحن معك. الاستقبال من المطار، السكن، التسجيل، والإرشاد المستمر.",
        },
        globalNetwork: {
          title: "خبراء المنح الدراسية",
          description: "حصّلنا أكثر من 15 مليون دولار كمنح لطلابنا. فرص تمويل كامل وجزئي متاحة.",
        },
        secureTrusted: {
          title: "مرخصون ومعتمدون",
          description: "شركة استشارات تعليمية معترف بها رسمياً بشهادات حكومية. وثائقك في أيدٍ آمنة ومحترفة.",
        },
        dedicatedAdvisors: {
          title: "مستشارون ناطقون بالعربية",
          description: "متحدثون أصليون بالعربية يفهمون ثقافتك واحتياجاتك. دعم على مدار الساعة بلغتك طوال رحلتك.",
        },
      },
    },
    // How It Works
    howItWorks: {
      label: "رحلتك معنا",
      title: "من الحلم إلى الواقع في 6 خطوات",
      description: "عمليتنا المبسطة ساعدت آلاف الطلاب على الالتحاق بنجاح بجامعات أحلامهم.",
      steps: {
        submit: {
          title: "استشارة مجانية",
          description: "شاركنا أهدافك وميزانيتك وتفضيلاتك. سنعد قائمة جامعات مخصصة خلال 24 ساعة.",
        },
        match: {
          title: "مطابقة الجامعات",
          description: "خبراؤنا يحللون أكثر من 50 عاملاً لمطابقتك مع جامعات ستزدهر فيها أكاديمياً وشخصياً.",
        },
        apply: {
          title: "إدارة الطلبات",
          description: "نُعد ونقدم طلباتك بدقة متناهية. إعداد الوثائق والترجمة والتوثيق مشمولة.",
        },
        acceptance: {
          title: "القبول والمنحة",
          description: "استلم خطاب قبولك! نتفاوض أيضاً على المنح والمساعدات المالية نيابةً عنك.",
        },
        visa: {
          title: "نجاح التأشيرة",
          description: "نسبة قبول تأشيرات 98%. إرشاد كامل، تحضير للمقابلة، والتحقق من الوثائق.",
        },
        travel: {
          title: "مرحباً بك في الصين",
          description: "استقبال VIP من المطار، إعداد السكن، التسجيل الجامعي، وجولة تعريفية بالمدينة.",
        },
      },
    },
    // Services
    services: {
      label: "خدمات متميزة",
      title: "كل ما تحتاجه للنجاح",
      description: "خدمات شاملة من البداية للنهاية مصممة للطلاب الطموحين الذين يريدون الأفضل.",
      items: {
        admission: {
          title: "القبول الجامعي",
          description: "طلبات ذات أولوية لأكثر من 500 جامعة صينية. إرشاد في اختيار البرنامج، إعداد الوثائق، والتواصل المباشر مع مكاتب القبول.",
        },
        visa: {
          title: "معالجة التأشيرة",
          description: "نسبة نجاح 98%. إعداد كامل للوثائق، إرشاد السفارة، تدريب على المقابلة، وجدولة المواعيد. نتولى كل شيء.",
        },
        documents: {
          title: "خدمات الوثائق",
          description: "ترجمة احترافية، توثيق، تصديق، وتحقق. تصديق السفارة الصينية ومعالجة وزارة الخارجية.",
        },
        accommodation: {
          title: "حلول السكن",
          description: "سكن جامعي أو شقق خاصة. نفحص ونتفاوض ونؤمن أفضل خيارات السكن قرب حرمك الجامعي.",
        },
        airport: {
          title: "خدمة VIP من المطار",
          description: "استقبال شخصي في المطار. نقل مريح إلى سكنك. دعم وصول على مدار الساعة.",
        },
        followup: {
          title: "دعم مستمر",
          description: "متابعة شهرية، إرشاد أكاديمي، مساعدة طوارئ، ونصائح مهنية طوال دراستك. نحن دائماً هنا من أجلك.",
        },
      },
    },
    // Destinations
    destinations: {
      label: "وجهات الدراسة",
      title: "وجهات تعليمية متميزة",
      description: "اختر من ثلاث دول عالمية تقدم تعليماً وتجارب حياتية استثنائية.",
      universities: "جامعة",
      explore: "استكشف البرامج",
      featured: "الوجهة المميزة",
      countries: {
        china: {
          name: "الصين",
          tagline: "مستقبل التعليم العالمي",
          description: "موطن 7 من أفضل 100 جامعة في العالم. ادرس التكنولوجيا المتطورة والطب والأعمال في أسرع اقتصاد نمواً في العالم. رسوم دراسية معقولة بمرافق عالمية.",
          highlights: ["جامعات ضمن أفضل 100 عالمياً", "منح CSC متاحة", "الطب البشري بالإنجليزية", "مركز التقنية والابتكار"],
          stats: {
            universities: "+200",
            programs: "+5000",
            scholarships: "تمويل كامل متاح",
          },
        },
        malaysia: {
          name: "ماليزيا",
          tagline: "حيث يلتقي الشرق بالغرب",
          description: "فروع جامعات بريطانية وأسترالية في جنة استوائية. برامج بالإنجليزية، بيئة متعددة الثقافات، وتكاليف معيشة منخفضة تجعل ماليزيا مثالية للطلاب الدوليين.",
          highlights: ["حرم جامعات بريطانية", "برامج إنجليزية 100%", "نمط حياة حلال", "تكلفة معيشة منخفضة"],
          stats: {
            universities: "+50",
            programs: "+1500",
            scholarships: "على أساس الجدارة",
          },
        },
        turkey: {
          name: "تركيا",
          tagline: "جسر بين القارات",
          description: "تعليم بجودة أوروبية بتكاليف معقولة. تاريخ عريق، ثقافة نابضة بالحياة، وجامعات حديثة تجعل تركيا وجهة مثالية للطلاب العرب.",
          highlights: ["معايير أوروبية", "منح الحكومة التركية", "قرب ثقافي", "موقع استراتيجي"],
          stats: {
            universities: "+100",
            programs: "+3000",
            scholarships: "تمويل حكومي",
          },
        },
      },
    },
    // Programs
    programs: {
      label: "البرامج الأكاديمية",
      title: "برامج عالمية المستوى تنتظرك",
      description: "من الطب البشري إلى هندسة الذكاء الاصطناعي، اعثر على البرنامج المثالي لانطلاق مسيرتك المهنية.",
      viewAll: "عرض جميع البرامج",
      items: {
        engineering: {
          title: "الهندسة والتكنولوجيا",
          description: "ادرس في جامعات مصنفة ضمن أفضل 50 عالمياً في الهندسة. مختبرات متطورة وشراكات صناعية.",
          courses: ["الهندسة المدنية", "الهندسة الميكانيكية", "الهندسة الكهربائية", "هندسة الحاسوب"],
          stats: { duration: "4 سنوات", language: "إنجليزي/صيني", scholarship: "حتى 100%" },
        },
        medicine: {
          title: "الطب والصحة",
          description: "برامج طب بشري معترف بها من منظمة الصحة العالمية وتُدرّس بالإنجليزية. تدريب سريري في مستشفيات متطورة.",
          courses: ["الطب البشري (إنجليزي)", "الصيدلة", "التمريض", "الطب الصيني التقليدي"],
          stats: { duration: "5-6 سنوات", language: "إنجليزي", scholarship: "حتى 100%" },
        },
        business: {
          title: "إدارة الأعمال",
          description: "تعلم من أساتذة عالميين. فرص تدريب مع شركات فورتشن 500 في الصين.",
          courses: ["ماجستير إدارة الأعمال", "التمويل الدولي", "التسويق", "التجارة الإلكترونية"],
          stats: { duration: "2-4 سنوات", language: "إنجليزي", scholarship: "حتى 75%" },
        },
        it: {
          title: "الذكاء الاصطناعي وعلوم الحاسوب",
          description: "ادرس الذكاء الاصطناعي حيث تحدث الثورة. وصول لمختبرات أبحاث رائدة وعمالقة التقنية.",
          courses: ["الذكاء الاصطناعي", "علم البيانات", "الأمن السيبراني", "هندسة البرمجيات"],
          stats: { duration: "4 سنوات", language: "إنجليزي", scholarship: "حتى 100%" },
        },
        architecture: {
          title: "الهندسة المعمارية والتصميم",
          description: "امزج الحكمة القديمة مع الابتكار الحديث. ادرس في مدن تعرض روائع معمارية.",
          courses: ["الهندسة المعمارية", "التخطيط العمراني", "التصميم الداخلي", "هندسة المناظر الطبيعية"],
          stats: { duration: "4-5 سنوات", language: "إنجليزي/صيني", scholarship: "حتى 50%" },
        },
        arts: {
          title: "الفنون والإعلام",
          description: "عبّر عن إبداعك في ثقافة بتراث فني يمتد 5000 عام.",
          courses: ["الفنون الجميلة", "التصميم الجرافيكي", "الإنتاج السينمائي", "الإعلام الرقمي"],
          stats: { duration: "4 سنوات", language: "إنجليزي/صيني", scholarship: "حتى 50%" },
        },
      },
    },
    // Universities
    universities: {
      label: "الجامعات الشريكة",
      title: "أكثر من 500 جامعة عالمية",
      description: "من جامعة تسينغهوا إلى جامعة بكين، استفد من أرقى المؤسسات في الصين.",
      moreUniversities: "وأكثر من 488 جامعة نخبوية أخرى في الصين وماليزيا وتركيا",
      topRanked: "الأعلى تصنيفاً",
      viewDetails: "عرض البرامج",
    },
    // Testimonials
    testimonials: {
      label: "قصص النجاح",
      title: "طلاب حققوا أحلامهم",
      description: "قصص حقيقية من طلاب غيروا مستقبلهم مع دينورا.",
      readMore: "اقرأ القصة كاملة",
    },
    // CTA
    cta: {
      title: "جامعة أحلامك تنتظرك",
      description: "انضم لأكثر من 10,000 طالب وثقوا بدينورا لإرشادهم نحو النجاح. استشارة مجانية، بدون التزامات - فقط إرشاد خبراء لمستقبلك.",
      applyNow: "ابدأ التقديم المجاني",
      whatsapp: "واتساب: +86 XXX XXXX",
      benefits: {
        consultation: "استشارة خبراء مجانية",
        noFees: "بدون رسوم خفية",
        support: "دعم واتساب 24/7",
        guarantee: "ضمان القبول",
      },
    },
    // Application Form
    applicationForm: {
      label: "تقديم مجاني",
      title: "ابدأ رحلتك اليوم",
      description: "أكمل هذا النموذج واحصل على توصية جامعية مخصصة خلال 24 ساعة. سيتواصل معك خبراؤنا لمناقشة المنح وأفضل البرامج لأهدافك.",
      benefits: {
        consultation: "استشارة فردية مجانية مع خبراء التعليم",
        recommendations: "قائمة جامعات مخصصة بناءً على ملفك",
        costs: "تفصيل كامل للتكاليف وفرص المنح",
        response: "رد مضمون خلال 24 ساعة",
      },
      form: {
        fullName: "الاسم الكامل",
        fullNamePlaceholder: "أدخل اسمك الكامل كما في جواز السفر",
        country: "الجنسية",
        countryPlaceholder: "اختر دولتك",
        major: "البرنامج المفضل",
        majorPlaceholder: "ماذا تريد أن تدرس؟",
        whatsapp: "رقم واتساب",
        whatsappPlaceholder: "+XXX XXX XXX XXXX",
        destination: "الوجهة المفضلة",
        destinationPlaceholder: "أين تريد أن تدرس؟",
        submit: "احصل على استشارة مجانية",
        submitting: "جاري المعالجة...",
        agreement: "بإرسالك للنموذج، توافق على تلقي معلومات عن فرص الدراسة. بياناتك محمية.",
      },
      success: {
        title: "تم استلام الطلب!",
        description: "شكراً لاختيارك دينورا. سيتواصل معك مستشارونا الخبراء خلال 24 ساعة بتوصيات جامعية مخصصة ومعلومات المنح.",
        submitAnother: "تقديم طلب آخر",
      },
    },
    // Footer
    footer: {
      description: "دينورا - شريكك الموثوق للتعليم الدولي منذ 2015. ساعدنا أكثر من 10,000 طالب على تحقيق أحلامهم في الدراسة بالخارج.",
      quickLinks: "روابط سريعة",
      destinations: "الوجهات",
      studyIn: "ادرس في",
      servicesTitle: "الخدمات",
      contactUs: "تواصل معنا",
      copyright: "جميع الحقوق محفوظة.",
      privacyPolicy: "سياسة الخصوصية",
      termsOfService: "شروط الخدمة",
      whatsappSupport: "دعم واتساب",
      tagline: "بوابتك للتعليم العالمي",
      certifications: "شركة استشارات تعليمية مرخصة ومعتمدة",
    },
  },
}

export type Translations = typeof translations.en
