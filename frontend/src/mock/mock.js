// Mock data for NutriEdge Lifesciences website

export const companyInfo = {
  name: 'NutriEdge Lifesciences',
  logo: 'https://customer-assets-m6fa6gv7.emergentagent.net/job_980c888b-ea4b-4eb2-8017-f468b74eb275/artifacts/y0vrgq78_Final%20Nutriedge%20Logo%202.webp',
  factoryImage: 'https://customer-assets-m6fa6gv7.emergentagent.net/job_980c888b-ea4b-4eb2-8017-f468b74eb275/artifacts/2dj448j6_nutri%20edge%20factory%20pic%20.jpeg',
  directorImage: 'https://customer-assets-m6fa6gv7.emergentagent.net/job_980c888b-ea4b-4eb2-8017-f468b74eb275/artifacts/x69axh00_nikunj%20pic.jpeg',
  phones: ['+91 7041783028', '+91 9586383028'],
  emails: ['info@nutriedgelife.com', 'nutriedgelifesciences@gmail.com'],
  factoryAddress: '51/52/53/54 Gopal Charan Estate, Kathwada GIDC, Ahmedabad, Gujarat, India 382430',
  corporateAddress: "Office No-9, 10, 11, 12 Arya's Landmark, Sevasi, Vadodara, Gujarat, India 391101",
  tagline: 'The CDMO Behind Fast-Growing Nutraceutical Brands',
  socials: {
    facebook: 'https://www.facebook.com/share/1EXPTWECeu/',
    linkedin: 'https://www.linkedin.com/in/nikunj-patel-aa7b5a217/?skipRedirect=true',
    instagram: '#'
  },
  cataloguePdf: '/assets/NutriEdge-Catalogue.pdf?v=20260724b'
};

export const navigationLinks = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT', path: '/about', dropdown: [
    { label: 'About Us', path: '/about' },
    { label: "Director's Word", path: '/about#director' },
    { label: 'Infrastructure', path: '/about#infrastructure' }
  ]},
  { label: 'PRODUCTS', path: '/products' },
  { label: 'GALLERY', path: '/gallery' },
  { label: 'R&D', path: '/rnd' },
  { label: 'CONTACT US', path: '/contact' }
];

export const packagingTypes = [
  { name: 'BOTTLE PACKING', image: '/assets/packaging/bottle.png' },
  { name: 'EFFERVESCENT TUBE PACKING', image: '/assets/packaging/effervescent.png' },
  { name: 'JAR PACKING', image: '/assets/packaging/jar.png' },
  { name: 'SACHET PACKING', image: '/assets/packaging/sachet.png' },
  { name: 'BLISTER PACKING', image: '/assets/packaging/blister.png' }
];

export const certifications = [
  { name: 'FSSAI', code: 'FSSAI', logo: '/assets/certifications/fssai.webp' },
  { name: 'USFDA', code: 'USFDA', logo: '/assets/certifications/usfda.webp' },
  { name: 'HACCP', code: 'HACCP', logo: '/assets/certifications/haccp.webp' },
  { name: 'HALAL', code: 'HALAL', logo: '/assets/certifications/halal.webp' },
  { name: 'KOSHER', code: 'KOSHER', logo: '/assets/certifications/kosher.webp' },
  { name: 'WHO GMP', code: 'WHO-GMP', logo: '/assets/certifications/who-gmp.webp' },
  { name: 'Certificate of Compliance', code: 'COC', logo: '/assets/certifications/coc.webp' },
  { name: 'ISO 22000:2018', code: 'ISO 22000', logo: '/assets/certifications/iso-22000.webp' },
  { name: 'ISO 9001:2015', code: 'ISO 9001', logo: '/assets/certifications/iso-9001.webp' },
  { name: 'cGMP', code: 'cGMP', logo: '/assets/certifications/cgmp.webp' },
  { name: 'NAFDAC', code: 'NAFDAC', logo: '/assets/certifications/nafdac.webp' }
];

// 15+ export countries
export const globalPresence = [
  { country: 'Myanmar', iso3: 'MMR' },
  { country: 'Philippines', iso3: 'PHL' },
  { country: 'Cambodia', iso3: 'KHM' },
  { country: 'Laos', iso3: 'LAO' },
  { country: 'Mauritius', iso3: 'MUS' },
  { country: 'Bhutan', iso3: 'BTN' },
  { country: 'Nepal', iso3: 'NPL' },
  { country: 'Tanzania', iso3: 'TZA' },
  { country: 'Venezuela', iso3: 'VEN' },
  { country: 'Kosovo', iso3: 'XKX' },
  { country: 'Belarus', iso3: 'BLR' },
  { country: 'Nigeria', iso3: 'NGA' },
  { country: 'Ghana', iso3: 'GHA' },
  { country: 'Congo', iso3: 'COD' },
  { country: 'Mali', iso3: 'MLI' }
];

export const processSteps = [
  { step: 1, name: 'Research & Development', description: 'Innovative formulation and R&D by expert scientists.' },
  { step: 2, name: 'Production', description: 'State-of-the-art manufacturing lines with automated systems.' },
  { step: 3, name: 'Quality Control', description: 'Rigorous testing at every stage in our in-house lab.' },
  { step: 4, name: 'Packing', description: 'Sealed, safe and branded packaging solutions.' },
  { step: 5, name: 'Quality Assurance', description: 'Multi-level QA sign-off before dispatch.' },
  { step: 6, name: 'Finished Products', description: 'Ready-to-market finished nutraceutical products.' },
  { step: 7, name: 'Ready to Dispatch', description: 'Efficient warehousing and dispatch logistics.' },
  { step: 8, name: 'Delivery', description: 'On-time delivery to clients across the globe.' }
];

export const whyChooseUs = [
  { title: 'QUALITY THAT DEFINES TRUST \u2013 OUR PROMISE.', icon: 'ShieldCheck' },
  { title: 'FAST DELIVERY WITHOUT COMPROMISING QUALITY.', icon: 'Truck' },
  { title: 'YOUR SATISFACTION, OUR TOP PRIORITY.', icon: 'Handshake' },
  { title: 'CUTTING-EDGE FORMULATIONS FOR MODERN HEALTH NEEDS.', icon: 'FlaskConical' },
  { title: 'DEDICATED SUPPORT \u2013 FROM CONCEPT TO COMPLETION.', icon: 'Headphones' }
];

export const whyNutriEdgePrinciples = [
  { number: '01', title: 'Advanced Manufacturing Facility', description: 'Our plant uses advanced technology with GMP and ISO standards.', icon: 'Factory' },
  { number: '02', title: 'On-Time Delivery', description: 'We complete every order on time with reliable and efficient service.', icon: 'Package' },
  { number: '03', title: 'Customized Product Solutions', description: 'We offer custom formulations, packaging, and labeling for every client.', icon: 'Boxes' },
  { number: '04', title: 'Transparent Processes', description: 'We maintain complete transparency in ingredients, manufacturing, and labeling.', icon: 'ScanSearch' },
  { number: '05', title: 'After-Sales Support', description: 'Our support team ensures seamless coordination even after order completion.', icon: 'Headphones' },
  { number: '06', title: 'Pure and Safe Ingredients', description: 'Every ingredient is carefully selected and verified to ensure purity and safety.', icon: 'Leaf' }
];

export const standOutFeatures = [
  { title: 'MARKET READY', description: 'From formulation to packaging, we simplify every stage of product development for faster market launches.', icon: 'TrendingUp' },
  { title: 'FLEXIBLE BRANDING', description: 'Fully customizable branding and packaging solutions tailored to reflect your unique business identity.', icon: 'Package' }
];

export const expertise = [
  { title: 'Custom Formulations', description: 'Tailored formulations to match your brand vision and market needs.', icon: 'Beaker' },
  { title: 'Private Labeling', description: 'End-to-end private label solutions with your branding.', icon: 'Tags' },
  { title: 'Contract Manufacturing', description: 'Reliable large-scale manufacturing under strict compliance.', icon: 'Factory' },
  { title: 'Global Export', description: 'Trusted exporter serving clients across 15+ countries.', icon: 'Globe' }
];

export const testimonials = [
  { name: 'Rakesh Sharma', date: 'March 12, 2025', rating: 5, text: 'Best product mfg, product quality is so good, best part owner is very friendly.' },
  { name: 'Priya Mehta', date: 'April 3, 2025', rating: 5, text: 'A great international-class set up! Most trusted manufacturing unit.' },
  { name: 'Vikram Desai', date: 'May 18, 2025', rating: 5, text: 'NutriEdge team is highly professional and delivers on every commitment.' },
  { name: 'Anjali Patel', date: 'June 1, 2025', rating: 5, text: 'Excellent quality control and timely delivery. Highly recommended!' }
];

const directorPara1 = 'At NutriEdge Lifesciences, our vision has always been to redefine the standards of nutraceutical manufacturing through science, integrity and innovation. From the very first day, we set out with a clear purpose \u2013 to build a company that partners with brands not just as a manufacturer, but as a true growth ally.';
const directorPara2 = 'Every product that leaves our facility carries with it years of research, uncompromising quality checks and the passion of a team that genuinely believes in the power of good health. Backed by globally recognized certifications like USFDA, WHO-GMP, HACCP, HALAL, KOSHER, ISO 22000:2018 and NAFDAC, we ensure that every batch meets the highest international benchmarks.';
const directorPara3 = 'As we expand our footprint across the globe, our commitment remains simple \u2013 deliver world-class products, honor every partnership and build a healthier tomorrow, one formulation at a time. I invite you to be a part of this journey with us.';

export const directorMessage = {
  name: 'Mr. Nikunj Patel',
  designation: 'Founder & Managing Director',
  message: directorPara1 + '\n\n' + directorPara2 + '\n\n' + directorPara3
};

export const rndCapabilities = [
  { title: 'Advanced Formulation Lab', description: 'Cutting-edge lab equipped with modern instruments for developing new formulations.' },
  { title: 'Analytical Testing', description: 'HPLC, GC, UV, and other analytical tools ensure product purity and potency.' },
  { title: 'Stability Studies', description: 'Real-time and accelerated stability chambers to ensure product longevity.' },
  { title: 'Product Innovation', description: 'Dedicated team continuously innovating new health and nutrition solutions.' },
  { title: 'Regulatory Compliance', description: 'Complete regulatory documentation for global markets.' },
  { title: 'Custom Development', description: 'From concept to commercialization tailored to client needs.' }
];

// Company Journey Milestones (as per updated PDF)
export const milestones = [
  { year: '2025', title: 'Founded', text: 'Established as a Merchant Exporter, began exporting to 15+ international markets across Asia, Africa & LATAM.', icon: 'Calendar' },
  { year: '2026', title: 'Manufacturing Facility', text: 'Built our 15,000 Sq.Ft state-of-the-art manufacturing facility in Kathwada GIDC, Ahmedabad.', icon: 'Factory' },
  { year: '2026', title: 'Global Certifications', text: 'Achieved USFDA, WHO-GMP, HACCP, HALAL, KOSHER and NAFDAC certifications.', icon: 'Award' },
  { year: 'Today', title: '100+ Brand Partners', text: 'Trusted by 100+ brands and 30+ clients across 15+ countries worldwide.', icon: 'Users' }
];

// Infrastructure & Facility (updated per correction)
export const infrastructure = {
  headline: 'World-Class Manufacturing Facility',
  facts: [
    { label: '15,000 Sq. Ft.', text: 'State-of-the-Art Manufacturing Facility' },
    { label: 'Kathwada GIDC', text: 'Located in Ahmedabad, India' },
    { label: 'Automated', text: 'Production & Packaging Lines' },
    { label: 'HVAC Controlled', text: 'Clean rooms with strict quality standards' },
    { label: 'In-House', text: 'R&D, Analytical & QC Laboratory' },
    { label: 'Dedicated', text: 'Warehousing for raw materials and finished goods' }
  ],
  capacity: [
    { qty: '1 Million', unit: 'Tablets / Day' },
    { qty: '1 Million', unit: 'Hard Gel Capsules / Day' },
    { qty: '1 Million', unit: 'Soft Gel Capsules / Day' },
    { qty: '0.3 Million', unit: 'Effervescent Tablets / Day' },
    { qty: '0.2 Million', unit: 'Gummies / Day' },
    { qty: '0.3 Million', unit: 'Sachets / Day' },
    { qty: '20,000', unit: 'Syrup Bottles / Day' },
    { qty: '50,000', unit: 'Oral Drop Bottles / Day' },
    { qty: '10,000', unit: 'Powder Jars / Day' }
  ]
};

// Gallery images (from Product Photos folder — served as WebP)

const newGalleryFiles = [
  'NERVA Nutraceutical Product Display.webp',
  'NEUBRAIN Softgel Product Display.webp',
  'NEUPOP Omega-3 Syrup Product Scene.webp',
  'Nutri Stuff F 100 Product Can.webp',
  'Nutri Stuff F-75 Canister Product Photo.webp',
  'Omega-3 Heart and Brain Support Product Shot.webp',
  'Omepro 3 Fish Oil Display.webp',
  'Openza Pregnancy Care Supplement Display.webp',
  'Pregawind Original Capsules Display.webp',
  'PregnaHOPE Max Supplement Display.webp',
  'PregnaHOPE Pregnancy Supplement Display.webp',
  'PregnaMom Plus Omega-3 Product Display.webp',
  'Pregnaneed Tablets Product Display.webp',
  'Prime-D Vitamin D Supplement Display.webp',
  'Procare-B1 Vitamin B1 Supplement Display.webp',
  'QuoroHeal Tablets on Wooden Table.webp',
  'ShweMed Neuro Product Display.webp',
  'SHWEMED PRIOIL Evening Primrose Set.webp',
  'Shwemed Prioil Softgel Product Display.webp',
  'ShweMed Vitamin E Softgel Product Display.webp',
  'Sugar Care Blister Pack Studio Shot.webp',
  'SunSorb Cholecalciferol Softgel Product Photo.webp',
  'Tendoflex Supplements on Wood Table.webp',
  'ThinkUP D3 Syrup Product Display (1).webp',
  'Trinervia 600 Supplement Package.webp',
  'Tritga Plus Omega-3 Packaging Display.webp',
  'Tyos Tablet Box and Blister Pack.webp',
  'Vitabloom Pregnancy Wellness Bottle.webp',
  'VitaForce Wellness Supplement Bottle.webp',
  'VitaJoint Advanced Joint Support Pack.webp',
  'Vitamin D3 Drops Product Display.webp',
  'Weldbone Capsule Product Display (1).webp',
  'Weldbone Capsules Product Shot.webp',
  'WhatsApp Image 2026-11-16 at 2.53.02 PM.webp',
  'Zincomax Supplement Box and Blister Pack.webp',
  'VitaGenix Selenium Supplement Display.webp',
  'ACC Q10 Forte Softgel Capsules.webp',
  'Activated Charcoal Tablets Product Display.webp',
  'AllCURE Plus RF Capsules Product Scene.webp',
  'ALPHA-E Vitamin E Product Display.webp',
  'Aminocare Packaging and Blister Pack.webp',
  'AR-7 Mg Gel Product Mockup (1).webp',
  'AR-7 Osteoforce Bone Support Display.webp',
  'Argisis Sachet Supplement Still Life.webp',
  'A-Z Code Multivitamin Product Display.webp',
  'Bertaviva Syrup Product Still Life.webp',
  'Biograce Tablets Product Display.webp',
  'Biotin Gummies with Orange Flavor.webp',
  'Bone Code Supplement Studio Display.webp',
  'Btatu Vitamin Capsules Product Display.webp',
  'B-VITAL Vitamin Product Display.webp',
  'Calcifer-500 Calcium Tablets Product Photo.webp',
  'Calcifer-D Calcium Supplement Display.webp',
  'Calciup D₃ Calcium Supplement Display.webp',
  'Cal-mivera Calcium Tablets Packaging.webp',
  'Canadian Lactis Probiotic Capsules.webp',
 'Collagen Joint Supplement Packaging - Copy (2).webp',
 'COLLYNTRA Joint Care Product Display - Copy - Copy.webp',
  'Cranberry Sachet Product Display.webp',
  'Cranol Plus Supplement Packaging Display.webp',
  'Crinis GOLD Product Display.webp',
  'C-Shine+ Effervescent Tablets Duo.webp',
  'CystoHOPE Urinary Health Packaging Display.webp',
  'D-CODE Bone Support Supplement Display.webp',
  'Depiglow 250 Tablets Product Still Life.webp',
  'Depiglow Forte Tablets Product Display.webp',
  'DEPIGLOW Ultra Tablets Product Scene.webp',
  'Dolobion Forte Vitamin Supplement Display.webp',
  'Elevate Health D3 + K2 Supplement Packaging.webp',
  'Ferfol-XT Drops Box and Bottle.webp',
  'Feron Iron Supplement Product Shot.webp',
  'FINIX Skin, Hair & Nails Display.webp',
  'FLORASET-Zn Product Packaging Duo.webp',
  'FoliHOPE Prenatal Supplement Packaging.webp',
  'GastroHOPE Digestive Care Packaging.webp',
  'Gilgiron Haematinic Drops Product Set.webp',
  'Gilgiron Iron Syrup Product Display.webp',
  'Glutavil Plus Product Studio Display.webp',
  'Grow Code Growth Formula Set.webp',
  'HEMORID Herbal Cream Product Display.webp',
  'HepLIV-DS Softgel Product Display.webp',
  'IroHOPE Iron Supplement Product Display.webp',
  'IroHOPE Iron Supplement Product Showcase.webp',
  'K-FLORA Supplement Product Display.webp',
  'Kiddie Keeper Omega 3 Syrup Display.webp',
  'Lecacin Vitamin D3 Product Display.webp',
  'Lypro Gold Supplement Packaging.webp',
  'Malvix Extra Product Studio Shot.webp',
  'MALVIX Platinum Softgel Product Display.webp',
  'Malvix Syrup Vision Care Display.webp',
  'ManHealth Nutrient Capsules Display.webp',
  'Medprox Growth and Appetite Syrup Set.webp',
  'MELATOP Melatonin Product Display.webp',
  'Methy-Coba B12 Product Display.webp',
  'Methyl Plus Product Flat Lay.webp',
  'Methylcobalamin Injection Product Display.webp',
  'Mivera-Nx Supplement Box and Blister Pack.webp',
  'Nerozyme Plus Tablets Product Display.webp',
  'Nerozyme Woman Syrup Product Display.webp',
];

export const galleryImages = newGalleryFiles.map((filename) => ({
  src: `/assets/gallery_webp/${encodeURIComponent(filename.replace(/\.webp$/i, '.png'))}`,
  caption: filename.replace(/\.webp$/i, ''),
}));
