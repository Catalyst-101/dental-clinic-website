// Structured Mock Data for DentaElite Clinic

export const services = [
  {
    id: "dental-cleaning",
    title: "Dental Cleaning",
    icon: "cleaning_services",
    summary: "Thorough professional prophylaxis to remove plaque and tartar, ensuring lasting oral health.",
    tagline: "PREVENTATIVE CARE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB915Bp7pFKp2uU9PokgqpD8VBHEGetFyWvgukL9ljnwrl2m7mtMmK_1BJh29znIdC7Kn_wBXLdMJeJqsl4MGrVh79hw1uXE5iRxqfGCxKryzTAVhIqUXo-G6Pp-8THGFHo7WvZ00OO6b2HiwX-i8BUDt6EgZH6FsKKr9N3nIgSTj-YIUo9eZ6zn9LeUyM-ncBwos3Rg8jhZ8TZEvz1ZiQGwWFqaSXSwyr3pRAajSsWRQIA0l9aQ3MrW5vsAA-WvjqAdqbw6IvxqNJm",
    overview: "Maintain a radiant smile and fresh breath with our deep cleaning treatments. Professional cleaning removes calcified plaque that normal brushing cannot reach.",
    description: "Our hygiene specialists use ultrasound scaling and gentle airflow polishing to thoroughly refresh your teeth and support healthy gums. It is the cornerstone of lifelong oral health.",
    bulletPoints: [
      "Advanced Ultrasonic Scaling",
      "Stain-Removing Airflow Polish",
      "Fluoride Treatment Included"
    ],
    benefits: [
      {
        title: "Plaque Removal",
        description: "Eliminates hard tartar and harmful bacteria in hard-to-reach pockets.",
        icon: "health_and_safety"
      },
      {
        title: "Fresh Breath",
        description: "Addresses the root causes of chronic bad breath for long-lasting freshness.",
        icon: "shield"
      },
      {
        title: "Stain Reduction",
        description: "Gently lifts surface stains from coffee, tea, and food.",
        icon: "verified"
      }
    ],
    steps: [
      { number: "01.", title: "Examination", description: "A detailed visual check of your teeth and gum health using intraoral cameras.", icon: "clinical_notes" },
      { number: "02.", title: "Scaling & Polishing", description: "Removing plaque build-up and polishing the enamel for a smooth finish.", icon: "medical_services" },
      { number: "03.", title: "Protection", description: "Applying a mineralizing fluoride varnish to strengthen tooth enamel.", icon: "celebration" }
    ],
    recovery: {
      intro: "No recovery time is needed for dental cleaning! You can return to your day immediately with just minor temporary sensitivity.",
      tips: [
        { icon: "restaurant", text: "Avoid highly staining foods or drinks for at least 2 hours post-visit." },
        { icon: "pill", text: "Use sensitive toothpaste if you experience mild temperature sensitivity." },
        { icon: "dentistry", text: "Maintain twice-daily brushing and daily flossing to preserve clean surfaces." }
      ]
    },
    faqs: [
      { question: "How often should I get a dental cleaning?", answer: "We recommend a professional cleaning every 6 months to maintain optimal health and catch issues early." },
      { question: "Does scaling damage the tooth enamel?", answer: "No, professional scaling instruments are designed to remove hard deposits without scratching or damaging the natural enamel." }
    ]
  },
  {
    id: "root-canal",
    title: "Root Canal",
    icon: "biotech",
    summary: "Painless endodontic treatments using microscopic precision to save damaged or infected teeth.",
    tagline: "ENDODONTIC CLINIC",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgJkvwTQkBmWhvNddpiKhQT4ExbXmgV-IcWAxfQ9l0TWisZSJy5yURI3jAMG4PII8GnNlA-g_T1fCekMmOmOZ3JYarrfpb_r9zssHvsM6wWgDCbKa2vBfYdB1l4wso4OshWObbhCo-jP2-TDu_2WdO5ToDwZhFDZTmLN5MXUVuUqDs4k-epH4P_EEQBpV0ZL97ZNBMPXiJEeFgfn5R5zDnAccJISaSCkeBCgKvrMu2sRB2ZVrVqgl1CMO4t2KNBRKXRA4rbOT0L0I1",
    overview: "Save your natural tooth and eliminate severe pain with our advanced endodontic care. Contrary to old myths, modern root canal therapy is comfortable and routine.",
    description: "Our specialists use state-of-the-art microscopic technology to clean, disinfect, and seal infected pulp. We ensure your procedure is precise, efficient, and tailored to your unique dental anatomy.",
    bulletPoints: [
      "Advanced Local Anesthesia",
      "Digital Micro-Imaging",
      "Single-Visit Treatment Options"
    ],
    benefits: [
      {
        title: "Pain Relief",
        description: "Immediate resolution of severe toothaches and sensitivity caused by pulp inflammation.",
        icon: "health_and_safety"
      },
      {
        title: "Tooth Preservation",
        description: "Protect your natural smile and prevent the need for more complex implants or bridges.",
        icon: "shield"
      },
      {
        title: "Better Oral Health",
        description: "Stops the spread of infection to surrounding teeth and bone tissue effectively.",
        icon: "verified"
      }
    ],
    steps: [
      { number: "01.", title: "Consultation", description: "Detailed assessment using 3D digital X-rays to map the infection and plan the procedure precisely.", icon: "clinical_notes" },
      { number: "02.", title: "Treatment", description: "Removal of infected pulp, followed by thorough cleaning, disinfecting, and sealing the root canals.", icon: "medical_services" },
      { number: "03.", title: "Follow-up", description: "A permanent crown is placed to restore the tooth's full strength and aesthetic appearance.", icon: "celebration" }
    ],
    recovery: {
      intro: "Most patients return to their normal activities the very next day. While some minor sensitivity is normal, it can be easily managed.",
      tips: [
        { icon: "restaurant", text: "Avoid chewing on the treated tooth until the permanent restoration is placed." },
        { icon: "pill", text: "Manage temporary discomfort with over-the-counter anti-inflammatories as directed." },
        { icon: "dentistry", text: "Maintain regular brushing and flossing to ensure long-term health of the restoration." }
      ]
    },
    faqs: [
      { question: "Is a root canal painful?", answer: "No. Modern root canal therapy is performed under local anesthesia, making the procedure itself painless. Most patients describe it as being similar to getting a routine filling." },
      { question: "How long does the procedure take?", answer: "Typically, a root canal is completed in one or two appointments of 60 to 90 minutes each, depending on the complexity of the tooth's root system." },
      { question: "Can the tooth still get a cavity after?", answer: "Yes, a root-canaled tooth is still susceptible to decay. It is essential to maintain good oral hygiene and attend regular checkups at DentaElite." }
    ]
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    icon: "settings_backup_restore",
    summary: "Permanent, natural-looking tooth replacements designed for functionality and aesthetics.",
    tagline: "IMPLANTOLOGY",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-y4dtT7cCDmfdv0J_kiX1SMkq9dyKiR0lBSDeb9tnGdzH1lXBswCxajJYP2d_gmCxhYtMOI9yAPZo-3qYrf6MJJuQNKy1OgTzSaEtqyPUauuV_Y-xbwnsk6Ke5CgKg6kJt24irR7jwnlfLWpB7G19bfSPJavK2mojxz3YLdNke-J_uZiHBDHcS8hCL83uJQP-02-vdt2yyKg6wH5hf2sq1DXpQkuo5JlqnioBhChl0hVj3GvRodgpK9pop3Xyezju93ZuVsx158rY",
    overview: "Restore your confidence and chewing ability with dental implants. They function exactly like natural roots to anchor beautiful custom restorations.",
    description: "Using biocompatible titanium posts and detailed surgical planning software, our dental surgeons place implants that integrate fully with the jawbone, offering a permanent solution for missing teeth.",
    bulletPoints: [
      "Guided Surgery Navigation",
      "High-Quality Titanium Posts",
      "Aesthetic Zirconia Crowns"
    ],
    benefits: [
      {
        title: "Bone Preservation",
        description: "Stimulates bone tissue to prevent the facial sagging associated with missing teeth.",
        icon: "health_and_safety"
      },
      {
        title: "Natural Feel",
        description: "Feels, bites, and functions exactly like your natural organic teeth.",
        icon: "shield"
      },
      {
        title: "Lifetime Durability",
        description: "With proper hygiene, the titanium implant post is designed to last a lifetime.",
        icon: "verified"
      }
    ],
    steps: [
      { number: "01.", title: "Digital Mockup", description: "Creating a detailed 3D mapping of the jaw structure to determine ideal placement.", icon: "clinical_notes" },
      { number: "02.", title: "Surgical Placement", description: "Inserting the titanium implant post into the jawbone under highly sterile conditions.", icon: "medical_services" },
      { number: "03.", title: "Restoration", description: "Attaching the final custom-matched ceramic crown after a healing period.", icon: "celebration" }
    ],
    recovery: {
      intro: "Healing takes place over a few months as the bone integrates with the post (osseointegration). Mild swelling is normal in the first few days.",
      tips: [
        { icon: "restaurant", text: "Eat soft foods and avoid extreme hot or cold temperatures for the first week." },
        { icon: "pill", text: "Take prescribed rinse and medication to assist sterile healing." },
        { icon: "dentistry", text: "Avoid direct hard brushing on the surgery site; use the antiseptic rinse instead." }
      ]
    },
    faqs: [
      { question: "How long does a dental implant procedure take?", answer: "The initial surgery takes about 1-2 hours. However, full integration takes 3-6 months before the final crown can be secured." },
      { question: "Am I a candidate for dental implants?", answer: "Most adults with healthy bone density and good systemic health are candidates. If bone density is low, a bone graft may be recommended first." }
    ]
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    icon: "auto_fix_high",
    summary: "Professional-grade bleaching treatments for a radiant, noticeably brighter smile in one session.",
    tagline: "COSMETIC SERVICES",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbLcksa9qb8ToRecav-Tpr66F5Gxw1chRNrTQ__N_Q-d8c7eMEKbIPp55kMHqwkzX0mVF3cBbKAzzyVz20xzFHuBYWTB3FENjRI23u1hl024TrgNTXdbqxFEHuLh2gHPKJLRbaK4cpPkbq_gyAVdi5kHhDt7etg3yir0Ob4HLFYMmPXLoRWZdAcayD6fslk71Y_oTXw_nT9JDIRnxBJHthV99qAeCOsoN_oPXRWwLPPUGg_M_5dWhd4NBJqycYaEWjwnlhqWe1cLa8",
    overview: "Lift deep-set discoloration and get a brilliant, youthful smile. Our professional in-office whitening yields rapid results safely.",
    description: "Using medical-grade whitening gels activated by a specialized blue light, we can safely lift stains from coffee, smoking, and aging by up to 8 shades in under an hour.",
    bulletPoints: [
      "Gum-Shield Protection Tech",
      "Laser-Light Activation",
      "Anti-Sensitivity Treatment Included"
    ],
    benefits: [
      {
        title: "Instant Results",
        description: "Walk out with a noticeably brighter smile in just a single 45-minute treatment.",
        icon: "health_and_safety"
      },
      {
        title: "Safe Formulation",
        description: "Unlike acidic store-bought kits, our pH-balanced gel protects your tooth enamel.",
        icon: "shield"
      },
      {
        title: "Confidence Boost",
        description: "A brighter smile immediately enhances your facial appearance and self-confidence.",
        icon: "verified"
      }
    ],
    steps: [
      { number: "01.", title: "Preparation", description: "Cleaning the teeth and applying a protective barrier over the gums and lips.", icon: "clinical_notes" },
      { number: "02.", title: "Gel Application", description: "Applying the clinical-strength hydrogen peroxide gel activated by LED light.", icon: "medical_services" },
      { number: "03.", title: "Desensitizer", description: "A soothing post-whitening gel is applied to minimize any temporary twinges.", icon: "celebration" }
    ],
    recovery: {
      intro: "No downtime is required, though your teeth may be mildly sensitive to extreme temperatures for 24-48 hours.",
      tips: [
        { icon: "restaurant", text: "Follow the 'white diet' (no berries, red wine, coffee) for 48 hours." },
        { icon: "pill", text: "Avoid acidic fruits and carbonated drinks that can aggravate sensitive pores." },
        { icon: "dentistry", text: "Use a soft brush and lukewarm water when cleaning your teeth." }
      ]
    },
    faqs: [
      { question: "How long do professional whitening results last?", answer: "Results typically last 1 to 2 years, depending on your lifestyle and consumption of staining beverages like coffee and tea." },
      { question: "Will whitening work on crowns or veneers?", answer: "No, whitening treatments only affect natural tooth structure and will not alter the shade of porcelain restorations." }
    ]
  },
  {
    id: "braces-aligners",
    title: "Braces & Aligners",
    icon: "align_vertical_center",
    summary: "Comprehensive orthodontic solutions including traditional braces and clear aligners for all ages.",
    tagline: "ORTHODONTICS",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1wDSCmlDrOwIsdS_PP0llkXLZ2cW_0lV0n4BV2IowuBIognsULRB3BMNJphydRDI7w_Y0oMjkzKH0S0UxbNRNX7D4lK9khyqGJErJZoSCMXk8VK7sN2Fyq2_8CfdQ6RAOJIEdl9GeAMXrkmbElV5g5iYylSb_98g3EgjHyFTGkshAjyLT19IiihgkFl337WJvKiMrdec5tQoYrBENLELfckXTdcVuyL0HiZWLcYjrSKs9tMAcUJRQ1g_3KEmN1SgAKTLMN_hCudJc",
    overview: "Align your teeth and bite for better health and aesthetics. We offer modern ceramic braces as well as virtually invisible clear aligners.",
    description: "Aligners allow you to straighten your teeth discretely. Using advanced digital tracking, we custom-fit clear trays that move your teeth into position step by step.",
    bulletPoints: [
      "Invisalign Diamond Provider",
      "3D Digital Outcome Previews",
      "Custom Aesthetic Brackets"
    ],
    benefits: [
      {
        title: "Easy Hygiene",
        description: "Clear aligners are completely removable, letting you eat, brush, and floss normally.",
        icon: "health_and_safety"
      },
      {
        title: "Discreet Design",
        description: "Ultra-clear polymer structure makes aligners nearly invisible in daily interactions.",
        icon: "shield"
      },
      {
        title: "Optimal Comfort",
        description: "Custom-trimmed to your gum line for smooth, irritation-free orthodontics.",
        icon: "verified"
      }
    ],
    steps: [
      { number: "01.", title: "3D Scan", description: "Scanning your mouth with an iTero scanner—no messy physical molds needed.", icon: "clinical_notes" },
      { number: "02.", title: "Custom Trays", description: "Manufacturing your custom aligners or applying orthodontic brackets to your teeth.", icon: "medical_services" },
      { number: "03.", title: "Progress Checks", description: "Routine visits every 6-8 weeks to check alignment progress and get new trays.", icon: "celebration" }
    ],
    recovery: {
      intro: "Some mild pressure is expected for the first 2-3 days of each new aligner tray or adjustment. This means your teeth are shifting correctly!",
      tips: [
        { icon: "restaurant", text: "Remove aligner trays whenever eating or drinking anything other than cold water." },
        { icon: "pill", text: "Rinse aligners with cool water, never hot, as heat can warp the plastic structure." },
        { icon: "dentistry", text: "Clean your teeth after every meal before putting aligners back in to avoid trapping sugars." }
      ]
    },
    faqs: [
      { question: "How many hours a day must I wear aligners?", answer: "For successful treatment, clear aligners must be worn 20 to 22 hours per day, only removing them to eat, drink, brush, and floss." },
      { question: "How long does orthodontic treatment take?", answer: "Average cases take 12 to 18 months, though mild cases can show full results in as little as 6 months." }
    ]
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    icon: "face",
    summary: "Veneers, bonding, and smile makeovers designed to enhance your natural beauty.",
    tagline: "COSMETIC SERVICES",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClPKw2Z4dE8PAX9TFQazbz0CC-zqeBNB4LtuXJXmp7_-n-xEhJedaYmDNUF-JgW0Ra_78uqgL9ONay97roty0zVUja9aTxVBwCYAyVTzkNLS_lorrk371hXCchSxUHF8zdhLITRtMM8V6ZVlh5R6yTHu6CDN6ekJIC2x_n9TSHNhTshoqJyljJlkE-ydTrywX2GDsyRn3TO556Ug_MDZ7yUjOSH8A6eDhEdY0QBYd2JPA4eidv4Fe9vPqn5NxbC-TNV-m6uOrIPdJL",
    overview: "Craft your dream smile with customized cosmetic treatments. Veneers can mask chips, gaps, and severe discoloration with minimal enamel reduction.",
    description: "Our cosmetic artists create ultra-thin, durable porcelain veneers or composite bindings that blend seamlessly with your face structure to bring out your best smile.",
    bulletPoints: [
      "Ultra-Thin Porcelain Options",
      "Digital Smile Design Studio",
      "Handcrafted Lab Customization"
    ],
    benefits: [
      {
        title: "Aesthetic Perfection",
        description: "Instantly corrects shape, length, size, alignment, and color of visible teeth.",
        icon: "health_and_safety"
      },
      {
        title: "Stain Resistance",
        description: "Porcelain is highly resistant to future staining from coffee, tea, and smoke.",
        icon: "shield"
      },
      {
        title: "Instant Transformation",
        description: "Achieve a full, symmetrical smile makeover in just two main visits.",
        icon: "verified"
      }
    ],
    steps: [
      { number: "01.", title: "Design Session", description: "Taking photos and planning your smile proportions digitally to let you preview results.", icon: "clinical_notes" },
      { number: "02.", title: "Tooth Prep", description: "Removing a microscopic layer of enamel and taking scans for custom veneers.", icon: "medical_services" },
      { number: "03.", title: "Bonding", description: "Carefully applying and curing each custom porcelain shell onto your teeth.", icon: "celebration" }
    ],
    recovery: {
      intro: "You might experience mild sensitivity to temperature for a few days after cementation, but you can speak and smile normally immediately.",
      tips: [
        { icon: "restaurant", text: "Avoid biting directly into extremely hard items like ice or hard candy with veneers." },
        { icon: "pill", text: "Use a nightguard if you have a habit of grinding your teeth (bruxism)." },
        { icon: "dentistry", text: "Continue excellent flossing; veneers require healthy gum tissue support." }
      ]
    },
    faqs: [
      { question: "Is getting veneers painful?", answer: "No, a local anesthetic is used during tooth preparation and bonding to ensure a comfortable experience." },
      { question: "How long do porcelain veneers last?", answer: "With good care and regular dental checkups, porcelain veneers last between 10 and 15 years." }
    ]
  },
  {
    id: "gum-treatment",
    title: "Gum Treatment",
    icon: "health_and_safety",
    summary: "Advanced periodontal therapies to treat gum disease and maintain the foundation of your teeth.",
    tagline: "PERIODONTICS",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA23eiNxF5i40pGYCnDHwQ8JekFZ8Oovzg980VxNzDBQIJ7ShkxSWDLfWM7JY_8QhrXg_CbJ-pe8x_ctez7GaaZ5vgIOWuXM6Hk8Wje1JEzlzoLvWzCv-dQlTP7N4lIurx5IiUi50eji-hCd_yVBrTQnDVzl7TaWwrTBd5nvnkGS7Jci8Vy8lEsY2A3wJopei9mpwIXurTqm0rqH_t0pi_TutXgJdafWzTsu6lgyinvdNp78Vnu67CDAsxJLOKtsxqL8NWy1ZhvCT6j",
    overview: "Maintain the foundation of your teeth with targeted gum therapies. Healthy gums are essential for full systemic well-being.",
    description: "Periodontal treatments target infections below the gumline. Using scaling, root planing, and therapeutic lasers, we remove bacterial buildup and assist gum reattachment.",
    bulletPoints: [
      "Laser Periodontal Therapy",
      "Deep Root Planing Scaling",
      "Systemic Antibacterial Gel"
    ],
    benefits: [
      {
        title: "Banish Bleeding",
        description: "Stops persistent bleeding, swelling, and redness in infected gums.",
        icon: "health_and_safety"
      },
      {
        title: "Prevent Tooth Loss",
        description: "Secures the bone and tissue foundations supporting your natural teeth.",
        icon: "shield"
      },
      {
        title: "Heart Health",
        description: "Reducing oral inflammation contributes to lowering cardiovascular risks.",
        icon: "verified"
      }
    ],
    steps: [
      { number: "01.", title: "Mapping", description: "Measuring periodontal pockets with a fine probe to find areas of active infection.", icon: "clinical_notes" },
      { number: "02.", title: "Root Planing", description: "Smoothing the root surfaces to prevent plaque deposits and assist healing.", icon: "medical_services" },
      { number: "03.", title: "Sterilization", description: "Using soft-tissue lasers to painlessly eradicate deep bacterial pockets.", icon: "celebration" }
    ],
    recovery: {
      intro: "Your gums will feel tender and look slightly swollen for 2-3 days. Avoid spicy or extremely hot foods during this time.",
      tips: [
        { icon: "restaurant", text: "Eat soft, nutrient-rich foods at room temperature during early healing." },
        { icon: "pill", text: "Rinse gently with warm salt water or prescribed chlorhexidine mouthwash." },
        { icon: "dentistry", text: "Brush carefully with an ultra-soft toothbrush to avoid irritating the healing gums." }
      ]
    },
    faqs: [
      { question: "What is the difference between cleaning and scaling?", answer: "A standard cleaning targets the surface tooth enamel. Scaling and root planing is a deeper treatment targeting plaque below the gum line." },
      { question: "Can gum disease be cured?", answer: "Early-stage gingivitis can be fully cured. Advanced periodontitis cannot be fully reversed, but it can be successfully managed to halt progression." }
    ]
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    icon: "child_care",
    summary: "Gentle, specialized dental care for children in a friendly environment designed to build trust.",
    tagline: "PEDIATRICS",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI25kWyYF04r2qj-rftWRJb3pqEDuixMuGr1APhVL6z9UH1lg_t7-vSVFgq3vebvvNnNmdW9VIX67XFBHqR3X-F_dgzYI3mB-VXqzKEKOIw4bsHvIw0-SSCtyHHd4RTkRe9rZiSk5E4dgZOhH9D4msoq7haB_1GckhB_4blskKbQWN6Je4VKhYL-6LQujnuBu7h70VogBljNU3UbnUc7L6ngcseLSM58VbRQhWPhXuL_n3H2DV-HewXG-eSKXLzDaeAu837MgbAWAp",
    overview: "Form positive oral health habits in a fun, anxiety-free clinical environment. We specialize in making children's visits educational and reassuring.",
    description: "Our dedicated pediatric rooms feature distraction tools, light color schemes, and gentle specialists trained in child development to prevent early dental phobias.",
    bulletPoints: [
      "Fissure Sealants Protection",
      "Gentle Fluoride Treatments",
      "Interactive Patient Education"
    ],
    benefits: [
      {
        title: "Anxiety Prevention",
        description: "Creates positive early memories of the dentist to ensure lifelong comfort.",
        icon: "health_and_safety"
      },
      {
        title: "Cavity Block",
        description: "Fissure sealants fill deep grooves to block food debris and decay.",
        icon: "shield"
      },
      {
        title: "Growth Monitoring",
        description: "Tracks jaw and tooth development to determine early orthodontic needs.",
        icon: "verified"
      }
    ],
    steps: [
      { number: "01.", title: "Meet & Greet", description: "Helping the child feel comfortable by showing them the chair and tools in a fun way.", icon: "clinical_notes" },
      { number: "02.", title: "Gentle Polish", description: "Light scaling and brush polishing to remove plaque from growing teeth.", icon: "medical_services" },
      { number: "03.", title: "Seal & Protect", description: "Applying dental sealants or direct fluoride treatments for long-term protection.", icon: "celebration" }
    ],
    recovery: {
      intro: "There is no recovery needed! Your child can resume playing right away, and they will walk out with a sticker and dental goodie bag.",
      tips: [
        { icon: "restaurant", text: "Ensure they don't eat anything hard or chew their lip if a local anesthetic was used." },
        { icon: "pill", text: "Encourage drinking plenty of fresh water instead of sugary juices." },
        { icon: "dentistry", text: "Supervise brushing twice daily to ensure they clean hard-to-reach molars." }
      ]
    },
    faqs: [
      { question: "When should my child have their first dental visit?", answer: "The American Academy of Pediatric Dentistry recommends scheduling their first visit when their first tooth appears, or by their first birthday." },
      { question: "What are dental sealants?", answer: "Sealants are thin plastic coatings painted onto the chewing surfaces of the back molars to block decay-causing food and bacteria." }
    ]
  }
];

export const doctors = [
  {
    id: "dr-elena-rodriguez",
    name: "Dr. Elena Rodriguez",
    qualifications: "DDS, Ph.D. in Implantology",
    specialization: "Senior Implant Specialist",
    experience: "15+ Years Experience",
    availability: "Available: Mon, Wed, Fri",
    languages: "English, Spanish",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLMX6MDdiV5HjAyswP3J1QA4zdBHvWeGdb7ErIohTo6Ehvnt2QqOcSw5TUA63htsAE0ye-2FKhb2Uam1Z0WrWdfO_AKiAfitEiQuoaSh9Z6yjVwiw33C48zmgn88uiMjPQljROvrgQ2bWESXT38A_JMfadlmNAUyCf4zFWV5yqVWVwtm2JdU30zHN7XC3macIEXBCI3uywqyOG2jja-f4ww1SlHCAkjRQ1oyG98zEZWJoPajkD9zFOyzUjxciQRKUobEouRMZ9cpmF",
    bio: "Dr. Elena Rodriguez is a world-renowned specialist in restorative dentistry and oral implantology. With over 15 years of clinical practice, her expertise lies in pioneering minimally invasive dental surgery techniques that prioritize patient comfort and rapid recovery. She combines her rigorous academic background with an artistic eye for smile aesthetics, ensuring every patient achieves both functional excellence and a natural, radiant smile.",
    schedule: [
      { day: "Monday", time: "09:00 AM - 05:00 PM" },
      { day: "Tuesday", time: "Closed" },
      { day: "Wednesday", time: "10:00 AM - 06:00 PM" },
      { day: "Thursday", time: "Surgery Only" },
      { day: "Friday", time: "09:00 AM - 04:00 PM" }
    ],
    qualificationsList: [
      { title: "Doctorate", institution: "Ph.D. from Johns Hopkins", details: "Advanced Clinical Research in Tissue Regeneration" },
      { title: "Master's Degree", institution: "MSD from NYU Dentistry", details: "Master of Science in Dental Implantology" }
    ],
    reviews: [
      { name: "Marcus Chen", date: "Patient since 2021", stars: 5, comment: "The most painless implant procedure I've ever had. Dr. Rodriguez is calm, professional, and explains every step.", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqAiUWmn9bOvx6csAJBYnFlEAhJ2-nWVVnW90aCbx5vPcUMfUBrY7WRhYQoRRZNuHVT-IY4Cw9iPFA2vqpFvsgZqRfTbV8jSuKXMPx5ykaqU4cCBMQZG1bXbfKslcstPtmygLpWP7v1i-Nzwo3LtnnirTecJ1ikQzNhKNu8DyD5CSsMhcNwU2JMh5-E5azonyaQX1nIb5frk8vaDHyilmUJpL5P2ZmTao6bfp-BiL2fBHmhxW9fHjc3ibYFtFmpoW_ieJeVfzzY00k" },
      { name: "Sofia Garcia", date: "Patient since 2022", stars: 5, comment: "Her bilingual skills were so helpful for my parents. She truly cares about making patients feel at ease.", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7ncdlmHbw-R4UCf6I9iyLxA81W4MnkdTxkqszvzNIcO7bMB4dfln8Xs9I6RsWHs_qoQDbHV9I8ekJnAO8ehWdJLLqoeK8U0WFDKK7zz4ommzX35eZAwPOq-CidKVwiAwL1cNlrB6m5GmEGbsDEe_FlzYBcbkOSmB_LFGBY7F4JU7-acbIBga0d5lXaSgMY5H5XK_zveIxQPGXYeAz6EroQhW1JjPfQ0JPqGUq7OQnLCzs9C7WHmDuzVEicsd4MZWagB-aTCoyOtj0" },
      { name: "David Wilson", date: "Patient since 2023", stars: 5, comment: "A true professional. The DentaElite clinic feels more like a 5-star hotel than a dentist office.", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLbWypHzJtlwv_HwPbfRR1sYZYyC0y8IVW8WHSUlFI-INAL1dH-H12mva8BLBeq-5_aTfbupLjQvwdXL__1_4FcJqyHwAtUhxDb3-H-8zJB-cBPccquwI3Jx44mJg9eimgN3GH9mU1jVp1gkTxCR0uEmszP18vDCUy20tVLf12b_6-QMrXcuywkSar1Z96LZgYx3kzRair2iT3u29GkYwB_3VhMmtXOKpqHAsgctHiwhnCGMsSoWgJQf8yvH6VsYBkseQlXkKNnNAZ" }
    ]
  },
  {
    id: "dr-marcus-thorne",
    name: "Dr. Marcus Thorne",
    qualifications: "MSD, Orthodontics Specialist",
    specialization: "Orthodontics & Braces",
    experience: "12 Years Experience",
    availability: "Available: Tue, Thu, Sat",
    languages: "English, French",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKTGTD_AeVA1Q9L0X7Ylv_ehAqavGjh2pTTwG9gdpmPkVuRQJGgXAFMTx2dl561C_GyncZ5AI1IWJvl6b8P68eP9c6fitK1mWRPrqpK6kfdFNX_q16g0gNCS5o8PKOufMH-e29Bhu6fRCM6sOTACecobeRJOdga-vNVyX0UZZ5NW9e8D7vLMAsuBAh7pn5gneQwX_0Ly8QewQMuwckYWFV6gH5LVlKqMAJ5PJCpfDAnmGOD2dzoyNTu8NqSS2cuY_HV6MLMp4IvMXl",
    bio: "Dr. Marcus Thorne is a board-certified Orthodontics Specialist. He specializes in designing custom smiles for children and adults using the latest orthodontic technologies, including Invisalign clear aligners, self-ligating braces, and custom retainers. Dr. Thorne believes that alignment is not just about aesthetics, but about ensuring healthy tooth and jaw mechanics for a lifetime.",
    schedule: [
      { day: "Monday", time: "Closed" },
      { day: "Tuesday", time: "09:00 AM - 06:00 PM" },
      { day: "Wednesday", time: "Closed" },
      { day: "Thursday", time: "09:00 AM - 06:00 PM" },
      { day: "Friday", time: "Closed" },
      { day: "Saturday", time: "09:00 AM - 03:00 PM" }
    ],
    qualificationsList: [
      { title: "Master's Degree", institution: "MSD from Boston University", details: "Advanced Certificate in Orthodontics and Dentofacial Orthopedics" },
      { title: "Dental Degree", institution: "DDS from Harvard School of Dental Medicine", details: "Doctor of Dental Surgery" }
    ],
    reviews: [
      { name: "John Davis", date: "Patient since 2022", stars: 5, comment: "I am currently in Invisalign treatment with Dr. Thorne. The progress checkups are quick, and my teeth look straighter every week!", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBS5cX9jrO-MPiGcGxE5V6Ub4eMyiMImHOwZWob3iQ7M8wAkR3IMzu_7_WfKwsEYmBn7bpOVF2ET1rkyCCtaB3nm8Dwne47sc46-FINsFjCB_goV_X_G9jloPqyL6NYSCrTnthjb6tDEB7LGSFCYi2KCNqURskzB0ubfmFpQuVyvo3UXGNKQLGNEqVx2c-gMCIixFNJQpm2ahONa3fiWcZZj_FQ9LXajev2eav75HSZXyDAxEQMRjVIIC-AA0oj8mEQaeVoR_MvKX0_" }
    ]
  },
  {
    id: "dr-sarah-jenkins",
    name: "Dr. Sarah Jenkins",
    qualifications: "DMD, Cosmetic Dentist",
    specialization: "Cosmetic & Aesthetic Care",
    experience: "9 Years Experience",
    availability: "Available: Mon - Thu",
    languages: "English, German",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY6UIEfIzFKDzicTCKPE1_KT5WN4p51J1eSPTz0p-Cfv8_5hat-ax3HO8ww1xLUCke3hLPoRbL8p1SaGM2agsVklYsqhE0UHWpnI8BM_O7oB54X2LCeD5hZ63WRdsWrY3KG4pQWW2uw58AfAVKxdiZqHDZ6W5JloRHVLHUeYIF2jsEHCnbc9NzyuneFbNXoTK1kHjO7ns4yirT_vkstpmfj74DzdPnUadBgP97h91KsAwIf3CukvIVMBDz3khFXvlHYh7dcZU0V-QC",
    bio: "Dr. Sarah Jenkins is dedicated to crafting beautiful, confident smiles. Her cosmetic focus covers porcelain veneers, composite bonding, and full-mouth smile reconstructions. Utilizing high-resolution digital imaging, Dr. Jenkins works collaboratively with patients to design transformations that fit their personal goals and facial geometry.",
    schedule: [
      { day: "Monday", time: "08:30 AM - 05:00 PM" },
      { day: "Tuesday", time: "08:30 AM - 05:00 PM" },
      { day: "Wednesday", time: "08:30 AM - 05:00 PM" },
      { day: "Thursday", time: "08:30 AM - 05:00 PM" },
      { day: "Friday", time: "Closed" }
    ],
    qualificationsList: [
      { title: "Dental Degree", institution: "DMD from Penn Dental Medicine", details: "Doctor of Dental Medicine with honors in Cosmetic Dentistry" },
      { title: "Undergraduate", institution: "BS in Biology from Cornell", details: "Summa Cum Laude" }
    ],
    reviews: [
      { name: "Sophia Loren", date: "Patient since 2023", stars: 5, comment: "Fantastic cosmetic work. My new veneers look so natural! The attention to detail at DentaElite is unmatched in the industry.", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ0CuEdo-SwK2BxdwNfBt2TO7jANuu5tgWkvg-Ne0A6MpTGdG22VRFIDQSRS9gyk4sN9ix99Sqh1JtwO_J0gSEHOQEQxWZu4E2Q-hA9s6g8MWr9mLFE1jcPKYbdX8b4tbsdVgUSH1yUG7tX_qqKXRAWf1bIXRCQv4LqbzGMhhbWv-gnJZURhTqDpvEI1LXBODzB33MeXsgXuU6VsOR0Y3UTcKFMNbaNqlKOTeHvW_OWUaOfcfdoixuLXSCiKuc5ffIM77vzWjJly0v" }
    ]
  },
  {
    id: "dr-julian-chen",
    name: "Dr. Julian Chen",
    qualifications: "BDS, Periodontics Expert",
    specialization: "Gum Diseases & Periodontics",
    experience: "20+ Years Experience",
    availability: "Available: Wed, Sat, Sun",
    languages: "English, Mandarin",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKoEHqWFZ_ITmeFjzq6MeMUC7Z2igKMBoSlDMKFdC_909KoUJQG5k4ro8R0JFopgRCG6GRg1CH6ttaveynSq3u0eiOuszaANjTbcQXtA51mgmHMbMkjEkuZun6v79-ebeZEuCDHF52cnos0YOqKft1zWfjpq5rdjLsmDNdM0XWLUSaBE69aM1w8MkijWKOTFqcCO_ogFkr08bArfRsjUrGrpgRu22AS_-Kc_HUPpLeHGAJwzsNnRSq119Ke-eZ_0jnm_5LeUsJLNS3",
    bio: "Dr. Julian Chen is our senior periodontist, boasting over two decades of clinical experience. He specializes in treating complex gingivitis and periodontitis, performing bone grafting, and managing soft tissue reconstruction. Dr. Chen is a proponent of utilizing dental lasers for painless, antibacterial treatments that ensure rapid tissue healing.",
    schedule: [
      { day: "Wednesday", time: "09:00 AM - 05:00 PM" },
      { day: "Saturday", time: "09:00 AM - 05:00 PM" },
      { day: "Sunday", time: "10:00 AM - 04:00 PM" }
    ],
    qualificationsList: [
      { title: "Specialization", institution: "Board Certified Periodontist", details: "American Board of Periodontology" },
      { title: "Dental Degree", institution: "BDS from Kings College London", details: "Bachelor of Dental Surgery" }
    ],
    reviews: [
      { name: "Robert Mitchell", date: "Patient since 2020", stars: 5, comment: "I had a gum graft done by Dr. Chen. I was terrified, but the laser procedure was smooth, and the recovery was much faster than I expected.", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqAiUWmn9bOvx6csAJBYnFlEAhJ2-nWVVnW90aCbx5vPcUMfUBrY7WRhYQoRRZNuHVT-IY4Cw9iPFA2vqpFvsgZqRfTbV8jSuKXMPx5ykaqU4cCBMQZG1bXbfKslcstPtmygLpWP7v1i-Nzwo3LtnnirTecJ1ikQzNhKNu8DyD5CSsMhcNwU2JMh5-E5azonyaQX1nIb5frk8vaDHyilmUJpL5P2ZmTao6bfp-BiL2fBHmhxW9fHjc3ibYFtFmpoW_ieJeVfzzY00k" }
    ]
  },
  {
    id: "dr-amara-okoro",
    name: "Dr. Amara Okoro",
    qualifications: "DDS, Endodontic Surgeon",
    specialization: "Root Canal Specialist",
    experience: "11 Years Experience",
    availability: "Available: Daily (On-Call)",
    languages: "English, Igbo",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsYXnFocSiOCkSkmKE6ala_jmxIe2DWjIsYy4s3Uviye_rttXfU0z2HK7R84plPo1KqqQv-4b-XdfQnYlcNdsQtyc1QQLzVTx-U5WozsRZ-cO6PlXkjHAvqkjQyJUc0pvaROO7U6Mf3uprpNTsQb9utlj4QuYFHbIdvarCzZRs6d26r0fQIXNujj0xMMSGQjO3gGDXYzJ0TtsZn09n6CpzIPOp6R02mlN0Xtho48br9eV62S7JZlrGJygbDNyo7H1jMQXZPbf7veIc",
    bio: "Dr. Amara Okoro is our dedicated endodontist who handles root canals and micro-endodontic surgery. She utilizes advanced rotary endodontics and high-precision microscopes to restore infected teeth in a single visit, focus on keeping patient visits completely pain-free.",
    schedule: [
      { day: "Mon - Fri", time: "Emergency On-Call 24/7" },
      { day: "Saturday", time: "09:00 AM - 01:00 PM" }
    ],
    qualificationsList: [
      { title: "Specialization", institution: "Endodontic Residency at NYU", details: "Certificate in Endodontics" },
      { title: "Dental Degree", institution: "DDS from Columbia University", details: "College of Dental Medicine" }
    ],
    reviews: [
      { name: "Emily Watson", date: "Patient since 2023", stars: 5, comment: "I had an emergency root canal on a Friday night. Dr. Okoro was on-call and treated me with so much care. The pain was gone instantly.", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7ncdlmHbw-R4UCf6I9iyLxA81W4MnkdTxkqszvzNIcO7bMB4dfln8Xs9I6RsWHs_qoQDbHV9I8ekJnAO8ehWdJLLqoeK8U0WFDKK7zz4ommzX35eZAwPOq-CidKVwiAwL1cNlrB6m5GmEGbsDEe_FlzYBcbkOSmB_LFGBY7F4JU7-acbIBga0d5lXaSgMY5H5XK_zveIxQPGXYeAz6EroQhW1JjPfQ0JPqGUq7OQnLCzs9C7WHmDuzVEicsd4MZWagB-aTCoyOtj0" }
    ]
  },
  {
    id: "dr-leo-varadkar",
    name: "Dr. Leo Varadkar",
    qualifications: "BDS, Pediatric Dentistry",
    specialization: "Children's Oral Health",
    experience: "8 Years Experience",
    availability: "Available: Mon, Tue, Fri",
    languages: "English, Irish",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9awQwgOUblh7iTwagv39pDN4874wZQOLl2vJ4Cbd_K_BTSNW0GQl3SFCjoGuGVmmYqBSq1XRi0e_6VvmX5mkeObioTQ2hTXttgNiEGTmDCt7ngPBA3se_0HZvbbZ8j8pFyaMkb7xP9ohkThdetdwAmG-N8TGTJybaqQzu4uEdnSjR6zb75lNmtvqj_C4CFYXPZNZDScVTrpVhD64DWNDAb8f3n-jlkERCejPXcyTltSYYjfYWBatq0fU9MQFEm_GjjBeRXWBmZIkh",
    bio: "Dr. Leo Varadkar is passionate about making children's dental visits positive and educational. He specializes in preventative care, sealants, space maintainers, and gentle fillings, ensuring children build a strong foundation of oral health without anxiety.",
    schedule: [
      { day: "Monday", time: "09:00 AM - 05:00 PM" },
      { day: "Tuesday", time: "09:00 AM - 05:00 PM" },
      { day: "Friday", time: "09:00 AM - 04:00 PM" }
    ],
    qualificationsList: [
      { title: "Specialization", institution: "Pediatric Dental Residency", details: "Children's National Hospital" },
      { title: "Dental Degree", institution: "BDS from Trinity College Dublin", details: "School of Dental Science" }
    ],
    reviews: [
      { name: "Melissa Green", date: "Parent of patient", stars: 5, comment: "Dr. Leo is wonderful with kids. My 6-year-old was laughing during his cleanings and loved the sticker drawer!", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7ncdlmHbw-R4UCf6I9iyLxA81W4MnkdTxkqszvzNIcO7bMB4dfln8Xs9I6RsWHs_qoQDbHV9I8ekJnAO8ehWdJLLqoeK8U0WFDKK7zz4ommzX35eZAwPOq-CidKVwiAwL1cNlrB6m5GmEGbsDEe_FlzYBcbkOSmB_LFGBY7F4JU7-acbIBga0d5lXaSgMY5H5XK_zveIxQPGXYeAz6EroQhW1JjPfQ0JPqGUq7OQnLCzs9C7WHmDuzVEicsd4MZWagB-aTCoyOtj0" }
    ]
  }
];

export const testimonials = [
  {
    name: "Emma Thompson",
    role: "Marketing Director",
    quote: "The best dental experience I've ever had. The team is incredibly professional and the results are life-changing. Highly recommend Dr. Jenkins!",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpPprFDR3LczUSYLAOkwKtt1NcCo70KND208adNO_LsWXd7G1cDyuxB9Ra0xpRp2tBsFUh_LH7a54TLnvOJuImKNJvcAfOKymiTE6XMc5nBrWln-D6ecVL_yr5HzYrPQDlR_zLe13wSur_i4PQc-poVEb3Si4Yf1R6Z8Wm3PjNNnGZ2mpKhU45Q52qaIWttEvUX2MPSN7x5uOKHRgVDYTtB6_ZXCw1WhR8dz9FIylZHs6nwHzP4PSFHxexMbFIXV-O-XGn2MmFlQhc"
  },
  {
    name: "Robert Davis",
    role: "Architecture Lead",
    quote: "I was always nervous about dental visits, but DentaElite changed that. Their gentle approach and modern clinic made me feel completely at ease.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBS5cX9jrO-MPiGcGxE5V6Ub4eMyiMImHOwZWob3iQ7M8wAkR3IMzu_7_WfKwsEYmBn7bpOVF2ET1rkyCCtaB3nm8Dwne47sc46-FINsFjCB_goV_X_G9jloPqyL6NYSCrTnthjb6tDEB7LGSFCYi2KCNqURskzB0ubfmFpQuVyvo3UXGNKQLGNEqVx2c-gMCIixFNJQpm2ahONa3fiWcZZj_FQ9LXajev2eav75HSZXyDAxEQMRjVIIC-AA0oj8mEQaeVoR_MvKX0_"
  },
  {
    name: "Sophia Loren",
    role: "Content Creator",
    quote: "Fantastic cosmetic work. My new veneers look so natural! The attention to detail at DentaElite is unmatched in the industry.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ0CuEdo-SwK2BxdwNfBt2TO7jANuu5tgWkvg-Ne0A6MpTGdG22VRFIDQSRS9gyk4sN9ix99Sqh1JtwO_J0gSEHOQEQxWZu4E2Q-hA9s6g8MWr9mLFE1jcPKYbdX8b4tbsdVgUSH1yUG7tX_qqKXRAWf1bIXRCQv4LqbzGMhhbWv-gnJZURhTqDpvEI1LXBODzB33MeXsgXuU6VsOR0Y3UTcKFMNbaNqlKOTeHvW_OWUaOfcfdoixuLXSCiKuc5ffIM77vzWjJly0v"
  }
];

export const galleryItems = [
  {
    id: 1,
    category: "clinic",
    title: "Reception Lounge",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBD4qeMYI2qqoAu-X1oXoLPg9DD5oDcCw_FVSuwwDjcjbh4uh1j99OrEN2RwGvI2j6K9WFEpwQx7r7Pack4I4Fc7MbuXCh4IhuurzyS2En11PC_E3nmkYCC8YT-HxBe1f5gKzPPR5AaJlVt6y6i-J_i9IIx-g4xpXKlXx1Sm9YgbUviRDja7AS_j1NUNtlkMZJdpZovJGx697uCbp-3Np_A77fKAdUMZIkJP9R8jREoCxwrEcQcRaR0d2VH5hnhOYH8e7CoOgkO1kJQ"
  },
  {
    id: 2,
    category: "equipment",
    title: "3D Digital Imaging",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWaaPs8NhrzOCphbGRv8VXP_FBG3FGMPuWy-0-R9X0htOu-nx-kOVPvSRZKF6MUEd5QM6Ic0f2pAO3Wz8S0p0_7qTnzl70bd3FoOfel8SpJRTkPL9qNgAn6aHD630qHiB14E0cn9H-ZMu_1neA-looXv3_zC_1hWDAdWPa5t0ZTsFaG2BOuMcKbUS8usn5WHeyj1wcw71NE5zwcoccUjJy3Ct3e2SqVLPz79gSuH5iNdvcpUIjCnIk9bbhaXFEQBjeXisAgiaM2GCh"
  },
  {
    id: 3,
    category: "before-after",
    title: "Smile Restoration",
    isBeforeAfter: true,
    beforeImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKTVMYS_f7N6tdBynGEwSCj-YczOVpHevA1CiC24QzDlJh2FOX_JlCIDfBKBKHlUhmwYfokVv8MITYPmU2ISfn8IPh-otHGP3fFbXEyGy3jmbNkN54eiaebtr42Ug4PFiOPE2fkN73za4aTc49W6NLPXF3CZ-qjXjdCzOdCREit5SQfaQzqNJ5JyVTDNJOq1C__KAGpxSdOzvGldmNdbI8QacBSwo3UbsDkigN7qFoT20ESiLbvWCbXBBYArIXtq19KlmF24idCB5R",
    afterImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYpnkDNH3tYA_BsahBVy30fMempbWsF_0TKu3JK96AbKfjwVJixjiJDvrLkB4R0igqxExLUYxSIRqYbF0J86pEWieSWnL9HdBRL6mxi1DmoW2FB8KRIP8RtzaQPMeEeDqxm2OrcPQrixlgD16aJZ_cu7qQ23xDxxXimxG1xWi_omQG81BivApKfPysI7TXeqC7OyT7qCU5TVmDfIlM9cI1wyEp56VfWLy-lByvFwXhVes-q4WDGbvtmzcgjevoAYbH7uj_6AAtYngW"
  },
  {
    id: 4,
    category: "treatments",
    title: "Advanced Orthodontics",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEL5ZFFK3YuFmIXSXKnF_k9jgfjx09RQLyv0nYA7Dqmvifi2TmgZEgdb3BVOEmgGtgHR0UNwXGN1AWCYctcoQTO9_DicRAHXXwsjWCa4-V48fdIlVFUvcXmgCl92hnhgT0bqN_LE9ycO54a-CSZ6iIwb3J2gkhv8N_4YbIq7r-z_IGuPT6DF1nnWG3Fn4IsYJyWCuGUMF_YFCsQCJwIntgD7aDEQCN5op6YPkXoWNmRFwmj8GAKbuMH-TnE9mnla8M5sx6SUHuZRV3"
  },
  {
    id: 5,
    category: "clinic",
    title: "Sterilization Lab",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYw8b5iNMazkSr-gjSJNL9NCJBeR1oMLod9ox4wGtdX8u-nLKyFWQHEMJ10wSIHPRolsO1dywRBIWVevIRM3LelOqrF2wat3oZGZvXYgwhDnfF_uSzRTu4Z-w0QsEpmTXB8OPnEQVQT7A1d-mGJM3WtV80ZgHso5n9R5Hv_DNp3k113frQsTgNvDf2Uzt5Zlah6zZV8kDChbki4F1njlgcxUn0no71qM7fqS9k2IJSobqhz_9nzigmxU2ZTkP575XRDWyaBm-KJ5NR"
  },
  {
    id: 6,
    category: "equipment",
    title: "Dental Operatory",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9Pve3isgEASdPUNJ1bep3VuAGH26v2rQarwogmZ9arKweW20EF7WxpU2hVXN-oKsuNY9bwA8O-1KgdnW4wv6MPOKhTS9JOXhyW5_SEnyD4Dec0_NmqjOPcQscBr-6SVFG5HcKgB_krOBQb20qs_uxawQY8TrVwXByTXjQq1NrAYfQFO8yAPpLVyCwumnxmMo1y-cAal-Sx6GiOrPFQWjxsUqlFTd1i9-i7KhLMH7ITGXDdLurffrbdrhqyWifBFsZSlOK85I-2YkK"
  },
  {
    id: 7,
    category: "treatments",
    title: "Patient Education",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuKeyX4DXUzM7mww7BZkBUZu_ZbP8e-Cn4AOUYMfuGjProbHojmYczw49goi0L809bqrRN1G4HN4Gv0GOj33qobpg8Ih8X2t7XtUzZPBqfQ80CqHCbff2cvukun1kTdUFzGu2QIWd9DZsmvALSHDR1gWveap4OE-wunjybscVPe5SHuBFhhD4ebDkI92hy2SuhyMy34t4K5Qqz9cttKyoFta3e2xFbyoHEtwTUVJZr9WnTI8Pl23MaA_eASZDKL2bsC_Lehp7gVsaL"
  }
];
