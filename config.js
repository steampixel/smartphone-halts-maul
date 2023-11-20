export default {

  version: '1.9.0',

  lastUpdated: '2023-11-17',

  pointsPerLevel: 800,

  categoryTags: [
    {
      key: 'common',
      title: 'Allgemeine Hinweise und Tipps'
    },
    {
      key: 'physical',
      title: 'Physische Gefahren durch direkte Zugriffe',
    },
    {
      key: 'mobile',
      title: 'Gefahren im Mobilfunknetz'
    },
    {
      key: 'online',
      title: 'Gefahren im Internet'
    },
  ],

  filterTags: [
    {
      key: 'easy',
      icon: 'star',
      title: 'Meist schnell und leicht umzusetzen',
      enabled: false,
    },
    {
      key: 'security',
      icon: 'lock',
      title: 'Bringt vergleichsweise viel Sicherheit',
      enabled: false,
    },
    {
      key: 'knowledge',
      icon: 'book',
      title: 'Benötigt Fachwissen oder Recherche',
      enabled: false,
    },
    {
      key: 'uncomfortable',
      icon: 'clock',
      title: 'Ist mit Gewohnheitsänderungen verbunden',
      enabled: false,
    },
    {
      key: 'expensive',
      icon: 'dollar',
      title: 'Ist eher teurer',
      enabled: false,
    },
  ],

  tasks: [

    {
      id: 'dl9iuhbp8ydestlaqxcpw1mar7t5p6lf',
      title: 'Du interessierst dich für deine Sicherheit',
      shortText: 'Sehr gut! Offenbar ist dir deine Sicherheit wichtig. Sonst würdest du dich nicht damit beschäftigen. Deine ersten 100 Punkte sind dir sicher.',
      tags: ['common'],
      points: 100,
      checked: true
    },

    {
      id: 'a2t3l5ehl2x96hbk35ua0u71hoxoklax',
      title: 'Du teilst diese Liste mit anderen',
      shortText: 'Wenn wir es schaffen die Sicherheit aller Menschen zu erhöhen werden sich staatliche Überwachungsmaßnahmen weniger lohnen. Das kommt auch deiner Sicherheit zugute. Teile diese Liste daher in deinen Kanälen oder drucke den Flyer aus.',
      tags: ['common', 'easy'],
      showMore: true,
      links: [
        {
          title: 'Flyer: Smartphone, halt\'s Maul!',
          url: 'https://smartphone-halts-maul.de/flyer'
        }
      ],
      points: 100,
      checked: false
    },

    {
      id: 'rdo96phefsb396oe5vkg1mmbdynq8nnj',
      title: 'Du prüfst diese Liste von Zeit zu Zeit',
      shortText: 'Genauso, wie sich die Technologie und diese Liste ständig wandelt wird sich dein Leben, deine Gewohnheiten und deine Geräte in Zukunft ändern. Nimm dir daher gelegentlich Zeit und prüfe diese Liste.',
      tags: ['common', 'easy'],
      points: 200
    },

    {
      id: 'jppi11lg2e9s9s3uekxo3g7qls646ymf',
      title: 'Du hast schon mal an einer Cryptoparty teilgenommen',
      shortText: 'Cryptoparties sind Events auf denen du lernst deine Geräte und deine Kommunikation zu schützen.',
      longText: 'Wenn du dich für Cryptoparties interessierst und Gleichgesinnte treffen möchtest kannst du dich zum Beispiel auf der Seite cryptoparty.in über bevorstehende Events informieren.',
      showMore: true,
      links: [
        {
          title: 'Nächte Cryptoparties auf cryptoparty.in',
          url: 'https://www.cryptoparty.in/parties/upcoming'
        }
      ],
      tags: ['common', 'easy'],
      points: 400
    },



    {
      id: 'pt4y2j261kog00fs6iodjs9kz14kvgkv',
      title: 'Du verwendest kein Dumbphone',
      shortText: 'Nicht smarte Tasten-Geräte werden oft leichtfertig als "sicher" eingestuft. Diese lassen sich aber oft nicht verschlüsseln und bieten keine sichere Kommunikation.',
      longText: 'Bei Beschlagnahmungen oder Diebstahl können Kontakte, SMS und Anruflisten ausgelesen werden. Darüber hinaus sind Dumbphones ohne weitere Schutzmaßnahmen genauso anfällig für Angriffe im Mobilfunknetz. Dumbphones lassen sich nicht verschlüsseln, du kannst keine Apps wie Passwortmanager darauf installieren, du kannst deine Bilder nicht von Metadaten bereinigen und kannst keine sicheren Messenger nutzen. Auf der einen Seite haben diese Telefone also Nachteile. Auf der anderen Seite muss aber auch festgehalten werden, dass nicht smarte Geräte einige Gefahren komplett ausschließen. Zum Beispiel ist hier die Gefahr durch Infektionen mit Malware sehr viel geringer. Verschlüsselung und sichere Kommunikation erscheint aber angesichts inflationärer Beschlagnahmungen und Überwachung so wichtig, dass ein smartes Gerät unbedingt zu bevorzugen ist.',
      showMore: true,
      tags: ['physical', 'easy', 'expensive'],
      points: 400
    },

    {
      id: '0yt9pse51qn4u7wznlkzyix3vz9184nu',
      title: 'Du hast deine Simkartennummer entfernt',
      shortText: 'Auf der Rückseite deiner Simkarte befindet sich eine unscheinbare Nummer. Zerkratze sie, damit du im Falle einer Beschlagnahmung nicht über sie und deinen Provider identifiziert werden kannst.',
      longText: 'Sei dabei bitte vorsichtig und achte darauf den Chip nicht zu zerstören. Kratze also nicht zu tief!',
      showMore: true,
      tags: ['physical', 'easy'],
      points: 200
    },

    {
      id: '80orohontx6p1hk9iq507gcwxli61686',
      title: 'Deine Smartphones sind verschlüsselt',
      shortText: 'Verschlüssel deine Smartphones mit einem starken alphanumerischen Passwort. Dies verhindert das Auslesen von Daten sehr effektiv.',
      longText: 'Eine starke Verschlüsselung ist wichtig. Eine Bildschirmsperre ist nicht ausreichend. Software wie Cellebrite kann die meisten Bildschirmsperren einfach umgehen. Alle deine Daten, Kontakte, Anruflisten, Standortdaten, Login-Daten und vieles mehr können dann durch automatisierte Software wie Cellebrite Pathfinder via USB gesammelt und aufbereitet dargestellt werden. Dein Verschlüsselungspasswort sollte besonders stark sein. Nutze ein sehr komplexes Muster oder ein alphanumerisches Passwort zur Verschlüsselung.',
      showMore: true,
      links: [
        {
          date: '2016-12-08',
          title: 'Phone-Cracking Cellebrite Software Used to Prosecute Tortured Dissident',
          url: 'https://theintercept.com/2016/12/08/phone-cracking-cellebrite-software-used-to-prosecute-tortured-dissident'
        },
        {
          date: '2023-06-28',
          title: 'Netzpolitik: Abschiebung von Geduldeten: Berlin durchsucht weiter Handys',
          url: 'https://netzpolitik.org/2023/abschiebung-von-geduldeten-berlin-durchsucht-weiter-handys/'
        }
      ],
      tags: ['physical', 'easy', 'security'],
      points: 800
    },

    {
      id: '1y9t0s94ukh4vmw1uxff1jrqii0wahot',
      title: 'Du kannst deine Geräte schnell abschalten',
      shortText: 'Eine Verschlüsselung ist nur effektiv, wenn das Telefon ausgeschaltet ist. Übe daher wie du dein Telefon in Stresssituationen schnell abschalten kannst.',
      longText: 'Auch wenn dein Telefon verschlüsselt ist kann Software wie Cellebrite via USB darauf zugreifen. Solange dein Telefon eingeschaltet ist, ist die Verschlüsselung wirkungslos. Erst wenn es abgeschaltet ist, ist Verschlüsselung wirklich effektiv. Schalte dein Telefon unbedingt ab, bevor du es in fremde Hände gibst! Wenn du auf Nummer sicher gehen willst kannst du auch einen Killswitch an deinem Telefon anbringen. So lässt sich der Akku in Gefahrensituationen schnell entfernen. Damit verschwindet dann der Schlüssel vom Speicher deines Geräts.',
      showMore: true,
      links: [
        {
          date: '2023-10-30',
          title: 'Netzpolitik: Beschlagnahmte Smartphones: Ein Grundrechtseingriff unbekannten Ausmaßes',
          url: 'https://netzpolitik.org/2023/beschlagnahmte-smartphones-ein-grundrechtseingriff-unbekannten-ausmasses/'
        },
        {
          date: '2020-01-26',
          title: 'Ein Killswitch für dein Smartphone',
          url: 'https://steampixel.de/ein-killswitch-fur-dein-smartphone/'
        }
      ],
      tags: ['physical', 'easy'],
      points: 200
    },

    {
      id: 'rww9tk85988s9p24s88rwrj1iow8m1nf',
      title: 'Du verwendest eine Blickschutzfolie',
      shortText: 'Du kannst eine spezielle Folie auf deinen Display kleben, die verhindert, dass umstehende Personen oder Kameras mitlesen können. Diese Folien gibt es für viele Modelle.',
      tags: ['physical', 'easy', 'expensive'],
      points: 200
    },

    {
      id: 'lfhjs76x86fzxc5436w7cereu50btbh0',
      title: 'Deine Simkarte ist mit einer Pin geschützt',
      shortText: 'Du solltest den Pin-Schutz deiner Simkarte niemals deaktivieren. Bei deaktiviertem Pin können Behörden oder andere Personen die Karte selbst nutzen, um sich beispielsweise Zugriff auf Messenger zu verschaffen.',
      longText: 'Wenn du anonyme Simkarten verwendest kannst du die Pin-Sperre oft nicht aktivieren, da du die zur Karte gehörige Pin / PUK oft nicht kennst. Du erhälst diese Karten oft mit deaktiviertem Pin. Du solltest in diesem Fall darauf achten, dass alle deine Messenger mit einem zweiten Faktor (z.B. Pin) abgesichert sind und dass du die Karte nicht selbst für eine Zwei-Faktor-Authentifizierung nutzt.',
      showMore: true,
      tags: ['physical', 'easy', 'security'],
      points: 400
    },

    {
      id: 'eur6ctpfgyqk36otnor85vlx1pruxirk',
      title: 'Du verzichtest auf Speicherkarten',
      shortText: 'Nicht auf allen Geräten lassen sich Speicherkarten zuverlässig verschlüsseln. Zudem lassen sich Daten wiederherstellen, die bei einer früheren Nutzung mit anderen Geräten darauf gespeichert wurden. Nutze Speicherkarten daher nur, wenn du weißt was darauf gespeichert wird und wenn du diese vorher überschrieben hast.',
      tags: ['physical', 'easy', 'security'],
      points: 600
    },

    {
      id: 'kw9bjghrjadzbtyc6ktszoycw98t5ym8',
      title: 'Du nutzt keine biometrische Freischaltung',
      shortText: 'Du solltest nie deinen Fingerabdruck oder dein Gesicht nutzen, um dein Telefon freizuschalten. Behörden mit Zugriff auf Fingerabdrücke oder Bildmaterial können das Gerät sonst entsperren. Nutze daher komplexe Muster oder alphanumerische Passworte.',
      longText: 'Fingerabdrücke und Gesichtserkennung sind keine sicheren Methoden, um das eigene Gerät zu entsperren. Sie sind wie Passwörter, die du niemals ändern kannst. Durch Datenlecks oder Malware könnten diese sensiblen Informationen abhanden kommen und dir so zum Nachteil werden. Zudem darf auch die Polizei deine Fingerabdrücke nutzen, um dein Gerät zu entsperren.',
      showMore: true,
      links: [
        {
          date: '2023-03-10',
          title: 'Polizei darf Fingerabdrücke nehmen, um Handy zu entsperren',
          url: 'https://netzpolitik.org/2023/gerichtsbeschluss-polizei-darf-fingerabdruecke-nehmen-um-handy-zu-entsperren/'
        }
      ],
      tags: ['physical', 'easy', 'security', 'uncomfortable'],
      points: 600
    },

    {
      id: 'ayxfh1s1po8m097tqj5lkde27ttkpeuj',
      title: 'Du hast die Entwickler*innen-Features deaktiviert',
      shortText: 'Deaktiviere unbedingt USB-Debugging, wenn du dich damit auskennst. Normalerweise ist diese Funktion auf allen Geräten standardmäßig deaktiviert und muss von dir bewusst aktiviert werden.',
      showMore: true,
      links: [
        {
          date: '2022-02-14',
          title: 'Heise: Android: Entwickleroptionen aktivieren/deaktivieren ',
          url: 'https://www.heise.de/tipps-tricks/Android-Entwickleroptionen-aktivieren-deaktivieren-4041510.html'
        }
      ],
      tags: ['physical', 'knowledge', 'security'],
      points: 600
    },

    {
      id: '3xg9ol61sc1gywog7m91k7ynyqsm5u62',
      title: 'Du verwendest nur dein eigenes Ladekabel ',
      shortText: 'Verwende nur Netzteile und Kabel zum laden, denen du vertraust. Markiere Kabel und Netzteil, um ein Austauschen zu verhindern. Wenn möglich nutze ein USB-Kabel ohne Datenfunktion zum Laden. Manipulierte Kabel oder öffentliche Ladepunkte könnten Daten auslesen oder unerwünschte Software installieren.',
      showMore: true,
      links: [
        {
          date: '2023-04-12',
          title: 'Tarnkappe: FBI warnt vor der Nutzung öffentlicher Handy-Ladestationen',
          url: 'https://tarnkappe.info/artikel/it-sicherheit/fbi-warnt-vor-der-nutzung-oeffentlicher-handy-ladestationen-272873.html'
        }
      ],
      tags: ['physical', 'easy', 'expensive'],
      points: 200
    },

    {
      id: '6re0wpjpfllc485n2t6rzqe5xt50a9ku',
      title: 'Dein Betriebssystem verfügt über verified Boot',
      shortText: 'Verified Boot verhindert Manipulationen an deinem Betriebssystem. Du solltest dich vergewissern, dass dein Gerät damit abgesichert ist. Wenn du selbst ein eigenes System installiert hast, solltest du verified Boot aktivieren.',
      tags: ['physical', 'knowledge'],
      points: 200
    },

    {
      id: '1p48age63ez4bimmj70g4dn5wuyc4fc1',
      title: 'Du hast dein Gerät versiegelt',
      shortText: 'Eine Versiegelung kann dir helfen nach einer Rückgabe deines Gerätes festzustellen, ob Hardware manipuliert wurde. Gib z.B einen Tropfen speziellen Siegellack oder Nagellack auf die Nahtstellen deines Geräts. So kannst du feststellen, ob es geöffnet wurde.',
      showMore: true,
      links: [
        {
          date: '2020-08-09',
          title: 'Steampixel: Schon mal über Hardware-Versiegelungen nachgedacht?',
          url: 'https://steampixel.de/schon-mal-uber-hardware-versiegelungen-nachgedacht/'
        }
      ],
      tags: ['physical', 'knowledge', 'expensive'],
      points: 200
    },

    {
      id: 'n2qb3l1sgibjxou17orb089dp005x5yt',
      title: 'Du hast die eindeutigen Nummern deines Gerätes notiert',
      shortText: 'In den Einstellungen deines Telefons findest du eindeutige, unveränderliche Hardwarenummern wie Seriennummer, WiFi-Mac-Adresse, Bluetooth-Mac-Adresse und IMEI. Notiere diese Nummern. So kannst du dir jederzeit sicher sein, dass dein Gerät nicht heimlich ausgetauscht wurde.',
      tags: ['physical', 'easy'],
      points: 200
    },

    {
      id: 'aq4hbvo8yvmm5uq7544qxl7ww9zogqyy',
      title: 'Du fertigst regelmäßig Backups an',
      shortText: 'Erstelle von deinen wichtigsten Daten regelmäßig Backups. Dein Backup muss nicht perfekt sein. Ein schlechtes Backup ist besser als kein Backup!',
      longText: 'Du solltest bei deinem Backup auch an wichtige Apps wie 2-Faktor-Apps oder Passwortmanager denken. Die Einstellungen lassen sich daraus meist leicht exportieren. Nutze wenn möglich quelloffene Backup-Software wie "oandbackup" oder "Neo Backup". Diese benötigen allerdings Root-Rechte. Eine einfache regelmäßige Kopie deiner wichtigsten Daten auf einen USB-Stick ist aber auch ein guter Anfang! Denke daran, dass "No Backup, No Mercy" eine arrogante Haltung ist. Nicht alle Menschen haben das Wissen und die technischen Möglichkeiten für Backups. Helft euch gegenseitig!',
      showMore: true,
      links: [
        {
          title: 'F-Droid: Neo Backup',
          url: 'https://f-droid.org/de/packages/com.machiav3lli.backup/'
        },
        {
          title: 'F-Droid: oandbackup',
          url: 'https://f-droid.org/de/packages/dk.jens.backup/'
        }
      ],
      tags: ['physical', 'knowledge', 'security'],
      points: 800
    },

    {
      id: '15ts0bg9cuc51qzua6ecz7zgmg1e0tss',
      title: 'Deine Backups sind verschlüsselt',
      shortText: 'Wenn du die Möglichkeit hast solltest du deine Backups unbedingt verschlüsseln, um diese vor ungewollten Zugriffen zu schützen.',
      longText: 'Die Android-App Neo Backup unterstützt Verschlüsselung von Haus aus. Du kannst aber auch verschlüsselte Zip-Archive von Hand erstellen oder gleich ganze USB-Sticks verschlüsseln. Unter Linux, MacOS und einigen Windows-Versionen geht das ganz einfach über eine grafische Oberfläche. Du kannst aber auch eine Verschlüsselungssoftware für deine Sticks wie VeraCrypt einsetzen, die auf den meisten Betriebssystemen funktioniert. Wenn du dich tiefer mit der Materie befassen möchtest und die Kommandozeile nicht scheust kannst du dir professionelle Software wie Restic (Linux) oder duplicity (Linux) ansehen.',
      showMore: true,
      links: [
        {
          date: '2022-03-30',
          title: 'Windows: How to password protect ZIP files and folders on PC',
          url: 'https://nordvpn.com/de/blog/how-to-password-protect-a-zip-file/'
        },
        {
          date: '2021-09-01',
          title: 'Linux: How to encrypt a USB disk',
          url: 'https://medium.com/tech-notes-and-geek-stuff/how-to-encrypt-a-usb-disk-47f6a4166f03'
        },
        {
          title: 'MacOS: Verschlüsseln und Schützen eines Speichermediums mit einem Passwort mit dem Festplattendienstprogramm auf dem Mac',
          url: 'https://support.apple.com/de-de/guide/disk-utility/dskutl35612/mac'
        },
        {
          date: '2022-12-29',
          title: 'Windows: How to encrypt a USB flash drive—and why you should',
          url: 'https://www.microsoft.com/en-us/microsoft-365-life-hacks/privacy-and-safety/how-and-why-to-encrypt-usb-flash-drive'
        },
        {
          title: 'VeraCrypt',
          url: 'https://veracrypt.fr/en/Downloads.html'
        },
        {
          title: 'duplicity',
          url: 'https://duplicity.us/'
        },
        {
          title: 'restic',
          url: 'https://restic.net/'
        }
      ],
      tags: ['physical', 'knowledge', 'security'],
      points: 400
    },

    {
      id: 'ue4r5ahyan5cu3rkcuxp0wd2a4ls17aw',
      title: 'Deine Backups sind dezentral und auch außerhalb deiner Wohnung gelagert',
      shortText: 'Verschaffe dir einen Überblick über die Wichtigkeit deiner Daten für deinen Alltag und lagere sie entsprechend. Lagere z.B. eine Kopie deiner Musik- oder Bildersammlung weiter entfernt bei Freund*innen. Auf Backups von Passwortmanagern, 2-Faktor-Apps oder wichtigen Dokumenten solltest du eher schnell Zugriff haben.',
      tags: ['physical', 'uncomfortable'],
      points: 400
    },

    {
      id: '198wym1kqg9oyfjd1g7hr71e5ar91c45',
      title: 'Du übst die Wiederherstellung deiner Backups',
      shortText: 'Die Wiederherstellung deiner Daten ist das Wichtigste an einem Backup. Übe diese Situation. So kannst du sehen, ob dein Backup intakt ist. Stelle sicher, dass du dein Backup ohne Zugriff auf Passwortmanager und Zwei-Faktor-Apps wiederherstellen kannst.',
      tags: ['physical', 'easy'],
      points: 400
    },

    {
      id: 'pyvc9a2nvlq0ukuxpkhf1hn7mfuhj9ld',
      title: 'Du lagerst nicht genutzte Geräte nicht in deiner Wohnung',
      shortText: 'Im Falle einer Hausdurchsuchung oder eines Einbruchs werden oft alle Geräte entwendet. Bereite dich darauf vor indem du nicht genutzte Geräte bei deinen Freund*innen lagerst. So hast du schnell Ersatz.',
      tags: ['physical', 'easy', 'security'],
      points: 400
    },

    {
      id: '255rov4bdircfn2ac5toavgq6jj99d42',
      title: 'Du entsperrst dein Smartphone nicht auf Verlangen',
      shortText: 'Bei Beschlagnahmungen auf richterliche Anordnung oder bei Sicherstellungen (freiwillige Herausgabe) eines Smartphones fragt die Polizei oft nach Pins und Passworten. Sage nichts. Entsperre nichts. Kontaktiere Anwält*innen.',
      tags: ['physical', 'easy', 'security'],
      points: 800
    },

    {
      id: '98rgv22iqrocb3e55w90anh5rtoni492',
      title: 'Du hast dein Telefon einmal überschrieben',
      shortText: 'Du hast das Telefon gebraucht gekauft? Dann solltest du einmal den kompletten Speicher überschreiben, um zu vermeiden, dass ungewollte Daten auf deinem Gerät gefunden werden.',
      longText: 'Gebrauchte Telefone könnten illegale Daten enthalten haben, die wiederhergestellt und ausgewertet werden könnten. Um zu vermeiden, dass dir das zum Verhängnis wird solltest du das Telefon einmal komplett überschreiben. Wenn du die Möglichkeit hast generiere dir große Zufallsdateien und kopiere diese auf dein Telefon, bis es voll ist. Andernfalls kannst du dir auch große Testdaten aus dem Internet herunterladen und damit den Speicher deines Telefons überschreiben.',
      showMore: true,
      links: [
        {
          title: 'Hier findest du große Test-Dateien',
          url: 'https://fastest.fish/test-files'
        }
      ],
      tags: ['physical', 'easy'],
      points: 200
    },

    {
      id: 'jseo0a8ko4q5rnb3lyh55p1jzd42ldrr',
      title: 'Deaktiviere nicht genutzte Schnittstellen',
      shortText: 'Du solltest Positionierung, WiFi, Bluetooth oder NFC nur aktivieren, wenn du es wirklich benötigst',
      longText: 'Über WiFi kannst du in bestimmten Fällen wiedererkannt werden. Im extremsten Fall kann sogar deine Wohnadresse ermittelt werden. Einige Geräte verraten die eindeutige Hardwarenummer deiner WiFi-Schnittstelle sowie die Liste deiner bekannten WiFi-Netze. Auf Websites wie wigle.net kannst du einfach nach den physischen Standorten der Netze suchen.',
      showMore: true,
      links: [
        {
          title: 'Wigle.net - All the networks. Found by Everyone.',
          url: 'https://wigle.net/'
        },
        {
          title: 'Warum eine versteckte SSID keine Sicherheit bringt, sondern sogar Bewegungsprofile ermöglicht',
          date: '2020-06-28',
          url: 'https://www.wlan-blog.com/sicherheit/warum-eine-versteckte-ssid-keine-sicherheit-bringt-sondern-sogar-bewegungsprofile-ermoeglicht'
        },
        {
          title: 'Heise: Von wegen privat: iPhones verrieten physische MAC-Adresse',
          date:'2023-10-30',
          url: 'https://www.heise.de/news/iPhone-Datenschutzpanne-Private-WLAN-Adresse-war-gar-nicht-so-privat-9349123.html'
        },
        {
          date: '2023-09-01',
          title: 'Golem: Bluetooth-Spam gelingt jetzt auch per Android-App',
          url: 'https://www.golem.de/news/kein-flipper-zero-noetig-bluetooth-spam-gelingt-jetzt-auch-per-android-app-2311-178988.html'
        }
      ],
      tags: ['physical', 'easy'],
      points: 400
    },



    {
      id: '4k71ynnyxw2kqkiw6u9zxun0tjgoy9lt',
      title: 'Du nutzt datensparsame Telefon-Tarife',
      shortText: 'Eine Flatrate erzeugt in der Regel weniger Daten als ein Tarif mit minutengenauer Abrechnung oder Einzelverbindungsnachweisen. Denn diese müssen erfasst und gespeichert werden. Flatrates erzeugen weniger Daten. Prepaid-Tarife erzeugen in der Regel nicht mal Rechnungsdaten und sind daher sehr datensparsam.',
      longText: 'Viele Netzbetreiber*innen verkaufen eure Bewegungsdaten an diverse Firmen weiter. Ihr könnt dieser Weitergabe wiedersprechen. Verzichte außerdem auf Einzelverbindungsnachweise oder minutengenaue Abrechnungen in deinem Tarif. Daten, die nicht gespeichert werden können auch nicht abgerufen werden. Frag bei den Provider*innen nach wie lange die Daten in den verschiedenen Tarifen gespeichert werden und mit wem sie geteilt werden. Es gibt auch extra datenschutzfreundliche Provider*innen wie z.B. "Wetell". Trotzdem schützen diese nicht vor den zahlreichen Überwachungsmöglichkeiten im Mobilfunknetz! Anonyme Simkarten sind daher immer zu bevorzugen.',
      showMore: true,
      links: [
        {
          date: '2018-02-09',
          title: 'Mobilfunkanbieter: Widerspruch gegen Erhebung von Bewegungsdaten',
          url: 'https://www.kuketz-blog.de/mobilfunkanbieter-widerspruch-gegen-erhebung-von-bewegungsdaten/'
        }
      ],
      tags: ['mobile', 'knowledge'],
      points: 200
    },

    {
      id: 'rnv3klgi6c7iyx7jjjnguap730c7rat0',
      title: 'Du nimmst dein Handy nicht mit zur Demo',
      shortText: 'Du solltest dein Telefon nicht mit zur Demo nehmen oder es einige Zeit vorher in den Flugmodus schalten und es auch nach der Demo noch einige Zeit im Flugmodus belassen. Auch dann, wenn du anonyme Simkarten nutzt. Durch die Verfolgung einzelner Personen mit sogenannten IMSI-Catchern lässt sich eine Telefonnummer einer Person zuordnen. Egal, ob die Simkarte anonym ist oder nicht.',
      tags: ['mobile', 'easy', 'security'],
      points: 400
    },

    {
      id: '5x8vsbxo48iqofgpps1ghako37wngg8j',
      title: 'Du verzichtest auf Apps wie "SnoopSnitch"',
      shortText: 'Apps, die potentiell IMSI-Catcher oder Stille SMS detektieren können werden dir in den allermeisten Fällen nichts bringen. Du solltest auf diese Apps verzichten und stattdessen lernen warum sie nicht viel bringen und was die Alternative ist.',
      longText: 'Zunächst einmal ist an Apps wie "SnoopSnitch" generell nichts verkehrt. Wir können froh sein, dass es Menschen gibt, die sich mit dieser Materie befassen und solche Apps bauen. Trotzdem musst du verstehen, dass derartige Apps in den allermeisten Fällen völlig wirkungslos sind. SnoopSnitch zum Beispiel funktioniert nur in 2G und 3G Netzen, wenn dein Telefon Root hat und wenn auf dem Mainboard deines Gerätes ein ganz spezieller Chip verbaut ist. Du musst verstehen, dass die Kommunikation mit dem Mobilfunknetz für dein Betriebssystem eine völlig intransparente Blackbox ist. Dein Betriebssystem und deine Apps sind nicht in der Lage die Kommunikation mit einem Funkturm (Basisstation) im Detail zu steuern oder zu überwachen. Das bedeutet das Funknetzwerk kann mit dem Chip auf deinem Gerät kommunizieren ohne, dass dieses etwas davon mitbekommt. Schuld daran ist proprietäre, kommerzielle Hardware, die nicht quelloffen ist. So kommt es auch, dass du durch Stille SMS (Stealth Ping) grob geortet werden kannst. Der Funkchip in deinem Telefon registriert das zwar, meldet das aber nicht an dein Betriebssystem weiter. Nur einige wenige Chips haben Schnittstellen, die dem Betriebssystem eine Beobachtung erlauben. Nur dafür gibt es SnoopSnitch. Die einzig sinnvolle Verteidigung ist eine anonyme Simkarte.',
      showMore: true,
      links: [
        {
          date: '2018-08-07',
          title: 'Süddeutsche Zeitung: Alle eineinhalb Minuten pingt der Staat',
          url: 'https://www.sueddeutsche.de/digital/stille-sms-alle-eineinhalb-minuten-pingt-der-staat-1.4085229'
        },
      ],
      tags: ['mobile', 'easy', 'security'],
      points: 400
    },

    {
      id: 'ze8fnbeg8eskdnvwrapzcvmkm420baty',
      title: 'Du verwendest anonyme Simkarten',
      shortText: 'Anonyme Simkarten erschweren Behörden die Auswahl ihrer Ziele erheblich. Ob stille SMS, IMSI-Catcher, RRLP, RLF, Bestandsdatenauskunft, Verkehrsdatenauskunft, Funkzellenauswertungen, Quellen-TKÜ, Staatstrojaner oder Standortüberwachung. Eine anonyme Simkarte ist oft die einzig sinnvolle Verteidigung gegen derartige Überwachung.',
      longText: 'Das Thema der Mobilfunküberwachung ist komplex und kann in diesem Rahmen nicht komplett behandelt werden. Wichtig zu verstehen ist aber, dass Security-Apps gegen derartige Überwachung nichts ausrichten können, weil z.B. Daten betroffen sind, die ohnehin bei deinem Provider liegen und nicht auf deinem Telefon. Oder weil die Apps selbst keinen Zugriff auf den proprietär Funkchip deines Telefons haben und so z.B. stille SMS nicht sehen können. Oder weil sich der Angriff im Funknetzwerk zwischen Netzanbieter*innen abspielt. Oder weil deine Mobilfunkanbieter*in deine Daten einfach weiter verkauft. Hier auf Apps oder Verhaltensänderungen zu setzen bringt also nichts. Die einzige Verteidigung sind anonyme Simkarten. Auf Seiten wie cell-track.com oder phone-location.info kann zum Beispiel einfach herausgefunden werden, ob sich ein Gerät im Ausland befindet oder nicht oder ob ein Gerät gerade eingeschaltet ist. Alles was du brauchst ist die Nummer. Du kannst nichts dagegen tun als deine Nummer geheim zu halten.',
      showMore: true,
      links: [
        {
          date: '2023-10-27',
          title: 'Heise: Forscher: Sicherheitslücken beim Roaming bleiben auch bei 5G eine große Gefahr',
          url: 'https://www.heise.de/news/Forscher-Sicherheitsluecken-beim-Roaming-bleiben-auch-bei-5G-eine-grosse-Gefahr-9347577.html'
        },
        {
          date: '2022-06-21',
          title: 'Netzpolitik.org: Behörden fragen jede Sekunde, wem eine Telefonnummer gehört',
          url: 'https://netzpolitik.org/2022/bestandsdatenauskunft-2021-behoerden-fragen-jede-sekunde-wem-eine-telefonnummer-gehoert/'
        },
        {
          title: 'Bundesnetzagentur: Häu­fig ge­stell­te Fra­gen: All­ge­mein und SI­NA-An­bin­dung',
          url: 'https://www.bundesnetzagentur.de/DE/Fachthemen/Telekommunikation/OeffentlicheSicherheit/Autom_Auskunftsverfahren/FAQ/start.html'
        },
        {
          date: '2017-07-11',
          title: 'Süddeutsche Zeitung: Das Ende der Anonymität',
          url: 'https://www.sueddeutsche.de/digital/prepaid-sim-karten-das-ende-der-anonymitaet-1.3564334'
        },
        {
          date: '2017-08-02',
          title: 'Interaktive Karte: Registrierungspflicht für Prepaid-SIM-Karten in Europa weit verbreitet',
          url: 'https://netzpolitik.org/2017/interaktive-karte-registrierungspflicht-fuer-prepaid-sim-karten-in-europa-weit-verbreitet/'
        },
        {
          date: '2016-09-20',
          title: 'Informatik-Gutachten: Eine Telefonnummer ist ausreichend, um eine Person mit einer Drohnen-Rakete zu treffen',
          url: 'https://netzpolitik.org/2016/informatik-gutachten-eine-telefonnummer-ist-ausreichend-um-eine-person-mit-einer-drohnen-rakete-zu-treffen/'
        },
        {
          date: '2018-12-29',
          title: '35C3 - Die verborgene Seite des Mobilfunks',
          url: 'https://yt.artemislena.eu/watch?v=CSZWTaTu9As'
        },
        {
          date: '2014-12-28',
          title: 'Tobias Engel: SS7: Locate. Track. Manipulate',
          url: 'https://yt.oelrichsgarcia.de/watch?v=-wu_pO5Z7Pk'
        },
        {
          date: '2019-08-28',
          title: 'Die 5-G Überwachungsstandards',
          url: 'https://invidious.lunar.icu/watch?v=_2HOcuH5rKc'
        },
        {
          date: '2023-09-16',
          title: 'Tarnkappe: Mobilfunkanbieter gaben erneut Daten illegal an die Schufa',
          url: 'https://tarnkappe.info/artikel/rechtssachen/mobilfunkanbieter-gaben-erneut-daten-illegal-an-die-schufa-280583.html'
        },
        {
          date: '2023-06-27',
          title: 'Netzpolitik.org: Firma legt Scoring-Profile der Hälfte aller weltweiten Handynutzer an',
          url: 'https://netzpolitik.org/2023/datenschutzbeschwerde-gegen-telesign-firma-legt-scoring-profile-der-haelfte-aller-weltweiten-handynutzer-an/'
        },
        {
          date: '2023-09-14',
          title: 'Netzpolitik.org: Russische Exil-Journalistin mit Pegasus gehackt',
          url: 'https://netzpolitik.org/2023/meduza-russische-exil-journalistin-mit-pegasus-gehackt/'
        }
      ],
      tags: ['mobile', 'knowledge', 'security', 'uncomfortable'],
      points: 800
    },

    {
      id: '1q8g1pq0k9mzkqgidwwquz3bxtz2u9wl',
      title: 'Du nutzt dein Smartphone exklusiv für eine Simkarte',
      shortText: 'Nutze deine anonyme Simkarte nur in einem bestimmten Telefon. Verwende nie das gleiche Telefon für eine andere Simkarte. Denn die eindeutige Nummer der Sim und die eindeutige Nummer deines Telefons werden immer zusammen in den Verkehrsdaten des Providers gespeichert.',
      tags: ['mobile', 'knowledge', 'security'],
      points: 400
    },

    {
      id: '4p8gqb65l41xh9deftujubar4ak870ay',
      title: 'Du verwendest oft andere Simkarten und ein Proxy-Telefon',
      shortText: 'Um die Sicherheit weiter zu erhöhen kannst du oft deine anonymen Simkarten wechseln. Bei jedem Wechsel solltest du auch das dafür verwendete Telefon wechseln.',
      longText: 'Da in den Verkehrsdaten deiner Netzanbieter*in immer die IMSI zusammen mit der IMEI auftaucht solltest du beim Wechsel deiner Simkarte auch dein Telefon wechseln. Wie du dir sicher vorstellen kannst ist es aufwändig und auch teuer das Telefon von Zeit zu Zeit zu wechseln. Du müsstest ja ständig deine Apps neu einrichten und viel Geld für ein neues Telefon ausgeben. Um die Kosten gering zu halten kannst du mit Proxy-Telefonen arbeiten. Und das geht so: Du hast ein teureres Gerät für deine reguläre Nutzung auf dem all deine Apps installiert sind. In diesem Telefon befindet sich keine Simkarte. Es ist also für das Mobilfunknetzwerk unsichtbar. Internet bekommst du über ein günstiges Zweitgerät, in welches eine Simkarte eingelegt ist. Dieses Telefon braucht nicht viel Leistung. Dieses kann dir aber einen WiFi Hotspot und damit Internet bereitstellen. Außerdem kannst du damit ganz normal telefonieren, wenn du willst. Dieses Telefon lässt sich mit samt der eingelegten Simkarte schnell austauschen. Einziger Nachteil: Du hast immer zwei Smartphones dabei.',
      showMore: true,
      tags: ['mobile', 'knowledge', 'expensive'],
      points: 200
    },

    {
      id: '7afsd36t6fnjy7t9kl61qilodns5l8ry',
      title: 'Du beziehst dein Guthaben anonym',
      shortText: 'Du solltest auch das Guthaben für deine Simkarte anonym oder über Mittelspersonen beziehen. Verwende daher Simkarten für die du Guthaben bar an Kassen kaufen kannst oder bitte Freund*innen dir den Guthaben-Code zu senden.',
      tags: ['mobile', 'knowledge'],
      points: 200
    },

    {
      id: 'zb5k5o1xbl8ti16gl70osqyzq3kbto20',
      title: 'Du gibst deine Telefonnummer nicht weiter',
      shortText: 'Nur wenn du deine Nummer nicht in Verbindung mit deinem Namen weiter gibst bleibt deine anonyme Karte anonym. Um trotzdem erreichbar zu sein kannst du auf Messenger mit Anruffunktion ausweichen, die keine Nummer benötigen oder bei denen sich die Nummer verbergen lässt.',
      tags: ['mobile', 'easy', 'security', 'uncomfortable'],
      points: 800
    },

    {
      id: 'c4eimf6n0w8obpwgpjjsgxsh7mszaag5',
      title: 'Du telefonierst nicht mit deiner anonymen Karte',
      shortText: 'Nutze deine anonyme Simkarte/Telefon nicht für reguläre Telefonate oder SMS. In den Verkehrsdaten ist ersichtlich wer die Zielkontakte sind, wenn diese nicht auch eine anonyme Karte haben. Dadurch ist evtl. eingrenzbar wer du bist. Nutze die Karte wenn möglich nur mit anderen anonymen Karten oder weiche auf Internet-Messenger für Nachrichten und Telefonate aus.',
      tags: ['mobile', 'security', 'easy', 'uncomfortable'],
      points: 400
    },

    {
      id: '0sh38fz58qiq4pfs73sjkww6yzx7kz56',
      title: 'Du hast Simkarten und Telefone anonym bezogen',
      shortText: 'Du solltest Simkarten und Telefone nie direkt an deine Adresse bestellen oder von deinen Konten bezahlen. Um keine Spuren zu hinterlassen kannst du Freund*innen bitten diese für dich zu bestellen oder abzuholen. Zahle in bar.',
      tags: ['mobile', 'easy'],
      points: 200
    },

    {
      id: 'htdfk57a95tvt9lmf13dv9s38y6ldrmk',
      title: 'Du nutzt Rufnummernunterdrückung mit bedacht',
      shortText: 'Du bist dir im klaren darüber, dass das Unterdrücken der Rufnummer lediglich dazu führt, dass diese auf dem Telefon der Gegenstelle nicht angezeigt wird. In den Verkehrsdaten der beteiligten Provider*innen wird deine Nummer dennoch gespeichert. Nutze anonyme Simkarten, wenn du auf Anonymität angewiesen bist.',
      tags: ['mobile', 'easy'],
      points: 200
    },

    {
      id: 'sqdf8gqi8sttil068u2mwb7jxa3p5ldn',
      title: 'Du wählst die 110 und die 112 mit bedacht',
      shortText: 'Seit 2019 wird in Deutschland Advances Mobile Location (AML) eingesetzt und schrittweise ausgebaut, um Personen in Notsituationen zu orten. Wenn du das nicht möchtest solltest du dich darauf vorbereiten.',
      longText: 'Vor AML standen den Rettungsleitstellen lediglich extrem ungenaue Funkzellendaten zur Verfügung (wenn überhaupt), um Personen in Notsituationen orten zu können. AML dagegen ist fest in moderne Telefone und deren Betriebssysteme integriert: Wird eine Notrufnummer gewählt aktiviert das Telefon selbstständig GPS und WiFi, um die eigene Position bestimmen zu können. Diese wird dann via Internet oder SMS automatisch an die Leitstelle übertragen. Diese extrem genaue Ortung wird nur durch das wählen der Notrufnummern aktiviert und ist nicht von außen ohne dein aktives Handeln nutzbar. Du kannst in den meisten Fällen nichts dagegen tun, dass du beim Wählen dieser Nummern automatisch geortet wirst. Leider werden so aber auch anonyme Meldungen erschwert. Du solltest daher immer abwägen, ob die Wahl von Notrufnummern durch dein eigenes Telefon wirklich notwendig ist.',
      showMore: true,
      links: [
        {
          date: '2023-09-21',
          title: 'Wikipedia: Advanced Mobile Location',
          url: 'https://de.wikipedia.org/wiki/Advanced_Mobile_Location'
        },
      ],
      tags: ['mobile', 'easy'],
      points: 400
    },



    {
      id: '45yi4rb7n29xeg1ei60y1aznlp5zvun3900',
      title: 'Sind deine Apps und dein System aktuell?',
      shortText: 'Halte Apps und dein Betriebssystem aktuell. Malware und Staatstrojaner nutzen oft Schwachstellen in der Software aus. Aktuelle Apps und ein aktuelles Betriebssystem sind daher wichtig.',
      tags: ['online', 'knowledge', 'security', 'uncomfortable'],
      points: 400
    },

    {
      id: '4x79gthlqk49k5o4v5r9pzimofc7oskd',
      title: 'Nutzt du einen Passwortmanager?',
      shortText: 'Deine Sicherheit wird enorm erhöht, wenn du für alle Services im Internet ein anderes komplexes Passwort verwendest. Diese solltest du in einem Passwortmanager wie KeePass speichern.',
      tags: ['online', 'knowledge', 'security', 'uncomfortable'],
      points: 400
    },

    {
      id: 'y0oa3gwukxe9egcyoiz6c8qsir5mtk6t',
      title: 'Du verwendest einen Werbeblocker',
      shortText: 'Gezielte Werbekampagnen (Microtargeting) werden unter anderem von Geheimdiensten genutzt, um einzelne Geräte passgenau mit Malware zu infizieren. Schütze dich, indem du z.B. uBlock Origin für Firefox, Pi-Hole in deinem Netzwerk oder Blokada (kostenpflichtig) auf deinem Gerät installierst.',
      showMore: true,
      links: [
        {
          date: '2023-07-06',
          title: 'The adtech industry tracks most of what you do on the Internet. This file shows just how much.',
          url: 'https://netzpolitik.org/2023/surveillance-advertising-in-europe-the-adtech-industry-tracks-most-of-what-you-do-on-the-internet-this-file-shows-just-how-much/'
        },
        {
          date: '2021-10-26',
          title: 'Für Anfänger/Bequeme: Werbung und Tracker unter iOS/Android systemweit verbannen',
          url: 'https://www.kuketz-blog.de/fuer-anfaenger-bequeme-werbung-und-tracker-unter-ios-android-systemweit-verbannen/'
        },
      ],
      tags: ['online', 'knowledge'],
      points: 400
    },

    {
      id: 'sy8okumsb3a9hjwwg4kp6zkktfrjayg5',
      title: 'Du verzichtest auf Root-Rechte',
      shortText: 'Root-Rechte ermöglichen dir viele einzigartige Apps. Diese Rechte gelten dann aber eventuell auch für schadhafte Apps, weswegen du auf Root generell verzichten solltest.',
      longText: 'Wenn du nicht weißt was Root ist, hast du es vermutlich nicht. Root muss bei den meisten Geräten aufwändig aktiviert werden. Leider benötigen auch einige Apps, die deine Sicherheit potentiell erhöhen können oft Root-Rechte. Zu nennen wären da zum Beispiel Backup-Anwendungen wie "Neo Backup" aber auch Apps wie "SnoopSnitch", die versuchen IMSI-Catcher oder Stille SMS zu erkennen. Du solltest immer genau abwägen, ob du wirklich Superuser-Rechte auf deinem Gerät benötigst. In den allermeisten Fällen gibt es dafür keine gute Begründung. Apps wie z.B. "SnoopSnitch" funktionieren sowieso nur in wirklich wenigen Software- und Hardwarekonstellationen. Deswegen Root einzurichten steht in keinem Verhältnis.',
      showMore: true,
      tags: ['online', 'easy'],
      points: 200
    },

    {
      id: 'zokh9ctwzdanhdqvbw4l2pv9h9l7f03r',
      title: 'Nutzt du verschiedene Pseudonyme und Mailadressen?',
      shortText: 'Du kannst deine Sicherheit verbessern, indem du auf allen Plattformen einen anderen Namen und andere Mailadressen bzw. Mobilnummern für die Registrierung verwendest. So können deine Accounts durch Datenlecks nicht zusammengeführt werden.',
      tags: ['online', 'knowledge', 'uncomfortable'],
      points: 200
    },

    {
      id: 'pfjvsc5s12m97912lzslirixegh3f9u2',
      title: 'Du nutzt TOR oder den TOR-Browser',
      shortText: 'TOR (The Onion Router) kann dir helfen deine Anonymität im Internet stark zu verbessern. Nutze Websites über den Tor-Browser und leite Apps mit der Orbot-App über das Tor-Netzwerk um.',
      tags: ['online', 'easy', 'security'],
      points: 800
    },

    {
      id: 'gxcjyy61zysyt62a8ai0zb2gqjev3yo3',
      title: 'Du nutzt ein Smartphone ohne Google oder Apple',
      shortText: 'Google, Apple und andere Hersteller*innen geben Daten ohne zu zögern an Ermittlungs-behörden weiter. Verwende daher ein Google-freies Betriebssystem wie e/OS oder grapheneOS und nutze freie Appstores wie F-Droid und alternative Suchmaschinen wir DuckDuckGo.',
      showMore: true,
      links: [
        {
          date: '2020-10-09',
          title: 'Heise: Inverssuche: Google liefert Polizei Nutzerdaten auf Basis von Suchbegriffen',
          url: 'https://www.heise.de/news/Inverssuche-Google-liefert-Polizei-Nutzerdaten-auf-Basis-von-Suchbegriffen-4925754.html'
        },
        {
          date: '2020-10-13',
          title: 'Polizei erhält Liste aller Nutzer, die nach einem Schlagwort gegoogelt haben',
          url: 'https://netzpolitik.org/2020/ermittlungen-in-den-usa-polizei-erhaelt-liste-aller-nutzer-die-nach-einem-schlagwort-gegoogelt-haben/'
        },
        {
          date: '2023-04-12',
          title: 'Tarnkappe: Kriminelle verkaufen in Google Play Store eingeschleuste Malware',
          url: 'https://tarnkappe.info/artikel/it-sicherheit/malware/kriminelle-verkaufen-in-google-play-store-eingeschleuste-malware-272859.html'
        },
        {
          title: 'F-Droid',
          url: 'https://f-droid.org/de/'
        },
      ],
      tags: ['online', 'security', 'knowledge', 'uncomfortable'],
      points: 600
    },

    {
      id: 'jo9w7hfcbumbjo18i4a0mzihqxjth4ad',
      title: 'Du nutzt Cloud-Speicher nur verschlüsselt',
      shortText: 'Viele Cloud-Anbieter arbeiten vollumfänglich mit Ermittlungsbehörden zusammen und werden nicht zögern deine Daten auszuliefern. Lege dort nur verschlüsselte Daten ab.',
      longText: 'Generell solltest du überlegen, ob du die entsprechenden Cloud-Dienste überhaupt brauchst. Du kannst zum Beispiel Apps wie "OpenKeychain" verwenden, um Dateien vor dem Upload in eine Cloud zu verschlüsseln. Für den Fall, dass du ein Apple-Gerät mit deiner iCloud nutzt aktiviere dort den erweiterten Datenschutz.',
      showMore: true,
      links: [
        {
          title: 'F-Droid: OpenKeychain: Easy PGP',
          url: 'https://f-droid.org/de/packages/org.sufficientlysecure.keychain/'
        },
        {
          title: 'So aktivierst du den erweiterten Datenschutz für iCloud',
          url: 'https://support.apple.com/de-de/HT212520'
        },
        {
          date: '2023-08-04',
          title: 'BAMF soll Cloud-Speicher von Asylsuchenden auslesen',
          url: 'https://netzpolitik.org/2023/innenministerium-bamf-soll-cloud-speicher-von-asylsuchenden-auslesen/'
        }
      ],
      tags: ['online', 'security', 'knowledge', 'uncomfortable'],
      points: 600
    },

    // {
    //   id: 'bn3v5acplivk7go166czs7wecf7hbh49',
    //   title: 'Du hast für deine Messenger separate Pins eingestellt',
    //   shortText: 'Einige Apps wie z.B. Telegram oder Signal bieten einen zusätzlichen Passwortschutz für die Anmeldung an. Angreifer*innen, denen deine Simkarte oder eine Kopie der Karte in die Hände fällt können so nicht auf deine Chats zugreifen.',
    //   tags: ['online', 'knowledge', 'security'],
    //   showMore: true,
    //   links: [

    //   ],
    //   points: 400
    // },

    {
      id: '7uz2t0588ipgha7teyuhsf18xdk9q6zk',
      title: 'Du nutzt VPNs mit Bedacht',
      shortText: 'Bedenke, dass du VPN-Anbieter*innen vertrauen musst. Du bezahlt sie, also kennen Sie deine Identität. Viele VPN-Dienste arbeiten vollumfänglich mit Ermittlungsbehörden zusammen. Wenn du kannst, nutze stattdessen das TOR-Netzwerk.',
      tags: ['online', 'knowledge'],
      points: 200
    },

    {
      id: 'bsqnf4sy9e72t3hfw0f47nywgsbmfm3j',
      title: 'Du installierst Apps nur aus vertrauenswürdigen Quellen',
      shortText: 'Nutze nur offizielle App-Stores oder F-Droid, um deine Apps zu beziehen. Wenn du dich auskennst kannst du Apps auch direkt von den Websites der Hersteller*innen laden. Überlege immer, ob du eine App überhaupt brauchst.',
      tags: ['online', 'knowledge'],
      points: 200
    },

    {
      id: 'zokgwvdiqcizcpyrc9y4a83u3s8rn9lh',
      title: 'Du prüfst Zugriffsrechte sorgfältig',
      shortText: 'Deine Taschenlampen-App will auf den Speicher zugreifen? Keine gute Idee! Frage dich immer wozu eine App Berechtigungen benötigt und gib diese nur schrittweise oder bei Bedarf frei.',
      tags: ['online', 'easy'],
      points: 200
    },

    // {
    //   id: '6y3nqp7tkk2i75iw5rojgx7wgi8g40zw',
    //   title: 'Du achtest auf eine verschlüsselte Internetverbindung',
    //   shortText: 'Du achtest beim Surfen auf eine gültige und verschlüsselte TLS-Verbindung (https://)? Super! Dann kannst du davon ausgehen, dass die Kommunikation zwischen dir und der Ziel-Website verschlüsselt erfolgt.',
    //   tags: ['online', 'easy'],
    //   points: 200
    // },

    {
      id: 'z0meha5aadwsz3t2hpy6suymhi9u76qb',
      title: 'Du löschst Metadaten aus deinen Bildern',
      shortText: 'Dein Smartphone heftet Metadaten wie Koordinaten, Kameratyp, Auflösung, Smartphone-Modell oder Betriebssystem unsichtbar an deine Bilder. Nutze Apps wie "Imagepipe" um deine Bilder zu bereinigen bevor du diese ins Internet lädst.',
      longText: 'Imagepipe kannst du über den F-Droid auf deinem Android-Smartphone installieren. F-Droid ist ein installierbarer Katalog für freie und Open-Source-Software.',
      showMore: true,
      links: [
        {
          title: 'F-Droid',
          url: 'https://f-droid.org/de/'
        },
      ],
      tags: ['online', 'easy', 'uncomfortable'],
      points: 400
    },

    {
      id: 'l6vgj7s7b376ld7ks7htepeaivnvfkac',
      title: 'Du ließt dir Datenschutzerklärungen durch',
      shortText: 'Nimmst du dir Zeit Datenschutzerklärungen von neuen Apps und Services bei denen du dich registrierst zu lesen? Interessiert es dich mit wem deine Daten geteilt werden und was damit passiert?',
      tags: ['online', 'uncomfortable', 'knowledge' ],
      points: 400
    },

    {
      id: 'dlj81mgwv9w4i1eyca06znn8lf7wn28i',
      title: 'Du verschlüsselst deine E-Mails',
      shortText: 'Nutzt du E-Mails? Dann solltest du unbedingt über Verschlüsselung wie GPG/OpenPGP nachdenken.',
      tags: ['online', 'security', 'knowledge' ],
      points: 800
    },

    {
      id: '0blm4hke75axw4b9qrixkvpbterswatv',
      title: 'Du nutzt Messenger mit verschlüsselter Kommunikation',
      shortText: 'Du solltest unbedingt verschlüsselte Messenger wie Signal, Threema, Element oder SimpleX nutzen.',
      tags: ['online', 'simple', 'security' ],
      points: 800
    },

    {
      id: 'kmebgdtj44opafsufh1maup3xblhe6m5',
      title: 'Lösche nicht genutzte Accounts',
      shortText: 'Es ist wichtig nicht mehr benötigte Accounts zu löschen. Egal, ob du diese für eine Website oder eine App benötigt hast. Wenn du sie länger nicht mehr genutzt hast, solltest du sie schließen. Das minimiert das Risiko von Datenlecks enorm.',
      tags: ['online', 'knowledge' ],
      points: 400
    },

    {
      id: 'skjd0f1s35xqsuutwtfcfjmwbakciggh',
      title: 'Du prüfst, ob du von Datenlecks betroffen bist',
      shortText: 'Täglich leaken persönliche Daten aus Websites, Portalen und Onlineshops. Betroffne werden dabei selten informiert. Die Daten werden verkauft, gehandelt oder sind oft auch völlig frei zugänglich.',
      longText: 'Auf der Website haveibeenpwned.com kannst du schnell und unkompliziert feststellen, ob deine Mailadresse in Datenlecks auftaucht. Du kannst dir dort auch einen Account zulegen, und dich bei neuen Funden automatisch benachrichtigen lassen.',
      showMore: true,
      links: [
        {
          title: '\';--have i been pwned?',
          url: 'https://haveibeenpwned.com/'
        },
      ],
      tags: ['online', 'easy' ],
      points: 400
    },

  ],
};