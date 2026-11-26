# Scancodes

Je werkbon-barcodes altijd bij de hand: tik een code aan en scan hem met de Action Tracker van je telefoonscherm.

## Installeren

**iPhone (en Android zonder app)**
1. Open **https://limboflap.github.io/scancodes/** in Safari (op Android in Chrome).
2. Tik op Delen → **Zet op beginscherm**.
3. Open Scancodes vanaf je beginscherm. Hij werkt ook zonder internet en laat een balk "Nieuwe versie staat klaar" zien als er een update is: tik dan op Herstarten.

**Android-app**
1. Download **[Scancodes.apk](https://github.com/Limboflap/scancodes/raw/main/Scancodes.apk)** en open het bestand.
2. Sta installeren uit onbekende bronnen toe (en zet dat daarna weer uit).
3. Sta de camera toe als de app erom vraagt: dan scan je een werkbon live met "Toevoegen".
4. Updates komen vanzelf binnen bij het opstarten.

## Uren bijhouden
Tik bovenin op **Start** als je begint en op **Einde** als je stopt (ook voor een pauze). Via het menu (☰) → **Mijn uren** zie je je tijden per dag, week en maand, zie je de totalen per project, kun je tijden aanpassen of toevoegen (ook met een eindtijd die nog moet komen) en een maand kopiëren als tabel voor Excel. Bij Start wordt de code die je openhebt als project opgeslagen; kies je tijdens het werken een andere code, dan vraagt de app of je wilt overstappen.
Vaste pauzes (standaard 09:00–09:15 en 12:30–13:00) worden automatisch afgetrokken en alles vóór 07:45 en na 16:30 telt als overuren; beide pas je aan via ☰ → Werktijden, pauzes en kleur. Dit is je eigen geheugensteun, geen officiële registratie. De tijden staan alleen op je telefoon.

## Codes delen met een collega
Tik op **Delen**, vink de codes aan en stuur het bericht via WhatsApp of kopieer het.
Je collega tikt op de link in het bericht (web-app), of kopieert het hele bericht en kiest in de Android-app bij *Zelf invullen* → **Bericht van een collega plakken**.
De codes zitten in de link zelf; ze gaan niet via een server.

## Goed om te weten
- Je codes staan alleen op je eigen telefoon. Maak af en toe een back-up via "Back-up en overzetten" onderaan in de app.
- Stop, Overwerk, Werkplaats, Montage en Transport staan er standaard in.

## Voorwaarden
Scancodes is een gratis hulpmiddel van een particulier, niet gemaakt door of verbonden aan One Two (maker van de Action Tracker) of een werkgever.
- **Eigen risico:** de app wordt geleverd zoals hij is, zonder enige garantie.
- **Eigen verantwoordelijkheid:** controleer zelf of de juiste code is gescand en houd je aan de afspraken van je werkgever. Gebruik de app alleen voor registraties die kloppen.
- **Geen aansprakelijkheid:** de maker is niet aansprakelijk voor schade door het gebruik, voor zover de wet dat toestaat.
- **Privacy:** je codes, gewerkte tijden en foto's blijven op je telefoon; de maker ontvangt niets. GitHub en jsDelivr zien je IP-adres bij updates en het laden van de tekstherkenner.
- **Geen verplichtingen:** de app kan zonder aankondiging veranderen of stoppen; er is geen recht op hulp of updates.
- **Licentie:** MIT, zie [LICENSE](LICENSE).

De app toont deze voorwaarden bij de eerste start en vraagt om akkoord.

## Bestanden
| Bestand | Waarvoor |
|---|---|
| `index.html`, `sw.js`, `manifest.webmanifest`, iconen | De web-app (GitHub Pages) |
| `app.html`, `version.json` | Updates voor de Android-app |
| `Scancodes.apk` | Android-app om te installeren |
| `LICENSE` | MIT-licentie |
