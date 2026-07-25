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
  { name: 'FSSAI', code: 'FSSAI', logo: '/assets/certifications/fssai.jpeg' },
  { name: 'USFDA', code: 'USFDA', logo: '/assets/certifications/usfda.jpeg' },
  { name: 'HACCP', code: 'HACCP', logo: '/assets/certifications/haccp.jpeg' },
  { name: 'HALAL', code: 'HALAL', logo: '/assets/certifications/halal.jpeg' },
  { name: 'KOSHER', code: 'KOSHER', logo: '/assets/certifications/kosher.jpeg' },
  { name: 'WHO GMP', code: 'WHO-GMP', logo: '/assets/certifications/who-gmp.jpeg' },
  { name: 'Certificate of Compliance', code: 'COC', logo: '/assets/certifications/coc.jpeg' },
  { name: 'ISO 22000:2018', code: 'ISO 22000', logo: '/assets/certifications/iso-22000.jpeg' },
  { name: 'ISO 9001:2015', code: 'ISO 9001', logo: '/assets/certifications/iso-9001.jpeg' },
  { name: 'cGMP', code: 'cGMP', logo: '/assets/certifications/cgmp.jpeg' },
  { name: 'NAFDAC', code: 'NAFDAC', logo: '/assets/certifications/nafdac.jpeg' }
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
export const galleryImages = [
  { src: '/assets/gallery_webp/ALA Capsule.webp', caption: 'ALA Capsule' },
  { src: '/assets/gallery_webp/ActiveEdge Eff Tablet.webp', caption: 'ActiveEdge Eff Tablet' },
  { src: '/assets/gallery_webp/ActiveEdge Pro Tablet.webp', caption: 'ActiveEdge Pro Tablet' },
  { src: '/assets/gallery_webp/Adult 50+ Tablet.webp', caption: 'Adult 50+ Tablet' },
  { src: '/assets/gallery_webp/After Party Eff Tablet.webp', caption: 'After Party Eff Tablet' },
  { src: '/assets/gallery_webp/After PregnaEdge Tablet.webp', caption: 'After PregnaEdge Tablet' },
  { src: '/assets/gallery_webp/AlphaEdge-Q Tablet.webp', caption: 'AlphaEdge-Q Tablet' },
  { src: '/assets/gallery_webp/AlphaPowerEdge Eff Tablet.webp', caption: 'AlphaPowerEdge Eff Tablet' },
  { src: '/assets/gallery_webp/Apple Cidar with Morigna Eff Tablet.webp', caption: 'Apple Cidar with Morigna Eff Tablet' },
  { src: '/assets/gallery_webp/Apple Cider Vingar Tablet.webp', caption: 'Apple Cider Vingar Tablet' },
  { src: '/assets/gallery_webp/AshwaEdge Eff Tablet.webp', caption: 'AshwaEdge Eff Tablet' },
  { src: '/assets/gallery_webp/AuraEdge Eff Tablet.webp', caption: 'AuraEdge Eff Tablet' },
  { src: '/assets/gallery_webp/Beauty Complex Gummies.webp', caption: 'Beauty Complex Gummies' },
  { src: '/assets/gallery_webp/Before PregnaEdge Tablet.webp', caption: 'Before PregnaEdge Tablet' },
  { src: '/assets/gallery_webp/Berbirine Capsule.webp', caption: 'Berbirine Capsule' },
  { src: '/assets/gallery_webp/Berbirine with Milk Tistle Capsule.webp', caption: 'Berbirine with Milk Tistle Capsule' },
  { src: '/assets/gallery_webp/Better Live Plus.webp', caption: 'Better Live Plus' },
  { src: '/assets/gallery_webp/BioGluta Tablet.webp', caption: 'BioGluta Tablet' },
  { src: '/assets/gallery_webp/Biotin 5000 Capsule.webp', caption: 'Biotin 5000 Capsule' },
  { src: '/assets/gallery_webp/Bone  Teeth Gummies.webp', caption: 'Bone Teeth Gummies' },
  { src: '/assets/gallery_webp/BoneMax Capsule.webp', caption: 'BoneMax Capsule' },
  { src: '/assets/gallery_webp/Boron Capsule.webp', caption: 'Boron Capsule' },
  { src: '/assets/gallery_webp/Bromeline Capsule.webp', caption: 'Bromeline Capsule' },
  { src: '/assets/gallery_webp/COQ10 Capsule.webp', caption: 'COQ10 Capsule' },
  { src: '/assets/gallery_webp/Calcium With D3 Eff Tablet.webp', caption: 'Calcium With D3 Eff Tablet' },
  { src: '/assets/gallery_webp/Capixan Capsule Hair.webp', caption: 'Capixan Capsule Hair' },
  { src: '/assets/gallery_webp/ClearEdge Eff Tablet.webp', caption: 'ClearEdge Eff Tablet' },
  { src: '/assets/gallery_webp/CocoEdge Sachet.webp', caption: 'CocoEdge Sachet' },
  { src: '/assets/gallery_webp/CollaEdge Sachet.webp', caption: 'CollaEdge Sachet' },
  { src: '/assets/gallery_webp/CollaEdge Shots.webp', caption: 'CollaEdge Shots' },
  { src: '/assets/gallery_webp/CollaJoint Shots.webp', caption: 'CollaJoint Shots' },
  { src: '/assets/gallery_webp/Collagen Powder.webp', caption: 'Collagen Powder' },
  { src: '/assets/gallery_webp/Creatinine Sachet.webp', caption: 'Creatinine Sachet' },
  { src: '/assets/gallery_webp/Cromium Picolate Capsule.webp', caption: 'Cromium Picolate Capsule' },
  { src: '/assets/gallery_webp/Curcumine Capsule.webp', caption: 'Curcumine Capsule' },
  { src: '/assets/gallery_webp/Digestive Enzyme Capsule.webp', caption: 'Digestive Enzyme Capsule' },
  { src: '/assets/gallery_webp/During PregnaEdge Tablet.webp', caption: 'During PregnaEdge Tablet' },
  { src: '/assets/gallery_webp/EPOEdge Softgel.webp', caption: 'EPOEdge Softgel' },
  { src: '/assets/gallery_webp/FemEdge Tablet.webp', caption: 'FemEdge Tablet' },
  { src: '/assets/gallery_webp/Femina Herb Capsule.webp', caption: 'Femina Herb Capsule' },
  { src: '/assets/gallery_webp/FertiGold F Sachet.webp', caption: 'FertiGold F Sachet' },
  { src: '/assets/gallery_webp/FertiGold-M Sachet.webp', caption: 'FertiGold-M Sachet' },
  { src: '/assets/gallery_webp/FertiHope D3 Softgel.webp', caption: 'FertiHope D3 Softgel' },
  { src: '/assets/gallery_webp/FertiHope Softgel.webp', caption: 'FertiHope Softgel' },
  { src: '/assets/gallery_webp/Fertile Man Capsule.webp', caption: 'Fertile Man Capsule' },
  { src: '/assets/gallery_webp/GlowEdge Capsule.webp', caption: 'GlowEdge Capsule' },
  { src: '/assets/gallery_webp/GlowEdge Eff Tablet.webp', caption: 'GlowEdge Eff Tablet' },
  { src: '/assets/gallery_webp/Glucosamine with Bosewella Extract Capsule.webp', caption: 'Glucosamine with Bosewella Extract Capsule' },
  { src: '/assets/gallery_webp/Glutathione Eff Tablet.webp', caption: 'Glutathione Eff Tablet' },
  { src: '/assets/gallery_webp/Good Saint Slim Biotic.webp', caption: 'Good Saint Slim Biotic' },
  { src: '/assets/gallery_webp/Gut Health Gummies.webp', caption: 'Gut Health Gummies' },
  { src: '/assets/gallery_webp/Hair Nail Skin Capsule.webp', caption: 'Hair Nail Skin Capsule' },
  { src: '/assets/gallery_webp/Healthy Grow Gummies.webp', caption: 'Healthy Grow Gummies' },
  { src: '/assets/gallery_webp/HuskEdge Sachet.webp', caption: 'HuskEdge Sachet' },
  { src: '/assets/gallery_webp/ImmuneBoost Gummies.webp', caption: 'ImmuneBoost Gummies' },
  { src: '/assets/gallery_webp/IroHope XT Tablet.webp', caption: 'IroHope XT Tablet' },
  { src: '/assets/gallery_webp/Joint Care Cpausle.webp', caption: 'Joint Care Cpausle' },
  { src: '/assets/gallery_webp/Joint Care Eff Tablet.webp', caption: 'Joint Care Eff Tablet' },
  { src: '/assets/gallery_webp/KidoEdge Gummies.webp', caption: 'KidoEdge Gummies' },
  { src: '/assets/gallery_webp/L-Carnitine Capsule.webp', caption: 'L-Carnitine Capsule' },
  { src: '/assets/gallery_webp/L-Taurine Capsule.webp', caption: 'L-Taurine Capsule' },
  { src: '/assets/gallery_webp/L-Theanine Capsule.webp', caption: 'L-Theanine Capsule' },
  { src: '/assets/gallery_webp/L-Tyrosine Capsule.webp', caption: 'L-Tyrosine Capsule' },
  { src: '/assets/gallery_webp/LiveEdge-R Capsule.webp', caption: 'LiveEdge-R Capsule' },
  { src: '/assets/gallery_webp/LonveVit Capsule.webp', caption: 'LonveVit Capsule' },
  { src: '/assets/gallery_webp/Magnesium Glycate Capsule.webp', caption: 'Magnesium Glycate Capsule' },
  { src: '/assets/gallery_webp/Magnesium Tablet NutriEdge.webp', caption: 'Magnesium Tablet NutriEdge' },
  { src: '/assets/gallery_webp/Magnesium Tablet.webp', caption: 'Magnesium Tablet' },
  { src: '/assets/gallery_webp/ManEdge Max Tablet.webp', caption: 'ManEdge Max Tablet' },
  { src: '/assets/gallery_webp/ManEdge Origingal Tablet.webp', caption: 'ManEdge Origingal Tablet' },
  { src: '/assets/gallery_webp/ManEdge Plust Tablet.webp', caption: 'ManEdge Plust Tablet' },
  { src: '/assets/gallery_webp/Men Multivi Daily Capsule.webp', caption: 'Men Multivi Daily Capsule' },
  { src: '/assets/gallery_webp/Milk Thistle Capsule.webp', caption: 'Milk Thistle Capsule' },
  { src: '/assets/gallery_webp/Moringa Capsule.webp', caption: 'Moringa Capsule' },
  { src: '/assets/gallery_webp/Mulberry Capsule.webp', caption: 'Mulberry Capsule' },
  { src: '/assets/gallery_webp/Multi Omega Softgel.webp', caption: 'Multi Omega Softgel' },
  { src: '/assets/gallery_webp/MultiEdge Eff Tablet.webp', caption: 'MultiEdge Eff Tablet' },
  { src: '/assets/gallery_webp/Multivitamin Gummies.webp', caption: 'Multivitamin Gummies' },
  { src: '/assets/gallery_webp/Multivitamin Tablet for Men.webp', caption: 'Multivitamin Tablet for Men' },
  { src: '/assets/gallery_webp/Multivitamin Tablet for Women.webp', caption: 'Multivitamin Tablet for Women' },
  { src: '/assets/gallery_webp/N-Acetyl N Cycstine Capsule.webp', caption: 'N-Acetyl N Cycstine Capsule' },
  { src: '/assets/gallery_webp/NutriEdge T3 D3.webp', caption: 'NutriEdge T3 D3' },
  { src: '/assets/gallery_webp/NutriGold Tablet.webp', caption: 'NutriGold Tablet' },
  { src: '/assets/gallery_webp/Omega 3 Mutlvita Softgel.webp', caption: 'Omega 3 Mutlvita Softgel' },
  { src: '/assets/gallery_webp/Omega 3,6,9 Optimum Softgel.webp', caption: 'Omega 3,6,9 Optimum Softgel' },
  { src: '/assets/gallery_webp/Omega-3 Softgel.webp', caption: 'Omega-3 Softgel' },
  { src: '/assets/gallery_webp/OvaEdge Tablet.webp', caption: 'OvaEdge Tablet' },
  { src: '/assets/gallery_webp/OvaHope Max Tablet.webp', caption: 'OvaHope Max Tablet' },
  { src: '/assets/gallery_webp/PerfectEdge Tablet.webp', caption: 'PerfectEdge Tablet' },
  { src: '/assets/gallery_webp/Potassium Citrate Capsule.webp', caption: 'Potassium Citrate Capsule' },
  { src: '/assets/gallery_webp/Primelle Gold Softgel.webp', caption: 'Primelle Gold Softgel' },
  { src: '/assets/gallery_webp/ProBio Gut Capsule.webp', caption: 'ProBio Gut Capsule' },
  { src: '/assets/gallery_webp/ProBio Immune Capsule.webp', caption: 'ProBio Immune Capsule' },
  { src: '/assets/gallery_webp/ProBio Stress Capsule.webp', caption: 'ProBio Stress Capsule' },
  { src: '/assets/gallery_webp/ProBiotics Capsule.webp', caption: 'ProBiotics Capsule' },
  { src: '/assets/gallery_webp/Probio Skin Capsule.webp', caption: 'Probio Skin Capsule' },
  { src: '/assets/gallery_webp/Reboot Eff Tablet.webp', caption: 'Reboot Eff Tablet' },
  { src: '/assets/gallery_webp/ReverseEdge Eff Tablet.webp', caption: 'ReverseEdge Eff Tablet' },
  { src: '/assets/gallery_webp/RichCal-D3 Tablet.webp', caption: 'RichCal-D3 Tablet' },
  { src: '/assets/gallery_webp/Selenium Capsule.webp', caption: 'Selenium Capsule' },
  { src: '/assets/gallery_webp/ShapeEdge Eff Tablet.webp', caption: 'ShapeEdge Eff Tablet' },
  { src: '/assets/gallery_webp/ShilaEdge Eff Tablet.webp', caption: 'ShilaEdge Eff Tablet' },
  { src: '/assets/gallery_webp/Shilajit Sachet.webp', caption: 'Shilajit Sachet' },
  { src: '/assets/gallery_webp/SleepEdge Tablet.webp', caption: 'SleepEdge Tablet' },
  { src: '/assets/gallery_webp/Super Enegery Eff Tablet.webp', caption: 'Super Enegery Eff Tablet' },
  { src: '/assets/gallery_webp/Swift Sleep Sachet.webp', caption: 'Swift Sleep Sachet' },
  { src: '/assets/gallery_webp/Triple Omega Softgel.webp', caption: 'Triple Omega Softgel' },
  { src: '/assets/gallery_webp/Type II Collagen Capsule.webp', caption: 'Type II Collagen Capsule' },
  { src: '/assets/gallery_webp/Vaginal probiotic Capsule.webp', caption: 'Vaginal probiotic Capsule' },
  { src: '/assets/gallery_webp/Venoflex Tablet.webp', caption: 'Venoflex Tablet' },
  { src: '/assets/gallery_webp/Vitamin B Complex + Gut Health Eff Tablet.webp', caption: 'Vitamin B Complex + Gut Health Eff Tablet' },
  { src: '/assets/gallery_webp/Vitamin B1 Capsule.webp', caption: 'Vitamin B1 Capsule' },
  { src: '/assets/gallery_webp/Vitamin B6 Capsule.webp', caption: 'Vitamin B6 Capsule' },
  { src: '/assets/gallery_webp/Vitamin C+Zinc + D3 Effer Tablet.webp', caption: 'Vitamin C+Zinc + D3 Effer Tablet' },
  { src: '/assets/gallery_webp/Vitamin E Softgel.webp', caption: 'Vitamin E Softgel' },
  { src: '/assets/gallery_webp/Vitamin K2 MK7 & D3 Capsule.webp', caption: 'Vitamin K2 MK7 & D3 Capsule' },
  { src: '/assets/gallery_webp/Women Daily Capsule.webp', caption: 'Women Daily Capsule' },
  { src: '/assets/gallery_webp/WomenEdge Max Tablet.webp', caption: 'WomenEdge Max Tablet' },
  { src: '/assets/gallery_webp/Zinc Capsule.webp', caption: 'Zinc Capsule' },
];
