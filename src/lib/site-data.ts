const partnerLogoMap = import.meta.glob("../IMG/partners/*", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const partnerLogo = (fileName: string) => partnerLogoMap[`../IMG/partners/${fileName}`] ?? "";

export const partners = [
  { name: "Allianz", url: "https://allianzsp.sk", logo: partnerLogo("allianz.png") },
  { name: "Kooperativa", url: "https://koop.sk", logo: partnerLogo("kooperativa.png") },
  { name: "Generali", url: "https://generali.sk", logo: partnerLogo("generali.png") },
  { name: "Komunálna Poisťovňa", url: "https://kpas.sk", logo: partnerLogo("komunalna.png") },
  { name: "UNIQA", url: "https://uniqa.sk", logo: partnerLogo("uniqa.png") },
  { name: "Union", url: "https://union.sk", logo: partnerLogo("union.png") },
  { name: "Premium Insurance Company", url: "https://premium-ic.sk", logo: partnerLogo("premium-insurance-company.png") },
  { name: "Atradius", url: "https://group.atradius.com", logo: partnerLogo("ATRADIUS.jpg") },
  { name: "AXA", url: "https://axa.sk", logo: partnerLogo("AXA.jpg") },
  { name: "Coface", url: "https://coface.sk", logo: partnerLogo("COFACE.jpg") },
  { name: "ČSOB Poisťovňa", url: "https://csob.sk/poistovna", logo: partnerLogo("CSOB.jpg") },
  { name: "HDI", url: "https://hdi.global", logo: partnerLogo("HDI.jpg") },
  { name: "Euler Hermes / Allianz Trade", url: "https://allianz-trade.com", logo: partnerLogo("HERMES.jpg") },
  { name: "Österreichische Hagelversicherung", url: "https://hagel.at", logo: partnerLogo("HV.jpg") },
  { name: "KUPEG", url: "https://kupeg.sk", logo: partnerLogo("KUPEG.jpg") },
  { name: "Maxima Poisťovňa", url: "https://maxima-as.sk", logo: partnerLogo("MAXIMA.jpg") },
  { name: "MetLife", url: "https://metlife.sk", logo: partnerLogo("METLIFE.jpg") },
  { name: "Mitsui & Co.", url: "https://mitsui.com", logo: partnerLogo("MITSUI.jpg") },
  { name: "MSIG", url: "https://msig.com", logo: partnerLogo("MSIG.jpg") },
  { name: "NN", url: "https://nn.sk", logo: partnerLogo("NN.jpg") },
  { name: "Novis", url: "https://novis.eu", logo: partnerLogo("NOVIS.jpg") },
  { name: "Privatbanka", url: "https://privatbanka.sk", logo: partnerLogo("PRIVATBANKA.jpg") },
  { name: "Stabilita", url: "https://stabilita.sk", logo: partnerLogo("STABILITA.jpg") },
  { name: "Tatra Banka", url: "https://tatrabanka.sk", logo: partnerLogo("TB.jpg") },
  { name: "Tatra Leasing", url: "https://tatraleasing.sk", logo: partnerLogo("TBL.jpg") },
  { name: "UniCredit Bank", url: "https://unicreditbank.sk", logo: partnerLogo("UNI.jpg") },
  { name: "VB Leasing", url: "https://vbleasing.sk", logo: partnerLogo("VB.jpg") },
  { name: "VÚB Banka", url: "https://vub.sk", logo: partnerLogo("VUB.jpg") },
  { name: "VÚB Leasing", url: "https://vubleasing.sk", logo: partnerLogo("VUBL.jpg") },
  { name: "Poisťovňa VZP", url: "https://pvzp.sk", logo: partnerLogo("VZP.jpg") },
  { name: "Wüstenrot", url: "https://wuestenrot.sk", logo: partnerLogo("WUSTENROT.jpg") },
  { name: "Wüstenrot Stavebná Sporiteľňa", url: "https://wuestenrot.sk/stavebne-sporenie", logo: partnerLogo("WUSTENROTSP.jpg") },
  { name: "Colonnade", url: "https://colonnade.sk", logo: partnerLogo("colonnade.png") },
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
