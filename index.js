const gtts = require('node-gtts')('de')
const path = require('path')

const sounds4 = [
  'der Ton',
  'das Leben',
  'der Fernseher',
  'sollen',
  'die Ruhe',
  'in Ruhe',
  'der Schatz',
  'die Datei',
  'abschicken',
  'anmachen',
  'ausmachen',
  'erlauben',
  'merken',
  'der Ohrhörer',
  'das Lieblingslied',
  'der Bildschirm',
  'checken',
  'einkaufen',
  'mitgehen',
  'das Notebook',
  'der Aufsatz',
  'mailen',
  'ausdrucken',
  'einfallen',
  'Da fällt mir ein',
  'halten',
  'der Vortrag',
  'den Vortrag halten',
  'die Europäische Union',
  'die Hälfte',
  'dürfen',
  'anschalten',
  'das Licht',
  'dunkel',
  'das Radio',
  'das Zähneputzen',
  'die Zahnbürste',
  'die Homepage',
  'runterladen',
  'surfen',
  'ansehen',
  'öffnen',
  'starten',
  'schließen',
  'der Brief',
  'täglich',
  'mehrmals',
  'selten',
  'darüber',
  'die meisten',
  'weggehen',
  'fernsehen',
  'das Fernsehprogramm',
  'privat',
  'öffentlich',
  'die Spülmaschine',
  'das Referat',
  'der Schluss',
  'bügeln',
  'die Sorge',
  'der Chat',
  'das Team',
  'weinen',
  'erst',
  'verlassen',
  'stundenlang',
  'wenn',
  'die Fernsehserie',
  'der Tierfilm',
  'die Zeichentrickserie',
  'die Nachricht',
  'der Krimi',
  'der Wetterbericht',
  'die Werbung'
]

const sounds5 = [
  'das Zusammenleben',
  'streiten',
  'der Kompromiss',
  'das Tor',
  'sich fühlen',
  'sich wohlfühlen',
  'sich freuen',
  'sich ärgern',
  'gewinnen',
  'die Mannschaft',
  'der Ärger',
  'die Freude',
  'dann',
  'kaputtmachen',
  'laut',
  'besonders',
  'blind',
  'das Abitur',
  'das Internat',
  'selbstständig',
  'zusätzlich',
  'die Fähigkeit',
  'ordnen',
  'das Fach',
  'bieten',
  'die Band',
  'die Behinderung',
  'interessieren',
  'präsentieren',
  'der Versuch',
  'unsicher',
  'die Angst',
  'das Badezimmer',
  'das Wohnzimmer',
  'die Beste',
  'der Streit',
  'die Dusche',
  'zuerst',
  'besetzt',
  'eben',
  'gerade eben',
  'das nächste Mal',
  'aggressiv',
  'die Meinung',
  'sich entschuldigen',
  'beschimpfen',
  'hör mal',
  'klar',
  'von mir aus',
  'einverstanden'
]

const sounds6 = [
  'gefallen',
  'das Design',
  'anprobieren',
  'der Schuh',
  'der Turnschuh',
  'modisch',
  'der Geschmack',
  'das Display',
  'die Funktion',
  'das Video',
  'der Sportwagen',
  'das Mountainbike',
  'kompliziert',
  'das Hemd',
  'das Gigabyte',
  'verkaufen',
  'die Mathearbeit',
  'wegnehmen',
  'der Punkt',
  'die Sonnenbrille',
  'altmodisch',
  'glatt',
  'blaugrau',
  'gestreift',
  'gepunktet',
  'kariert',
  'stehen',
  'Wie steht mir die Jeans',
  'braun',
  'das Äußere',
  'die Sicherheit',
  'angezogen',
  'gestylt',
  'die Mehrheit',
  'die Marke',
  'passend',
  'gehören',
  'die Rolle',
  'der Wert',
  'egal',
  'und so weiter',
  'die Firma',
  'die Bekleidung',
  'das Produkt',
  'das Argument',
  'die Pflege',
  'das Gesicht',
  'das Parfüm',
  'die Armbanduhr',
  'der Schmuck'
]

const sounds7 = [
  'das Datum',
  'der Kindergarten',
  'das Interesse',
  'die Hochzeit',
  'seit',
  'die nächste',
  'der Auftritt',
  'das Publikum',
  'denken',
  'die Dritte',
  'vor einer Woche',
  'in zwei Wochen',
  'gegenseitig',
  'geboren',
  'ist geboren',
  'das Geburtsdatum',
  'der Präsident',
  'der Komponist',
  'musikalisch',
  'die Politikerin',
  'der Dichter',
  'der Schriftsteller',
  'die Autofahrerin',
  'der Physiker',
  'der Sänger',
  'der Sportler',
  'brav',
  'raus',
  'die Prüfung',
  'stressig',
  'die Gesamtschule',
  'die Leistung',
  'die Aufnahmeprüfung',
  'heiraten',
  'weg',
  'bellen',
  'die Dreizimmerwohnung',
  'das Wohnhaus',
  'darauf',
  'jemanden anbrüllen',
  'sich beeilen',
  'doof',
  'die Mikrowelle',
  'überall',
  'die Panik',
  'rennen',
  'rauf',
  'runter',
  'der Zeitungskiosk',
  'der Passant',
  'blond',
  'der Spielplatz',
  'zurückkommen',
  'entgegenkommen',
  'springen',
  'der Keller',
  'die Antwort',
  'holen',
  'der Schlüssel',
  'aufmachen',
  'schmutzig',
  'umarmen',
  'küssen',
  'jemanden ärgern',
  'verstecken',
  'abschließen',
  'zu Mittag essen'
]

for (item of sounds7) {
  const filepath = path.join(__dirname, `out/${item}.mp3`)
  gtts.save(filepath, item, function () {
    console.log(item, 'save done')
  })
}
