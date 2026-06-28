export type ServicePage = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  keywords: string[];
  heroPoints: string[];
  audience: string;
  outcomes: string[];
  features: string[];
  faqs: Array<{ question: string; answer: string }>;
};

export type PortfolioPage = {
  slug: string;
  title: string;
  description: string;
  image: string;
  url: string;
  keywords: string[];
  highlights: string[];
  sections: Array<{ title: string; body: string }>;
};

export type ServicePageTranslation = Omit<ServicePage, "slug" | "keywords">;
export type PortfolioPageTranslation = Omit<PortfolioPage, "slug" | "image" | "url" | "keywords">;

export const siteUrl = "https://solivatestudio.com";

export const servicePages: ServicePage[] = [
  {
    slug: "jasa-pembuatan-website",
    eyebrow: "Jasa Pembuatan Website",
    title: "Jasa pembuatan website modern untuk bisnis, komunitas, dan event.",
    description:
      "Solivate Studio menyediakan jasa pembuatan website custom, landing page, company profile, website UMKM, website komunitas, event, dan sistem digital yang mudah digunakan.",
    keywords: ["jasa pembuatan website", "jasa website", "jasa web development", "digital solution provider", "jasa website custom"],
    heroPoints: ["Website responsif dan mobile friendly", "Struktur SEO dasar sejak awal", "Desain custom sesuai kebutuhan"],
    audience: "Cocok untuk pemilik UMKM, pengurus komunitas, penyelenggara event, brand personal, dan perusahaan yang ingin tampil lebih kredibel secara digital.",
    outcomes: ["Kehadiran digital lebih profesional", "Informasi layanan lebih mudah ditemukan", "Alur kontak, katalog, atau registrasi lebih rapi"],
    features: ["Landing page", "Company profile", "Integrasi WhatsApp", "Form kontak", "Optimasi performa", "Setup domain dan hosting"],
    faqs: [
      { question: "Berapa harga jasa pembuatan website?", answer: "Harga dimulai dari Rp 49.000 untuk website sederhana dan tersedia paket bisnis mulai Rp 249.000." },
      { question: "Apakah bisa custom sesuai kebutuhan?", answer: "Bisa. Scope halaman, fitur, visual, dan integrasi disesuaikan dengan kebutuhan proyek." }
    ]
  },
  {
    slug: "website-umkm",
    eyebrow: "Website UMKM",
    title: "Jasa pembuatan website UMKM untuk usaha kecil yang ingin naik kelas.",
    description:
      "Website UMKM untuk profil bisnis, katalog produk online, landing page promosi, dan digitalisasi usaha kecil agar lebih mudah dipercaya pelanggan.",
    keywords: ["jasa pembuatan website UMKM", "jasa website UMKM", "website profil bisnis murah", "jasa katalog produk online", "digitalisasi usaha kecil"],
    heroPoints: ["Profil bisnis dan katalog produk", "Tombol WhatsApp siap closing", "Copywriting dasar untuk promosi"],
    audience: "Untuk UMKM yang masih mengandalkan chat manual, media sosial, atau marketplace dan ingin punya rumah digital sendiri.",
    outcomes: ["Bisnis terlihat lebih terpercaya", "Produk dan layanan tersusun rapi", "Calon pelanggan lebih cepat menghubungi"],
    features: ["Halaman home", "Tentang bisnis", "Katalog produk", "Galeri", "Kontak WhatsApp", "SEO dasar"],
    faqs: [
      { question: "Apakah website UMKM bisa murah tapi tetap bagus?", answer: "Bisa. Kami menjaga scope tetap praktis agar biaya masuk akal tanpa mengorbankan tampilan utama dan mobile experience." },
      { question: "Apakah cocok untuk usaha baru?", answer: "Cocok, terutama untuk usaha yang ingin mulai terlihat profesional di Google dan saat membagikan link ke pelanggan." }
    ]
  },
  {
    slug: "website-company-profile",
    eyebrow: "Website Company Profile",
    title: "Website company profile untuk brand yang ingin tampil profesional.",
    description:
      "Pembuatan website company profile untuk perusahaan, sekolah, brand parfum, organisasi, dan bisnis jasa yang butuh profil online rapi dan SEO friendly.",
    keywords: ["website company profile", "jasa website company profile", "pembuatan website perusahaan murah", "pembuatan website company profile parfum"],
    heroPoints: ["Struktur profil perusahaan", "Section layanan dan portofolio", "Optimasi trust dan kredibilitas"],
    audience: "Untuk bisnis dan organisasi yang butuh halaman resmi agar mudah dikirim ke calon klien, partner, investor, atau pelanggan.",
    outcomes: ["Brand lebih kredibel", "Informasi perusahaan mudah dipahami", "Kontak bisnis lebih jelas"],
    features: ["Profil perusahaan", "Layanan", "Portofolio", "Tim", "Kontak", "SEO title dan meta description"],
    faqs: [
      { question: "Apa bedanya landing page dan company profile?", answer: "Landing page biasanya fokus satu penawaran, sedangkan company profile menjelaskan brand, layanan, legalitas, portofolio, dan kontak secara lebih lengkap." },
      { question: "Apakah bisa dibuat multi-page?", answer: "Bisa, terutama jika layanan, galeri, atau portofolio perlu halaman terpisah." }
    ]
  },
  {
    slug: "website-masjid-komunitas",
    eyebrow: "Website Masjid & Komunitas",
    title: "Jasa pembuatan website masjid dan komunitas sosial yang transparan.",
    description:
      "Website masjid, komunitas sosial, dan platform transparansi kas masjid untuk jadwal kajian, kegiatan, infak, donasi, dan informasi jamaah.",
    keywords: ["jasa pembuatan website masjid", "jasa website masjid", "website kas masjid", "platform transparansi kas masjid", "digitalisasi komunitas sosial"],
    heroPoints: ["Jadwal kajian dan kegiatan", "Transparansi kas dan infak", "Informasi donasi dan jamaah"],
    audience: "Untuk masjid, komunitas dakwah, komunitas sosial, dan pengurus yang ingin informasi lebih mudah diakses jamaah.",
    outcomes: ["Informasi kegiatan lebih terpusat", "Transparansi donasi lebih dipercaya", "Jamaah lebih mudah mengikuti update"],
    features: ["Jadwal kegiatan", "Kas dan infak", "Donasi QRIS", "Galeri kegiatan", "Kontak pengurus", "Pengumuman"],
    faqs: [
      { question: "Apakah bisa menampilkan transparansi infak?", answer: "Bisa. Struktur halaman dapat menampilkan ringkasan kas, laporan, dan informasi donasi sesuai kebutuhan pengurus." },
      { question: "Apakah bisa untuk komunitas selain masjid?", answer: "Bisa. Template struktur ini juga cocok untuk komunitas sosial, yayasan, dan organisasi masyarakat." }
    ]
  },
  {
    slug: "website-yayasan-panti-asuhan",
    eyebrow: "Website Yayasan & Panti Asuhan",
    title: "Website yayasan dan panti asuhan untuk donasi, kegiatan, dan transparansi.",
    description:
      "Jasa pembuatan website panti asuhan dan yayasan untuk publikasi kegiatan, profil lembaga, platform donasi online, dan transparansi program sosial.",
    keywords: ["website panti asuhan", "jasa pembuatan website panti asuhan", "digitalisasi yayasan", "platform donasi online panti asuhan", "website donasi online"],
    heroPoints: ["Profil lembaga dan program", "Publikasi kegiatan", "Informasi donasi online"],
    audience: "Untuk yayasan, panti asuhan, lembaga sosial, dan komunitas yang ingin membangun kepercayaan publik secara digital.",
    outcomes: ["Donatur lebih mudah memahami program", "Kegiatan terdokumentasi rapi", "Informasi donasi lebih jelas"],
    features: ["Profil yayasan", "Program sosial", "Donasi", "Galeri", "Berita kegiatan", "Kontak"],
    faqs: [
      { question: "Apakah bisa menampilkan laporan kegiatan?", answer: "Bisa. Website dapat disusun agar dokumentasi kegiatan dan update program mudah dibaca calon donatur." },
      { question: "Apakah bisa pakai tombol WhatsApp donasi?", answer: "Bisa, tombol WhatsApp dapat diarahkan ke admin dengan template pesan otomatis." }
    ]
  },
  {
    slug: "website-event-konser",
    eyebrow: "Website Event & Konser",
    title: "Website event dan konser untuk informasi, registrasi, dan promosi acara.",
    description:
      "Platform registrasi online event, website konser, landing page acara, dan pusat informasi event agar peserta mudah daftar dan memahami detail acara.",
    keywords: ["website registrasi event online", "platform manajemen event", "jasa pembuatan website konser", "jasa website event", "website event"],
    heroPoints: ["Landing page acara", "Registrasi online", "Informasi jadwal dan venue"],
    audience: "Untuk event organizer, komunitas, sekolah, kampus, brand, dan penyelenggara konser atau seminar.",
    outcomes: ["Informasi event lebih rapi", "Registrasi peserta lebih mudah", "Promosi acara lebih kredibel"],
    features: ["Hero event", "Jadwal", "Venue", "Form registrasi", "Lineup", "FAQ", "CTA tiket"],
    faqs: [
      { question: "Apakah bisa untuk konser?", answer: "Bisa. Website dapat memuat lineup, jadwal, venue, sponsor, dan CTA pembelian tiket." },
      { question: "Apakah bisa integrasi Google Form?", answer: "Bisa, Google Form atau form custom dapat dipasang sesuai kebutuhan event." }
    ]
  },
  {
    slug: "undangan-digital",
    eyebrow: "Undangan Digital",
    title: "Website wedding invitation dan undangan digital custom yang personal.",
    description:
      "Jasa pembuatan undangan digital pernikahan, birthday website, ucapan ulang tahun interaktif, RSVP online, dan invitation website custom.",
    keywords: ["jasa undangan pernikahan online", "website wedding invitation digital", "jasa pembuatan undangan digital pernikahan", "undangan ulang tahun online interaktif", "website birthday"],
    heroPoints: ["Wedding invitation", "Birthday website", "RSVP dan custom name"],
    audience: "Untuk pasangan, keluarga, teman, dan penyelenggara acara personal yang ingin undangan terasa modern dan berkesan.",
    outcomes: ["Undangan lebih mudah dibagikan", "Momen terasa lebih personal", "Tamu mendapat informasi lengkap"],
    features: ["Custom name", "Galeri foto", "Video", "Countdown", "Maps", "RSVP", "Ucapan"],
    faqs: [
      { question: "Apakah bisa pakai nama tamu custom?", answer: "Bisa. Undangan dapat dibuat dengan parameter nama tamu agar lebih personal." },
      { question: "Apakah bisa untuk ulang tahun?", answer: "Bisa. Birthday website dapat berisi ucapan, foto, video, dan visual interaktif." }
    ]
  },
  {
    slug: "website-barbershop",
    eyebrow: "Website Barbershop",
    title: "Website barbershop dengan sistem booking online yang praktis.",
    description:
      "Jasa pembuatan website barbershop, sistem booking online barbershop, katalog layanan, jadwal barber, dan halaman promosi untuk bisnis pangkas rambut.",
    keywords: ["jasa pembuatan website barbershop", "sistem booking online barbershop", "website barbershop", "jasa booking online"],
    heroPoints: ["Booking online", "Katalog layanan", "Jadwal barber dan antrean"],
    audience: "Untuk barbershop yang ingin mengurangi antrean manual dan membuat pelanggan lebih mudah memilih layanan.",
    outcomes: ["Booking lebih tertata", "Layanan terlihat profesional", "Pelanggan bisa kontak lebih cepat"],
    features: ["Daftar layanan", "Harga", "Booking", "Galeri haircut", "Profil barber", "WhatsApp template"],
    faqs: [
      { question: "Apakah bisa pakai sistem antrean?", answer: "Bisa, sistem antrean atau booking dapat dibuat sesuai alur operasional barbershop." },
      { question: "Apakah bisa mulai dari landing page dulu?", answer: "Bisa. Untuk tahap awal bisa mulai dari landing page promosi dan tombol booking WhatsApp." }
    ]
  },
  {
    slug: "website-rental-mobil",
    eyebrow: "Website Rental Mobil",
    title: "Website rental mobil untuk katalog armada dan reservasi kendaraan.",
    description:
      "Jasa pembuatan website rental mobil, aplikasi reservasi rental mobil, katalog armada, detail harga, dan sistem pemesanan kendaraan.",
    keywords: ["jasa pembuatan website rental mobil", "aplikasi reservasi rental mobil", "website rental mobil", "sistem reservasi online"],
    heroPoints: ["Katalog armada", "Reservasi kendaraan", "Detail harga dan fasilitas"],
    audience: "Untuk bisnis rental mobil yang ingin armada terlihat rapi dan pelanggan bisa cek informasi sebelum menghubungi admin.",
    outcomes: ["Armada lebih mudah dibandingkan", "Reservasi lebih terarah", "Bisnis terlihat lebih profesional"],
    features: ["Daftar armada", "Detail mobil", "Harga rental", "Form reservasi", "Syarat sewa", "WhatsApp admin"],
    faqs: [
      { question: "Apakah bisa menampilkan katalog mobil?", answer: "Bisa. Setiap armada dapat punya foto, spesifikasi, harga, dan CTA reservasi." },
      { question: "Apakah bisa integrasi pembayaran?", answer: "Bisa untuk scope custom, termasuk integrasi payment gateway sesuai kebutuhan." }
    ]
  }
];

export const portfolioPages: PortfolioPage[] = [
  {
    slug: "masjid-raya-puri-telukjambe",
    title: "Website Masjid Raya Puri Telukjambe",
    description:
      "Studi kasus website Masjid Raya Puri Telukjambe: digitalisasi informasi masjid, jadwal kajian, transparansi kas, donasi QRIS, dan booking aula.",
    image: "/images/masjidrayapuritelukjambe.webp",
    url: "https://www.masjidrayapuritelukjambe.com/",
    keywords: ["website Masjid Raya Puri Telukjambe", "jasa website masjid", "website kas masjid", "transparansi infak masjid", "digitalisasi masjid"],
    highlights: ["Jadwal kajian dan kegiatan", "Transparansi kas dan infak", "Donasi QRIS", "Informasi booking aula"],
    sections: [
      {
        title: "Tantangan",
        body: "Masjid membutuhkan pusat informasi digital yang dapat menampung jadwal kegiatan, informasi donasi, dokumentasi jamaah, dan fasilitas aula tanpa membuat pengunjung bingung."
      },
      {
        title: "Solusi",
        body: "Solivate Studio merancang website dengan struktur informasi yang jelas: hero informatif, jadwal kajian, jadwal imam dan khatib, aula serbaguna, donasi QRIS, dan galeri kegiatan."
      },
      {
        title: "Dampak",
        body: "Website membantu jamaah mengakses informasi masjid secara lebih cepat, meningkatkan transparansi, dan memberi kanal digital yang lebih rapi untuk pengurus masjid."
      }
    ]
  }
];

export const servicePageEnglish: Record<string, ServicePageTranslation> = {
  "jasa-pembuatan-website": {
    eyebrow: "Website Development Service",
    title: "Modern website development for businesses, communities, and events.",
    description: "Solivate Studio builds custom websites, landing pages, company profiles, SME websites, community platforms, event pages, and easy-to-use digital systems.",
    heroPoints: ["Responsive and mobile-friendly websites", "SEO structure planned from the start", "Custom design based on project needs"],
    audience: "Built for SME owners, community teams, event organizers, personal brands, and companies that want stronger digital credibility.",
    outcomes: ["A more professional digital presence", "Services are easier to find and understand", "Contact, catalog, or registration flows become cleaner"],
    features: ["Landing page", "Company profile", "WhatsApp integration", "Contact form", "Performance optimization", "Domain and hosting setup"],
    faqs: [
      { question: "How much does a website cost?", answer: "Pricing starts from Rp 49,000 for simple websites, with business packages from Rp 249,000." },
      { question: "Can it be customized to our needs?", answer: "Yes. Pages, features, visuals, and integrations are adjusted to the project scope." }
    ]
  },
  "website-umkm": {
    eyebrow: "SME Website",
    title: "SME website development for small businesses ready to level up.",
    description: "SME websites for business profiles, online product catalogs, promotional landing pages, and small business digitalization that builds customer trust.",
    heroPoints: ["Business profile and product catalog", "WhatsApp button ready for conversion", "Basic promotional copywriting"],
    audience: "For SMEs still relying on manual chats, social media, or marketplaces and ready to own their digital home.",
    outcomes: ["Your business looks more trustworthy", "Products and services are organized clearly", "Potential customers can contact you faster"],
    features: ["Home page", "About business", "Product catalog", "Gallery", "WhatsApp contact", "Basic SEO"],
    faqs: [
      { question: "Can an SME website be affordable but still look good?", answer: "Yes. We keep the scope practical so the price stays reasonable without sacrificing the main look and mobile experience." },
      { question: "Is it suitable for a new business?", answer: "Yes, especially for businesses that want to look professional on Google and when sharing links with customers." }
    ]
  },
  "website-company-profile": {
    eyebrow: "Company Profile Website",
    title: "Company profile websites for brands that want to look professional.",
    description: "Company profile websites for companies, schools, perfume brands, organizations, and service businesses that need a clean and SEO-friendly online profile.",
    heroPoints: ["Company profile structure", "Service and portfolio sections", "Trust and credibility optimization"],
    audience: "For businesses and organizations that need an official page to send to clients, partners, investors, or customers.",
    outcomes: ["The brand feels more credible", "Company information is easier to understand", "Business contact points are clearer"],
    features: ["Company profile", "Services", "Portfolio", "Team", "Contact", "SEO title and meta description"],
    faqs: [
      { question: "What is the difference between a landing page and a company profile?", answer: "A landing page usually focuses on one offer, while a company profile explains the brand, services, legal details, portfolio, and contact more completely." },
      { question: "Can it be multi-page?", answer: "Yes, especially when services, galleries, or portfolios need separate pages." }
    ]
  },
  "website-masjid-komunitas": {
    eyebrow: "Mosque & Community Website",
    title: "Mosque and social community websites built for transparency.",
    description: "Mosque websites, social community sites, and mosque cash transparency platforms for study schedules, activities, donations, and congregation information.",
    heroPoints: ["Study and activity schedules", "Cash and donation transparency", "Donation and congregation information"],
    audience: "For mosques, religious communities, social communities, and teams that want information to be easier for members to access.",
    outcomes: ["Activities are more centralized", "Donation transparency builds trust", "Members can follow updates more easily"],
    features: ["Activity schedule", "Cash and donations", "QRIS donation", "Activity gallery", "Admin contact", "Announcements"],
    faqs: [
      { question: "Can it show donation transparency?", answer: "Yes. Pages can show cash summaries, reports, and donation information based on the management team's needs." },
      { question: "Can it be used for non-mosque communities?", answer: "Yes. This structure also fits social communities, foundations, and public organizations." }
    ]
  },
  "website-yayasan-panti-asuhan": {
    eyebrow: "Foundation & Orphanage Website",
    title: "Foundation and orphanage websites for donations, activities, and transparency.",
    description: "Foundation and orphanage websites for activity publication, organization profiles, online donation platforms, and social program transparency.",
    heroPoints: ["Institution profile and programs", "Activity publication", "Online donation information"],
    audience: "For foundations, orphanages, social institutions, and communities that want to build public trust digitally.",
    outcomes: ["Donors understand programs faster", "Activities are documented neatly", "Donation information is clearer"],
    features: ["Foundation profile", "Social programs", "Donation", "Gallery", "Activity news", "Contact"],
    faqs: [
      { question: "Can it show activity reports?", answer: "Yes. The website can be structured so activity documentation and program updates are easy for donors to read." },
      { question: "Can it use a WhatsApp donation button?", answer: "Yes, WhatsApp buttons can be directed to admins with automatic message templates." }
    ]
  },
  "website-event-konser": {
    eyebrow: "Event & Concert Website",
    title: "Event and concert websites for information, registration, and promotion.",
    description: "Online event registration platforms, concert websites, event landing pages, and information hubs that help participants register and understand event details.",
    heroPoints: ["Event landing page", "Online registration", "Schedule and venue information"],
    audience: "For event organizers, communities, schools, campuses, brands, and concert or seminar organizers.",
    outcomes: ["Event information is cleaner", "Participant registration is easier", "Event promotion feels more credible"],
    features: ["Event hero", "Schedule", "Venue", "Registration form", "Lineup", "FAQ", "Ticket CTA"],
    faqs: [
      { question: "Can it be used for concerts?", answer: "Yes. The website can include lineup, schedule, venue, sponsors, and ticket purchase CTAs." },
      { question: "Can it integrate Google Forms?", answer: "Yes, Google Forms or custom forms can be embedded based on event needs." }
    ]
  },
  "undangan-digital": {
    eyebrow: "Digital Invitation",
    title: "Custom wedding invitation and digital invitation websites with a personal touch.",
    description: "Wedding invitation websites, birthday websites, interactive birthday greetings, RSVP online, and custom invitation websites.",
    heroPoints: ["Wedding invitation", "Birthday website", "RSVP and custom guest name"],
    audience: "For couples, families, friends, and personal event organizers who want invitations to feel modern and memorable.",
    outcomes: ["Invitations are easier to share", "Moments feel more personal", "Guests receive complete information"],
    features: ["Custom name", "Photo gallery", "Video", "Countdown", "Maps", "RSVP", "Messages"],
    faqs: [
      { question: "Can it use custom guest names?", answer: "Yes. Invitations can use guest-name parameters for a more personal experience." },
      { question: "Can it be used for birthdays?", answer: "Yes. Birthday websites can include greetings, photos, videos, and interactive visuals." }
    ]
  },
  "website-barbershop": {
    eyebrow: "Barbershop Website",
    title: "Barbershop website with a practical online booking system.",
    description: "Barbershop website development, online booking systems, service catalogs, barber schedules, and promotional pages for haircut businesses.",
    heroPoints: ["Online booking", "Service catalog", "Barber schedule and queue"],
    audience: "For barbershops that want to reduce manual queues and help customers choose services more easily.",
    outcomes: ["Booking becomes more organized", "Services look more professional", "Customers can contact faster"],
    features: ["Service list", "Pricing", "Booking", "Haircut gallery", "Barber profile", "WhatsApp template"],
    faqs: [
      { question: "Can it use a queue system?", answer: "Yes, queue or booking systems can be built around the barbershop's operational flow." },
      { question: "Can we start with a landing page first?", answer: "Yes. Early versions can start with a promotional landing page and WhatsApp booking button." }
    ]
  },
  "website-rental-mobil": {
    eyebrow: "Car Rental Website",
    title: "Car rental website for fleet catalogs and vehicle reservations.",
    description: "Car rental website development, reservation systems, fleet catalogs, pricing details, and vehicle booking flows.",
    heroPoints: ["Fleet catalog", "Vehicle reservation", "Pricing and facility details"],
    audience: "For car rental businesses that want fleets to look organized and customers to check information before contacting admins.",
    outcomes: ["Vehicles are easier to compare", "Reservations become more directed", "The business looks more professional"],
    features: ["Fleet list", "Car details", "Rental pricing", "Reservation form", "Rental terms", "WhatsApp admin"],
    faqs: [
      { question: "Can it show a car catalog?", answer: "Yes. Each fleet item can have photos, specifications, pricing, and reservation CTAs." },
      { question: "Can it integrate payments?", answer: "Yes for custom scopes, including payment gateway integration when needed." }
    ]
  }
};

export const portfolioPageEnglish: Record<string, PortfolioPageTranslation> = {
  "masjid-raya-puri-telukjambe": {
    title: "Masjid Raya Puri Telukjambe Website",
    description: "Case study for Masjid Raya Puri Telukjambe: mosque information digitalization, study schedules, cash transparency, QRIS donations, and hall booking.",
    highlights: ["Study and activity schedules", "Cash and donation transparency", "QRIS donation", "Hall booking information"],
    sections: [
      {
        title: "Challenge",
        body: "The mosque needed a digital information center for activity schedules, donation information, community documentation, and hall facilities without confusing visitors."
      },
      {
        title: "Solution",
        body: "Solivate Studio designed a clear information structure: informative hero, study schedule, imam and khatib schedule, multipurpose hall, QRIS donation, and activity gallery."
      },
      {
        title: "Impact",
        body: "The website helps the congregation access mosque information faster, improves transparency, and gives the mosque management team a cleaner digital channel."
      }
    ]
  }
};

export const allSeoUrls = [
  "",
  "pricing",
  ...servicePages.map((page) => `layanan/${page.slug}`),
  ...portfolioPages.map((page) => `portfolio/${page.slug}`)
];
