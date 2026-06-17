// JSON-LD Schema definitions for Deona Archery Academy

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "SportsActivityLocation", "SportsOrganization"],
  "name": "Deona Archery Academy",
  "image": "https://deonaarcheryacademy.com/home1.png",
  "@id": "https://deonaarcheryacademy.com",
  "url": "https://deonaarcheryacademy.com",
  "telephone": "+91XXXXXXXXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "New Panvel",
    "addressLocality": "Navi Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "410206",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.9959,
    "longitude": 73.1165
  },
  "areaServed": [
    "New Panvel", "Panvel", "Kamothe", "Kharghar", "Kalamboli", "Taloja", "Belapur", "Nerul", "Vashi", "Airoli", "Thane", "Raigad"
  ],
  "sameAs": [
    "https://www.facebook.com/DeonaArchery",
    "https://www.instagram.com/DeonaArchery"
  ],
  "priceRange": "$$",
  "description": "Premium archery coaching in New Panvel, Navi Mumbai. We offer professional training, Olympic recurve training, compound bow training, and kids archery classes across Panvel, Kharghar, and surrounding areas."
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best archery academy in Navi Mumbai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Deona Archery Academy, located in New Panvel, is considered one of the best archery academies in Navi Mumbai, offering professional training, Olympic recurve coaching, and kids classes."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer kids archery classes in Panvel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer specialized kids archery classes in New Panvel, teaching them focus, precision, and the fundamentals of the sport in a safe environment."
      }
    },
    {
      "@type": "Question",
      "name": "Which areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are located in New Panvel and proudly serve students from Panvel, Kamothe, Kharghar, Kalamboli, Taloja, Belapur, Nerul, Vashi, Airoli, Thane, and Raigad."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide beginner archery training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We offer comprehensive beginner archery training to help new students master proper form, grip, and stance before advancing."
      }
    },
    {
      "@type": "Question",
      "name": "What types of archery coaching do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer Olympic Recurve Training, Compound Bow Training, Beginner Coaching, Kids Classes, and Professional Tournament Preparation."
      }
    },
    {
      "@type": "Question",
      "name": "Is tournament preparation included in professional archery coaching?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our professional archery coaching includes rigorous tournament preparation, focusing on mental conditioning, advanced techniques, and scoring strategies."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to buy my own bow to join?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Beginners do not need to buy equipment immediately. We provide academy equipment for your initial training until you are ready to purchase your own gear."
      }
    },
    {
      "@type": "Question",
      "name": "What age is suitable for kids archery classes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We typically accept kids starting from 8 years old, but it ultimately depends on the child's physical strength and ability to focus safely."
      }
    },
    {
      "@type": "Question",
      "name": "Where in Raigad can I find good archery classes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Deona Archery Academy in New Panvel is easily accessible from all over the Raigad district and provides top-tier archery training."
      }
    },
    {
      "@type": "Question",
      "name": "Do you have Olympic Recurve experts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our coaching staff specializes in Olympic Recurve training and helps athletes aim for national and international level competitions."
      }
    },
    {
      "@type": "Question",
      "name": "How do I enroll in archery coaching in Kharghar or Kamothe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Since we are located centrally in New Panvel, students from Kharghar and Kamothe can easily commute to our facility. You can enroll by visiting us directly or contacting us through our website."
      }
    },
    {
      "@type": "Question",
      "name": "Is archery a safe sport for children?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Archery is extremely safe when practiced under professional supervision. Safety protocols are our highest priority during all training sessions."
      }
    },
    {
      "@type": "Question",
      "name": "What are the physical benefits of archery training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Archery improves upper body strength, core stability, hand-eye coordination, balance, and fine motor skills."
      }
    },
    {
      "@type": "Question",
      "name": "Can adults learn archery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, archery is a lifetime sport. We have many adults taking our beginner and intermediate coaching sessions."
      }
    },
    {
      "@type": "Question",
      "name": "Do you teach compound bow archery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our professional coaching covers compound bow training for those interested in precision shooting and advanced target archery."
      }
    }
  ]
};
