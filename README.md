# WINLY · Marketing Website (Next.js)

Dette repoet inneholder hele kildekoden for Winlys markedsnettsted – inkludert fire alternative brand territories som skal designes, testes og utvikles parallelt.  
Målet er å bygge fire distinkte landing pages for winly.no, basert på ulike visuelle og kommunikative retninger, før ett endelig konsept velges.

---

## 📁 Prosjektstruktur

/app
/modern-tech
/calm
/playful
/truth-engine
/components
/docs

markdown
Copy code

### `/app/*`  
Routes for hvert brand territory:

- `/modern-tech`
- `/calm`
- `/playful`
- `/truth-engine`

Hver mappe inneholder en komplett, territorie-spesifikk landing page basert på dokumentasjonen i `/docs`.

### `/components/*`  
Modulære komponenter – én komponent per seksjon per territorium.

### `/docs`  
All strategisk dokumentasjon for brand, tone, struktur og tekst:

- `WINLY_BRAND_FOUNDATION.md`
- `WINLY_BRAND_BOOK_V1.md`
- `WINLY_MISSION_VISION_NARRATIVE.md`
- `TERRITORY_1_Modern_Tech_Excellence.md`
- `TERRITORY_2_Calm_Premium_Minimalism.md`
- `TERRITORY_3_Playful_Premium_B2B.md`
- `TERRITORY_4_Corporate_Truth_Engine.md`

Dette er **den eneste autoritative kilden** for all tekst og struktur.

---

## 🎨 Brand Territory Workflow

Hvert territorium bygges slik:

1. Les territoriets `.md`-fil i `/docs`
2. Claude Code genererer:
   - `app/<territory>/page.tsx`
   - `components/<territory>/*.tsx`
3. Alle seksjoner bygges som egne komponenter
4. Tekst kopieres direkte fra `.md`-filene (ingen improvisasjon)
5. Design implementeres i tråd med hver territoriefil
6. Hero visuals / illustrations hentes via NanoBanana eller Veo

Formålet er å teste **fire svært forskjellige retninger** før Winly velger én.

---

## 🚀 Kom i gang

Installer avhengigheter:

npm install

powershell
Copy code

Start dev-server:

npm run dev

yaml
Copy code

Åpne:  
http://localhost:3000

---

## 🌐 Deploy til Vercel

Prosjektet er fullt kompatibelt med Vercel.

Deploy via CLI:

vercel

yaml
Copy code

Eller via dashboard:  
https://vercel.com/new

---

## 🤖 Arbeidsflyt med Claude Code / Cursor

Når du jobber i Cursor:

1. Åpne prosjektet  
2. Last inn **hele `/docs`** som global kontekst  
3. Si:  
   > “Bygg landing page for TERRITORY_X basert på dokumentasjonen i /docs.”  
4. Claude genererer komponenter + `page.tsx`  
5. Test i dev-server  
6. Iterate → commit → push → deploy

**Regel:**  
All tekst kommer 100% fra `.md`-filene.  
Ingen improvisert copy.

---

## 🧭 Hva repoet IKKE inneholder

- Ingen backend  
- Ingen APIer  
- Ingen datamodell  
- Ingen CRM-funksjoner  
- Ingen produkt-UI  
- Ingen AI-funksjonalitet  

Dette repoet inneholder **kun markedsnettstedet** og de fire territorie-implementasjonene.

---

## ✔️ Status

- ✔ Brand Foundation ferdig  
- ✔ Mission/Vision/Narrative ferdig  
- ✔ Territorium 1–4 ferdig skrevet  
- ☐ Bygge Territory 1 i Next.js  
- ☐ Bygge Territory 2–4  
- ☐ Hero visuals (NanoBanana/Veo)  
- ☐ Territory-testing  
- ☐ Valg av endelig brand direction  
- ☐ Identity v1.0 launch  

---

## 📬 Kontakt

For spørsmål: kontakt Jo eller bruk Winly-prosjektet i ChatGPT.

---