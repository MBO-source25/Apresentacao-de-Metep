const ARTICLE_SECTIONS = [
  {
    id: "abstract",
    title: "Resumo / Abstract",
    paragraphs: [
      {
        id: "abs-1",
        category: "concept",
        noteId: "note-1",
        en: "The SARS-CoV-2 pandemic underscored the critical role of nasopharyngeal swabbing in virus detection and containment. <mark class='hl hl-concept' data-note='note-1'>Traditional pre-clinical swab testing methods often overlook the complexities of the nasopharyngeal anatomy and mucus properties.</mark> This study introduces an innovative in vitro pre-clinical model using a 3D-printed nasopharyngeal cavity lined with a mucus-mimicking SISMA hydrogel, to generate a novel assessment protocol for nasopharyngeal swab efficiency.",
        pt: "A pandemia de SARS-CoV-2 ressaltou o papel crítico da coleta por swab nasofaríngeo na detecção e contenção do vírus. <mark class='hl hl-concept' data-note='note-1'>Os métodos tradicionais de testes pré-clínicos de swabs frequentemente negligenciam as complexidades da anatomia nasofaríngea e as propriedades do muco.</mark> Este estudo apresenta um modelo pré-clínico in vitro inovador que utiliza uma cavidade nasofaríngea impressa em 3D revestida com um hidrogel SISMA que mimetiza o muco, a fim de gerar um novo protocolo de avaliação da eficiência de swabs nasofaríngeos."
      },
      {
        id: "abs-2",
        category: "result",
        noteId: "note-2",
        en: "Reconstructing nasopharyngeal anatomy from CT images, the model used flexible and rigid resins to simulate soft tissue and bone properties. Our evaluation compared the sample collection and release performance of experimental Heicon-type injection-molded swabs and conventional nylon flocked swabs. <mark class='hl hl-result' data-note='note-2'>The Heicon swabs exhibited superior SISMA release efficiency, compared to the standard tubular model. Both swab types demonstrated lower cycle threshold (Ct) values in the tubular model, indicative of higher viral load retrievals.</mark>",
        pt: "Reconstruindo a anatomia nasofaríngea a partir de imagens de tomografia computadorizada (TC), o modelo empregou resinas flexíveis e rígidas para simular as propriedades dos tecidos moles e dos ossos. Nossa avaliação comparou o desempenho de coleta e liberação de amostras de swabs experimentais do tipo Heicon, fabricados por moldagem por injeção, e de swabs comerciais convencionais flocados de náilon. <mark class='hl hl-result' data-note='note-2'>Os swabs Heicon exibiram eficiência superior de liberação de SISMA em comparação ao modelo tubular padrão. Ambos os tipos de swab demonstraram valores menores de limiar de ciclo (Ct) no modelo tubular, indicativos de maior recuperação de carga viral.</mark>"
      }
    ]
  },
  {
    id: "intro",
    title: "Introdução / Introduction",
    paragraphs: [
      {
        id: "intro-1",
        category: "concept",
        noteId: "note-3",
        en: "Common pre-clinical testing for nasopharyngeal swabs involves immersing the swab in saline solutions or employing volunteers for cheek swabbing. <mark class='hl hl-concept' data-note='note-3'>A more sophisticated pre-clinical testing should not only evaluate the swab's ability to absorb and release samples but also replicate the anatomical and rheological difficulties inherent in the swabbing process.</mark> Suboptimal swabbing can arise from complex nasopharyngeal anatomy, variability in operator technique, swab design, and mucus characteristics such as viscoelasticity and shear-thinning properties.",
        pt: "Os testes pré-clínicos comuns para swabs nasofaríngeos envolvem a imersão do swab em soluções salinas ou o emprego de voluntários para coleta na mucosa jugal (bochecha). <mark class='hl hl-concept' data-note='note-3'>Um teste pré-clínico mais sofisticado deve não apenas avaliar a capacidade do swab de absorver e liberar amostras, mas também replicar as dificuldades anatômicas e reológicas inerentes ao procedimento de coleta.</mark> A coleta subótima pode decorrer da complexa anatomia nasofaríngea, da variabilidade na técnica do operador, do design do swab e de características do muco, como viscoelasticidade e comportamento pseudoplástico (shear-thinning)."
      },
      {
        id: "intro-2",
        category: "method",
        noteId: "note-4",
        en: "<mark class='hl hl-method' data-note='note-4'>The aim of this study was to design and manufacture a novel in vitro pre-clinical test bench nasal cavity that emulates the human nasal cavity, thereby facilitating a more authentic evaluation of nasopharyngeal swab performance for sample collection and viral detection by RT-qPCR.</mark> Underlying this effort is the hypothesis that a physiologically relevant in vitro platform can better differentiate swab performance.",
        pt: "<mark class='hl hl-method' data-note='note-4'>O objetivo deste estudo foi projetar e fabricar uma bancada de testes pré-clínicos in vitro inovadora que emula a cavidade nasal humana, facilitando uma avaliação mais autêntica do desempenho de swabs nasofaríngeos na coleta de amostras e detecção viral por RT-qPCR.</mark> Subjacente a esse esforço está a hipótese de que uma plataforma in vitro fisiologicamente relevante pode diferenciar melhor o desempenho dos swabs."
      }
    ]
  },
  {
    id: "results",
    title: "Resultados / Results",
    paragraphs: [
      {
        id: "res-1",
        category: "method",
        noteId: "note-5",
        en: "Head CT scans of patients allowed the anatomically accurate reconstruction of hard and soft tissues of the nasopharyngeal region. <mark class='hl hl-method' data-note='note-5'>This model was crafted using dual-material 3D printing techniques, using hard VeroBlue™ for bone-mimicking rigidity (2.2–3.0 GPa) and Agilus30™ for soft tissue flexibility (Shore hardness ~40 A).</mark> Additionally, the chosen SISMA hydrogel simulates nasopharyngeal mucus with remarkable precision, showcasing shear-thinning behavior and viscosity parameters nearly identical to actual mucosa (~10 Pa·s at low shear rates; n = 0.234 vs. 0.187).",
        pt: "Exames de tomografia computadorizada (TC) da cabeça de pacientes permitiram a reconstrução anatomicamente precisa dos tecidos duros e moles da região nasofaríngea. <mark class='hl hl-method' data-note='note-5'>Esse modelo foi confeccionado utilizando técnicas de impressão 3D multimaterial, empregando VeroBlue™ rígido para mimetizar a rigidez óssea (2,2–3,0 GPa) e Agilus30™ flexível para simular a flexibilidade dos tecidos moles (dureza Shore ~40 A).</mark> Adicionalmente, o hidrogel SISMA selecionado simula o muco nasofaríngeo com notável precisão, exibindo comportamento pseudoplástico e parâmetros de viscosidade quase idênticos aos da mucosa real (~10 Pa·s em baixas taxas de cisalhamento; n = 0,234 vs. 0,187)."
      },
      {
        id: "res-2",
        category: "result",
        noteId: "note-6",
        en: "The commercial swab collected 1.8 and 3.2 times more SISMA than the Heicon swab in the nasopharyngeal cavity model and tube standard, respectively. <mark class='hl hl-result' data-note='note-6'>For the Heicon swabs, the cavity model allowed a 1.2-fold increase in release percentage (82.48 ± 12.70% vs. 68.77 ± 8.49%), while for the commercial swabs, the cavity model yielded 69.44 ± 12.68% vs. 25.89 ± 6.76% in the tube (p < 0.0001).</mark> Overall, the data collected evidenced that the Heicon swab provides better release percentages compared to commercially available swabs.",
        pt: "O swab comercial coletou 1,8 e 3,2 vezes mais SISMA do que o swab Heicon no modelo de cavidade nasofaríngea e no tubo padrão, respectivamente. <mark class='hl hl-result' data-note='note-6'>Para os swabs Heicon, o modelo de cavidade permitiu um aumento de 1,2 vez na porcentagem de liberação (82,48 ± 12,70% vs. 68,77 ± 8,49%), enquanto para os swabs comerciais o modelo de cavidade gerou 69,44 ± 12,68% vs. 25,89 ± 6,76% no tubo (p < 0,0001).</mark> De modo geral, os dados evidenciaram que o swab Heicon proporciona melhores porcentagens de liberação em comparação aos swabs comerciais."
      },
      {
        id: "res-3",
        category: "result",
        noteId: "note-7",
        en: "In YFV-loaded SISMA assays, the Heicon swab showed a Ct of 30.08 in the cavity and 25.91 in the tube (~20-fold decrease in detected RNA due to anatomical complexity). For SARS-CoV-2 in the cavity model, Heicon swabs yielded Ct values of 27.68 ± 1.16 (FAM) and 27.00 ± 2.86 (HEX), whereas commercial swabs showed 28.41 ± 0.93 (FAM) and 28.64 ± 1.41 (HEX). <mark class='hl hl-result' data-note='note-7'>These differences indicate that the sampling environment affects nucleic acid recovery, with tube models overestimating performance, while Heicon and commercial swabs show comparable viral detection (p > 0.1523).</mark>",
        pt: "Nos ensaios com SISMA carregado com YFV, o swab Heicon apresentou Ct de 30,08 na cavidade e 25,91 no tubo (redução de ~20 vezes no RNA detectado devido à complexidade anatômica). Para SARS-CoV-2 no modelo de cavidade, os swabs Heicon produziram valores de Ct de 27,68 ± 1,16 (FAM) e 27,00 ± 2,86 (HEX), enquanto os comerciais apresentaram 28,41 ± 0,93 (FAM) e 28,64 ± 1,41 (HEX). <mark class='hl hl-result' data-note='note-7'>Essas diferenças indicam que o ambiente de amostragem afeta a recuperação de ácidos nucleicos, com os modelos tubulares superestimando o desempenho, enquanto os swabs Heicon e comerciais apresentam detecção viral comparável (p > 0,1523).</mark>"
      }
    ]
  },
  {
    id: "discussion",
    title: "Discussão & Limitações / Discussion",
    paragraphs: [
      {
        id: "disc-1",
        category: "critique",
        noteId: "note-8",
        en: "Regarding cost-effectiveness, injection molding enables high-volume production with cycle times of 10–30 s per part, <mark class='hl hl-critique' data-note='note-8'>potentially reducing manufacturing costs by 30–50% compared to flocked swabs and enabling local production.</mark> Furthermore, polypropylene exhibits lower surface energy and smooth topology (Ra ≈ 0.5–2.0 µm), minimizing deep retention sites that resist sample release.",
        pt: "No tocante à relação custo-efetividade, a moldagem por injeção permite produção em alto volume com tempos de ciclo de 10–30 s por peça, <mark class='hl hl-critique' data-note='note-8'>reduzindo potencialmente os custos de fabricação em 30–50% em comparação aos swabs flocados e viabilizando a produção local.</mark> Além disso, o polipropileno exibe menor energia superficial e topologia lisa (Ra ≈ 0,5–2,0 µm), minimizando sítios profundos de retenção que resistem à liberação da amostra."
      },
      {
        id: "disc-2",
        category: "critique",
        noteId: "note-9",
        en: "<mark class='hl hl-critique' data-note='note-9'>However, the model has inherent limitations: it does not incorporate mucociliary clearance, lacks temperature regulation (room temperature vs. 37 °C), humidity control, and active mucosal biochemistry (immune components, cellular debris, enzymes).</mark> Additionally, SISMA is a simplified polymer network compared to native mucin, and dual-material printing creates discrete interfaces rather than gradual tissue transitions.",
        pt: "<mark class='hl hl-critique' data-note='note-9'>Contudo, o modelo possui limitações inerentes: não incorpora a depuração mucociliar (clearance mucociliar), carece de regulação de temperatura (temperatura ambiente vs. 37 °C), controle de umidade e ambiente bioquímico ativo da mucosa (componentes imunológicos, detritos celulares, enzimas).</mark> Além disso, o SISMA é uma rede polimérica simplificada frente à mucina nativa, e a impressão multimaterial cria interfaces discretas em vez de transições teciduais graduais."
      }
    ]
  }
];

const INITIAL_NOTES = [
  {
    id: "note-1",
    category: "concept",
    section: "Resumo / Abstract",
    title: "Problema Central da Pesquisa",
    body: "Testes tradicionais mergulham o swab em tubos simples (Eppendorf) ou solução salina. Isso ignora as curvas estreitas da cavidade nasal e a viscosidade real do muco, gerando falsos-negativos na prática clínica."
  },
  {
    id: "note-2",
    category: "result",
    section: "Resumo / Abstract",
    title: "Principal Achado Comparativo",
    body: "O swab experimental Heicon (moldado por injeção) libera uma proporção maior da amostra coletada do que o comercial flocado. Já o tubo padrão mascara dificuldades anatômicas e gera valores de Ct artificialmente baixos."
  },
  {
    id: "note-3",
    category: "concept",
    section: "Introdução",
    title: "O que é Comportamento Shear-Thinning?",
    body: "É uma propriedade pseudoplástica do muco: quando parado, ele é espesso e viscoso; quando sofre atrito/cisalhamento (passagem do swab), sua viscosidade diminui, facilitando o escoamento."
  },
  {
    id: "note-4",
    category: "method",
    section: "Introdução",
    title: "Por que este estudo é In Vitro?",
    body: "Realizado fora de um organismo vivo, em bancada controlada. Embora muito mais fiel que um tubo de ensaio, não possui células vivas, vascularização, resposta imune ou batimento ciliar."
  },
  {
    id: "note-5",
    category: "method",
    section: "Resultados",
    title: "Engenharia do Modelo 3D (VeroBlue + Agilus30)",
    body: "Reconstruído de tomografias (TC): VeroBlue (azul rígido) simula a resistência óssea que limita o trajeto do swab; Agilus30 (translúcido flexível) simula cartilagem e mucosa. Revestido com 200 µL de hidrogel SISMA."
  },
  {
    id: "note-6",
    category: "result",
    section: "Resultados",
    title: "Analogia Hemoglobina vs. Mioglobina",
    body: "O swab comercial absorve mais volume (22,71 µL vs. 12,30 µL), mas retém parte nas fibras de náilon. O Heicon captura menos, porém libera 82,48% no meio de transporte (VTM). Não importa só quanto captura, mas quanto entrega!"
  },
  {
    id: "note-7",
    category: "result",
    section: "Resultados",
    title: "Como ler os valores de Ct no RT-qPCR",
    body: "Ct (Cycle Threshold) é o número de ciclos necessários para a fluorescência cruzar o limiar de detecção. Ct menor = mais RNA viral inicial. No tubo, o Ct caiu ~4 a 5 ciclos (superestimando em 10x a 28x a recuperação viral)."
  },
  {
    id: "note-8",
    category: "critique",
    section: "Discussão",
    title: "Impacto Econômico e Biofísico do Heicon",
    body: "Feito em polipropileno hidrofóbico de superfície lisa, evita aprisionamento do muco nas fibras e reduz o custo de fabricação em 30% a 50%, facilitando produção local em pandemias."
  },
  {
    id: "note-9",
    category: "critique",
    section: "Discussão",
    title: "Pontos Fracos e Vieses Metodológicos",
    body: "Mantido à temperatura ambiente (não 37 °C), sem clearance mucociliar, sem enzimas/RNases humanas e sujeito à desidratação do hidrogel com o tempo. Ainda precisa de validação clínica (LoD e ensaios em pacientes)."
  }
];

let state = {
  lang: "both",
  highlightsOnly: false,
  category: "all",
  search: "",
  activeNoteId: null,
  notes: JSON.parse(localStorage.getItem("metep_article_notes")) || INITIAL_NOTES
};

const articleContainer = document.getElementById("articleContainer");
const notesList = document.getElementById("notesList");
const notesCounter = document.getElementById("notesCounter");

function renderArticle() {
  articleContainer.innerHTML = "";
  const query = state.search.trim().toLowerCase();

  ARTICLE_SECTIONS.forEach(section => {
    const visibleParagraphs = section.paragraphs.filter(p => {
      const matchesCat = state.category === "all" || p.category === state.category;
      const matchesSearch =
        !query ||
        p.en.toLowerCase().includes(query) ||
        p.pt.toLowerCase().includes(query);
      return matchesCat && matchesSearch;
    });

    if (visibleParagraphs.length === 0) return;

    const secEl = document.createElement("article");
    secEl.className = "section-block";
    secEl.innerHTML = `<h2>${section.title}</h2>`;

    visibleParagraphs.forEach(p => {
      const row = document.createElement("div");
      row.className = `bilingual-row ${state.lang !== "both" ? "single-col" : ""}`;

      const formatContent = (html) => {
        if (!state.highlightsOnly) return html;
        const temp = document.createElement("div");
        temp.innerHTML = html;
        const marks = Array.from(temp.querySelectorAll("mark"));
        return marks.length
          ? marks.map(m => m.outerHTML).join(" &hellip; ")
          : html;
      };

      if (state.lang === "both" || state.lang === "en") {
        const enCol = document.createElement("div");
        enCol.innerHTML = `<span class="lang-label">Original (EN)</span><p class="para-text">${formatContent(p.en)}</p>`;
        row.appendChild(enCol);
      }

      if (state.lang === "both" || state.lang === "pt") {
        const ptCol = document.createElement("div");
        ptCol.innerHTML = `<span class="lang-label">Tradução (PT-BR)</span><p class="para-text">${formatContent(p.pt)}</p>`;
        row.appendChild(ptCol);
      }

      secEl.appendChild(row);
    });

    articleContainer.appendChild(secEl);
  });

  document.querySelectorAll("mark.hl").forEach(mark => {
    mark.addEventListener("click", () => {
      const noteId = mark.getAttribute("data-note");
      state.activeNoteId = noteId;
      renderNotes();
      const targetCard = document.getElementById(noteId);
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  });
}

function renderNotes() {
  notesList.innerHTML = "";
  const filtered = state.notes.filter(n =>
    state.category === "all" || n.category === state.category
  );

  notesCounter.textContent = `${filtered.length} nota${filtered.length === 1 ? "" : "s"}`;

  filtered.forEach(note => {
    const card = document.createElement("div");
    card.id = note.id;
    card.className = `note-card ${state.activeNoteId === note.id ? "active-note" : ""}`;
    card.setAttribute("data-cat", note.category || "concept");
    card.innerHTML = `
      <div class="note-meta">${note.section}</div>
      <h4>${note.title}</h4>
      <p>${note.body}</p>
    `;
    notesList.appendChild(card);
  });
}

// Controles de Idioma
document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-lang]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.lang = btn.getAttribute("data-lang");
    renderArticle();
  });
});

// Modo Resumo (Só Grifos)
document.getElementById("toggleHighlightsOnly").addEventListener("click", e => {
  state.highlightsOnly = !state.highlightsOnly;
  e.target.classList.toggle("active", state.highlightsOnly);
  renderArticle();
});

// Filtro por Categoria
document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    state.category = chip.getAttribute("data-cat");
    renderArticle();
    renderNotes();
  });
});

// Busca textual
document.getElementById("searchInput").addEventListener("input", e => {
  state.search = e.target.value;
  renderArticle();
});

// Navegação por Abas
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(`tab-${tab.getAttribute("data-tab")}`).classList.add("active");
  });
});

// Adicionar Nova Anotação
document.getElementById("addNoteForm").addEventListener("submit", e => {
  e.preventDefault();
  const section = document.getElementById("noteSectionSelect").value;
  const title = document.getElementById("noteTitleInput").value.trim();
  const body = document.getElementById("noteBodyInput").value.trim();

  const newNote = {
    id: `note-${Date.now()}`,
    category: state.category === "all" ? "concept" : state.category,
    section,
    title,
    body
  };

  state.notes.unshift(newNote);
  localStorage.setItem("metep_article_notes", JSON.stringify(state.notes));
  e.target.reset();
  renderNotes();
});

// Exportar Anotações em JSON
document.getElementById("exportNotesBtn").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state.notes, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "anotacoes-artigo-swabs.json";
  a.click();
  URL.revokeObjectURL(url);
});

renderArticle();
renderNotes();
