
export type ApplicationType =
  | "water"
  | "oil-gas"
  | "petrochemical";

export interface Category {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
  order: number;

  applications?: ApplicationType[];
}
export const categories: Category[] = [
  // ===========================
  // اتصالات رزوه‌ای
  // ===========================
  {
    id: "اتصالات-رزوه‌ای",
    name: "اتصالات رزوه‌ای",
    slug: "threaded-fittings",
    parentId: null,
    order: 1,
    applications: ["water", "oil-gas", "petrochemical"],
  },
  {
    id: "رزوه‌ای-استیل",
    name: "استیل",
    slug: "stainless-steel",
    parentId: "اتصالات-رزوه‌ای",
    order: 1,
  },
  {
    id: "رزوه‌ای-برنجی",
    name: "برنجی",
    slug: "brass",
    parentId: "اتصالات-رزوه‌ای",
    order: 2,
  },
  {
    id: "رزوه‌ای-گالوانیزه",
    name: "گالوانیزه",
    slug: "galvanized",
    parentId: "اتصالات-رزوه‌ای",
    order: 3,
  },

  // ===========================
  // اتصالات جوشی
  // ===========================
  {
    id: "اتصالات-جوشی",
    name: "اتصالات جوشی",
    slug: "welding-fittings",
    parentId: null,
    order: 2,
    applications: ["oil-gas", "petrochemical"],
  },
  {
    id: "جوشی-مانیسمان",
    name: "مانیسمان",
    slug: "seamless",
    parentId: "اتصالات-جوشی",
    order: 1,
  },
  {
    id: "جوشی-درزدار",
    name: "درزدار",
    slug: "welded",
    parentId: "اتصالات-جوشی",
    order: 2,
  },
  {
    id: "جوشی-فشارقوی",
    name: "فشارقوی",
    slug: "high-pressure",
    parentId: "اتصالات-جوشی",
    order: 3,
  },

  // ===========================
  // فلنج
  // ===========================
  {
    id: "فلنج",
    name: "فلنج",
    slug: "flanges",
    parentId: null,
    order: 3,
    applications: ["water", "oil-gas", "petrochemical"],
  },
  {
    id: "فلنج-اسلیپون",
    name: "اسلیپون",
    slug: "slip-on",
    parentId: "فلنج",
    order: 1,
  },
  {
    id: "فلنج-ولدنک",
    name: "ولد نک",
    slug: "weld-neck",
    parentId: "فلنج",
    order: 2,
  },
  {
    id: "فلنج-کور",
    name: "کور",
    slug: "blind-flange",
    parentId: "فلنج",
    order: 3,
  },
  {
    id: "فلنج-رزوه‌ای",
    name: "رزوه‌ای",
    slug: "threaded-flange",
    parentId: "فلنج",
    order: 4,
  },

  // ===========================
  // شیرآلات صنعتی
  // ===========================
  {
    id: "شیرآلات-صنعتی",
    name: "شیرآلات صنعتی",
    slug: "industrial-valves",
    parentId: null,
    order: 4,
    applications: ["water", "oil-gas", "petrochemical"],
  },
  {
    id: "شیر-توپی",
    name: "شیر توپی",
    slug: "ball-valve",
    parentId: "شیرآلات-صنعتی",
    order: 1,
  },
  {
    id: "شیر-کشویی",
    name: "شیر کشویی",
    slug: "gate-valve",
    parentId: "شیرآلات-صنعتی",
    order: 2,
  },
  {
    id: "شیر-پروانه‌ای",
    name: "شیر پروانه‌ای",
    slug: "butterfly-valve",
    parentId: "شیرآلات-صنعتی",
    order: 3,
  },
  {
    id: "شیر-یکطرفه",
    name: "شیر یکطرفه",
    slug: "check-valve",
    parentId: "شیرآلات-صنعتی",
    order: 4,
  },
  
  // ===========================
  // لوله
  // ===========================
  {
    id: "لوله",
    name: "لوله صنعتی",
    slug: "industrial-pipes",
    parentId: null,
    order: 5,
    applications: ["water", "oil-gas", "petrochemical"],
  },
  {
    id: "لوله-فولادی",
    name: "فولادی",
    slug: "carbon-steel",
    parentId: "لوله",
    order: 1,
  },
  {
    id: "لوله-استیل",
    name: "استنلس استیل",
    slug: "stainless-steel-pipe",
    parentId: "لوله",
    order: 2,
  },
  {
    id: "لوله-گالوانیزه",
    name: "گالوانیزه",
    slug: "galvanized-pipe",
    parentId: "لوله",
    order: 3,
  },
  // ===========================
  // واشر و گسکت
  // ===========================
  {
    id: "واشر-و-گسکت",
    name: "واشر و گسکت",
    slug: "gaskets",
    parentId: null,
    order: 6,
    applications: ["oil-gas", "petrochemical"],
  },
  {
    id: "واشر-لاستیکی",
    name: "واشر لاستیکی",
    slug: "rubber-gasket",
    parentId: "واشر-و-گسکت",
    order: 1,
  },
  {
    id: "گسکت-اسپیرال",
    name: "گسکت اسپیرال وند",
    slug: "spiral-wound",
    parentId: "واشر-و-گسکت",
    order: 2,
  },
  {
    id: "واشر-ptfe",
    name: "واشر PTFE",
    slug: "ptfe",
    parentId: "واشر-و-گسکت",
    order: 3,
  },
  // ===========================
  // پیچ و مهره
  // ===========================
  {
    id: "پیچ-و-مهره",
    name: "پیچ و مهره صنعتی",
    slug: "fasteners",
    parentId: null,
    order: 7,
    applications: ["oil-gas", "petrochemical"],
  },
  {
    id: "پیچ-شش-گوش",
    name: "پیچ شش گوش",
    slug: "hex-bolt",
    parentId: "پیچ-و-مهره",
    order: 1,
  },
  {
    id: "استاد-بولت",
    name: "استاد بولت",
    slug: "stud-bolt",
    parentId: "پیچ-و-مهره",
    order: 2,
  },
  {
    id: "مهره-سنگین",
    name: "مهره سنگین",
    slug: "heavy-nut",
    parentId: "پیچ-و-مهره",
    order: 3,
  },

  // ===========================
  // شیلنگ و اتصالات هیدرولیک
  // ===========================
  {
    id: "هیدرولیک",
    name: "شیلنگ و اتصالات هیدرولیک",
    slug: "hydraulic",
    parentId: null,
    order: 8,
    applications: ["oil-gas", "petrochemical"],
  },
  {
    id: "شیلنگ-هیدرولیک",
    name: "شیلنگ هیدرولیک",
    slug: "hydraulic-hose",
    parentId: "هیدرولیک",
    order: 1,
  },
  {
    id: "کوپلینگ",
    name: "کوپلینگ",
    slug: "coupling",
    parentId: "هیدرولیک",
    order: 2,
  },
  {
    id: "کوپلر-سریع",
    name: "کوپلر سریع",
    slug: "quick-coupler",
    parentId: "هیدرولیک",
    order: 3,
  },

  // ===========================
  // ابزار نصب
  // ===========================
  {
    id: "ابزار",
    name: "ابزار و تجهیزات نصب",
    slug: "installation-tools",
    parentId: null,
    order: 9,
    applications: ["water", "oil-gas", "petrochemical"],
  },
  {
    id: "آچار-لوله",
    name: "آچار لوله",
    slug: "pipe-wrench",
    parentId: "ابزار",
    order: 1,
  },
  {
    id: "حدیده",
    name: "حدیده",
    slug: "threading-machine",
    parentId: "ابزار",
    order: 2,
  },
  {
    id: "لوله-بر",
    name: "لوله بر",
    slug: "pipe-cutter",
    parentId: "ابزار",
    order: 3,
  },

  // ===========================
  // پکیج‌ها
  // ===========================
  {
    id: "پکیج",
    name: "پکیج‌های صنعتی",
    slug: "packages",
    parentId: null,
    order: 10,
    applications: ["water", "oil-gas", "petrochemical"],
  },
];