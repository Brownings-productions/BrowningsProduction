---
# ───────────────────────────────────────────────────────────────
#  PROJECT: Solar power
#  Everything between the two "---" lines is the project's info.
#  en = English, no = Norwegian. Text in [brackets] is for you to replace.
# ───────────────────────────────────────────────────────────────
layout: project
order: 2                 # position in lists (1 = first)
group: land              # land | workshop | tech | outdoors
status: started          # idea | started | building | ongoing | inspection | beginner | done
level: 2                 # how full the orange status bar is: 1, 2, 3 or 4
hold: false              # true shows an "On hold" tag
finished: ""             # when status is "done", write the date here, e.g. "12.05.2027"
youtube: ""              # paste a YouTube link to show the "Watch on YouTube" button and video box

title:   { en: "Solar power", nb: "Solkraft" }
summary:                 # short text on the homepage card
  en: "Setting up solar power on the farm, from planning and sizing to the first kilowatt-hours."
  nb: "Solkraft på gården, fra planlegging og dimensjonering til de første kilowattimene."
lead:                    # intro under the title on the project page
  en: "Planning, sizing and installing a solar system for the farm in Øyslebø. The goal: [GOAL, e.g. cover a set share of the farm's electricity]."
  nb: "Planlegging, dimensjonering og montering av et solanlegg for gården på Øyslebø. Målet: [MÅL, f.eks. dekke en andel av strømforbruket på gården]."

photo: ""                # e.g. "/assets/img/solar.jpg"  (upload the photo to assets/img first)
photo_label: "PHOTO: wide shot of the farm / where the panels will go"

facts:                   # the facts box next to the title
  - k: { en: "Started", nb: "Startdato" }
    v: "[DATE]"
  - k: { en: "Location", nb: "Sted" }
    v: "Øyslebø, Lindesnes"
  - k: { en: "System size", nb: "Anleggsstørrelse" }
    v: "[kWp]"
  - k: { en: "Est. yearly output", nb: "Est. årsproduksjon" }
    v: "[kWh]"

detail:                  # "About the project" – add or remove sections freely
  - h: { en: "Why solar on the farm", nb: "Hvorfor solkraft på gården" }
    body:
      en: "[Explain the background: power use on the farm, costs, wanting to be more self-sufficient, what made you start now.]"
      nb: "[Forklar bakgrunnen: strømforbruket på gården, kostnader, ønsket om å bli mer selvforsynt, hvorfor du starter nå.]"
  - h: { en: "The system", nb: "Anlegget" }
    body:
      en: "[Describe the setup: where the panels go (roof or ground), number and type of panels, inverter, battery or not, grid connection.]"
      nb: "[Beskriv oppsettet: hvor panelene skal stå (tak eller bakke), antall og type paneler, inverter, batteri eller ikke, tilkobling til nettet.]"
  - h: { en: "The plan", nb: "Planen" }
    body:
      en: "[Step by step: measurements and sizing → quotes and parts → mounting → electrical work and approval → first production.]"
      nb: "[Steg for steg: oppmåling og dimensjonering → tilbud og deler → montering → elektrisk arbeid og godkjenning → første produksjon.]"
  - h: { en: "Challenges and lessons", nb: "Utfordringer og lærdom" }
    body:
      en: "[What has been hard so far, what surprised you, and what you would do differently.]"
      nb: "[Hva har vært vanskelig så langt, hva overrasket deg, og hva du ville gjort annerledes.]"
detail_photo: ""
detail_photo_label: "DIAGRAM or PHOTO: system layout / wiring sketch"

needs:                   # the orange "How you can help" box. Delete all lines to hide it.
  - k: { en: "Equipment", nb: "Utstyr" }
    v: { en: "[e.g. panels, inverter, mounting]", nb: "[f.eks. paneler, inverter, montasje]" }
  - k: { en: "Expertise", nb: "Kompetanse" }
    v: { en: "[e.g. electrical approval]", nb: "[f.eks. elektrisk godkjenning]" }
  - k: { en: "Funding", nb: "Midler" }
    v: { en: "[AMOUNT / TARGET]", nb: "[BELØP / MÅL]" }
---
