export const partners = [
  { name: "Allianz", url: "https://www.allianz.sk/", logo: "https://www.respect-slovakia.sk/wp-content/uploads/2020/01/allianz.png" },
  { name: "Kooperativa", url: "https://www.kooperativa.sk/", logo: "https://www.respect-slovakia.sk/wp-content/uploads/2020/01/kooperativa.png" },
  { name: "Generali", url: "https://www.generali.sk/", logo: "https://www.respect-slovakia.sk/wp-content/uploads/2020/01/generali.png" },
  { name: "Komunálna poisťovňa", url: "https://www.kpas.sk/", logo: "https://www.respect-slovakia.sk/wp-content/uploads/2020/01/komunalna-poistovna.png" },
  { name: "UNIQA", url: "https://www.uniqa.sk/", logo: "https://www.respect-slovakia.sk/wp-content/uploads/2020/01/uniqa.png" },
  { name: "Union", url: "https://www.union.sk/", logo: "https://www.respect-slovakia.sk/wp-content/uploads/2020/01/union.png" },
  { name: "Premium Insurance", url: "https://www.premium-insurance.sk/", logo: "https://www.respect-slovakia.sk/wp-content/uploads/2020/01/premium.png" },
  { name: "ČSOB", url: "https://www.csob.sk/", logo: "https://www.respect-slovakia.sk/wp-content/uploads/2020/01/csob.png" },
  { name: "Wüstenrot", url: "https://www.wustenrot.sk/", logo: "https://www.respect-slovakia.sk/wp-content/uploads/2020/01/wustenrot.png" },
];

const u = (id: string, w = 1200, h = 1500) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const team = [
  { name: "[NAME]", email: "[EMAIL]", phone: "[PHONE]", img: u("photo-1573496359142-b8d87734a5a2", 600, 720) },
  { name: "[NAME]", email: "[EMAIL]", phone: "[PHONE]", img: u("photo-1580489944761-15a19d654956", 600, 720) },
  { name: "[NAME]", email: "[EMAIL]", phone: "[PHONE]", img: u("photo-1438761681033-6461ffad8d80", 600, 720) },
  { name: "[NAME]", email: "[EMAIL]", phone: "[PHONE]", img: u("photo-1494790108377-be9c29b29330", 600, 720) },
];

export const heroImg = u("photo-1573497019940-1c28c88b4f3e", 1920, 1200);

export const images = {
  firmy1: u("photo-1486406146926-c627a92ad1ab"),
  firmy2: u("photo-1521791136064-7986c2920216"),
  firmy3: u("photo-1500382017468-9049fed747ef"),
  firmy4: u("photo-1551288049-bebda4e38f71"),
  firmy5: u("photo-1589994965851-a8f479c573a9"),
  firmy6: u("photo-1460925895917-afdab827c52f"),
  obcanov1: u("photo-1511895426328-dc8714191300"),
  obcanov2: u("photo-1512917774080-9991f1c4c750"),
  obcanov3: u("photo-1488646953014-85cb44e25828"),
  obcanov4: u("photo-1492144534655-ae79c964c9d7"),
  likvidacia: u("photo-1521737604893-d14cc237f11d", 800, 950),
  team: u("photo-1573164713988-8665fc963095", 900, 1050),
};
