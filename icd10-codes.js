// icd10-codes.js
// -----------------------------------------------------------------------------
// Kuratierte ICD-10-Auswahl für die Physio Doc Co-Pilot App
// Fokus: orthopädisch / muskuloskelettal relevante Hauptdiagnosen
// Struktur wird in app.js über ICD10_CODES[] genutzt.
// -----------------------------------------------------------------------------

const ICD10_CODES = [
  // ---------------------------------------------------------------------------
  // Wirbelsäule / Rücken
  // ---------------------------------------------------------------------------
  {
    code: "M40.0",
    short: "Haltungsanomalie Wirbelsäule",
    long: "Posturale Kyphose / lordotische Fehlhaltung der Wirbelsäule"
  },
  {
    code: "M42.1",
    short: "Osteochondrose der Wirbelsäule",
    long: "Osteochondrose der Wirbelsäule mit Beteiligung der Bandscheiben"
  },
  {
    code: "M43.1",
    short: "Spondylolisthesis",
    long: "Verschiebung eines Wirbels gegenüber dem darunterliegenden (Wirbelgleiten)"
  },
  {
    code: "M47.8",
    short: "Spondylose",
    long: "Sonstige Spondylose ohne Myelopathie oder Radikulopathie"
  },
  {
    code: "M48.0",
    short: "Spinalkanalstenose",
    long: "Stenose des Spinalkanals, unspezifische Region"
  },
  {
    code: "M50.1",
    short: "Bandscheibenvorfall HWS",
    long: "Zervikale Bandscheibenläsion mit Radikulopathie"
  },
  {
    code: "M50.2",
    short: "Zervikales Wurzelkompressionssyndrom",
    long: "Sonstige zervikale Bandscheibenverlagerung mit Radikulopathie"
  },
  {
    code: "M51.1",
    short: "Bandscheibenvorfall LWS",
    long: "Lumbale und sonstige lumbosakrale Bandscheibenläsion mit Radikulopathie"
  },
  {
    code: "M51.2",
    short: "LWS-Degeneration Bandscheiben",
    long: "Sonstige spezifizierte lumbale und andere lumbosakrale Bandscheibendegeneration"
  },
  {
    code: "M53.0",
    short: "Zervikalsyndrom",
    long: "Zervikale Myalgie / unspezifische Nackenbeschwerden"
  },
  {
    code: "M53.2",
    short: "Lumbago-Syndrom",
    long: "Andere spezifizierte dorsopathische Syndrome, überwiegend lumbal"
  },
  {
    code: "M54.2",
    short: "Zervikalgie",
    long: "Schmerzen im Bereich der Halswirbelsäule"
  },
  {
    code: "M54.3",
    short: "Ischialgie",
    long: "Ischiasbedingter Schmerzverlauf mit Ausstrahlung ins Bein"
  },
  {
    code: "M54.4",
    short: "Lumbago mit Ischialgie",
    long: "Lendenschmerz mit Ausstrahlung in eines oder beide Beine"
  },
  {
    code: "M54.5",
    short: "Lumbalgie",
    long: "Kreuzschmerz / unspezifischer Lendenschmerz"
  },
  {
    code: "M54.6",
    short: "Thorakalgie",
    long: "Schmerzen im Bereich der Brustwirbelsäule"
  },
  {
    code: "M54.8",
    short: "Sonstiger Rückenschmerz",
    long: "Sonstige Rückenschmerzen, näher bezeichnet"
  },
  {
    code: "M54.9",
    short: "Rückenschmerz n.n.bez.",
    long: "Rückenschmerz, nicht näher bezeichnet"
  },

  // ---------------------------------------------------------------------------
  // Schultergürtel / Schulter
  // ---------------------------------------------------------------------------
  {
    code: "M19.0",
    short: "Primäre Arthrose Schulter",
    long: "Primäre Arthrose des Schultergelenks"
  },
  {
    code: "M24.2",
    short: "Instabilität Schulter",
    long: "Rezidivierende oder chronische Instabilität des Schultergelenks"
  },
  {
    code: "M25.51",
    short: "Schulterschmerz",
    long: "Schmerzen im Schultergelenk"
  },
  {
    code: "M25.81",
    short: "Steife Schulter",
    long: "Sonstige Gelenksteife: Schulterregion"
  },
  {
    code: "M75.0",
    short: "Adhäsive Kapsulitis",
    long: "Adhäsive Kapsulitis des Schultergelenks (Frozen Shoulder)"
  },
  {
    code: "M75.1",
    short: "Rotatorenmanschetten-Syndrom",
    long: "Rotatorenmanschetten-Syndrom der Schulter"
  },
  {
    code: "M75.2",
    short: "Bizepssehnen-Tendinitis",
    long: "Tendinitis der langen Bizepssehne"
  },
  {
    code: "M75.3",
    short: "Kalkschulter",
    long: "Kalkablagerungen in der Schulterregion"
  },
  {
    code: "M75.4",
    short: "Impingement-Syndrom Schulter",
    long: "Impingement-Syndrom des Schultergelenks"
  },
  {
    code: "M75.5",
    short: "Bursitis Schulter",
    long: "Bursitis der Schulterregion"
  },
  {
    code: "S43.0",
    short: "Luxation Schulter",
    long: "Luxation des Schultergelenks"
  },
  {
    code: "S46.0",
    short: "Muskel-/Sehnenverletzung Schulter",
    long: "Verletzung der Muskeln und Sehnen der Rotatorenmanschette"
  },

  // ---------------------------------------------------------------------------
  // Ellenbogen / Hand
  // ---------------------------------------------------------------------------
  {
    code: "M65.4",
    short: "Tendovaginitis de Quervain",
    long: "Tendovaginitis stenosans de Quervain im Bereich der Hand"
  },
  {
    code: "M77.0",
    short: "Epicondylitis humeri lateralis",
    long: "Laterale Epicondylitis (Tennisellenbogen)"
  },
  {
    code: "M77.1",
    short: "Epicondylitis humeri medialis",
    long: "Mediale Epicondylitis (Golferellenbogen)"
  },
  {
    code: "M79.6",
    short: "Weichteilschmerz Gliedmaßen",
    long: "Schmerzen in Gliedmaßen ohne genaue Lokalisation"
  },
  {
    code: "S53.4",
    short: "Distorsion Ellbogen",
    long: "Distorsion und Zerrung des Ellbogengelenks"
  },

  // ---------------------------------------------------------------------------
  // Hüfte / Becken
  // ---------------------------------------------------------------------------
  {
    code: "M16.0",
    short: "Koxarthrose primär einseitig",
    long: "Primäre Koxarthrose, einseitig"
  },
  {
    code: "M16.1",
    short: "Koxarthrose primär beidseitig",
    long: "Primäre Koxarthrose, beidseitig"
  },
  {
    code: "M16.2",
    short: "Koxarthrose sekundär",
    long: "Coxarthrose infolge anderer Erkrankungen"
  },
  {
    code: "M24.8",
    short: "Hüftimpingement",
    long: "Sonstige spezifische Gelenkveränderungen mit Femoroacetabulärem Impingement"
  },
  {
    code: "M70.6",
    short: "Trochanterbursitis",
    long: "Bursitis trochanterica / Schmerzsyndrom über dem Trochanter major"
  },
  {
    code: "S73.0",
    short: "Luxation Hüfte",
    long: "Luxation des Hüftgelenks"
  },
  {
    code: "S76.0",
    short: "Muskel-/Sehnenverletzung Hüfte",
    long: "Verletzung von Muskel und Sehne in der Hüftregion"
  },

  // ---------------------------------------------------------------------------
  // Knie
  // ---------------------------------------------------------------------------
  {
    code: "M17.0",
    short: "Gonarthrose primär einseitig",
    long: "Primäre Gonarthrose, einseitig"
  },
  {
    code: "M17.1",
    short: "Gonarthrose primär beidseitig",
    long: "Primäre Gonarthrose, beidseitig"
  },
  {
    code: "M17.2",
    short: "Gonarthrose sekundär",
    long: "Sekundäre Arthrose des Kniegelenks"
  },
  {
    code: "M22.2",
    short: "Patellofemorales Schmerzsyndrom",
    long: "Chondromalacia patellae / vorderer Knieschmerz"
  },
  {
    code: "M23.2",
    short: "Meniskusschaden",
    long: "Der Schaden des Meniskus durch alte Verletzung oder degenerativ"
  },
  {
    code: "M23.5",
    short: "Chronische Knieinstabilität",
    long: "Chronische Instabilität des Kniegelenks"
  },
  {
    code: "M25.56",
    short: "Knieschmerz",
    long: "Schmerzen im Kniegelenk"
  },
  {
    code: "M76.5",
    short: "Patellaspitzensyndrom",
    long: "Enthesiopathie des Knies (Jumper’s Knee)"
  },
  {
    code: "S83.5",
    short: "Verstauchung Knie",
    long: "Distorsion und Zerrung des Kniegelenks"
  },
  {
    code: "S83.6",
    short: "Verletzung Meniskus akut",
    long: "Traumatische Ruptur des Meniskus"
  },
  {
    code: "S83.5A",
    short: "VKBRuptur (klinisch)",
    long: "Verletzung des vorderen Kreuzbandes des Kniegelenks"
  },

  // ---------------------------------------------------------------------------
  // Fuß / Sprunggelenk
  // ---------------------------------------------------------------------------
  {
    code: "M21.6",
    short: "Pes planus / Pes cavus",
    long: "Sonstige Fußdeformitäten, z.B. Plattfuß oder Hohlfuß"
  },
  {
    code: "M76.8",
    short: "Achillodynie",
    long: "Sonstige Enthesiopathie des Fußes, häufig Achillessehne"
  },
  {
    code: "M77.3",
    short: "Fersensporn",
    long: "Enthesiopathie des Kalkaneus (Fersensporn)"
  },
  {
    code: "M79.67",
    short: "Fuß- / Sprunggelenksschmerz",
    long: "Schmerzen im Bereich des Fußes oder Sprunggelenks"
  },
  {
    code: "S93.4",
    short: "Distorsion Sprunggelenk",
    long: "Distorsion und Zerrung des Sprunggelenks"
  },
  {
    code: "S93.6",
    short: "Bandruptur Sprunggelenk",
    long: "Verletzung der Bänder des Sprunggelenks"
  },

  // ---------------------------------------------------------------------------
  // Allgemeine Weichteil- und Schmerzdiagnosen
  // ---------------------------------------------------------------------------
  {
    code: "M60.8",
    short: "Myositis / Muskelentzündung",
    long: "Sonstige entzündliche Myopathien lokalisiert"
  },
  {
    code: "M62.4",
    short: "Verkürzte Muskeln/Sehnen",
    long: "Kontraktur oder Verkürzung von Muskel und Sehne"
  },
  {
    code: "M79.1",
    short: "Myalgie",
    long: "Muskelschmerz, unspezifisch lokalisiert"
  },
  {
    code: "M79.7",
    short: "Fibromyalgie",
    long: "Fibromyalgiesyndrom mit generalisierten Schmerzen"
  },
  {
    code: "R52.1",
    short: "Chronischer Schmerz",
    long: "Anderer chronischer Schmerzzustand"
  },

  // ---------------------------------------------------------------------------
  // Neurologische / radikuläre Beschwerdebilder
  // ---------------------------------------------------------------------------
  {
    code: "G54.4",
    short: "Lumbosakrales Wurzelsyndrom",
    long: "Läsion der Lumbosakralnervenwurzeln"
  },
  {
    code: "G55.0",
    short: "Kompression Nervenwurzel",
    long: "Kompression von Nervenwurzeln und Nervenplexus bei Bandscheibenschaden"
  },
  {
    code: "G56.0",
    short: "Karpaltunnelsyndrom",
    long: "Mononeuropathie des N. medianus im Karpaltunnel"
  },
  {
    code: "G57.0",
    short: "Ischialgie/Ischiasneuropathie",
    long: "Mononeuropathie des N. ischiadicus"
  }
];