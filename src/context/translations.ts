export type Language = 'en' | 'id';

export const translations = {
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      process: 'Process',
      portfolio: 'Portfolio',
      faq: 'FAQ',
      contact: 'Contact Us',
      quote: 'Get a Quote',
    },
    hero: {
      badge: 'Affordable Web Solutions',
      title1: 'Simple Websites for',
      title2: '',
      subtitle: 'We craft budget‑friendly landing pages, wedding invitations, birthday party sites, and basic CRUD websites—perfect for small and medium businesses.',
      cta1: 'Get Started',
      cta2: 'View Packages',
      stat1_val: '99.4%',
      stat1_label: 'Project Success',
      stat2_val: '150+',
      stat2_label: 'Systems Deployed',
      stat3_val: '2x',
      stat3_label: 'Development Speed',
      badge1_title: 'Deploy on Day One',
      badge1_desc: 'Continuous Integration & Automated DevOps pipeline.',
      badge2_label: 'Expertise',
      badge2_val: 'Clean Architecture',
      badge3_label: 'Clients',
      badge3_val: '100% Satisfied',
    },
    why: {
      badge: 'Our Strengths',
      title: 'Delivering High-Impact Digital Advantage',
      subtitle: 'We merge extreme software scalability with premium digital design. We do not compromise on security, architecture, or speed.',
      items: {
        'scalable-solutions': {
          title: 'Scalable Solutions',
          desc: 'We build with high-velocity backends and cloud native frameworks engineered to handle sudden spikes and endless organic growth organically.',
        },
        'expert-developers': {
          title: 'Expert Developers',
          desc: 'Our engineers are senior product minds who understand business workflows, code cleanliness, testing paradigms, and secure containerization.',
        },
        'transparent-process': {
          title: 'Transparent Process',
          desc: 'Track daily progress on virtual boards and see live software staging updates. We speak clearly, report early, and run regular agile sprint reviews.',
        },
        'on-time-delivery': {
          title: 'On-Time Delivery',
          desc: 'No broken promises or endless rollouts. Our modern estimation engine and focused scope controls get your software polished and shipped right.',
        }
      },
      guarantee: 'Guaranteed Standards',
      cta_badge: 'Enterprise Readiness',
      cta_title: 'Ready to build robust software systems tailored to your workflows?',
      cta_desc: 'We design and maintain private cloud mesh architectures, high-performance web applications, and safe compliance environments. Let’s sit down to design your roadmap.',
      cta_btn: 'Get Started Now',
    },
    services: {
      badge: 'Our Services',
      title: 'Simple & Affordable Websites',
      subtitle: 'Choose from landing pages, invitation sites, or basic CRUD apps—tailored for your business needs.',
      items: {
        'custom-software': {
          title: 'Landing Pages & Simple Websites',
          desc: 'Affordable one‑page landing pages, wedding invitation sites, birthday or party pages, and basic CRUD websites built quickly and reliably.',
          tags: ['SaaS Engineering', 'API Integration', 'React / NextJS', 'Go Backends'],
          props: [
            'Strictly modular TypeScript & typed structures.',
            'Comprehensive unit and integration testing suite.',
            'Sub-second first-paint speeds and lightweight bundles.'
          ],
          tech: 'React, Node.js, NestJS, Go, Postgres, Redis, TailwindCSS'
        },
        'cloud-architecture': {
          title: 'Cloud Architecture & Scalability',
          desc: 'Infrastructure designed for 99.99% availability. Secure cloud meshes, database replicas, serverless computing, and private multi-region setups.',
          tags: ['Google Cloud / AWS', 'Managed DBs', 'Cybersecurity', 'Disaster Recovery'],
          props: [
            'Scale-to-zero capabilities with cloud integrations.',
            'Distributed multi-zone failovers and live replication.',
            'IAM least-privilege security matrices protecting user tables.'
          ],
          tech: 'GCP, AWS, PostgreSQL, MongoDB, Redis, Apache Kafka'
        },
        'devops-automation': {
          title: 'DevOps Automation & Pipelines',
          desc: 'Say goodbye to manual deployments. We optimize build speeds, package secure Docker containers, manage Kubernetes, and write Terraform code.',
          tags: ['CI/CD Pipelines', 'Docker & K8s', 'Terraform IaC', 'Monitoring & Alerts'],
          props: [
            'Under 5-minute automated pipeline staging builds.',
            'Zero-downtime rolling upgrades and canary releases.',
            'Infrastructure as Code (IaC) for fast replication.'
          ],
          tech: 'Github Actions, Terraform, Docker, Kubernetes, Prometheus'
        },
        'ui-ux-strategy': {
          title: 'Product & UI/UX Design System',
          desc: 'High-converting user interfaces mapped down to fine interactions. We conduct target user research, map user paths, and build flawless Figma assets.',
          tags: ['UX Strategy', 'Figma Libraries', 'Interactive Mockups', 'Visual Design'],
          props: [
            'Intricate research backed by clickable user feedback.',
            'W3C WCAG accessibility and touch target comfort compliance.',
            'Developer-friendly Figma handoffs with layout tokens.'
          ],
          tech: 'Figma, Tailwind, Adobe CC, Framer, UserTesting'
        }
      },
      radar_badge: 'DELIVERABLES RADAR',
      tech_caps: 'TECH CAPABILITIES:',
      included: 'What’s Included:',
      custom_needs_title: 'Have custom legacy needs?',
      custom_needs_desc: 'We comfortably refactor complex monoliths, migrate heavy server deployments, and sync multiple internal API pipelines cleanly.',
      cta_btn: 'Scope Out Your Solution',
      select_prompt: 'Select a service on the left to inspect its parameters.',
    },
    process: {
      badge: 'Our Execution System',
      title: 'How We Partner: The Kinetic Pipeline',
      subtitle: 'We reject slow, legacy client-agency feedback loops. Our 4-stage process guarantees ultimate delivery velocity with absolute quality consistency.',
      items: [
        {
          title: 'Discovery & Strategy',
          desc: 'We host interactive alignment sessions, draft comprehensive technical flowcharts, refine custom user stories, and outline the precise project scope bounds. No guesswork allowed.',
          duration: 'Week 1',
        },
        {
          title: 'Design & Architecture',
          desc: 'Our team crafts high-fidelity, interactive viewport prototypes in Figma. Simultaneously, our cloud engineers draft system schematics, cluster topologies, and entity relationship diagrams.',
          duration: 'Weeks 2-3',
        },
        {
          title: 'Agile Software Development',
          desc: 'We code in bi-weekly sprints, continuously shipping modular features to a secure private staging server. You receive transparent sprint review recordings and demo links.',
          duration: 'Weeks 4-8',
        },
        {
          title: 'Pristine QA & Deployment',
          desc: 'We trigger automated testing models, perform penetration testing sweeps, audit responsive viewports, set up clean cloud monitoring dashboards, and carry out a seamless launch.',
          duration: 'Weeks 9+',
        }
      ],
      warning: 'Need express delivery? We offer expedited sprint pipelines for critical funding/launch timelines. Reach out directly to discuss our priority staging SLA slots.',
      warning_bold: 'Need express delivery?',
    },
    portfolio: {
      badge: 'Our Work',
      title: 'Pioneering Pristine Products',
      subtitle: 'Each release represents a masterclass in frontend fluidness, deep database resilience, and structural speed. Click any badge to view mock case studies.',
      categories: {
        all: 'All',
        saas: 'SaaS Systems',
        cloud: 'Cloud & DevOps',
        mobile: 'Mobile Apps'
      },
      items: {
        'banking-saas': {
          title: 'Acme Wealth Global Dashboard',
          desc: 'A multi-currency banking system with instantaneous transaction streams, real-time balance calculations, and custom compliance reports.',
        },
        'nexus-cloud': {
          title: 'Nexus DataMesh Cloud Infra',
          desc: 'An enterprise cloud deployment orchestrating isolated customer VPC networks, smart caching servers, and scalable cloud compute clusters.',
        },
        'workspace-mobile': {
          title: 'Kinetic Shift Enterprise Mobile Hub',
          desc: 'A premium native mobile workspace facilitating secure corporate chats, tasks syncing, offline databases, and swift notifications.',
        }
      },
      preview_summary: 'Preview case summary',
      locked: 'LOCKED DEPLOYMENT',
      success: '100% SUCCESS RATE',
      case_study: 'Case Study',
    },
    faq: {
      badge: 'Clear Answers',
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about our workflow, legal provisions, technical capabilities, and pricing protocols.',
      items: {
        'pricing': {
          question: 'How does Kinetic Studio price its agency projects?',
          answer: 'We provide itemized, milestone-based pricing. We strictly avoid surprise extensions or vague retainer schemes. Every quote features flat fees linked to transparent functional outputs (e.g., Figma deliverables, database clusters, ready-to-test MVPs). If the product scope remains stable, your price stays exactly identical.',
        },
        'timeline': {
          question: 'What is the average timeline to launch an MVP or system?',
          answer: 'A standard custom dashboard, native product app, or cloud migration takes between 4 and 8 weeks from kick-off to secure DNS mapping. We work in disciplined 2-week active sprints and give you access to a live, continuous-deployment staging environment so you can monitor features as we compile them.',
        },
        'tech-stack': {
          question: 'What is your preferred technology stack?',
          answer: 'We write modular and typed systems for long-term scalability. On the client side, we specialize in React, Next.js, and Tailwind CSS. On the backend, we run high-velocity services built in Go, Node.js, and Python, backed by PostgreSQL, Redis, and secure instances hosted on GCP or AWS.',
        },
        'support': {
          question: 'Do you offer post-launch support and security patches?',
          answer: 'Absolutely. We offer customized Service Level Agreements (SLAs) ranging from standard bug preservation to 24/7 high-availability infrastructure maintenance. This includes weekly dependency security patching, database optimization sweeps, and server performance profiling.',
        },
        'nda': {
          question: 'Are my business roadmap, ideas, and intellectual property secure?',
          answer: 'Yes. Before discussing any project details or database architectures, we sign formal mutual Non-Disclosure Agreements (NDAs). Upon final project payment, full intellectual property rights, repository ownership, deployment credentials, and Figma assets are fully transferred to your company.',
        }
      },
      support_prompt: 'Have different technical questions regarding complex systems integrations, legacy system migrations, or strict corporate hosting constraints?',
      support_btn: 'Speak to our Architect',
    },
    contact: {
      badge: 'Get a Proposal',
      title: 'Let’s Design Your System Architecture',
      subtitle: 'Ready to deploy? Fill out our system brief. Our Chief Technical Officer will review your parameters and respond with customized budget layouts within 24 hours.',
      status: 'ONLINE CORE STATUS',
      hq_title: 'Kinetic Studio HQ',
      hq_desc: 'Our core engineers operate in Jakarta, Indonesia & Singapore, assisting global clients across Asian, European, and Pacific tech zones.',
      office_label: 'HEAD OFFICE',
      email_label: 'PROJECT OFFERS',
      phone_label: 'CALL / WHATSAPP CHANNEL',
      nda_title: 'NDA & Cloud Sovereignty Guaranteed',
      nda_desc: 'All customer records, database inputs, and visual diagrams transmitted through this form are guarded by strict TLS encryption layer audits. Commercial property IP transfers seamlessly upon contract signing.',
      form: {
        name_label: 'Full Name',
        name_placeholder: 'E.g., Michael Chen',
        email_label: 'Business Email',
        email_placeholder: 'E.g., michael@acme.com',
        company_label: 'Company Name',
        company_placeholder: 'E.g., Acme Wealth Corp',
        budget_label: 'Estimated Project Budget',
        message_label: 'Project Details & Technical Goals',
        message_placeholder: 'Tell us about the software features you want to build, user counts, existing stack, and expected timeline parameters...',
        submit_btn: 'Apply for Architecture Blueprint',
        loading: 'Encrypting parameters...',
        nda_notice: 'Clicking submit initiates our strict mutual Non-Disclosure Agreement. Your parameters remain confidential.',
      },
      success: {
        title: 'Brief Transmitted Securely!',
        desc: 'Thank you for reaching out to Kinetic Studio. Our Chief Technical Officer has received your blueprint specifications under mutual NDA. We will contact you via your business email address within 24 hours.',
        next_steps: '**What happens next?** We are structuring an initial high-level system draft with estimated pricing scopes. Check your inbox for our invite.',
        reset_btn: 'Submit Another Blueprint Brief',
      }
    },
    footer: {
      desc: 'We design and engineering top-tier software systems, modular microservice databases, CI/CD automated deployments, and custom Figma visual assets for global high-growth partners.',
      links: {
        deliverables: 'Deliverables',
        saas: 'Custom SaaS Apps',
        cloud: 'Cloud Migrations',
        devops: 'Kubernetes / DevOps',
        design: 'Figma Design Systems',
        corporate: 'Corporate',
        why: 'Why Choose Us',
        portfolio: 'Our Portfolio',
        contact: 'Get Custom Quote',
        careers: 'Careers',
      },
      hiring: 'WE ARE HIRING',
      newsletter: {
        title: 'Kinetic Insights newsletter',
        desc: 'Subscribe to stay updated with cloud security checklists, speed architecture breakdowns, and tech strategy reports.',
        placeholder: 'Business email...',
        submit: 'Subscribe',
      },
      copyright: 'Kinetic Studio (PT Kinetic Teknologi Solusi). All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      nda: 'IP Agreement Guidelines',
    }
  },
  id: {
    nav: {
      about: 'Tentang',
      services: 'Layanan',
      process: 'Proses',
      portfolio: 'Portofolio',
      faq: 'FAQ',
      contact: 'Hubungi Kami',
      quote: 'Dapatkan Penawaran',
    },
    hero: {
      badge: 'Solusi TI Generasi Berikutnya',
      title1: 'Akselerasi Pertumbuhan Anda dengan Kecepatan',
      title2: '',
      subtitle: 'Kami membangun sistem digital premium, arsitektur cloud, dan perangkat lunak yang skalabel. Kinetic Studio menangani kerumitan agar organisasi Anda dapat bergerak lebih cepat.',
      cta1: 'Mulai Proyek Anda',
      cta2: 'Jelajahi Layanan',
      stat1_val: '99.4%',
      stat1_label: 'Keberhasilan Proyek',
      stat2_val: '150+',
      stat2_label: 'Sistem Dideploy',
      stat3_val: '2x',
      stat3_label: 'Kecepatan Development',
      badge1_title: 'Deploy di Hari Pertama',
      badge1_desc: 'Continuous Integration & pipeline DevOps Otomatis.',
      badge2_label: 'Keahlian',
      badge2_val: 'Clean Architecture',
      badge3_label: 'Klien',
      badge3_val: '100% Puas',
    },
    why: {
      badge: 'Kekuatan Kami',
      title: 'Memberikan Keuntungan Digital Berdampak Tinggi',
      subtitle: 'Kami menggabungkan skalabilitas perangkat lunak ekstrim dengan desain digital premium. Kami tidak berkompromi pada keamanan, arsitektur, atau kecepatan.',
      items: {
        'scalable-solutions': {
          title: 'Solusi Skalabel',
          desc: 'Kami membangun dengan backend berkecepatan tinggi dan framework cloud native yang direkayasa untuk menangani lonjakan mendadak dan pertumbuhan organik secara alami.',
        },
        'expert-developers': {
          title: 'Developer Ahli',
          desc: 'Insinyur kami adalah pemikir produk senior yang memahami alur kerja bisnis, kebersihan kode, paradigma pengujian, dan kontainerisasi yang aman.',
        },
        'transparent-process': {
          title: 'Proses Transparan',
          desc: 'Lacak kemajuan harian di papan virtual dan lihat pembaruan staging secara langsung. Kami berbicara dengan jelas, melaporkan lebih awal, dan menjalankan tinjauan sprint agile teratur.',
        },
        'on-time-delivery': {
          title: 'Pengiriman Tepat Waktu',
          desc: 'Tidak ada janji palsu atau peluncuran tanpa akhir. Mesin estimasi modern dan kontrol ruang lingkup kami membuat perangkat lunak Anda dikirim dengan benar.',
        }
      },
      guarantee: 'Standar Terjamin',
      cta_badge: 'Kesiapan Perusahaan',
      cta_title: 'Siap membangun sistem perangkat lunak yang tangguh dan disesuaikan dengan alur kerja Anda?',
      cta_desc: 'Kami merancang dan memelihara arsitektur mesh cloud pribadi, aplikasi web berkinerja tinggi, dan lingkungan kepatuhan yang aman. Mari rancang peta jalan Anda bersama.',
      cta_btn: 'Mulai Sekarang',
    },
    services: {
      badge: 'Apa Yang Kami Lakukan',
      title: 'Rekayasa Perusahaan Bertemu Desain Produk Elegan',
      subtitle: 'Kami beroperasi di antarmuka kedalaman teknis dan kecepatan produk. Pilih salah satu pilar inti kami untuk menjelajahi detail penyampaian kami.',
      items: {
        'custom-software': {
          title: 'Pengembangan Perangkat Lunak Kustom',
          desc: 'SaaS perusahaan, arsitektur web throughput tinggi, dan perangkat lunak internal yang aman. Kami menulis TypeScript, Go, dan Python yang bersih dan teruji.',
          tags: ['Rekayasa SaaS', 'Integrasi API', 'React / NextJS', 'Go Backends'],
          props: [
            'Struktur TypeScript modular & tipe data ketat.',
            'Suite pengujian unit dan integrasi yang komprehensif.',
            'Kecepatan muat sub-detik dan bundel ringan.'
          ],
          tech: 'React, Node.js, NestJS, Go, Postgres, Redis, TailwindCSS'
        },
        'cloud-architecture': {
          title: 'Arsitektur Cloud & Skalabilitas',
          desc: 'Infrastruktur yang dirancang untuk ketersediaan 99.99%. Mesh cloud aman, replika database, komputasi serverless, dan penyiapan multi-wilayah pribadi.',
          tags: ['Google Cloud / AWS', 'Database Dikelola', 'Keamanan Siber', 'Pemulihan Bencana'],
          props: [
            'Kapabilitas skala-ke-nol dengan integrasi cloud.',
            'Failover multi-zona terdistribusi dan replikasi langsung.',
            'Matriks keamanan least-privilege IAM melindungi tabel pengguna.'
          ],
          tech: 'GCP, AWS, PostgreSQL, MongoDB, Redis, Apache Kafka'
        },
        'devops-automation': {
          title: 'Otomasi DevOps & Pipeline',
          desc: 'Ucapkan selamat tinggal pada penerapan manual. Kami mengoptimalkan kecepatan build, mengemas kontainer Docker yang aman, mengelola Kubernetes, dan menulis kode Terraform.',
          tags: ['Pipeline CI/CD', 'Docker & K8s', 'Terraform IaC', 'Pemantauan & Peringatan'],
          props: [
            'Build pipeline staging otomatis di bawah 5 menit.',
            'Rolling upgrade tanpa downtime dan rilis canary.',
            'Infrastructure as Code (IaC) untuk replikasi cepat.'
          ],
          tech: 'Github Actions, Terraform, Docker, Kubernetes, Prometheus'
        },
        'ui-ux-strategy': {
          title: 'Sistem Desain Produk & UI/UX',
          desc: 'Antarmuka pengguna dengan konversi tinggi. Kami melakukan riset pengguna target, memetakan jalur, dan membangun aset Figma yang sempurna.',
          tags: ['Strategi UX', 'Pustaka Figma', 'Mockup Interaktif', 'Desain Visual'],
          props: [
            'Riset mendalam didukung umpan balik pengguna yang dapat diklik.',
            'Kepatuhan aksesibilitas W3C WCAG dan kenyamanan target sentuh.',
            'Handoff Figma yang ramah pengembang dengan token tata letak.'
          ],
          tech: 'Figma, Tailwind, Adobe CC, Framer, UserTesting'
        }
      },
      radar_badge: 'RADAR PENGIRIMAN',
      tech_caps: 'KAPABILITAS TEKNOLOGI:',
      included: 'Apa yang Termasuk:',
      custom_needs_title: 'Punya kebutuhan sistem lama khusus?',
      custom_needs_desc: 'Kami dengan nyaman memfaktorkan ulang monolit yang kompleks, memigrasi penyebaran server berat, dan menyinkronkan beberapa pipeline API internal dengan bersih.',
      cta_btn: 'Cari Solusi Anda',
      select_prompt: 'Pilih layanan di sebelah kiri untuk memeriksa parameternya.',
    },
    process: {
      badge: 'Sistem Eksekusi Kami',
      title: 'Bagaimana Kami Bermitra: Kinetic Pipeline',
      subtitle: 'Kami menolak loop umpan balik klien-agensi lama yang lambat. Proses 4 tahap kami menjamin kecepatan pengiriman tertinggi dengan konsistensi kualitas mutlak.',
      items: [
        {
          title: 'Penemuan & Strategi',
          desc: 'Kami mengadakan sesi penyelarasan interaktif, menyusun diagram alur teknis yang komprehensif, menyempurnakan cerita pengguna kustom, dan menguraikan batas cakupan proyek yang tepat. Tidak ada tebak-tebakan.',
          duration: 'Minggu 1',
        },
        {
          title: 'Desain & Arsitektur',
          desc: 'Tim kami membuat prototipe viewport interaktif fidelitas tinggi di Figma. Secara bersamaan, teknisi cloud kami menyusun skema sistem, topologi cluster, dan diagram hubungan entitas.',
          duration: 'Minggu 2-3',
        },
        {
          title: 'Pengembangan Perangkat Lunak Agile',
          desc: 'Kami mengkode dalam sprint dua mingguan, terus-menerus mengirimkan fitur modular ke server staging pribadi yang aman. Anda menerima rekaman tinjauan sprint yang transparan dan tautan demo.',
          duration: 'Minggu 4-8',
        },
        {
          title: 'QA Murni & Penerapan',
          desc: 'Kami memicu model pengujian otomatis, melakukan sapuan uji penetrasi, mengaudit viewport responsif, menyiapkan dasbor pemantauan cloud yang bersih, dan melakukan peluncuran yang mulus.',
          duration: 'Minggu 9+',
        }
      ],
      warning: 'Butuh pengiriman kilat? Kami menawarkan jalur sprint yang dipercepat untuk jadwal pendanaan/peluncuran penting. Hubungi langsung untuk membahas slot SLA staging prioritas kami.',
      warning_bold: 'Butuh pengiriman kilat?',
    },
    portfolio: {
      badge: 'Pekerjaan Kami',
      title: 'Mempelopori Produk Berkualitas',
      subtitle: 'Setiap rilis mewakili kelas master dalam kelancaran frontend, ketahanan database yang dalam, dan kecepatan struktural. Klik lencana apa saja untuk melihat studi kasus tiruan.',
      categories: {
        all: 'Semua',
        saas: 'Sistem SaaS',
        cloud: 'Cloud & DevOps',
        mobile: 'Aplikasi Seluler'
      },
      items: {
        'banking-saas': {
          title: 'Dasbor Global Acme Wealth',
          desc: 'Sistem perbankan multi-mata uang dengan aliran transaksi seketika, penghitungan saldo real-time, dan laporan kepatuhan kustom.',
        },
        'nexus-cloud': {
          title: 'Infra Cloud Nexus DataMesh',
          desc: 'Penyebaran cloud perusahaan yang mengatur jaringan VPC pelanggan terisolasi, server caching cerdas, dan cluster komputasi cloud yang skalabel.',
        },
        'workspace-mobile': {
          title: 'Kinetic Shift Enterprise Mobile Hub',
          desc: 'Ruang kerja seluler asli premium yang memfasilitasi obrolan perusahaan yang aman, sinkronisasi tugas, database offline, dan pemberitahuan cepat.',
        }
      },
      preview_summary: 'Pratinjau ringkasan kasus',
      locked: 'DEPLOYMENT TERKUNCI',
      success: 'TINGKAT KEBERHASILAN 100%',
      case_study: 'Studi Kasus',
    },
    faq: {
      badge: 'Jawaban Jelas',
      title: 'Pertanyaan yang Sering Diajukan',
      subtitle: 'Semua yang perlu Anda ketahui tentang alur kerja, ketentuan hukum, kapabilitas teknis, dan protokol harga kami.',
      items: {
        'pricing': {
          question: 'Bagaimana Kinetic Studio memberi harga pada proyek agensinya?',
          answer: 'Kami memberikan harga berbasis tonggak pencapaian yang terperinci. Kami sangat menghindari perpanjangan kejutan atau skema retainer yang tidak jelas. Setiap penawaran menampilkan biaya tetap yang terkait dengan keluaran fungsional transparan (mis. hasil Figma, kluster database, MVP siap uji). Jika ruang lingkup produk tetap stabil, harga Anda tetap sama persis.',
        },
        'timeline': {
          question: 'Berapa rata-rata waktu untuk meluncurkan MVP atau sistem?',
          answer: 'Dasbor kustom standar, aplikasi produk asli, atau migrasi cloud memakan waktu antara 4 dan 8 minggu dari kick-off hingga pemetaan DNS yang aman. Kami bekerja dalam sprint aktif 2 minggu yang disiplin dan memberi Anda akses ke lingkungan staging penyebaran berkelanjutan langsung sehingga Anda dapat memantau fitur saat kami menyusunnya.',
        },
        'tech-stack': {
          question: 'Apa tumpukan teknologi pilihan Anda?',
          answer: 'Kami menulis sistem modular dan diketik untuk skalabilitas jangka panjang. Di sisi klien, kami berspesialisasi dalam React, Next.js, dan Tailwind CSS. Di sisi backend, kami menjalankan layanan berkecepatan tinggi yang dibangun dalam Go, Node.js, dan Python, didukung oleh PostgreSQL, Redis, dan instans aman yang dihosting di GCP atau AWS.',
        },
        'support': {
          question: 'Apakah Anda menawarkan dukungan pasca peluncuran dan patch keamanan?',
          answer: 'Tentu saja. Kami menawarkan Service Level Agreement (SLA) khusus mulai dari pelestarian bug standar hingga pemeliharaan infrastruktur ketersediaan tinggi 24/7. Ini termasuk patch keamanan dependensi mingguan, sapuan optimisasi database, dan pembuatan profil kinerja server.',
        },
        'nda': {
          question: 'Apakah peta jalan bisnis, ide, dan kekayaan intelektual saya aman?',
          answer: 'Ya. Sebelum membahas detail proyek atau arsitektur database apa pun, kami menandatangani Non-Disclosure Agreement (NDA) bersama yang resmi. Setelah pembayaran akhir proyek, hak kekayaan intelektual penuh, kepemilikan repositori, kredensial penyebaran, dan aset Figma sepenuhnya ditransfer ke perusahaan Anda.',
        }
      },
      support_prompt: 'Punya pertanyaan teknis berbeda mengenai integrasi sistem kompleks, migrasi sistem lama, atau batasan hosting perusahaan yang ketat?',
      support_btn: 'Bicara dengan Arsitek kami',
    },
    contact: {
      badge: 'Dapatkan Proposal',
      title: 'Mari Rancang Arsitektur Sistem Anda',
      subtitle: 'Siap untuk menerapkan? Isi draf sistem kami. Chief Technical Officer kami akan meninjau parameter Anda dan merespons dengan tata letak anggaran khusus dalam waktu 24 jam.',
      status: 'STATUS INTI ONLINE',
      hq_title: 'Pusat Kinetic Studio',
      hq_desc: 'Insinyur inti kami beroperasi di Jakarta, Indonesia & Singapura, membantu klien global di seluruh zona teknologi Asia, Eropa, dan Pasifik.',
      office_label: 'KANTOR PUSAT',
      email_label: 'PENAWARAN PROYEK',
      phone_label: 'SALURAN PANGGILAN / WHATSAPP',
      nda_title: 'NDA & Kedaulatan Cloud Dijamin',
      nda_desc: 'Semua catatan pelanggan, input database, dan diagram visual yang dikirim melalui formulir ini dijaga oleh audit lapisan enkripsi TLS yang ketat. IP properti komersial ditransfer dengan mulus saat penandatanganan kontrak.',
      form: {
        name_label: 'Nama Lengkap',
        name_placeholder: 'Misal, Michael Chen',
        email_label: 'Email Bisnis',
        email_placeholder: 'Misal, michael@acme.com',
        company_label: 'Nama Perusahaan',
        company_placeholder: 'Misal, Acme Wealth Corp',
        budget_label: 'Perkiraan Anggaran Proyek',
        message_label: 'Detail Proyek & Tujuan Teknis',
        message_placeholder: 'Beri tahu kami tentang fitur perangkat lunak yang ingin Anda bangun, jumlah pengguna, tumpukan teknologi yang ada, dan parameter jadwal yang diharapkan...',
        submit_btn: 'Terapkan untuk Blueprint Arsitektur',
        loading: 'Mengenkripsi parameter...',
        nda_notice: 'Mengeklik kirim akan memulai Non-Disclosure Agreement bersama kami yang ketat. Parameter Anda tetap rahasia.',
      },
      success: {
        title: 'Draf Dikirim Secara Aman!',
        desc: 'Terima kasih telah menghubungi Kinetic Studio. Chief Technical Officer kami telah menerima spesifikasi blueprint Anda di bawah NDA bersama. Kami akan menghubungi Anda melalui alamat email bisnis Anda dalam waktu 24 jam.',
        next_steps: '**Apa selanjutnya?** Kami menyusun draf sistem tingkat tinggi awal dengan perkiraan ruang lingkup harga. Periksa kotak masuk Anda untuk undangan kami.',
        reset_btn: 'Kirim Draf Blueprint Lain',
      }
    },
    footer: {
      desc: 'Kami merancang dan merekayasa sistem perangkat lunak tingkat atas, database layanan mikro modular, penerapan otomatis CI/CD, dan aset visual Figma khusus untuk mitra pertumbuhan tinggi global.',
      links: {
        deliverables: 'Layanan',
        saas: 'Aplikasi SaaS Khusus',
        cloud: 'Migrasi Cloud',
        devops: 'Kubernetes / DevOps',
        design: 'Sistem Desain Figma',
        corporate: 'Perusahaan',
        why: 'Mengapa Memilih Kami',
        portfolio: 'Portofolio Kami',
        contact: 'Dapatkan Penawaran Khusus',
        careers: 'Karir',
      },
      hiring: 'KAMI MEREKRUT',
      newsletter: {
        title: 'Buletin Kinetic Insights',
        desc: 'Berlangganan untuk tetap mendapat info terbaru tentang daftar periksa keamanan cloud, rincian arsitektur kecepatan, dan laporan strategi teknologi.',
        placeholder: 'Email bisnis...',
        submit: 'Berlangganan',
      },
      copyright: 'Kinetic Studio (PT Kinetic Teknologi Solusi). Hak cipta dilindungi.',
      privacy: 'Kebijakan Privasi',
      terms: 'Syarat Layanan',
      nda: 'Panduan Perjanjian IP',
    }
  }
} as const;

// Helper to extract nested keys for type safety
type PathsToStringProps<T> = T extends string ? [] : {
  [K in Extract<keyof T, string>]: [K, ...PathsToStringProps<T[K]>]
}[Extract<keyof T, string>];

type Join<T extends string[], D extends string> =
  T extends [] ? never :
  T extends [infer F] ? F :
  T extends [infer F, ...infer R] ?
  F extends string ? 
  `${F}${D}${Join<Extract<R, string[]>, D>}` : never : string;

export type TranslationKey = Join<PathsToStringProps<typeof translations['en']>, '.'>;
