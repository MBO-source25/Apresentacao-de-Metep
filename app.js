const TABLE_1_HTML = `
<table>
  <thead>
    <tr>
      <th>Modelo Experimental</th>
      <th>Tipo de Swab</th>
      <th>Volume Coletado (µL ± DP)</th>
      <th>Volume Liberado (µL ± DP)</th>
      <th>Eficiência de Liberação (% ± DP)</th>
    </tr>
  </thead>
  <tbody>
    <tr class="hl-row">
      <td><strong>Cavidade Nasofaríngea 3D</strong></td>
      <td>Heicon (Moldado por injeção)</td>
      <td>12,30 ± 3,24</td>
      <td>10,31 ± 3,70</td>
      <td><strong>82,48% ± 12,70%</strong></td>
    </tr>
    <tr>
      <td><strong>Cavidade Nasofaríngea 3D</strong></td>
      <td>Comercial (Flocado de náilon)</td>
      <td>22,71 ± 3,40</td>
      <td>15,81 ± 4,21</td>
      <td>69,44% ± 12,68%</td>
    </tr>
    <tr>
      <td>Tubo Padrão (Eppendorf)</td>
      <td>Heicon (Moldado por injeção)</td>
      <td>59,65 ± 4,49</td>
      <td>40,94 ± 5,13</td>
      <td>68,77% ± 8,49%</td>
    </tr>
    <tr>
      <td>Tubo Padrão (Eppendorf)</td>
      <td>Comercial (Flocado de náilon)</td>
      <td>192,47 ± 10,82</td>
      <td>49,99 ± 13,89</td>
      <td>25,89% ± 6,76%</td>
    </tr>
  </tbody>
</table>`;

const TABLE_2_HTML = `
<table>
  <thead>
    <tr>
      <th>Modelo</th>
      <th>Vírus (5.000 cópias/mL)</th>
      <th>Tipo de Swab</th>
      <th>Ct YFV (± DP)</th>
      <th>Ct HEX [N1] (± DP)</th>
      <th>Ct FAM [N2] (± DP)</th>
    </tr>
  </thead>
  <tbody>
    <tr class="hl-row">
      <td><strong>Cavidade 3D</strong></td>
      <td>YFV (Febre Amarela)</td>
      <td>Heicon</td>
      <td>30,08 ± 1,17</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td><strong>Cavidade 3D</strong></td>
      <td>YFV (Febre Amarela)</td>
      <td>Comercial</td>
      <td>31,48 ± 1,76</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr class="hl-row">
      <td><strong>Cavidade 3D</strong></td>
      <td>SARS-CoV-2</td>
      <td>Heicon</td>
      <td>—</td>
      <td>27,00 ± 2,86</td>
      <td>27,68 ± 1,16</td>
    </tr>
    <tr>
      <td><strong>Cavidade 3D</strong></td>
      <td>SARS-CoV-2</td>
      <td>Comercial</td>
      <td>—</td>
      <td>28,64 ± 1,41</td>
      <td>28,41 ± 0,94</td>
    </tr>
    <tr>
      <td>Tubo Padrão</td>
      <td>YFV (Febre Amarela)</td>
      <td>Heicon</td>
      <td>25,91 ± 0,93</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>Tubo Padrão</td>
      <td>YFV (Febre Amarela)</td>
      <td>Comercial</td>
      <td>26,69 ± 1,46</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>Tubo Padrão</td>
      <td>SARS-CoV-2</td>
      <td>Heicon</td>
      <td>—</td>
      <td>23,59 ± 2,99</td>
      <td>22,89 ± 2,20</td>
    </tr>
    <tr>
      <td>Tubo Padrão</td>
      <td>SARS-CoV-2</td>
      <td>Comercial</td>
      <td>—</td>
      <td>24,52 ± 0,97</td>
      <td>24,82 ± 0,92</td>
    </tr>
  </tbody>
</table>`;

let state = {
  lang: "both",
  highlightsOnly: false,
  category: "all",
  search: "",
  activeNoteId: null,
  notes: JSON.parse(localStorage.getItem("metep_swab_notes_v2")) || ARTICLE_DATA.notes
};

function initHeaderAndStaticViews() {
  document.getElementById("journalMeta").textContent = `${ARTICLE_DATA.meta.journal} • ${ARTICLE_DATA.meta.citation}`;
  document.getElementById("articleTitlePt").textContent = ARTICLE_DATA.meta.title_pt;
  document.getElementById("articleTitleEn").textContent = ARTICLE_DATA.meta.title_en;
  document.getElementById("articleAuthors").textContent = `${ARTICLE_DATA.meta.authors} — ${ARTICLE_DATA.meta.affiliations}`;

  // PICO
  document.getElementById("picoQuestion").textContent = ARTICLE_DATA.pico.question;
  const picoContainer = document.getElementById("picoCards");
  ["P", "I", "C", "O"].forEach(letter => {
    const item = ARTICLE_DATA.pico[letter];
    const div = document.createElement("div");
    div.className = "card pico-item";
    div.innerHTML = `<span class="letter">${letter}</span><h3>${item.title}</h3><p>${item.desc}</p>`;
    picoContainer.appendChild(div);
  });

  // Standalone Tables
  document.getElementById("standaloneTable1").innerHTML = TABLE_1_HTML;
  document.getElementById("standaloneTable2").innerHTML = TABLE_2_HTML;

  // Critique
  const posEl = document.getElementById("positiveList");
  ARTICLE_DATA.critique.positive.forEach(item => {
    const box = document.createElement("div");
    box.className = "critique-box";
    box.innerHTML = `<h4>${item.title}</h4><p>${item.desc}</p>`;
    posEl.appendChild(box);
  });

  const negEl = document.getElementById("negativeList");
  ARTICLE_DATA.critique.negative.forEach(item => {
    const box = document.createElement("div");
    box.className = "critique-box";
    box.innerHTML = `<h4>${item.title}</h4><p>${item.desc}</p>`;
    negEl.appendChild(box);
  });
}

function extractHighlights(html) {
  const temp = document.createElement("div");
  temp.innerHTML = html;
  const marks = Array.from(temp.querySelectorAll("mark"));
  return marks.length ? marks.map(m => m.outerHTML).join(" &hellip; ") : null;
}

function renderArticle() {
  const stream = document.getElementById("articleStream");
  stream.innerHTML = "";
  const query = state.search.trim().toLowerCase();

  ARTICLE_DATA.sections.forEach(sec => {
    const filteredBlocks = sec.blocks.filter(b => {
      if (b.type === "subheading" || b.type === "figure" || b.type === "table1" || b.type === "table2") {
        return !state.highlightsOnly && !query && state.category === "all";
      }
      const catOk = state.category === "all" || b.category === state.category;
      const searchOk = !query || b.en.toLowerCase().includes(query) || b.pt.toLowerCase().includes(query);
      if (!catOk || !searchOk) return false;
      if (state.highlightsOnly) {
        return extractHighlights(b.pt) !== null || extractHighlights(b.en) !== null;
      }
      return true;
    });

    if (filteredBlocks.length === 0) return;

    const secEl = document.createElement("section");
    secEl.id = sec.id;
    secEl.className = "article-section";
    secEl.innerHTML = `<h2>${sec.title}</h2>`;

    filteredBlocks.forEach(b => {
      if (b.type === "subheading") {
        const sub = document.createElement("div");
        sub.className = `subheading-row ${state.lang !== "both" ? "single" : ""}`;
        if (state.lang === "both" || state.lang === "en") {
          sub.innerHTML += `<h3>${b.en}</h3>`;
        }
        if (state.lang === "both" || state.lang === "pt") {
          sub.innerHTML += `<h3>${b.pt}</h3>`;
        }
        secEl.appendChild(sub);
        return;
      }

      if (b.type === "figure") {
        const fig = document.createElement("div");
        fig.className = "figure-box";
        fig.innerHTML = state.lang === "en" ? b.en : b.pt;
        secEl.appendChild(fig);
        return;
      }

      if (b.type === "table1" || b.type === "table2") {
        const tblBox = document.createElement("div");
        tblBox.className = "inline-table-box";
        const caption = state.lang === "en" ? b.en : b.pt;
        tblBox.innerHTML = `<div class="inline-table-title">${caption}</div><div class="table-scroll">${b.type === "table1" ? TABLE_1_HTML : TABLE_2_HTML}</div>`;
        secEl.appendChild(tblBox);
        return;
      }

      const row = document.createElement("div");
      row.id = b.id;
      row.className = `para-row ${state.lang !== "both" ? "single" : ""} ${state.activeNoteId && b.noteId === state.activeNoteId ? "focused-row" : ""}`;

      const getHtml = (raw) => state.highlightsOnly ? (extractHighlights(raw) || raw) : raw;

      if (state.lang === "both" || state.lang === "en") {
        const colEn = document.createElement("div");
        colEn.innerHTML = `<span class="lang-tag">Original (English)</span><p class="para-body">${getHtml(b.en)}</p>`;
        row.appendChild(colEn);
      }

      if (state.lang === "both" || state.lang === "pt") {
        const colPt = document.createElement("div");
        colPt.innerHTML = `<span class="lang-tag">Tradução (Português)</span><p class="para-body">${getHtml(b.pt)}</p>`;
        row.appendChild(colPt);
      }

      secEl.appendChild(row);
    });

    stream.appendChild(secEl);
  });

  // Bind click on highlighted text
  document.querySelectorAll("mark.hl").forEach(mark => {
    mark.addEventListener("click", (e) => {
      e.stopPropagation();
      const noteId = mark.getAttribute("data-note");
      focusNote(noteId, true);
    });
  });
}

function focusNote(noteId, scrollSidebar = false) {
  state.activeNoteId = noteId;
  renderNotes();
  if (scrollSidebar) {
    const card = document.getElementById(`card-${noteId}`);
    if (card) card.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function renderNotes() {
  const container = document.getElementById("notesCards");
  container.innerHTML = "";
  const query = state.search.trim().toLowerCase();

  const visibleNotes = state.notes.filter(n => {
    const catOk = state.category === "all" || n.category === state.category;
    const searchOk = !query || n.title.toLowerCase().includes(query) || n.body.toLowerCase().includes(query);
    return catOk && searchOk;
  });

  document.getElementById("notesCount").textContent = `${visibleNotes.length} nota${visibleNotes.length === 1 ? "" : "s"}`;

  visibleNotes.forEach(note => {
    const card = document.createElement("div");
    card.id = `card-${note.id}`;
    card.className = `note-card ${state.activeNoteId === note.id ? "active-card" : ""}`;
    card.setAttribute("data-cat", note.category || "concept");
    card.innerHTML = `
      <div class="note-sec">${note.section}</div>
      <h4>${note.title}</h4>
      <p>${note.body}</p>
    `;
    card.addEventListener("click", () => {
      state.activeNoteId = note.id;
      renderNotes();
      renderArticle();
      const targetMark = document.querySelector(`mark.hl[data-note="${note.id}"]`);
      if (targetMark) {
        targetMark.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
    container.appendChild(card);
  });
}

// Language buttons
document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-lang]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.lang = btn.getAttribute("data-lang");
    renderArticle();
  });
});

// Highlights only toggle
document.getElementById("btnHighlightsOnly").addEventListener("click", e => {
  state.highlightsOnly = !state.highlightsOnly;
  e.target.classList.toggle("active", state.highlightsOnly);
  renderArticle();
});

// Category filter chips
document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    state.category = chip.getAttribute("data-cat");
    renderArticle();
    renderNotes();
  });
});

// Search input
document.getElementById("searchInput").addEventListener("input", e => {
  state.search = e.target.value;
  renderArticle();
  renderNotes();
});

// View tabs
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".view-panel").forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(`view-${tab.getAttribute("data-view")}`).classList.add("active");
  });
});

// Add personal note
document.getElementById("noteForm").addEventListener("submit", e => {
  e.preventDefault();
  const section = document.getElementById("newNoteSection").value;
  const title = document.getElementById("newNoteTitle").value.trim();
  const body = document.getElementById("newNoteBody").value.trim();

  const newNote = {
    id: `note-${Date.now()}`,
    category: state.category === "all" ? "concept" : state.category,
    section,
    title,
    body
  };

  state.notes.unshift(newNote);
  localStorage.setItem("metep_swab_notes_v2", JSON.stringify(state.notes));
  e.target.reset();
  renderNotes();
});

// Export JSON
document.getElementById("btnExportJson").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state.notes, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "anotacoes-artigo-cientifico.json";
  a.click();
  URL.revokeObjectURL(url);
});

initHeaderAndStaticViews();
renderArticle();
renderNotes();
