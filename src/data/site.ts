/**
 * Central content layer for Ashrith Group of Institutions.
 * Edit these constants to update the website — pages read from here.
 *
 * NOTE: Items marked PLACEHOLDER are editable stand-ins. Replace them with
 * verified institutional content before publishing.
 */

import collegeImage from "@/assets/College_Image.JPG";
import campusHero from "@/assets/campus-hero.jpg";
import campusLocation from "@/assets/campus-location.jpg";
import classroom from "@/assets/classroom.jpg";
import facultyMentoring from "@/assets/faculty-mentoring.jpg";
import labTraining from "@/assets/lab-training.jpg";
import studentPortrait from "@/assets/student-portrait.jpg";
// Real college images mapped to site image slots
import eventCultural from "@/assets/studentsatclass.JPG";
import eventHealthCamp from "@/assets/entrence-lordphoto.JPG";
import eventLamp from "@/assets/main-entrence.JPG";
import imagingTech from "@/assets/computerlab.JPG";
import library from "@/assets/Lab.JPG";
import nursingStudents from "@/assets/Lab-teaching.JPG";
import otTraining from "@/assets/medical-teaching.JPG";
import skillsLab from "@/assets/Class.JPG";
import studentsCampus from "@/assets/teachingatclass.JPG";

export const images = {
  campusHero: collegeImage,
  campusLocation,
  classroom,
  eventCultural,
  eventHealthCamp,
  eventLamp,
  facultyMentoring,
  imagingTech,
  labTraining,
  library,
  nursingStudents,
  otTraining,
  skillsLab,
  studentPortrait,
  studentsCampus,
};

export const org = {
  name: "Ashrith Group of Institutions",
  shortName: "Ashrith",
  tagline: "Study to Serve Humanity",
  trust: "Ashrith Trust (R.)",
  description:
    "Ashrith Group of Institutions brings together nursing and paramedical education at Kota, Udupi District, Karnataka — preparing students for practical, service-driven careers in healthcare.",
  address: {
    line1: "NH-66, Kota, Udupi Taluk & District",
    line2: "Karnataka 576221, India",
    full: "NH-66, Kota, Udupi Taluk & District, Karnataka 576221",
  },
  phones: ["+91 820 2586777", "+91 98800 58567"] as [string, string],
  email: "info@ashrithgroup.org",
  admissionsEmail: "admissions@ashrithgroup.org",
  officeHours: [
    { day: "Monday – Friday", time: "9:00 AM – 5:00 PM" },
    { day: "Saturday", time: "9:00 AM – 1:00 PM" },
    { day: "Sunday & public holidays", time: "Closed" },
  ],
  mapEmbed:
    "https://www.google.com/maps?q=Kota,+Udupi,+Karnataka+576221&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Kota%2C+Udupi%2C+Karnataka+576221",
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
  admissionYear: "2026–27",
};

export type NavItem = { label: string; to: string; children?: NavItem[] };

export const mainNav: NavItem[] = [
  { label: "About", to: "/about" },
  {
    label: "Institutions",
    to: "/institutions",
    children: [
      { label: "Ashrith College & School of Nursing", to: "/institutions/nursing" },
      { label: "K. R. Hegde College of Paramedical Sciences", to: "/institutions/paramedical" },
    ],
  },
  { label: "Programmes", to: "/programmes" },
  { label: "Campus", to: "/campus" },
  { label: "Campus Life", to: "/campus-life" },
  { label: "Leadership", to: "/leadership" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export const stats = [
  { value: 15, suffix: "+", label: "Years of Service" },
  { value: 1200, suffix: "+", label: "Students & Alumni" },
  { value: 50, suffix: "+", label: "Faculty & Mentors" },
  { value: 2, suffix: "", label: "Institutions" },
  { value: 99, suffix: "%", label: "Placement Assistance" },
];

/* ------------------------------- Institutions ------------------------------ */

export type Institution = {
  slug: "nursing" | "paramedical";
  index: string;
  name: string;
  shortName: string;
  to: string;
  summary: string;
  description: string[];
  image: string;
  secondaryImage: string;
  highlights: { title: string; body: string }[];
  facilities: string[];
  careers: string[];
};

export const institutions: Institution[] = [
  {
    slug: "nursing",
    index: "01",
    name: "Ashrith College & School of Nursing",
    shortName: "Nursing",
    to: "/institutions/nursing",
    summary:
      "Degree and diploma nursing education built around supervised clinical practice, skills-lab repetition and patient-centred care.",
    description: [
      "Ashrith College & School of Nursing prepares students to care for patients with competence and compassion. Classroom teaching is paired with skills-lab practice and supervised clinical postings so that every concept is learned in the setting where it will be used.",
      "Students progress from fundamentals of nursing through medical-surgical, community health, obstetric and paediatric nursing, building confidence with each posting.",
    ],
    image: nursingStudents,
    secondaryImage: skillsLab,
    highlights: [
      {
        title: "Supervised clinical postings",
        body: "Students train in real care settings alongside faculty and clinical instructors from their first year onward.",
      },
      {
        title: "Skills and simulation laboratory",
        body: "Fundamentals, nutrition, community health and maternity labs allow repeated, safe practice before bedside care.",
      },
      {
        title: "Small teaching groups",
        body: "Clinical batches are kept small so each student receives direct observation and feedback.",
      },
    ],
    facilities: [
      "Fundamentals of Nursing laboratory",
      "Maternal & child health laboratory",
      "Community health nursing laboratory",
      "Nutrition laboratory",
      "Computer laboratory",
      "Nursing library & reading room",
    ],
    careers: [
      "Staff nurse — hospitals and nursing homes",
      "Community health nurse",
      "Nursing in specialty units (ICU, OT, dialysis)",
      "Higher education — post basic and postgraduate nursing",
      "Teaching and clinical instruction",
    ],
  },
  {
    slug: "paramedical",
    index: "02",
    name: "K. R. Hegde College of Paramedical Sciences",
    shortName: "Paramedical",
    to: "/institutions/paramedical",
    summary:
      "Diploma programmes in allied health technology — laboratory, operation theatre, imaging and dialysis — taught on working equipment.",
    description: [
      "K. R. Hegde College of Paramedical Sciences trains the technologists who make modern healthcare possible. Learning is hands-on: students spend structured hours in laboratories and clinical departments, operating the instruments they will use professionally.",
      "Each diploma combines core allied-health science with department-specific practical training and a period of supervised hospital exposure.",
    ],
    image: labTraining,
    secondaryImage: otTraining,
    highlights: [
      {
        title: "Equipment-first teaching",
        body: "Microscopy, analysers, sterilisation and imaging workflows are taught on working equipment, not slides.",
      },
      {
        title: "Department exposure",
        body: "Students rotate through relevant hospital departments to understand the full patient pathway.",
      },
      {
        title: "Protocol and safety discipline",
        body: "Sample handling, asepsis, radiation safety and documentation are practised as everyday routine.",
      },
    ],
    facilities: [
      "Clinical pathology & haematology laboratory",
      "Biochemistry & microbiology laboratory",
      "Operation theatre demonstration room",
      "Imaging technology demonstration area",
      "Dialysis technology training area",
      "Departmental library",
    ],
    careers: [
      "Medical laboratory technologist",
      "Operation theatre & anaesthesia technician",
      "Radiology / imaging technologist",
      "Dialysis technician",
      "Diagnostic centre and blood bank roles",
    ],
  },
];

export const institutionBySlug = (slug: string) =>
  institutions.find((i) => i.slug === slug);

/* -------------------------------- Programmes ------------------------------- */

export type Programme = {
  slug: string;
  name: string;
  category: "Nursing" | "Paramedical";
  institution: string;
  institutionSlug: "nursing" | "paramedical";
  duration: string;
  type: "Degree" | "Diploma";
  short: string;
  overview: string;
  eligibility: string;
  curriculum: string[];
  outcomes: string[];
  training: string;
  careers: string[];
  image: string;
};

export const programmes: Programme[] = [
  {
    slug: "bsc-nursing",
    name: "B.Sc. Nursing",
    category: "Nursing",
    institution: "Ashrith College & School of Nursing",
    institutionSlug: "nursing",
    duration: "4 Years",
    type: "Degree",
    short:
      "A four-year degree covering nursing foundations, medical-surgical, community, maternity and child health nursing with clinical practice throughout.",
    overview:
      "The B.Sc. Nursing programme develops graduate nurses who can assess, plan and deliver care independently within a healthcare team. Theory blocks are followed immediately by supervised clinical postings so that learning is applied while it is fresh.",
    eligibility:
      "PLACEHOLDER — Eligibility is governed by the prescribed regulatory norms for B.Sc. Nursing admission. Please confirm current requirements with the admissions office.",
    curriculum: [
      "Year 1 — Anatomy, physiology, nutrition, biochemistry, nursing foundations, psychology",
      "Year 2 — Pharmacology, pathology, medical-surgical nursing, community health nursing I",
      "Year 3 — Child health nursing, mental health nursing, medical-surgical nursing II",
      "Year 4 — Midwifery & obstetrical nursing, community health nursing II, management, internship",
    ],
    outcomes: [
      "Deliver safe, evidence-informed nursing care across the lifespan",
      "Perform structured patient assessment and documentation",
      "Work confidently within multidisciplinary clinical teams",
      "Lead health education and community outreach activities",
    ],
    training:
      "Clinical postings run across medical, surgical, maternity, paediatric, community and specialty areas, supervised by faculty and clinical instructors.",
    careers: [
      "Staff nurse in hospitals and specialty units",
      "Community health nurse",
      "Nurse educator (with further qualification)",
      "Postgraduate study in nursing",
    ],
    image: nursingStudents,
  },
  {
    slug: "gnm-nursing",
    name: "General Nursing & Midwifery (GNM)",
    category: "Nursing",
    institution: "Ashrith College & School of Nursing",
    institutionSlug: "nursing",
    duration: "3 Years",
    type: "Diploma",
    short:
      "A three-year diploma preparing students for bedside nursing and midwifery practice through continuous supervised clinical exposure.",
    overview:
      "GNM builds practical nursing competence with strong emphasis on ward routine, patient safety, midwifery and community nursing. Students spend a significant portion of the programme in clinical areas.",
    eligibility:
      "PLACEHOLDER — Eligibility follows the prescribed norms for GNM admission. Confirm current requirements with the admissions office.",
    curriculum: [
      "Year 1 — Anatomy & physiology, fundamentals of nursing, first aid, nutrition, community health",
      "Year 2 — Medical-surgical nursing, mental health nursing, child health nursing",
      "Year 3 — Midwifery & gynaecology, community health nursing II, internship",
    ],
    outcomes: [
      "Provide competent bedside and midwifery care",
      "Manage ward routine, medication and documentation safely",
      "Support families through health education",
    ],
    training:
      "Supervised postings across general wards, maternity, paediatrics, operation theatre and community field visits.",
    careers: [
      "Staff nurse in hospitals and nursing homes",
      "Midwifery and maternity care roles",
      "Community and school health services",
    ],
    image: skillsLab,
  },
  {
    slug: "auxiliary-nursing-midwifery",
    name: "Auxiliary Nursing & Midwifery (ANM)",
    category: "Nursing",
    institution: "Ashrith College & School of Nursing",
    institutionSlug: "nursing",
    duration: "2 Years",
    type: "Diploma",
    short:
      "A two-year community-focused nursing diploma centred on primary healthcare, maternal and child health.",
    overview:
      "ANM prepares health workers for primary and community healthcare settings, with training in maternal and child health, immunisation, health education and basic nursing procedures.",
    eligibility:
      "PLACEHOLDER — Eligibility follows the prescribed norms for ANM admission. Confirm current requirements with the admissions office.",
    curriculum: [
      "Community health nursing and primary healthcare",
      "Maternal and child health, midwifery practice",
      "Health promotion, immunisation and nutrition",
      "Basic nursing procedures and first aid",
    ],
    outcomes: [
      "Deliver primary healthcare services in community settings",
      "Support antenatal, natal and postnatal care",
      "Conduct health education and immunisation activities",
    ],
    training: "Field postings in community health centres and rural outreach programmes.",
    careers: [
      "Auxiliary nurse midwife in primary health centres",
      "Community health worker",
      "Maternal and child health services",
    ],
    image: eventHealthCamp,
  },
  {
    slug: "medical-laboratory-technology",
    name: "Diploma in Medical Laboratory Technology (DMLT)",
    category: "Paramedical",
    institution: "K. R. Hegde College of Paramedical Sciences",
    institutionSlug: "paramedical",
    duration: "2 Years",
    type: "Diploma",
    short:
      "Laboratory diagnostics training in haematology, biochemistry, microbiology and pathology with daily bench practice.",
    overview:
      "DMLT trains technologists to collect, process and analyse clinical samples accurately. Students work at the bench from the first term, learning instrument handling, quality control and reporting discipline.",
    eligibility:
      "PLACEHOLDER — Eligibility follows the prescribed norms for DMLT admission. Confirm current requirements with the admissions office.",
    curriculum: [
      "Human anatomy, physiology and laboratory basics",
      "Haematology and blood banking",
      "Clinical biochemistry",
      "Microbiology, parasitology and serology",
      "Histopathology and cytology techniques",
    ],
    outcomes: [
      "Perform routine and specialised laboratory investigations",
      "Maintain quality control and instrument calibration",
      "Handle samples safely and document results accurately",
    ],
    training: "Bench rotations across pathology, biochemistry and microbiology sections with supervised hospital exposure.",
    careers: [
      "Medical laboratory technologist",
      "Blood bank technician",
      "Diagnostic centre and research laboratory roles",
    ],
    image: labTraining,
  },
  {
    slug: "operation-theatre-anaesthesia-technology",
    name: "Diploma in Operation Theatre & Anaesthesia Technology (DOT&AT)",
    category: "Paramedical",
    institution: "K. R. Hegde College of Paramedical Sciences",
    institutionSlug: "paramedical",
    duration: "2 Years",
    type: "Diploma",
    short:
      "Surgical and anaesthesia support training covering sterilisation, instrumentation, theatre protocol and patient monitoring.",
    overview:
      "This diploma prepares technicians who keep the operation theatre safe and ready — from sterile supply and instrument sets to anaesthesia equipment checks and intra-operative monitoring support.",
    eligibility:
      "PLACEHOLDER — Eligibility follows the prescribed norms for DOT&AT admission. Confirm current requirements with the admissions office.",
    curriculum: [
      "Anatomy, physiology and applied pharmacology",
      "Sterilisation, asepsis and infection control",
      "Surgical instrumentation and theatre procedures",
      "Anaesthesia equipment and patient monitoring",
      "Emergency and resuscitation support",
    ],
    outcomes: [
      "Prepare and maintain operation theatres to protocol",
      "Assemble and manage surgical instrument sets",
      "Support anaesthesia teams during procedures",
    ],
    training: "Supervised theatre exposure with graduated responsibility across surgical specialties.",
    careers: [
      "Operation theatre technician",
      "Anaesthesia technician",
      "Central sterile supply department roles",
    ],
    image: otTraining,
  },
  {
    slug: "medical-imaging-technology",
    name: "Diploma in Medical Imaging Technology (DMIT)",
    category: "Paramedical",
    institution: "K. R. Hegde College of Paramedical Sciences",
    institutionSlug: "paramedical",
    duration: "2 Years",
    type: "Diploma",
    short:
      "Radiography and imaging training covering positioning, image quality, radiation safety and departmental workflow.",
    overview:
      "DMIT develops imaging technologists who can position patients correctly, produce diagnostic-quality images and work safely with radiation in a busy department.",
    eligibility:
      "PLACEHOLDER — Eligibility follows the prescribed norms for DMIT admission. Confirm current requirements with the admissions office.",
    curriculum: [
      "Radiographic anatomy and positioning",
      "Physics of radiation and image formation",
      "Radiation protection and safety regulations",
      "Contrast studies and special procedures",
      "Introduction to CT, ultrasound and MRI workflow",
    ],
    outcomes: [
      "Produce consistent, diagnostic-quality radiographs",
      "Apply radiation protection practice for patients and staff",
      "Manage imaging department workflow and records",
    ],
    training: "Departmental postings covering general radiography and special procedures under supervision.",
    careers: [
      "Radiographer / imaging technologist",
      "CT and ultrasound support roles",
      "Diagnostic imaging centre roles",
    ],
    image: imagingTech,
  },
  {
    slug: "dialysis-technology",
    name: "Diploma in Dialysis Technology (DDT)",
    category: "Paramedical",
    institution: "K. R. Hegde College of Paramedical Sciences",
    institutionSlug: "paramedical",
    duration: "2 Years",
    type: "Diploma",
    short:
      "Renal replacement therapy training covering machine operation, water treatment, vascular access care and patient monitoring.",
    overview:
      "DDT prepares technicians for dialysis units: preparing and monitoring machines, managing the dialysis session safely and supporting patients through long-term treatment.",
    eligibility:
      "PLACEHOLDER — Eligibility follows the prescribed norms for DDT admission. Confirm current requirements with the admissions office.",
    curriculum: [
      "Renal anatomy, physiology and pathology",
      "Principles of haemodialysis and peritoneal dialysis",
      "Dialysis machine operation and water treatment",
      "Vascular access care and infection control",
      "Patient monitoring and emergency management",
    ],
    outcomes: [
      "Set up and monitor dialysis sessions safely",
      "Maintain machines, water treatment and records",
      "Recognise and escalate intra-dialytic complications",
    ],
    training: "Supervised dialysis unit exposure with progressive independence.",
    careers: [
      "Dialysis technician in hospitals and standalone units",
      "Nephrology department support roles",
    ],
    image: imagingTech,
  },
];

export const programmeBySlug = (slug: string) => programmes.find((p) => p.slug === slug);

/* ---------------------------------- Events --------------------------------- */

export type SiteEvent = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  category: "Academic" | "Community" | "Campus";
  excerpt: string;
  body: string[];
  image: string;
  gallery: string[];
  featured?: boolean;
};

export const events: SiteEvent[] = [
  {
    slug: "lamp-lighting-ceremony",
    title: "Lamp Lighting & Oath Taking Ceremony",
    date: "2026-07-18",
    dateLabel: "18 July 2026",
    category: "Academic",
    featured: true,
    excerpt:
      "First-year nursing students received their lamps and took the professional pledge, marking their entry into clinical practice.",
    body: [
      "The lamp lighting ceremony marks the moment nursing students formally begin clinical practice. Students received their lamps from faculty and took the professional pledge before family members and staff.",
      "The ceremony is a long-standing tradition in nursing education, symbolising the passing of knowledge and responsibility from one generation of nurses to the next.",
      "Following the pledge, faculty briefed students on ward conduct, patient confidentiality and the expectations of supervised clinical postings.",
    ],
    image: eventLamp,
    gallery: [eventLamp, nursingStudents, classroom],
  },
  {
    slug: "community-health-camp-kota",
    title: "Community Health Check-up Camp at Kota",
    date: "2026-06-21",
    dateLabel: "21 June 2026",
    category: "Community",
    excerpt:
      "Students and faculty conducted basic health screening and health education for residents of neighbouring villages.",
    body: [
      "Nursing and paramedical students organised a community health camp near campus, offering basic screening including blood pressure and blood glucose checks along with health education sessions.",
      "Community outreach is part of the curriculum: students practise history taking, screening and health communication with real families under faculty supervision.",
    ],
    image: eventHealthCamp,
    gallery: [eventHealthCamp, studentsCampus],
  },
  {
    slug: "annual-cultural-day",
    title: "Annual Cultural Day",
    date: "2026-03-08",
    dateLabel: "8 March 2026",
    category: "Campus",
    excerpt:
      "A full day of music, dance and drama organised and performed entirely by students across both institutions.",
    body: [
      "Cultural Day brings both colleges together for a day of performance and celebration. Students plan, rehearse and host the entire programme.",
      "Activities like these build the communication and teamwork that clinical work demands.",
    ],
    image: eventCultural,
    gallery: [eventCultural, studentsCampus, classroom],
  },
  {
    slug: "laboratory-skills-workshop",
    title: "Laboratory Skills Workshop",
    date: "2026-02-14",
    dateLabel: "14 February 2026",
    category: "Academic",
    excerpt:
      "A hands-on workshop for paramedical students on sample handling, quality control and instrument calibration.",
    body: [
      "Paramedical students attended a practical workshop covering pre-analytical sample handling, internal quality control and routine instrument calibration.",
      "Sessions were run at the bench in small groups, with each student completing the full workflow independently.",
    ],
    image: labTraining,
    gallery: [labTraining, imagingTech],
  },
  {
    slug: "clinical-orientation-week",
    title: "Clinical Orientation Week",
    date: "2026-01-12",
    dateLabel: "12 January 2026",
    category: "Academic",
    excerpt:
      "New clinical batches were oriented to ward protocol, infection control and professional conduct before postings began.",
    body: [
      "Ahead of the new posting cycle, students completed an orientation covering hand hygiene, personal protective equipment, patient privacy and escalation protocol.",
      "Each batch then met their clinical instructors and reviewed their posting schedule.",
    ],
    image: skillsLab,
    gallery: [skillsLab, nursingStudents],
  },
  {
    slug: "world-nurses-day",
    title: "World Nurses Day Observance",
    date: "2025-05-12",
    dateLabel: "12 May 2025",
    category: "Community",
    excerpt:
      "Students marked International Nurses Day with a rally, poster presentations and a public health awareness drive.",
    body: [
      "Students organised an awareness rally and poster exhibition on the theme of nursing's role in community health.",
      "The day closed with a felicitation of senior faculty and clinical instructors.",
    ],
    image: nursingStudents,
    gallery: [nursingStudents, eventHealthCamp],
  },
];

export const eventBySlug = (slug: string) => events.find((e) => e.slug === slug);

export const announcements = [
  {
    label: `Admissions Open ${org.admissionYear}`,
    text: "Applications are open for nursing and paramedical programmes.",
    to: "/admissions",
    cta: "View Admissions",
  },
  {
    label: "Programme Enquiry",
    text: "Speak to the admissions team about eligibility and course structure.",
    to: "/contact",
    cta: "Contact Us",
  },
  {
    label: "Campus Visit",
    text: "Visit the Kota campus and see the laboratories and classrooms.",
    to: "/campus",
    cta: "Plan a Visit",
  },
];

/* -------------------------------- Leadership ------------------------------- */

export type Leader = {
  name: string;
  role: string;
  initials: string;
  bio: string;
  featured?: boolean;
};

export const leadership: Leader[] = [
  {
    name: "Dr. Vidyadhar Shetty K.",
    role: "Director & Trustee",
    initials: "VS",
    featured: true,
    bio: "Dr. Vidyadhar Shetty K. leads Ashrith Trust's education initiatives, guiding both institutions towards practice-led healthcare teaching and community service.",
  },
  {
    name: "K. R. Hegde",
    role: "Chairman & Managing Trustee",
    initials: "KH",
    bio: "Founding trustee of Ashrith Trust (R.), after whom the College of Paramedical Sciences is named.",
  },
  {
    name: "Dr. Vishwanath Shetty",
    role: "Trustee",
    initials: "VN",
    bio: "PLACEHOLDER — Biography to be provided by the institution.",
  },
  {
    name: "Sarojini R. Hegde",
    role: "Managing Trustee",
    initials: "SH",
    bio: "PLACEHOLDER — Biography to be provided by the institution.",
  },
  {
    name: "Ashrith Hegde",
    role: "Trustee",
    initials: "AH",
    bio: "PLACEHOLDER — Biography to be provided by the institution.",
  },
];

/* --------------------------------- Gallery --------------------------------- */

export type GalleryItem = {
  src: string;
  alt: string;
  category: "Campus" | "Students" | "Nursing" | "Paramedical" | "Laboratories" | "Events" | "Activities" | "Infrastructure";
  span?: "tall" | "wide";
};

export const gallery: GalleryItem[] = [
  { src: campusHero, alt: "Ashrith campus academic block at Kota", category: "Campus", span: "wide" },
  { src: nursingStudents, alt: "Nursing students practising patient care in a training ward", category: "Nursing", span: "tall" },
  { src: labTraining, alt: "Paramedical students working with microscopes in the laboratory", category: "Laboratories" },
  { src: classroom, alt: "Students attending a lecture in a campus classroom", category: "Students" },
  { src: skillsLab, alt: "Faculty demonstrating resuscitation in the nursing skills laboratory", category: "Nursing", span: "wide" },
  { src: otTraining, alt: "Students preparing surgical instruments in the operation theatre", category: "Paramedical", span: "tall" },
  { src: library, alt: "Students reading in the campus library", category: "Infrastructure" },
  { src: eventCultural, alt: "Students performing at the annual cultural day", category: "Events", span: "wide" },
  { src: eventHealthCamp, alt: "Students screening villagers at a community health camp", category: "Activities" },
  { src: eventLamp, alt: "Nursing students at the lamp lighting ceremony", category: "Events", span: "tall" },
  { src: imagingTech, alt: "Imaging technology training room", category: "Laboratories" },
  { src: studentsCampus, alt: "Students walking together on campus", category: "Students", span: "wide" },
  { src: facultyMentoring, alt: "Faculty member mentoring students in a corridor", category: "Students" },
  { src: campusLocation, alt: "Campus surroundings along NH-66 near Kota", category: "Campus" },
];

export const galleryCategories = [
  "All",
  "Campus",
  "Students",
  "Nursing",
  "Paramedical",
  "Laboratories",
  "Events",
  "Activities",
  "Infrastructure",
] as const;

/* -------------------------------- Facilities ------------------------------- */

export const facilities = [
  { title: "Classrooms", body: "Ventilated, well-lit lecture rooms sized for focused teaching groups.", image: classroom },
  { title: "Laboratories", body: "Dedicated nursing skills, pathology, biochemistry and microbiology laboratories.", image: labTraining },
  { title: "Library", body: "Reference collection, journals and quiet reading space for both institutions.", image: library },
  { title: "Skills & Simulation", body: "Mannequin-based practice areas for procedures before clinical exposure.", image: skillsLab },
  { title: "Student Areas", body: "Common areas, dining and gathering spaces for day-to-day campus life.", image: studentsCampus },
  { title: "Clinical Training Spaces", body: "Demonstration rooms mirroring hospital ward and theatre layouts.", image: otTraining },
];

/* ---------------------------------- Values --------------------------------- */

export const pillars = [
  {
    number: "01",
    title: "Healthcare-focused education",
    body: "Every programme at Ashrith exists to prepare a student for a defined healthcare role — nothing is taught in the abstract.",
  },
  {
    number: "02",
    title: "Practical clinical exposure",
    body: "Supervised postings and laboratory hours are built into the timetable from the first year, not saved for the last.",
  },
  {
    number: "03",
    title: "Experienced faculty",
    body: "Teaching is led by faculty and clinical instructors who have practised in the wards and departments they teach.",
  },
  {
    number: "04",
    title: "Student-centered learning",
    body: "Small clinical batches, direct feedback and mentoring keep every student visible and supported.",
  },
  {
    number: "05",
    title: "Career-oriented programmes",
    body: "Curriculum, training hours and assessment are aligned to what employers in hospitals and diagnostics actually require.",
  },
];

export const missionVision = [
  {
    title: "Our Mission",
    body: "To teach students to practise ethical, competent healthcare in their personal and professional life, rendering nursing and allied health service in a committed manner with the spirit of humanity.",
  },
  {
    title: "Our Vision",
    body: "A holistic approach to learning that promotes the involvement of every student's mind, body and soul in an academically stimulating environment.",
  },
  {
    title: "Our Philosophy",
    body: "We believe in excellence in the promotion and transmission of healthcare knowledge through a teaching-learning process that is the responsibility of both faculty and students.",
  },
  {
    title: "Aims & Objectives",
    body: "To acquire knowledge of theory and practice of nursing and allied subject areas in delivering comprehensive care to patients and communities.",
  },
];

export const timeline = [
  { year: "2009", title: "Ashrith Trust (R.) established", body: "The Trust is founded with a mandate in healthcare, education and social service." },
  { year: "2011", title: "Nursing education begins", body: "Ashrith College & School of Nursing opens at the Kota campus." },
  { year: "2016", title: "Paramedical sciences added", body: "K. R. Hegde College of Paramedical Sciences is established to train allied health technologists." },
  { year: "2020", title: "Laboratories expanded", body: "Skills, simulation and diagnostic laboratories are upgraded across both institutions." },
  { year: "2026", title: "Fifteen years of service", body: "Over 1200 students and alumni have passed through the Ashrith campus." },
];

export const testimonials = [
  {
    quote:
      "Ashrith did not just give me a degree. It gave me the confidence to walk into a ward on day one and know exactly what to do.",
    name: "PLACEHOLDER — Student name",
    programme: "B.Sc. Nursing",
    year: "Final Year",
    image: studentPortrait,
  },
];

export const faqs = [
  {
    q: "Which programmes does Ashrith offer?",
    a: "Ashrith offers nursing programmes (B.Sc. Nursing, GNM, ANM) through Ashrith College & School of Nursing, and allied health diplomas (DMLT, DOT&AT, DMIT, DDT) through K. R. Hegde College of Paramedical Sciences.",
  },
  {
    q: "How do I apply for admission?",
    a: `Submit the enquiry form on the Admissions page. The admissions office will contact you with the application steps for ${org.admissionYear}.`,
  },
  {
    q: "What is the eligibility for each programme?",
    a: "Eligibility follows the prescribed regulatory norms for each programme. Confirm current requirements with the admissions office before applying — details on individual programme pages are marked for confirmation.",
  },
  {
    q: "Where is the campus located?",
    a: `${org.address.full}. The campus sits directly on NH-66, making it accessible from Udupi, Kundapura and Mangaluru.`,
  },
  {
    q: "Can I visit the campus before applying?",
    a: "Yes. Campus visits can be arranged during office hours. Use the contact form or call the numbers listed to schedule one.",
  },
  {
    q: "Is hostel accommodation available?",
    a: "PLACEHOLDER — Please confirm current hostel and accommodation arrangements with the institution.",
  },
];

export const admissionSteps = [
  { number: "01", title: "Explore Programme", body: "Read through the programme pages and identify the course that matches your interest and background." },
  { number: "02", title: "Check Eligibility", body: "Confirm the current eligibility requirements for your chosen programme with the admissions office." },
  { number: "03", title: "Submit Enquiry", body: "Complete the admission enquiry form with your details, qualification and programme preference." },
  { number: "04", title: "Connect With Admissions", body: "Our team will contact you to guide you through documentation and the application process." },
  { number: "05", title: "Begin Your Journey", body: "Complete admission formalities, join orientation and start your first term at Kota." },
];

export const requiredDocuments = [
  "Completed application form",
  "Marks card of qualifying examination",
  "Transfer certificate from previous institution",
  "Migration certificate (where applicable)",
  "Conduct / character certificate",
  "Recent passport-size photographs",
  "Government-issued photo identification",
  "Caste / category certificate (where applicable)",
];

export const qualifications = [
  "10th Standard / SSLC",
  "12th Standard / PUC",
  "Diploma",
  "Undergraduate degree",
  "Other",
];
