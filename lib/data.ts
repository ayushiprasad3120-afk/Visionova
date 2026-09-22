import {
  Target, MousePointerClick, PhoneCall, Smartphone, LineChart, Handshake,
  Users, Compass, Layers, Radar, Fingerprint, ShieldCheck, Gauge,
  Home as HomeIcon, Globe2, BadgeCheck, Headset, BarChart3, Wallet, Clock3, Zap,
} from "lucide-react";

// ---- Services (what VisionovaHQ offers as core services) ----
export const services = [
  { icon: Target, title: "For Advertisers", desc: "Traffic and campaigns built around the outcomes that matter to your business.", href: "/advertisers" },
  { icon: Users, title: "For Publishers", desc: "Relevant offers and a team invested in helping your traffic perform.", href: "/publishers" },
  { icon: Handshake, title: "Affiliate Management", desc: "Hands-on program management, from recruitment to payout optimization.", href: undefined },
];

// ---- Performance models (pricing structures, kept separate from Services) ----
export const performanceModels = [
  { icon: LineChart, title: "CPS", desc: "Cost-per-sale pricing aligned directly with your revenue, not just clicks." },
  { icon: PhoneCall, title: "Pay Per Call", desc: "Inbound call campaigns routed to your team in real time, fully tracked end-to-end." },
  { icon: MousePointerClick, title: "CPL", desc: "Cost-per-lead pricing that turns qualified traffic into sales-ready leads." },
  { icon: Smartphone, title: "Mobile Installs", desc: "Install campaigns across iOS and Android, focused on genuine engagement." },
];

// ---- Traffic sources, grouped into three categories ----
export const trafficCategories = [
  {
    icon: Layers,
    title: "Internal Media Buying",
    desc: "Campaigns we plan, buy, and manage ourselves, with direct control from targeting to optimization.",
    channels: ["Google Search", "Social", "Redirections"],
  },
  {
    icon: Radar,
    title: "Third-Party Media",
    desc: "Additional reach sourced through trusted external partners and our own owned & operated properties.",
    channels: ["Email", "Google Search", "Social", "Owned & Operated Sites", "Redirections"],
  },
  {
    icon: Fingerprint,
    title: "Vetted & Selected Affiliate Networks",
    desc: "A carefully selected group of affiliates, reviewed individually and monitored on an ongoing basis.",
    channels: ["Email", "Display", "Native", "Search", "Social", "DSP", "Redirections"],
  },
];

// ---- Traffic quality standard — DO NOT EDIT (kept exactly as approved) ----
export const trafficPillars = [
  { icon: ShieldCheck, title: "Quality Control", desc: "Every traffic source is manually vetted and continuously monitored against strict quality benchmarks before and after activation." },
  { icon: Radar, title: "Fraud Prevention", desc: "Multi-layer fraud detection combining device fingerprinting, behavioral analysis, and real-time filtering catches invalid activity before it costs you." },
  { icon: Gauge, title: "Optimization", desc: "Dedicated optimization specialists tune targeting, bidding, and creative continuously, so performance compounds over time rather than decaying." },
];

// ---- Verticals, grouped into three categories ----
export const verticalCategories = [
  {
    icon: ShieldCheck,
    title: "Insurance",
    items: ["Auto Insurance", "Home Insurance", "ACA", "Final Expense", "Medicare"],
  },
  {
    icon: HomeIcon,
    title: "Home Services",
    items: ["Roofing", "Bathroom", "HVAC", "Plumbing", "Pest Control", "Water Damage", "Windows", "Gutter"],
  },
  {
    icon: Globe2,
    title: "Other Verticals",
    items: ["Loans", "Debt", "Education", "E-commerce", "Travel", "Hotels", "Flights", "Cruises", "Antivirus & VPN"],
  },
];

export const advertiserBenefits = [
  { icon: BadgeCheck, title: "High-Quality Traffic", desc: "Every click and lead is sourced from inventory that's screened before it ever reaches your campaign." },
  { icon: Users, title: "Real Users", desc: "No bots, no incentivized junk — only genuine, engaged human traffic." },
  { icon: ShieldCheck, title: "Fraud Detection", desc: "Invalid clicks and leads are caught and removed before they ever touch your reporting or your budget." },
  { icon: Headset, title: "Dedicated Account Managers", desc: "A senior performance manager assigned to your account from day one." },
  { icon: Globe2, title: "Global Reach", desc: "Access to quality traffic across worldwide markets and every major GEO." },
  { icon: BarChart3, title: "Real-Time Reporting", desc: "Live dashboards with full transparency into every metric that matters." },
  { icon: Target, title: "Advanced Targeting", desc: "Granular targeting by GEO, device, carrier, interest, and behavior." },
  { icon: Compass, title: "Transparent Optimization", desc: "Every optimization decision is documented, explained, and reviewed with you." },
];

export const publisherBenefits = [
  { icon: BadgeCheck, title: "Exclusive Campaigns", desc: "Campaigns not listed on open marketplaces, negotiated directly with advertisers." },
  { icon: Wallet, title: "Competitive Payouts", desc: "Payouts benchmarked and adjusted continuously to stay fair and current." },
  { icon: Clock3, title: "Weekly Payments", desc: "Reliable weekly payment cycles with no unnecessary holds." },
  { icon: Globe2, title: "Global Offers", desc: "A constantly refreshed catalog of offers across every major GEO and vertical." },
  { icon: Headset, title: "Dedicated Managers", desc: "A publisher manager who actively helps you scale, not just answer tickets." },
  { icon: BarChart3, title: "Advanced Tracking", desc: "Enterprise-grade tracking with postback support and granular reporting." },
  { icon: Zap, title: "Fast Approvals", desc: "Streamlined onboarding gets you live on campaigns within hours, not weeks." },
];

// ---- Why VisionovaHQ — what we focus on (no comparisons, no competitor claims) ----
export const whyVisionova = [
  { icon: BadgeCheck, title: "Quality", desc: "We'd rather send fewer, better leads than flood a campaign with volume that doesn't convert." },
  { icon: Compass, title: "Relevant Opportunities", desc: "Campaigns and offers matched to what actually fits your traffic and your business." },
  { icon: Gauge, title: "Hands-On Campaign Management", desc: "Real people reviewing performance and making adjustments, not a dashboard left to run itself." },
  { icon: Radar, title: "Owned & Operated Media Buying", desc: "We buy and manage a meaningful share of our own inventory, giving us direct control over quality." },
  { icon: Handshake, title: "Trusted Traffic Partnerships", desc: "Every partner is chosen deliberately and reviewed on an ongoing basis." },
  { icon: Users, title: "Long-Term Relationships", desc: "We're building for partners who stick around, not one-off campaigns." },
];

export const trustPoints = [
  { headline: "Multi-Channel", label: "Internal + Third-Party Inventory" },
  { headline: "Curated", label: "High-Quality Traffic Sources" },
  { headline: "Dedicated", label: "Account Management" },
  { headline: "Transparent", label: "Real-Time Reporting" },
];

export const faqs = [
  { q: "What is VisionovaHQ?", a: "VisionovaHQ is a performance advertising company connecting advertisers with quality traffic and publishers with relevant campaigns across a range of verticals." },
  { q: "How quickly can I launch a campaign as an advertiser?", a: "Most advertisers are onboarded and live within 24-48 hours of approval, with a dedicated account manager guiding setup and targeting from day one." },
  { q: "What pricing models do you support?", a: "We support CPS, Pay Per Call, CPL, and Mobile Installs, giving advertisers flexibility to align spend directly with the outcomes that matter most to their business." },
  { q: "How do you prevent fraudulent traffic?", a: "We combine device fingerprinting, behavioral analysis, and real-time filtering across every traffic source, with continuous monitoring both before and after activation." },
  { q: "Which countries do you cover?", a: "Our traffic and publisher network spans a broad range of global markets, with especially deep coverage across North America, Europe, LATAM, and APAC." },
  { q: "How often are publishers paid?", a: "Publishers on VisionovaHQ are paid on a weekly cycle by default, with alternative terms available for established, high-volume partners." },
  { q: "What traffic sources do you accept from publishers?", a: "We accept traffic through Google Search, Social, Email, Display, Native, DSP, redirections, and owned & operated sites, subject to review." },
  { q: "Do you offer real-time reporting?", a: "Yes. Every advertiser and publisher has access to a live dashboard with real-time performance data, no delays or manual requests required." },
  { q: "What verticals do you specialize in?", a: "We run campaigns across insurance (auto, home, ACA, final expense, and Medicare), home services (roofing, HVAC, plumbing, and more), and additional verticals including loans, debt, education, e-commerce, travel, and antivirus & VPN." },
  { q: "Is there a minimum budget for advertisers?", a: "Minimums vary by vertical and traffic type. Our team will recommend an appropriate starting budget based on your goals during onboarding." },
  { q: "How are publishers vetted?", a: "Every publisher application is manually reviewed, with traffic sources evaluated for quality, compliance, and historical performance before approval." },
  { q: "Can I target specific GEOs and demographics?", a: "Yes. Our targeting stack supports granular segmentation by GEO, device, carrier, interest, and behavioral signals." },
  { q: "Do you provide dedicated account management?", a: "Every advertiser and publisher is assigned a dedicated account manager who actively supports strategy, not just technical setup." },
  { q: "What does VisionovaHQ focus on?", a: "Quality traffic, hands-on campaign management, and long-term partnerships. We focus on getting these fundamentals right for every advertiser and publisher we work with." },
  { q: "How do I get started?", a: "Advertisers and publishers can apply directly through our Advertisers or Publishers pages. Our team typically responds within one business day." },
];
