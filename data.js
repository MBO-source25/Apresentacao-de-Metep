const ARTICLE_DATA = {
  "meta": {
    "journal": "Scientific Reports | Nature Portfolio",
    "citation": "(2025) 15:37101 | DOI: 10.1038/s41598-025-21107-1",
    "dates": "Recebido: 8 de maio de 2025 • Aceito: 18 de setembro de 2025 • Publicado: 23 de outubro de 2025",
    "title_en": "A new in vitro pre-clinical method for testing SARS-CoV-2 nasopharyngeal swabs",
    "title_pt": "Um novo método pré-clínico in vitro para testar swabs nasofaríngeos de SARS-CoV-2",
    "authors": "Ian Camilo Orjuela-Garzón, Inés María Fernández-Calderón, María de los Ángeles Ayala, María Alejandra Rodríguez Soto, Camilo Eduardo Pérez-Cualtán, Camila Irene Castro-Paez, Juan C. Cruz, Carolina Muñoz-Camargo, Javier Navarro, Rodrigo Cabrera & Juan C. Briceño",
    "affiliations": "Universidad de los Andes (Bogotá, Colômbia); Fundación Cardioinfantil-Instituto de Cardiología; University of Minnesota (EUA); Universidad del Rosario.",
    "keywords_en": "Pre-clinical model, Nasopharyngeal swabs, In vitro testing, SARS-CoV-2, yellow fever",
    "keywords_pt": "Modelo pré-clínico, Swabs nasofaríngeos, Testes in vitro, SARS-CoV-2, Febre amarela"
  },
  "pico": {
    "question": "Diante da escassez de suprimentos médicos na pandemia de COVID-19 e das limitações dos testes laboratoriais tradicionais (feitos em tubos simples ou mucosa jugal, que ignoram a anatomia nasal e a consistência do muco), uma plataforma in vitro anatômica e fisiologicamente realista permite avaliar com maior precisão a eficiência de coleta, liberação e detecção viral de swabs nasofaríngeos?",
    "P": {
      "title": "População / Modelo Experimental",
      "desc": "Modelo de cavidade nasofaríngea humana impressa em 3D (reconstruída a partir de tomografias computadorizadas) revestida com 200 µL de hidrogel SISMA (mimetizando o muco nasal), inoculado com cargas virais clinicamente relevantes (5.000 cópias/mL) de SARS-CoV-2 e vírus vacinal da febre amarela (YFV)."
    },
    "I": {
      "title": "Intervenção",
      "desc": "Coleta padronizada (protocolo CDC: inserção até a parede posterior da nasofaringe, 5 rotações horárias e 5 anti-horárias por 10 s) com swabs experimentais moldados por injeção em etapa única (tipo Heicon, polipropileno, cabeça de 11 mm × 2,2 mm) avaliados na bancada anatômica 3D."
    },
    "C": {
      "title": "Comparação",
      "desc": "Swabs comerciais convencionais flocados de náilon (cabeça de 20 mm × 2 mm) e o método tradicional de testagem em tubo padrão (Eppendorf)."
    },
    "O": {
      "title": "Desfecho (Outcome)",
      "desc": "Capacidade de absorção (diferença de massa antes/depois), eficiência percentual de liberação em 300 µL de meio de transporte viral (leitura óptica a 405 nm) e confiabilidade na detecção viral por RT-qPCR (valores de limiar de ciclo Ct)."
    }
  },
  "critique": {
    "positive": [
      {
        "title": "Fidelidade anatômica multimaterial",
        "desc": "Combina VeroBlue™ rígido (módulo 2,2–3,0 GPa, simulando osso) e Agilus30™ flexível (dureza Shore A ~40, simulando cartilagem e tecidos moles), preservando a resistência e a deformação fisiológica durante a inserção do swab."
      },
      {
        "title": "Mimetismo reológico preciso do muco (Hidrogel SISMA)",
        "desc": "Apresenta viscosidade (~10 Pa·s em baixas taxas de cisalhamento) e comportamento pseudoplástico (shear-thinning, n = 0,234 vs. 0,187 do muco nasal humano) quase idênticos à mucosa real, mantendo o RNA viral íntegro."
      },
      {
        "title": "Revela o viés de superestimação do tubo padrão",
        "desc": "Comprova estatisticamente (p < 0,0001) que testes em tubo superestimam o volume coletado (até 8,4x) e a recuperação de RNA viral (até 28x), pois eliminam as barreiras anatômicas da cavidade nasal."
      },
      {
        "title": "Custo-efetividade e autonomia produtiva local",
        "desc": "O design Heicon em polipropileno por moldagem por injeção em etapa única (ciclo de 10–30 s) elimina a etapa secundária de flocagem, podendo reduzir custos em 30–50% e mitigar crises na cadeia de suprimentos."
      },
      {
        "title": "Robustez contra falsos-positivos",
        "desc": "Uso de controles positivos e negativos validados (sem amplificação espúria de RNase P), evitando resultados falsos-positivos mesmo próximo ao limite de aceitação clínica (Ct = 40)."
      }
    ],
    "negative": [
      {
        "title": "Ausência de depuração mucociliar (clearance)",
        "desc": "O modelo não reproduz o batimento ciliar ativo do epitélio respiratório, que in vivo influencia a distribuição e a retenção de partículas virais."
      },
      {
        "title": "Falta de controle de temperatura, umidade e bioquímica ativa",
        "desc": "Os ensaios foram mantidos à temperatura ambiente (e não a 37 °C fisiológicos), sem controle de umidade nem presença de enzimas (RNases), detritos celulares ou componentes imunológicos da mucosa."
      },
      {
        "title": "Simplificação estrutural do hidrogel SISMA",
        "desc": "Embora reologicamente compatível, o SISMA é uma rede polimérica simplificada que não reproduz toda a complexa estrutura glicoproteica e recuperação viscoelástica da mucina nativa."
      },
      {
        "title": "Comportamento dependente do tempo",
        "desc": "Ao longo de períodos prolongados de teste, o hidrogel pode sofrer desidratação, alterações de reticulação ou contaminação microbiana, afetando a reprodutibilidade."
      },
      {
        "title": "Interfaces discretas na impressão 3D",
        "desc": "A transição entre o polímero rígido (VeroBlue) e o flexível (Agilus30) é abrupta, diferindo das transições teciduais graduais encontradas in vivo."
      },
      {
        "title": "Validação clínica e econômica pendente",
        "desc": "Ainda requer estudos futuros de Limite de Detecção (LoD segundo CLSI EP17-A2), testes ex vivo com tecido humano fresco, ensaios clínicos e avaliação econômica regulatória."
      }
    ]
  },
  "notes": [
    {
      "id": "note-1",
      "category": "concept",
      "section": "Resumo / Abstract",
      "title": "Lacuna dos testes tradicionais em tubo",
      "body": "Os métodos pré-clínicos tradicionais imergem o swab em solução salina ou tubos Eppendorf simples. Isso ignora as barreiras ósseas/cartilaginosas da nasofaringe e a viscosidade real do muco, superestimando o desempenho dos swabs."
    },
    {
      "id": "note-2",
      "category": "result",
      "section": "Resumo / Abstract",
      "title": "Síntese dos dois achados principais",
      "body": "1) O swab experimental Heicon libera uma porcentagem maior da amostra coletada do que o swab comercial flocado. 2) Ambos têm Ct menor no tubo do que na cavidade 3D, provando que o tubo superestima a recuperação viral."
    },
    {
      "id": "note-3",
      "category": "concept",
      "section": "Introdução",
      "title": "Impacto clínico dos falsos-negativos",
      "body": "Uma coleta subótima gera falsos-negativos que comprometem o diagnóstico precoce, o isolamento de pacientes e a vigilância epidemiológica durante surtos e pandemias."
    },
    {
      "id": "note-4",
      "category": "concept",
      "section": "Introdução",
      "title": "Propriedade pseudoplástica (Shear-Thinning)",
      "body": "O muco nasal é um fluido não-newtoniano pseudoplástico (shear-thinning): em repouso é altamente viscoso, mas quando submetido à tensão de cisalhamento (atrito do swab), sua viscosidade cai, facilitando a coleta."
    },
    {
      "id": "note-5",
      "category": "method",
      "section": "Introdução",
      "title": "Por que este é um estudo In Vitro?",
      "body": "In vitro = experimentos realizados fora de um organismo vivo, em ambiente laboratorial controlado. Embora seja muito mais realista que um tubo de ensaio, não contém células vivas, vascularização, resposta imune ou transporte mucociliar."
    },
    {
      "id": "note-6",
      "category": "method",
      "section": "Resultados • Modelo 3D",
      "title": "Engenharia multimaterial (VeroBlue + Agilus30) e SISMA",
      "body": "A partir de tomografias (TC), imprimiu-se em 3D o osso com VeroBlue™ (rígido, 2,2–3,0 GPa) e cartilagem/mucosa com Agilus30™ (flexível, Shore A ~40). O revestimento com hidrogel SISMA reproduz a viscosidade (~10 Pa·s) e o índice pseudoplástico do muco (n = 0,234 vs. 0,187)."
    },
    {
      "id": "note-7",
      "category": "result",
      "section": "Resultados • Coleta e Liberação",
      "title": "Por que o swab comercial absorve mais, mas retém mais?",
      "body": "As fibras de náilon do swab comercial são hidrofílicas e porosas, absorvendo 1,8x a 3,2x mais volume. Porém, essas mesmas fibras aprisionam o muco. O Heicon (polipropileno hidrofóbico) absorve menos volume bruto, mas solta a amostra com facilidade."
    },
    {
      "id": "note-8",
      "category": "result",
      "section": "Resultados • Coleta e Liberação",
      "title": "Analogia didática: Hemoglobina vs. Mioglobina",
      "body": "Para interpretar a Tabela 1: pense na relação do oxigênio com a hemoglobina e a mioglobina. Não basta ter alta afinidade para capturar; o que importa para o exame molecular é quanto o swab libera no meio de transporte (82,48% no Heicon vs. 69,44% no comercial na cavidade 3D)."
    },
    {
      "id": "note-9",
      "category": "result",
      "section": "Resultados • Viabilidade Viral (RT-qPCR)",
      "title": "Como interpretar os valores de Ct (Cycle Threshold)?",
      "body": "Ct é o número de ciclos de PCR necessários para a fluorescência cruzar o limiar de detecção. Quanto MENOR o Ct, MAIOR a quantidade inicial de RNA viral. Todos os ensaios ficaram abaixo do corte clínico (Ct < 40)."
    },
    {
      "id": "note-10",
      "category": "result",
      "section": "Resultados • Viabilidade Viral (RT-qPCR)",
      "title": "Equivalência diagnóstica entre Heicon e Comercial",
      "body": "No teste com SARS-CoV-2 na cavidade 3D, os valores de Ct foram estatisticamente equivalentes entre Heicon (27,68 FAM / 27,00 HEX) e Comercial (28,41 FAM / 28,64 HEX), com p > 0,1523. Já no tubo, o Ct caiu ~4 a 5 ciclos (superestimando em 10x a 28x o RNA recuperado)."
    },
    {
      "id": "note-11",
      "category": "critique",
      "section": "Discussão",
      "title": "Vantagem econômica e cadeia de suprimentos",
      "body": "A moldagem por injeção de polipropileno em etapa única leva 10–30 segundos por peça e elimina a flocagem de náilon, reduzindo custos em 30–50% e permitindo fabricação local em emergências sanitárias."
    },
    {
      "id": "note-12",
      "category": "critique",
      "section": "Discussão",
      "title": "Biofísica da superfície do swab Heicon",
      "body": "O polipropileno possui baixa energia superficial, rugosidade controlada (Ra ≈ 0,5–2,0 µm) e estabilidade dimensional em meio aquoso, evitando sítios profundos de retenção do hidrogel."
    },
    {
      "id": "note-13",
      "category": "critique",
      "section": "Discussão",
      "title": "Limitações fisiológicas e materiais do modelo",
      "body": "Pontos críticos para banca/seminário: 1) Sem batimento mucociliar; 2) Temperatura ambiente (não 37 °C) e sem enzimas/células; 3) SISMA não tem mucina glicoproteica complexa; 4) Risco de desidratação/contaminação do gel com o tempo."
    },
    {
      "id": "note-14",
      "category": "method",
      "section": "Materiais e Métodos",
      "title": "Por que usar 5.000 cópias/mL e dois vírus (YFV e SARS-CoV-2)?",
      "body": "A concentração de 5.000 cópias/mL simula o estágio sintomático inicial da infecção: alta o suficiente para detecção confiável acima do LoD, mas sem saturar o sinal do RT-qPCR. Usar dois vírus envelopados de RNA (YFV e SARS-CoV-2) valida a reprodutibilidade do modelo."
    }
  ],
  "sections": [
    {
      "id": "sec-abstract",
      "title": "Resumo / Abstract",
      "blocks": [
        {
          "id": "p-abs-1",
          "type": "paragraph",
          "category": "concept",
          "noteId": "note-1",
          "en": "The SARS-CoV-2 pandemic underscored the critical role of nasopharyngeal swabbing in virus detection and containment. The urgency for mass production of swabs highlighted the necessity to evaluate their efficiency against the global shortage of medical supplies. <mark class='hl hl-concept' data-note='note-1'>Traditional pre-clinical swab testing methods often overlook the complexities of the nasopharyngeal anatomy and mucus properties.</mark> This study introduces an innovative in vitro pre-clinical model using a 3D-printed nasopharyngeal cavity lined with a mucus-mimicking SISMA hydrogel, to generate a novel assessment protocol for nasopharyngeal swab efficiency. Reconstructing nasopharyngeal anatomy from CT images, the model used flexible and rigid resins to simulate soft tissue and bone properties. Our evaluation compared the sample collection and release performance of experimental Heicon-type injection-molded swabs and conventional nylon flocked swabs. <mark class='hl hl-result' data-note='note-2'>The Heicon swabs exhibited superior SISMA release efficiency, compared to the standard tubular model. Both swab types demonstrated lower cycle threshold (Ct) values in the tubular model, indicative of higher viral load retrievals.</mark> RT-qPCR results confirmed these differences and validated the hydrogel's suitability as a mucosa equivalent. The findings support using our nasopharyngeal model, which better simulates clinical conditions, potentially improving swab design and the reliability of viral detection assays.",
          "pt": "A pandemia de SARS-CoV-2 ressaltou o papel crítico da coleta por swab nasofaríngeo na detecção e contenção do vírus. A urgência pela produção em massa de swabs evidenciou a necessidade de avaliar sua eficiência diante da escassez global de suprimentos médicos. <mark class='hl hl-concept' data-note='note-1'>Os métodos tradicionais de testes pré-clínicos de swabs frequentemente negligenciam as complexidades da anatomia nasofaríngea e as propriedades do muco.</mark> Este estudo apresenta um modelo pré-clínico in vitro inovador que utiliza uma cavidade nasofaríngea impressa em 3D revestida com um hidrogel SISMA que mimetiza o muco, a fim de gerar um novo protocolo de avaliação da eficiência de swabs nasofaríngeos. Reconstruindo a anatomia nasofaríngea a partir de imagens de tomografia computadorizada (TC), o modelo empregou resinas flexíveis e rígidas para simular as propriedades dos tecidos moles e dos ossos. Nossa avaliação comparou o desempenho de coleta e liberação de amostras de swabs experimentais do tipo Heicon, fabricados por moldagem por injeção, e de swabs comerciais convencionais flocados de náilon. <mark class='hl hl-result' data-note='note-2'>Os swabs Heicon exibiram eficiência superior de liberação de SISMA em comparação ao modelo tubular padrão. Ambos os tipos de swab demonstraram valores menores de limiar de ciclo (Ct) no modelo tubular, indicativos de maior recuperação de carga viral.</mark> Os resultados de RT-qPCR confirmaram essas diferenças e validaram a adequação do hidrogel como equivalente de mucosa. Os achados apoiam o uso do nosso modelo nasofaríngeo, que simula melhor as condições clínicas, aprimorando potencialmente o design dos swabs e a confiabilidade dos ensaios de detecção viral."
        }
      ]
    },
    {
      "id": "sec-intro",
      "title": "Introdução / Introduction",
      "blocks": [
        {
          "id": "p-intro-1",
          "type": "paragraph",
          "category": "concept",
          "noteId": "note-1",
          "en": "Amid the SARS-CoV-2 pandemic, the global healthcare system faced a myriad of challenges, not least among them was a critical shortage of supplies, including nasopharyngeal swabs for collection of mucosal samples essential for viral detection¹. This scarcity impeded containment strategies and highlighted the development of alternative swab designs and manufacturing methods, including injection molding and stereolithography². Yet, these innovative biomedical devices demand rigorous validation, particularly in terms of their efficacy for adequate sample collection and release, in comparison to established commercial products.",
          "pt": "Em meio à pandemia de SARS-CoV-2, o sistema global de saúde enfrentou uma miríade de desafios, entre os quais se destacou a escassez crítica de suprimentos, incluindo swabs nasofaríngeos para a coleta de amostras de mucosa essenciais à detecção viral¹. Essa escassez prejudicou as estratégias de contenção e impulsionou o desenvolvimento de designs alternativos de swabs e métodos de fabricação, incluindo moldagem por injeção e estereolitografia². Contudo, esses dispositivos biomédicos inovadores exigem validação rigorosa, particularmente quanto à sua eficácia na coleta e liberação adequadas de amostras, em comparação aos produtos comerciais já estabelecidos."
        },
        {
          "id": "p-intro-2",
          "type": "paragraph",
          "category": "concept",
          "noteId": "note-1",
          "en": "<mark class='hl hl-concept' data-note='note-1'>Common pre-clinical testing for nasopharyngeal swabs involves immersing the swab in saline solutions or employing volunteers for cheek swabbing¹. These methods, while straightforward, fail to account for the complex anatomy of the nasopharyngeal cavity, the unique properties of mucus, and the specific technique required for nasopharyngeal sample collection.</mark> A more sophisticated pre-clinical testing should not only evaluate the swab's ability to absorb and release samples but also replicate the anatomical and rheological difficulties inherent in the swabbing process¹,².",
          "pt": "<mark class='hl hl-concept' data-note='note-1'>Os testes pré-clínicos comuns para swabs nasofaríngeos envolvem a imersão do swab em soluções salinas ou o emprego de voluntários para coleta na mucosa jugal (bochecha)¹. Embora simples, esses métodos deixam de considerar a anatomia complexa da cavidade nasofaríngea, as propriedades singulares do muco e a técnica específica exigida para a coleta de amostras nasofaríngeas.</mark> Um teste pré-clínico mais sofisticado deve não apenas avaliar a capacidade do swab de absorver e liberar amostras, mas também replicar as dificuldades anatômicas e reológicas inerentes ao procedimento de coleta¹,²."
        },
        {
          "id": "p-intro-3",
          "type": "paragraph",
          "category": "concept",
          "noteId": "note-3",
          "en": "<mark class='hl hl-concept' data-note='note-3'>Additionally, accurate and consistent sample collection is a keystone of effective swabbing, since it could result in false-negatives which compromise sensitivity and reliability of the test¹,².</mark> These diagnostic failures may lead to missed or delayed diagnoses, which creates an impairing of the treatment, isolation, and ultimately affects the patient's outcomes and public health system. In the context of pandemics and epidemics of respiratory viruses, it hinders epidemiological surveillance to have an efficient response to the emergency¹. <mark class='hl hl-concept' data-note='note-4'>Suboptimal swabbing can arise from different factors such as complex nasopharyngeal anatomy, variability in operator technique, swab design, and mucus characteristics such as viscoelasticity and shear-thinning properties¹⁻⁴.</mark> These variables highlight the need for realistic and standardized pre-clinical models to evaluate swab performance under controlled yet physiologically relevant conditions.",
          "pt": "<mark class='hl hl-concept' data-note='note-3'>Além disso, a coleta precisa e consistente de amostras é um pilar fundamental de um procedimento eficaz, pois falhas podem resultar em falsos-negativos que comprometem a sensibilidade e a confiabilidade do teste¹,².</mark> Essas falhas diagnósticas podem levar a diagnósticos perdidos ou tardios, prejudicando o tratamento e o isolamento e, em última instância, afetando os desfechos clínicos dos pacientes e o sistema de saúde pública. No contexto de pandemias e epidemias de vírus respiratórios, isso dificulta uma resposta eficiente da vigilância epidemiológica à emergência¹. <mark class='hl hl-concept' data-note='note-4'>A coleta subótima pode decorrer de diferentes fatores, tais como a complexa anatomia nasofaríngea, a variabilidade na técnica do operador, o design do swab e características do muco, como viscoelasticidade e comportamento pseudoplástico (shear-thinning)¹⁻⁴.</mark> Essas variáveis evidenciam a necessidade de modelos pré-clínicos realistas e padronizados para avaliar o desempenho de swabs sob condições controladas, porém fisiologicamente relevantes."
        },
        {
          "id": "p-intro-4",
          "type": "paragraph",
          "category": "method",
          "noteId": "note-5",
          "en": "Added to the shortage of swabs supplies, low- and middle-income countries concurrently struggled with constraints in characterizing, evaluating, validating, and regulating new medical products⁵. In Colombia, for instance, numerous companies began to develop and manufacture nasopharyngeal swabs such as 3D Solutions⁶. However, because of such limitations, the translation of these products into clinical use has been stymied⁷. <mark class='hl hl-method' data-note='note-5'>In response to these critical issues, the aim of this study was to design and manufacture a novel in vitro pre-clinical test bench nasal cavity that emulates the human nasal cavity, thereby facilitating a more authentic evaluation of nasopharyngeal swab performance for sample collection and viral detection by reverse transcription-quantitative polymerase chain reaction (RT-qPCR).</mark> Our model, which closely mimics the anatomical features and mucus consistency of the nasopharyngeal cavity, was used to compare the performance of experimental nasopharyngeal swabs manufactured by Plastinovo S.A.S. (La Estrella, Colombia) via one-step injection-molding technique, against commercially available swabs with identical dimensional specifications from HanChang Medic Co. Ltd (Seoul, Korea) and Changzhou Munk Foam Technology Co. Ltd (Jiangsu, China). The aim was not only to assess efficacy in sample collection but also to ensure a realistic representation of the swabbing process, thereby providing a more accurate pre-clinical validation of these essential biomedical devices. Underlying this effort is the hypothesis that a physiologically relevant in vitro platform can better differentiate swab performance and thus serve as a more reliable tool to guide both swab design improvements and preclinical testing.",
          "pt": "Somada à escassez de suprimentos de swabs, os países de baixa e média renda enfrentaram simultaneamente restrições para caracterizar, avaliar, validar e regulamentar novos produtos médicos⁵. Na Colômbia, por exemplo, diversas empresas começaram a desenvolver e fabricar swabs nasofaríngeos, como a 3D Solutions⁶. Entretanto, devido a tais limitações, a translação desses produtos para o uso clínico foi dificultada⁷. <mark class='hl hl-method' data-note='note-5'>Em resposta a essas questões críticas, o objetivo deste estudo foi projetar e fabricar uma bancada de testes pré-clínicos in vitro inovadora que emula a cavidade nasal humana, facilitando uma avaliação mais autêntica do desempenho de swabs nasofaríngeos na coleta de amostras e detecção viral por reação em cadeia da polimerase via transcriptase reversa quantitativa (RT-qPCR).</mark> Nosso modelo, que mimetiza fielmente as características anatômicas e a consistência do muco da cavidade nasofaríngea, foi utilizado para comparar o desempenho de swabs nasofaríngeos experimentais fabricados pela Plastinovo S.A.S. (La Estrella, Colômbia), por meio da técnica de moldagem por injeção em etapa única, frente a swabs disponíveis comercialmente com especificações dimensionais idênticas da HanChang Medic Co. Ltd (Seul, Coreia) e da Changzhou Munk Foam Technology Co. Ltd (Jiangsu, China). O objetivo foi não apenas avaliar a eficácia na coleta de amostras, mas também garantir uma representação realista do processo de coleta, fornecendo uma validação pré-clínica mais acurada desses dispositivos biomédicos essenciais. Subjacente a esse esforço está a hipótese de que uma plataforma in vitro fisiologicamente relevante pode diferenciar melhor o desempenho dos swabs e, assim, servir como uma ferramenta mais confiável para orientar tanto melhorias no design quanto os ensaios pré-clínicos."
        }
      ]
    },
    {
      "id": "sec-results",
      "title": "Resultados / Results",
      "blocks": [
        {
          "id": "h-res-1",
          "type": "subheading",
          "en": "3D printed nasopharyngeal cavity model",
          "pt": "Modelo da cavidade nasofaríngea impressa em 3D"
        },
        {
          "id": "p-res-1",
          "type": "paragraph",
          "category": "method",
          "noteId": "note-6",
          "en": "Head CT scans of patients allowed the anatomically accurate reconstruction of hard and soft tissues of the nasopharyngeal region (Fig. 1a). <mark class='hl hl-method' data-note='note-6'>This model was crafted using dual-material 3D printing techniques, using hard VeroBlue™ for bone-mimicking rigidity and Agilus30™ for soft tissue flexibility (Fig. 1b).</mark> The blue rigid VeroBlue with a modulus of elasticity between 2.2 and 3.0 GPa⁸ is close to the values found for the bones of the human orbital wall (2.14–2.36 GPa)⁹. On the other hand, the translucent flexible Agilus30 with Shore hardness values close to 40 on the A scale¹⁰ mirrors those of hyaline cartilage (50–60 on the A scale)¹¹. The combination of these two materials confers a high degree of structural fidelity to the model. The realistic deformation response to swab insertion, restrained by the model's bony framework (Fig. 1c), underscores the model's physiological relevance. <mark class='hl hl-method' data-note='note-6'>Additionally, the chosen SISMA hydrogel simulates nasopharyngeal mucus with remarkable precision, showcasing shear-thinning behavior and viscosity parameters nearly identical to actual mucosa¹², i.e., close to 10 Pa·s at low shear rates³.</mark> Figure 2 shows the rheological comparison between the SISMA hydrogel and sinus nasal mucus⁴, indicating a similar viscosity behavior with changes on shear rate and similar values of n (0.234 for SISMA and 0.187 for mucus).",
          "pt": "Exames de tomografia computadorizada (TC) da cabeça de pacientes permitiram a reconstrução anatomicamente precisa dos tecidos duros e moles da região nasofaríngea (Fig. 1a). <mark class='hl hl-method' data-note='note-6'>Esse modelo foi confeccionado utilizando técnicas de impressão 3D multimaterial, empregando VeroBlue™ rígido para mimetizar a rigidez óssea e Agilus30™ flexível para simular a flexibilidade dos tecidos moles (Fig. 1b).</mark> O VeroBlue rígido azul, com módulo de elasticidade entre 2,2 e 3,0 GPa⁸, aproxima-se dos valores encontrados para os ossos da parede orbital humana (2,14–2,36 GPa)⁹. Por outro lado, o Agilus30 flexível translúcido, com valores de dureza Shore próximos a 40 na escala A¹⁰, espelha os da cartilagem hialina (50–60 na escala A)¹¹. A combinação desses dois materiais confere um elevado grau de fidelidade estrutural ao modelo. A resposta realista de deformação à inserção do swab, contida pelo arcabouço ósseo do modelo (Fig. 1c), ressalta sua relevância fisiológica. <mark class='hl hl-method' data-note='note-6'>Adicionalmente, o hidrogel SISMA selecionado simula o muco nasofaríngeo com notável precisão, exibindo comportamento pseudoplástico e parâmetros de viscosidade quase idênticos aos da mucosa real¹², isto é, próximos a 10 Pa·s em baixas taxas de cisalhamento³.</mark> A Figura 2 mostra a comparação reológica entre o hidrogel SISMA e o muco dos seios nasais⁴, indicando comportamento semelhante de viscosidade com variações na taxa de cisalhamento e valores próximos de n (0,234 para SISMA e 0,187 para o muco)."
        },
        {
          "id": "fig-1",
          "type": "figure",
          "en": "<strong>Fig. 1. 3D printed nasopharyngeal cavity model.</strong> (a) The computational segmentation of CT images allowed the reconstruction of the bone and soft tissues of the head. Blue indicates bony structures, and gold represents soft tissue regions such as mucosa and nasal septum. (b) Nasopharyngeal segment 3D printed using two different materials (VeroBlue™ and Agilus30™) to account for the difference between the elastic properties of bone and soft tissues. The materials were selected to mimic the mechanical behavior of each tissue type, with VeroBlue™ mimicking bone and Agilus30™ mimicking cartilage and mucosa. Inferior, superior, internal and external lateral views of the 3D printed nasopharyngeal cavity model. (c) The swab (Heicon swab shown in the images) is introduced into the nostril and pushed all the way back until it touches the wall of the nasopharynx. 3D renderings created using Mimics (v24.0) and 3-Matic (v16.0).",
          "pt": "<strong>Figura 1. Modelo da cavidade nasofaríngea impressa em 3D.</strong> (a) A segmentação computacional das imagens de TC permitiu a reconstrução dos ossos e tecidos moles da cabeça. O azul indica estruturas ósseas e o dourado representa regiões de tecidos moles, como mucosa e septo nasal. (b) Segmento nasofaríngeo impresso em 3D utilizando dois materiais diferentes (VeroBlue™ e Agilus30™) para reproduzir a diferença entre as propriedades elásticas dos ossos e dos tecidos moles, com o VeroBlue™ mimetizando o osso e o Agilus30™ mimetizando cartilagem e mucosa. Vistas inferior, superior, lateral externa e lateral interna. (c) O swab (swab Heicon mostrado nas imagens) é introduzido na narina e empurrado até o fundo, tocando a parede da nasofaringe."
        },
        {
          "id": "fig-2",
          "type": "figure",
          "en": "<strong>Fig. 2. Flow sweep power-law model fitting of SISMA and nasal sinus mucus data with its associated n coefficient.</strong> Viscosity curves (Pa·s) vs. shear rate (1/s) for SISMA (y = 31.05x⁻⁰·⁷⁶⁶, n = 0.234) and nasal sinus mucus (y = 7.89x⁻⁰·⁸¹³, n = 0.187).",
          "pt": "<strong>Figura 2. Ajuste pelo modelo de lei de potência da varredura de fluxo para os dados de SISMA e muco dos seios nasais com seu coeficiente n associado.</strong> Curvas de viscosidade (Pa·s) em função da taxa de cisalhamento (1/s) para SISMA (y = 31,05x⁻⁰·⁷⁶⁶, n = 0,234) e muco dos seios nasais (y = 7,89x⁻⁰·⁸¹³, n = 0,187)."
        },
        {
          "id": "h-res-2",
          "type": "subheading",
          "en": "Validation of collection-release capacities of the swabs",
          "pt": "Validação das capacidades de coleta e liberação dos swabs"
        },
        {
          "id": "p-res-2",
          "type": "paragraph",
          "category": "result",
          "noteId": "note-7",
          "en": "The swab comparison involved commercial (nylon flocked) and novel Heicon (injection-molded) variants (Fig. 3a). The commercial swab collected 1.8 and 3.2 times more SISMA than the Heicon swab in the nasopharyngeal cavity model and tube standard, respectively. <mark class='hl hl-result' data-note='note-7'>It was also found that the Heicon and commercial swabs collected 4.8 and 8.4 times more SISMA in the tube model than in the cavity. This disparity aligns with existing literature, where flocked swabs outperform injection-molded swabs in similar tests, likely due to the hydrophobic characteristics of the latter, which impede material absorption¹³.</mark>",
          "pt": "A comparação de swabs envolveu variantes comerciais (flocados de náilon) e os novos swabs Heicon (moldados por injeção) (Fig. 3a). O swab comercial coletou 1,8 e 3,2 vezes mais SISMA do que o swab Heicon no modelo de cavidade nasofaríngea e no tubo padrão, respectivamente. <mark class='hl hl-result' data-note='note-7'>Verificou-se também que os swabs Heicon e comercial coletaram 4,8 e 8,4 vezes mais SISMA no modelo tubular do que na cavidade. Essa disparidade está alinhada à literatura existente, na qual swabs flocados superam swabs moldados por injeção em testes semelhantes, provavelmente devido às características hidrofóbicas destes últimos, que dificultam a absorção de material¹³.</mark>"
        },
        {
          "id": "p-res-3",
          "type": "paragraph",
          "category": "result",
          "noteId": "note-7",
          "en": "When comparing the amount of SISMA released between models, both swab types exhibited significantly greater release in the tube standard than in the nasopharyngeal cavity model. Specifically, the commercial swab released approximately 3.2 times more hydrogel in the tube than in the cavity (49.99 ± 13.89 µL vs. 15.81 ± 4.21 µL), while the Heicon swab released approximately 4.0 times more (40.94 ± 5.13 µL vs. 10.31 ± 3.70 µL). These differences underscore the increased challenge posed by the anatomical and physiological barriers of the cavity model, which reduce swab performance despite using the same sampling protocol. It is important to highlight that there is a statistically significant difference between the two models for both swabs (commercial and Heicon in cavity vs. in tube, p < 0.0001).",
          "pt": "Ao comparar a quantidade de SISMA liberada entre os modelos, ambos os tipos de swab exibiram liberação significativamente maior no tubo padrão do que no modelo de cavidade nasofaríngea. Especificamente, o swab comercial liberou aproximadamente 3,2 vezes mais hidrogel no tubo do que na cavidade (49,99 ± 13,89 µL vs. 15,81 ± 4,21 µL), enquanto o swab Heicon liberou aproximadamente 4,0 vezes mais (40,94 ± 5,13 µL vs. 10,31 ± 3,70 µL). Essas diferenças ressaltam o desafio aumentado imposto pelas barreiras anatômicas e fisiológicas do modelo de cavidade, que reduzem o desempenho do swab apesar do uso do mesmo protocolo de amostragem. É importante destacar que há diferença estatisticamente significativa entre os dois modelos para ambos os swabs (comercial e Heicon na cavidade vs. no tubo, p < 0,0001)."
        },
        {
          "id": "p-res-4",
          "type": "paragraph",
          "category": "result",
          "noteId": "note-8",
          "en": "<mark class='hl hl-result' data-note='note-8'>The use of the nasopharyngeal cavity model led to a considerable improvement in sample release efficiency compared to the standard tube model. For the Heicon swabs, the cavity model allowed a 1.2-fold increase in release percentage (82.48 ± 12.70% vs. 68.77 ± 8.49%), while for the commercial swabs, the improvement was even more pronounced, with the cavity model yielding a 2.7-fold increase (69.44 ± 12.68% vs. 25.89 ± 6.76%).</mark> There is a statistically significant difference between the two swab models for both protocols (p < 0.0001 using tube; p = 0.0470 using cavity) as well as between the results obtained in tube and cavity for both swabs (p = 0.0281 for Heicon; p < 0.0001 for commercial). These results confirm that the anatomical complexity of the cavity model facilitates more effective interaction and release dynamics than the simplified tube setup. These findings are summarized in Table 1, which compares collected and released sample volumes, and release percentages for both swabs across both models.",
          "pt": "<mark class='hl hl-result' data-note='note-8'>O uso do modelo de cavidade nasofaríngea levou a uma melhoria considerável na eficiência de liberação da amostra em comparação ao modelo de tubo padrão. Para os swabs Heicon, o modelo de cavidade permitiu um aumento de 1,2 vez na porcentagem de liberação (82,48 ± 12,70% vs. 68,77 ± 8,49%), enquanto para os swabs comerciais a melhoria foi ainda mais pronunciada, com o modelo de cavidade proporcionando um aumento de 2,7 vezes (69,44 ± 12,68% vs. 25,89 ± 6,76%).</mark> Existe diferença estatisticamente significativa entre os dois modelos de swab para ambos os protocolos (p < 0,0001 usando tubo; p = 0,0470 usando cavidade), bem como entre os resultados obtidos em tubo e cavidade para ambos os swabs (p = 0,0281 para Heicon; p < 0,0001 para comercial). Esses resultados confirmam que a complexidade anatômica do modelo de cavidade facilita uma dinâmica de interação e liberação mais eficaz do que a configuração simplificada em tubo. Esses achados estão resumidos na Tabela 1."
        },
        {
          "id": "p-res-5",
          "type": "paragraph",
          "category": "result",
          "noteId": "note-8",
          "en": "In comparison to reported data, effective release percentages were 24% for a flocked swab and 60% for a swab developed by additive printing, which closely resembles the trends observed here¹⁴. Nevertheless, that data was collected using a simplified tube model, without recapitulating the complexity of the clinical nasopharyngeal sampling protocol. Overall, the data collected evidenced that the Heicon swab is an alternative that provides better release percentages compared to the commercially available swabs.",
          "pt": "Em comparação aos dados relatados na literatura, as porcentagens efetivas de liberação foram de 24% para um swab flocado e 60% para um swab desenvolvido por manufatura aditiva, o que se assemelha estreitamente às tendências observadas aqui¹⁴. Contudo, aqueles dados foram obtidos utilizando um modelo tubular simplificado, sem recapitular a complexidade do protocolo clínico de coleta nasofaríngea. De modo geral, os dados coletados evidenciaram que o swab Heicon constitui uma alternativa que proporciona melhores porcentagens de liberação em comparação aos swabs disponíveis comercialmente."
        },
        {
          "id": "tbl-1",
          "type": "table1",
          "en": "Table 1. Collected and released sample volumes, and release percentages for Heicon and commercial swabs in the nasopharyngeal cavity and tube models.",
          "pt": "Tabela 1. Volumes de amostra coletados e liberados e porcentagens de liberação para swabs Heicon e comerciais nos modelos de cavidade nasofaríngea e tubo."
        },
        {
          "id": "h-res-3",
          "type": "subheading",
          "en": "Viability of the swabs for adequate virus-loaded sample collection",
          "pt": "Viabilidade dos swabs para coleta adequada de amostras com carga viral"
        },
        {
          "id": "p-res-6",
          "type": "paragraph",
          "category": "result",
          "noteId": "note-9",
          "en": "In YFV-loaded SISMA assays, the Heicon swab showed a Ct of 30.08 in the cavity and 25.91 in the tube, corresponding to a difference of 4.17 cycles, or roughly a 20-fold decrease in detected RNA due to the anatomical complexity. The commercial swab showed a Ct of 31.48 in the cavity and 26.69 in the tube, a difference of 4.79 cycles, which corresponds to more than a 25-fold decrease. These statistically significant differences quantitatively demonstrate the challenge of sample retrieval in anatomically accurate conditions (p < 0.0001 for Heicon and commercial). <mark class='hl hl-result' data-note='note-10'>The Ct values indicated comparable viral material detection between swab types, irrespective of the model used (p = 0.1734). This equivalence suggests that Heicon nasopharyngeal swabs have a comparable performance to commercial swabs in terms of quantifiable viral sample retrieval (Fig. 4a).</mark>",
          "pt": "Nos ensaios com SISMA carregado com vírus da febre amarela (YFV), o swab Heicon apresentou Ct de 30,08 na cavidade e 25,91 no tubo, correspondendo a uma diferença de 4,17 ciclos, ou aproximadamente uma redução de 20 vezes no RNA detectado devido à complexidade anatômica. O swab comercial apresentou Ct de 31,48 na cavidade e 26,69 no tubo, uma diferença de 4,79 ciclos, o que corresponde a uma redução superior a 25 vezes. Essas diferenças estatisticamente significativas demonstram quantitativamente o desafio da recuperação de amostras em condições anatomicamente precisas (p < 0,0001 para Heicon e comercial). <mark class='hl hl-result' data-note='note-10'>Os valores de Ct indicaram detecção comparável de material viral entre os tipos de swab, independentemente do modelo utilizado (p = 0,1734). Essa equivalência sugere que os swabs nasofaríngeos Heicon possuem desempenho comparável aos swabs comerciais em termos de recuperação quantificável de amostra viral (Fig. 4a).</mark>"
        },
        {
          "id": "p-res-7",
          "type": "paragraph",
          "category": "result",
          "noteId": "note-9",
          "en": "The PCR results for the YFV-loaded SISMA validated that the mucosal model chosen is compatible with single-stranded viral material embedded in a capsid at a specific concentration of 5000 copies/mL and that the presence of a capsid does not prevent adequate RNA extraction. The Ct values obtained were consistently below the clinical detection threshold of 40 and demonstrated statistically significant differences between cavity and tube models (p < 0.0001), confirming the ability of the hydrogel to mimic mucosal retention and release properties. In relation to nasopharyngeal swabs, it is evident that both types obtain comparable amounts of quantifiable viral material. However, the standard model showed a significantly different genetic material recovery compared to the nasopharyngeal cavity model, which could indicate significant discrepancies with respect to the actual nasopharyngeal test. Thus, this may impact the reliability of swab approvals for clinical use, as the anatomical model offers a more accurate representation of in vivo conditions.",
          "pt": "Os resultados de PCR para o SISMA carregado com YFV validaram que o modelo de mucosa escolhido é compatível com material viral de fita simples encapsidado em uma concentração específica de 5.000 cópias/mL e que a presença de capsídeo não impede a extração adequada de RNA. Os valores de Ct obtidos situaram-se consistentemente abaixo do limiar clínico de detecção de 40 e demonstraram diferenças estatisticamente significativas entre os modelos de cavidade e tubo (p < 0,0001), confirmando a capacidade do hidrogel de mimetizar as propriedades de retenção e liberação da mucosa. Em relação aos swabs nasofaríngeos, fica evidente que ambos os tipos obtêm quantidades comparáveis de material viral quantificável. Contudo, o modelo padrão demonstrou uma recuperação de material genético significativamente distinta em comparação ao modelo de cavidade nasofaríngea, o que pode indicar discrepâncias importantes em relação ao teste nasofaríngeo real."
        },
        {
          "id": "p-res-8",
          "type": "paragraph",
          "category": "result",
          "noteId": "note-10",
          "en": "Final validation of the test bench for nasopharyngeal swab evaluation was established by depositing SARS-CoV-2-loaded SISMA on the nasopharyngeal cavity, followed by the swabbing test. As shown in Fig. 4b, in the cavity model, Heicon swabs yielded Ct values of 27.68 ± 1.16 (FAM) and 27.00 ± 2.86 (HEX), whereas commercial swabs showed 28.41 ± 0.93 (FAM) and 28.64 ± 1.41 (HEX). In the tube model, Ct values decreased for both swabs, with Heicon registering 22.89 ± 2.20 (FAM) and 23.59 ± 2.99 (HEX), and commercial swabs 24.82 ± 0.93 (FAM) and 24.52 ± 0.97 (HEX). <mark class='hl hl-result' data-note='note-10'>These differences translate to approximately 28.0-fold and 12.0-fold increases in detectable nucleic acid (for Heicon and commercial swabs respectively in FAM), and 10.6-fold and 17.3-fold increases (in HEX), when moving from the cavity model to the tube model. These statistical differences (p = 0.0048 for Heicon and p = 0.0295 for commercial) indicate that the sampling environment affects nucleic acid recovery, with tube models overestimating performance.</mark> Likewise, there is no statistically significant difference between the FAM and HEX channels of both swabs for the tube and cavity models (Heicon vs. commercial in cavity and tube, p > 0.1523). Nevertheless, the Ct values for both swabs in the tube and cavity models do not exceed the acceptance limit of 40, so it can be stated that the results found have adequate clinical relevance. A study developed in a model tube with PBS loaded with SARS-CoV-2 at a concentration of 10³ copies/mL found that Ct values are between 35 and 40 for swabs¹⁵, which could be related to the low viscosity of the solution used therein. The complete quantitative summary is presented in Table 2.",
          "pt": "A validação final da bancada de testes para avaliação de swabs nasofaríngeos foi estabelecida depositando-se SISMA carregado com SARS-CoV-2 na cavidade nasofaríngea, seguida pelo teste de coleta com swab. Conforme mostrado na Fig. 4b, no modelo de cavidade, os swabs Heicon produziram valores de Ct de 27,68 ± 1,16 (FAM) e 27,00 ± 2,86 (HEX), ao passo que os swabs comerciais apresentaram 28,41 ± 0,93 (FAM) e 28,64 ± 1,41 (HEX). No modelo tubular, os valores de Ct diminuíram para ambos os swabs, com o Heicon registrando 22,89 ± 2,20 (FAM) e 23,59 ± 2,99 (HEX), e os swabs comerciais registrando 24,82 ± 0,93 (FAM) e 24,52 ± 0,97 (HEX). <mark class='hl hl-result' data-note='note-10'>Essas diferenças traduzem-se em aumentos de aproximadamente 28,0 vezes e 12,0 vezes no ácido nucleico detectável (para swabs Heicon e comerciais, respectivamente, no canal FAM), e aumentos de 10,6 vezes e 17,3 vezes (no canal HEX), ao passar do modelo de cavidade para o modelo tubular. Essas diferenças estatisticamente significativas (p = 0,0048 para Heicon e p = 0,0295 para comercial) indicam que o ambiente de amostragem afeta a recuperação de ácidos nucleicos, com os modelos tubulares superestimando o desempenho.</mark> Da mesma forma, não há diferenças estatisticamente significativas entre os canais FAM e HEX de ambos os swabs para os modelos de tubo e cavidade (p > 0,1523). Ainda assim, os valores de Ct para ambos os swabs não excedem o limite de aceitação de 40, possuindo relevância clínica adequada. O resumo quantitativo completo é apresentado na Tabela 2."
        },
        {
          "id": "tbl-2",
          "type": "table2",
          "en": "Table 2. Ct values for YFV and SARS-CoV-2 taken with Heicon and commercial nasopharyngeal swabs from both tube and cavity models.",
          "pt": "Tabela 2. Valores de Ct para YFV e SARS-CoV-2 coletados com swabs nasofaríngeos Heicon e comerciais nos modelos de tubo e cavidade."
        }
      ]
    },
    {
      "id": "sec-discussion",
      "title": "Discussão / Discussion",
      "blocks": [
        {
          "id": "p-disc-1",
          "type": "paragraph",
          "category": "method",
          "noteId": "note-6",
          "en": "This study has successfully established a digitally reconstructed nasopharyngeal cavity model utilizing VeroBlue™ and Agilus30™ to accurately replicate the rigidity and flexibility of the cavity's soft and hard tissues. Incorporated within this model, SISMA hydrogel was meticulously selected to emulate the elastic modulus of biological tissues and the viscosity essential for mucociliary transport, thereby authentically simulating the anatomical intricacies of the nasopharyngeal environment. The investigation revealed significant disparities in the sample collection and release performances between commercial flocked and injection-molded swabs, as evidenced by RT-qPCR data. The mechanical properties of each material allow the model to present a higher degree of anatomical and physiological accuracy, as the nasal cavity maintains its structure thanks to the bony and cartilaginous framework¹⁶.",
          "pt": "Este estudo estabeleceu com sucesso um modelo de cavidade nasofaríngea reconstruído digitalmente utilizando VeroBlue™ e Agilus30™ para replicar com precisão a rigidez e a flexibilidade dos tecidos moles e duros da cavidade. Incorporado a esse modelo, o hidrogel SISMA foi meticulosamente selecionado para emular o módulo elástico dos tecidos biológicos e a viscosidade essencial ao transporte mucociliar, simulando de forma autêntica as complexidades anatômicas do ambiente nasofaríngeo. A investigação revelou disparidades significativas nos desempenhos de coleta e liberação de amostras entre swabs comerciais flocados e swabs moldados por injeção, conforme evidenciado pelos dados de RT-qPCR. As propriedades mecânicas de cada material permitem que o modelo apresente um maior grau de precisão anatômica e fisiológica, uma vez que a cavidade nasal mantém sua estrutura graças ao arcabouço ósseo e cartilaginoso¹⁶."
        },
        {
          "id": "p-disc-2",
          "type": "paragraph",
          "category": "critique",
          "noteId": "note-6",
          "en": "Most nasopharyngeal swab tests consist of tubes with high viscosity liquid solutions that attempt to recreate the human mucosal properties but lose the anatomical details¹⁷,¹⁸. Other studies reported the use of rigid and/or flexible reconstructions of the nasopharyngeal cavities without a solution to replicate the internal lining of the nasal tract¹⁹,²⁰. A model that involves most of these parameters is a 3D printed cavity in rigid ABS material with an internal sponge that simulates mucus in the nasopharyngeal area¹. However, the fact that the entire nasal passage is made of a rigid material means that the heterogeneous anatomical properties physiologically observed are lost and can lead to significant changes in the sample collection results of the nasopharyngeal swabbing procedure. Overall, this nuanced reproduction of the nasal passages' anatomy and rheology represents a significant enhancement over existing models, which lack either anatomical detail or appropriate mucosal mimicry. Our 3D nasopharyngeal model combines anatomical realism (derived from CT imaging of the upper airway) with functional features such as soft-tissue-mimicking materials and a hydrogel-coated epithelial surface to simulate mucus. This setup enables repeatable evaluation of both swab collection and release under physiologically relevant conditions. Compared to flat or tubular models, it provides a more stringent and realistic test environment for swab tip interaction, trajectory control, and target site access. However, limitations remain, including the absence of mucociliary dynamics and the time-dependent behavior of hydrogels, which may require replenishment or rehydration across multiple test cycles.",
          "pt": "A maioria dos testes de swabs nasofaríngeos consiste em tubos com soluções líquidas de alta viscosidade que tentam recriar as propriedades da mucosa humana, mas perdem os detalhes anatômicos¹⁷,¹⁸. Outros estudos relataram o uso de reconstruções rígidas e/ou flexíveis das cavidades nasofaríngeas sem uma solução para replicar o revestimento interno do trato nasal¹⁹,²⁰. Um modelo que envolve a maioria desses parâmetros é uma cavidade impressa em 3D em material rígido ABS com uma esponja interna que simula o muco na área nasofaríngea¹. Contudo, o fato de toda a passagem nasal ser feita de material rígido faz com que as propriedades anatômicas heterogêneas observadas fisiologicamente sejam perdidas, podendo levar a alterações significativas nos resultados de coleta do procedimento de swab nasofaríngeo. No geral, essa reprodução minuciosa da anatomia e da reologia das passagens nasais representa um avanço substancial em relação aos modelos existentes. Nosso modelo nasofaríngeo 3D combina realismo anatômico (derivado de imagens de TC das vias aéreas superiores) com características funcionais, como materiais que mimetizam tecidos moles e uma superfície epitelial revestida por hidrogel para simular o muco. Em comparação aos modelos planos ou tubulares, oferece um ambiente de teste mais rigoroso e realista para a interação da ponta do swab, controle de trajetória e acesso ao sítio-alvo. Entretanto, permanecem limitações, incluindo a ausência de dinâmica mucociliar e o comportamento dependente do tempo dos hidrogéis, que podem exigir reposição ou reidratação ao longo de múltiplos ciclos de teste."
        },
        {
          "id": "p-disc-3",
          "type": "paragraph",
          "category": "result",
          "noteId": "note-8",
          "en": "In terms of the collection-release capacities, the commercial swab demonstrated superior collection capacity over the Heicon swab, with notable discrepancies observed between the tube standard and the nasopharyngeal cavity model (Fig. 3b). In relation to the use of a standard tube model, the literature shows an increase in the volume of sample collected compared to simple anatomical models, but the standard model protocol usually demands larger volumes of fluid compared to anatomical models¹. The discrepancy in sample collection between standard and anatomical models confirms the importance of using a validation methodology for nasopharyngeal swab collection processes that better recreates the anatomy in which the procedure is performed for the intended use. Unlike the methodology adopted in this study, others have reported the use of fluorescent-labeled particles to mimic the cellular material that is released into the transport medium¹,¹³. However, in a study conducted by Tay and collaborators¹⁴, where the performance of flocked and 3D printed swabs were compared using a tube model, it was established that both swabs released a similar volume of a mucus analogue that was based on an aqueous solution of Pluronic F127 25% (w/v). Considering its function, it is important that a nasopharyngeal swab releases back into medium the highest possible percentage of the volume of cellular material collected. Failing to do so will result in unreliable molecular test data or even failing to pass the sensitivity thresholds.",
          "pt": "Em termos das capacidades de coleta e liberação, o swab comercial demonstrou capacidade superior de coleta em relação ao swab Heicon, com discrepâncias notáveis observadas entre o tubo padrão e o modelo de cavidade nasofaríngea (Fig. 3b). Quanto ao uso de um modelo tubular padrão, a literatura demonstra aumento no volume de amostra coletado em comparação a modelos anatômicos simples, mas o protocolo do modelo padrão geralmente exige volumes maiores de fluido do que os modelos anatômicos¹. A discrepância na coleta de amostras entre os modelos padrão e anatômico confirma a importância de utilizar uma metodologia de validação para processos de coleta por swab nasofaríngeo que recrie melhor a anatomia na qual o procedimento é realizado para o uso pretendido. Diferentemente da metodologia adotada neste estudo, outros autores relataram o uso de partículas marcadas por fluorescência para mimetizar o material celular liberado no meio de transporte¹,¹³. Contudo, em estudo conduzido por Tay e colaboradores¹⁴, no qual o desempenho de swabs flocados e impressos em 3D foi comparado utilizando um modelo tubular, estabeleceu-se que ambos os swabs liberaram um volume semelhante de um análogo de muco baseado em solução aquosa de Pluronic F127 a 25% (p/v). Considerando sua função, é fundamental que um swab nasofaríngeo libere de volta no meio a maior porcentagem possível do volume de material celular coletado. Não o fazer resultará em dados de testes moleculares pouco confiáveis ou até mesmo na falha em atingir os limiares de sensibilidade."
        },
        {
          "id": "p-disc-4",
          "type": "paragraph",
          "category": "critique",
          "noteId": "note-11",
          "en": "<mark class='hl hl-critique' data-note='note-11'>Regarding cost-effectiveness, preliminary analysis suggests potential economic advantages of the Heicon design. The injection molding process enables high-volume production with cycle times of 10–30 s per part, while the single-material polypropylene construction eliminates secondary fiber application processes, potentially reducing manufacturing costs by 30–50% compared to flocked swabs.</mark> The use of readily available medical-grade materials and standard manufacturing equipment also enables local production, reducing supply chain dependencies that proved critical during pandemic conditions. However, comprehensive health economic evaluation including regulatory costs, clinical validation expenses, and long-term performance outcomes would be required for definitive cost-effectiveness determination.",
          "pt": "<mark class='hl hl-critique' data-note='note-11'>No tocante à relação custo-efetividade, a análise preliminar sugere potenciais vantagens econômicas do design Heicon. O processo de moldagem por injeção permite produção em alto volume com tempos de ciclo de 10–30 s por peça, enquanto a construção em material único de polipropileno elimina processos secundários de aplicação de fibras, reduzindo potencialmente os custos de fabricação em 30–50% em comparação aos swabs flocados.</mark> O uso de materiais de grau médico prontamente disponíveis e equipamentos padrão de fabricação também viabiliza a produção local, reduzindo dependências da cadeia de suprimentos que se mostraram críticas durante condições pandêmicas. Entretanto, uma avaliação abrangente de economia da saúde incluindo custos regulatórios, despesas de validação clínica e desfechos de desempenho a longo prazo seria necessária para uma determinação definitiva de custo-efetividade."
        },
        {
          "id": "p-disc-5",
          "type": "paragraph",
          "category": "critique",
          "noteId": "note-12",
          "en": "The cavity and tube models were validated using two viral targets (YFV and SARS-CoV-2) to assess swab performance under different virological and molecular detection conditions. The consistent Ct differences observed for both viruses across anatomical and simplified models support the model's robustness and its utility in pre-clinical validation protocols for respiratory pathogens. The results reinforce that this model not only reflects anatomical complexity but also provides sensitivity to detect variations in swab performance across different diagnostic contexts. Several studies have found similar results of virus-loaded sample collection when performing comparative analysis between injection and flocked nasopharyngeal swabs. For example, Ghezzi et al. loaded a cellulose sponge with a 2% polyethylene oxide solution containing SARS-CoV-2 at a concentration of 10⁶ copies/mL². Their results showed that the injected swab had a shorter cycle time (34.00) than the flocked swab (39.00)². Differences are also observed in the Ct values of mucosal substitute samples developed with silk sponge loaded with 0.5% polyethylene oxide and 10⁵ copies/mL of SARS-CoV-2 taken with flocked (36.5) and injected (38) swabs in a nasopharyngeal cavity model without the external nasal anatomy¹. The fact that significantly better results are presented with the flocked swab may be a result of the lack of an external nasal region, as the vestibule surfaces have been shown to have significant effects on sample collection and release²¹. <mark class='hl hl-critique' data-note='note-12'>Additionally, the Heicon-type swab demonstrated higher release efficiency, which can be attributed to several material science principles. The injection-molded polypropylene surface exhibits lower surface energy compared to nylon fibers, reducing adhesive interactions with the hydrogel matrix²². The smooth surface topology (surface roughness Ra ≈ 0.5–2.0 µm) provides adequate mechanical retention during collection while minimizing deep retention sites that resist sample release²³. Furthermore, the dimensional stability of polypropylene in aqueous environments ensures consistent release performance throughout the sample transport process, unlike hygroscopic materials that may alter their geometry upon fluid exposure²².</mark>",
          "pt": "Os modelos de cavidade e tubo foram validados utilizando dois alvos virais (YFV e SARS-CoV-2) para avaliar o desempenho dos swabs sob diferentes condições virológicas e de detecção molecular. As diferenças consistentes de Ct observadas para ambos os vírus entre os modelos anatômico e simplificado corroboram a robustez do modelo e sua utilidade em protocolos de validação pré-clínica para patógenos respiratórios. Os resultados reforçam que esse modelo não apenas reflete a complexidade anatômica, mas também oferece sensibilidade para detectar variações no desempenho dos swabs em diferentes contextos diagnósticos. Diversos estudos encontraram resultados semelhantes na coleta de amostras com carga viral ao realizar análises comparativas entre swabs nasofaríngeos injetados e flocados. Por exemplo, Ghezzi et al. carregaram uma esponja de celulose com uma solução de óxido de polietileno a 2% contendo SARS-CoV-2 na concentração de 10⁶ cópias/mL². Seus resultados mostraram que o swab injetado apresentou tempo de ciclo menor (34,00) do que o swab flocado (39,00)². Diferenças também são observadas nos valores de Ct de amostras substitutas de mucosa desenvolvidas com esponja de seda carregada com óxido de polietileno a 0,5% e 10⁵ cópias/mL de SARS-CoV-2 coletadas com swabs flocados (36,5) e injetados (38) em um modelo de cavidade nasofaríngea sem a anatomia nasal externa¹. O fato de resultados significativamente melhores serem apresentados pelo swab flocado pode decorrer da ausência de uma região nasal externa, visto que se demonstrou que as superfícies do vestíbulo nasal exercem efeitos significativos na coleta e liberação de amostras²¹. <mark class='hl hl-critique' data-note='note-12'>Adicionalmente, o swab do tipo Heicon demonstrou maior eficiência de liberação, o que pode ser atribuído a diversos princípios da ciência dos materiais. A superfície de polipropileno moldado por injeção exibe menor energia superficial em comparação às fibras de náilon, reduzindo as interações adesivas com a matriz de hidrogel²². A topologia de superfície lisa (rugosidade superficial Ra ≈ 0,5–2,0 µm) proporciona retenção mecânica adequada durante a coleta, minimizando ao mesmo tempo sítios profundos de retenção que resistem à liberação da amostra²³. Além disso, a estabilidade dimensional do polipropileno em ambientes aquosos assegura desempenho consistente de liberação durante todo o processo de transporte da amostra, diferentemente de materiais higroscópicos que podem alterar sua geometria mediante exposição a fluidos²².</mark>"
        },
        {
          "id": "p-disc-6",
          "type": "paragraph",
          "category": "result",
          "noteId": "note-10",
          "en": "Additionally, the simulation of the nasopharyngeal mucosa with hydrogels allows a better integration of the components²⁴ and thus a better uptake of the viral material during swabbing. Importantly, the lack of amplification of the RNase P gene in the samples indicates the absence of cellular material. The results indicate that there is no statistically significant difference between the positive control of the kit and the nasopharyngeal cavity (FAM and HEX channels, p > 0.0868), which demonstrates that the RNA collected meets the requirements to be classified as an intact sample. These results demonstrate that the SISMA hydrogel not only supports RNA preservation and extraction but also enables discrimination between swab performance under realistic anatomical conditions, thereby validating its use as a physiologically relevant mucosal substitute. The kit's positive and negative controls showed the expected results, i.e., cycle times less than 27 on the FAM and HEX channels and no detection in the Cy5 channel for the positive and no detection on any channel for the negative. The positive control in cavity presents significantly lower Ct values (18.21 in FAM and 18.88 in HEX for Heicon; 19.41 in FAM and 19.32 in HEX for commercial) than those mentioned for the samples, which indicates that the developed test bank largely avoids false positives in the clinical test results even in close proximity to the acceptance limit. This study underscores the importance of employing anatomically and physiologically accurate models in the pre-clinical assessment of nasopharyngeal swabs, which is crucial for the development of diagnostic tools during pandemics.",
          "pt": "Ademais, a simulação da mucosa nasofaríngea com hidrogéis permite melhor integração dos componentes²⁴ e, consequentemente, melhor captação do material viral durante a coleta. De modo importante, a ausência de amplificação do gene RNase P nas amostras indica a ausência de material celular. Os resultados apontam que não há diferença estatisticamente significativa entre o controle positivo do kit e a cavidade nasofaríngea (canais FAM e HEX, p > 0,0868), o que demonstra que o RNA coletado atende aos requisitos para ser classificado como amostra íntegra. Esses resultados comprovam que o hidrogel SISMA não apenas favorece a preservação e a extração de RNA, mas também permite discriminar o desempenho entre swabs sob condições anatômicas realistas, validando assim seu uso como um substituto de mucosa fisiologicamente relevante. Os controles positivo e negativo do kit apresentaram os resultados esperados, isto é, tempos de ciclo inferiores a 27 nos canais FAM e HEX e ausência de detecção no canal Cy5 para o controle positivo, bem como ausência de detecção em qualquer canal para o controle negativo. O controle positivo na cavidade apresenta valores de Ct significativamente menores (18,21 em FAM e 18,88 em HEX para Heicon; 19,41 em FAM e 19,32 em HEX para comercial) do que aqueles mencionados para as amostras, o que indica que a bancada de testes desenvolvida evita amplamente falsos-positivos nos resultados dos testes clínicos, mesmo em estreita proximidade com o limite de aceitação. Este estudo ressalta a importância de empregar modelos anatomicamente e fisiologicamente precisos na avaliação pré-clínica de swabs nasofaríngeos, o que é crucial para o desenvolvimento de ferramentas diagnósticas durante pandemias."
        },
        {
          "id": "p-disc-7",
          "type": "paragraph",
          "category": "critique",
          "noteId": "note-13",
          "en": "<mark class='hl hl-critique' data-note='note-13'>However, the model has inherent limitations that must be acknowledged for proper interpretation of results. From a physiological perspective, it does not incorporate dynamic components such as mucociliary clearance, which could affect viral particle distribution and retention²⁵. The model also lacks temperature regulation (maintained at room temperature rather than physiological 37 °C), humidity control, and the complex biochemical environment of active mucosa including immune components, cellular debris, and enzymatic activity that can influence viral stability and swab-mucus interactions²⁶⁻²⁸. From a materials science standpoint, the SISMA hydrogel, while rheologically matched to human mucus, represents a simplified polymer network that may not fully capture the complex glycoprotein structure and viscoelastic recovery characteristics of native mucin. Additionally, the dual-material 3D printing approach, though anatomically accurate, creates discrete material interfaces rather than the gradual tissue property transitions found in vivo. The hydrogel may also exhibit time-dependent behavior including potential dehydration, cross-linking changes, or microbial contamination that could affect reproducibility across extended testing periods.</mark> Despite these limitations, the model demonstrates robust performance as standardized platform for comparative swab evaluation, offering superior physiological similarity compared to simple tube-based methods while maintaining the reproducibility essential for pre-clinical device validation.",
          "pt": "<mark class='hl hl-critique' data-note='note-13'>Contudo, o modelo possui limitações inerentes que devem ser reconhecidas para a devida interpretação dos resultados. Do ponto de vista fisiológico, não incorpora componentes dinâmicos como a depuração mucociliar (clearance mucociliar), que poderia afetar a distribuição e a retenção de partículas virais²⁵. O modelo também carece de regulação de temperatura (mantido à temperatura ambiente em vez dos 37 °C fisiológicos), controle de umidade e do complexo ambiente bioquímico da mucosa ativa, incluindo componentes imunológicos, detritos celulares e atividade enzimática que podem influenciar a estabilidade viral e as interações swab-muco²⁶⁻²⁸. Sob a perspectiva da ciência dos materiais, o hidrogel SISMA, embora reologicamente compatível com o muco humano, representa uma rede polimérica simplificada que pode não capturar integralmente a complexa estrutura glicoproteica e as características de recuperação viscoelástica da mucina nativa. Além disso, a abordagem de impressão 3D multimaterial, embora anatomicamente acurada, cria interfaces discretas entre materiais em vez das transições graduais de propriedades teciduais encontradas in vivo. O hidrogel também pode exibir comportamento dependente do tempo, incluindo potencial desidratação, alterações de reticulação ou contaminação microbiana que podem afetar a reprodutibilidade ao longo de períodos prolongados de ensaio.</mark> Apesar dessas limitações, o modelo demonstra desempenho robusto como plataforma padronizada para avaliação comparativa de swabs, oferecendo similaridade fisiológica superior em comparação aos métodos simples baseados em tubos, mantendo ao mesmo tempo a reprodutibilidade essencial para a validação pré-clínica de dispositivos."
        },
        {
          "id": "p-disc-8",
          "type": "paragraph",
          "category": "result",
          "noteId": "note-2",
          "en": "In conclusion, the 3D printed cavity model demonstrated superior efficacy in sample release compared to the standard tube model, suggesting its enhanced suitability for pre-clinical validation of nasopharyngeal swabs. Crucially, the research contributes significant advancements to the realm of pre-clinical testing for nasopharyngeal swabs. By integrating a realistic 3D printed anatomical structure with a SISMA hydrogel, we have observed noteworthy distinctions between the novel cavity model and the conventional tube model. The cavity model offers a more accurate representation of the nasal anatomy, which is paramount for the precise pre-clinical validation of swabs used in the diagnosis of viral infections. In summary, the application of a more anatomically and mechanically faithful model for evaluating nasopharyngeal swabs could substantially refine their design and functionality. This, in turn, would enhance the reliability and efficacy of diagnostic tests for detecting nasopharyngeal pathogens, including SARS-CoV-2. The findings underscore the importance of anatomical and physiological accuracy in pre-clinical testing, which may lead to improved clinical outcomes and public health responses during viral outbreaks.",
          "pt": "Em conclusão, o modelo de cavidade impressa em 3D demonstrou eficácia superior na liberação de amostras em comparação ao modelo de tubo padrão, sugerindo sua maior adequação para a validação pré-clínica de swabs nasofaríngeos. Crucialmente, a pesquisa aporta avanços significativos ao campo dos testes pré-clínicos de swabs nasofaríngeos. Ao integrar uma estrutura anatômica realista impressa em 3D com um hidrogel SISMA, observamos distinções notáveis entre o novo modelo de cavidade e o modelo tubular convencional. O modelo de cavidade oferece uma representação mais precisa da anatomia nasal, o que é primordial para a validação pré-clínica rigorosa de swabs utilizados no diagnóstico de infecções virais. Em suma, a aplicação de um modelo mais fiel anatômica e mecanicamente para avaliar swabs nasofaríngeos pode aprimorar substancialmente seu design e funcionalidade. Isso, por sua vez, elevaria a confiabilidade e a eficácia dos testes diagnósticos para detecção de patógenos nasofaríngeos, incluindo o SARS-CoV-2. Os achados destacam a importância da precisão anatômica e fisiológica nos testes pré-clínicos, o que pode conduzir a melhores desfechos clínicos e respostas de saúde pública durante surtos virais."
        },
        {
          "id": "p-disc-9",
          "type": "paragraph",
          "category": "critique",
          "noteId": "note-13",
          "en": "Future work should focus on systematic validation progression toward clinical implementation. Immediate next steps include testing with more complex biological matrices such as spiked sputum samples and mucus with varying pathological viscosity profiles, followed by ex vivo validation using fresh human tissue samples to provide intermediate validation while maintaining experimental control. Although this model is designed for early-stage pre-clinical validation, the eventual transition to clinical studies would require carefully designed comparative trials following Good Clinical Practice guidelines, focusing initially on analytical performance parameters including sensitivity, specificity, and correlation with established reference methods across diverse patient populations. In this context, a comprehensive Limit of Detection (LoD) study comparing the Heicon swab with established clinical swabs represents a critical next validation phase. This would involve systematic serial dilution testing across 6–8 viral concentration levels using both SARS-CoV-2 and YFV systems, following CLSI EP17-A2 guidelines for analytical sensitivity determination. The study design would establish 95% detection probability thresholds for each swab type in both anatomically accurate and simplified models, using probit regression analysis to determine statistical confidence intervals. Beyond analytical LoD assessment, such studies would evaluate clinical diagnostic sensitivity by incorporating collection efficiency, release kinetics, and matrix effects to provide comprehensive performance benchmarking. These analytical validation studies are essential prerequisites for regulatory submission and would provide quantitative evidence supporting clinical utility claims and eventual translation into diagnostic practice.",
          "pt": "Trabalhos futuros devem concentrar-se na progressão sistemática da validação rumo à implementação clínica. Os próximos passos imediatos incluem testes com matrizes biológicas mais complexas, como amostras de escarro enriquecidas (spiked) e muco com perfis variados de viscosidade patológica, seguidos por validação ex vivo utilizando amostras de tecido humano fresco para fornecer validação intermediária mantendo o controle experimental. Embora este modelo seja projetado para validação pré-clínica em estágio inicial, a eventual transição para estudos clínicos exigiria ensaios comparativos cuidadosamente delineados seguindo as diretrizes de Boas Práticas Clínicas (BPC), concentrando-se inicialmente em parâmetros de desempenho analítico, incluindo sensibilidade, especificidade e correlação com métodos de referência estabelecidos em diversas populações de pacientes. Nesse contexto, um estudo abrangente de Limite de Detecção (LoD) comparando o swab Heicon com swabs clínicos estabelecidos representa uma próxima fase crítica de validação. Isso envolveria testes sistemáticos de diluição seriada em 6–8 níveis de concentração viral utilizando tanto os sistemas de SARS-CoV-2 quanto de YFV, seguindo as diretrizes CLSI EP17-A2 para determinação de sensibilidade analítica. O delineamento do estudo estabeleceria limiares de probabilidade de detecção de 95% para cada tipo de swab em modelos anatomicamente precisos e simplificados, empregando análise de regressão probit para determinar intervalos de confiança estatística. Além da avaliação analítica de LoD, tais estudos avaliariam a sensibilidade diagnóstica clínica ao incorporar eficiência de coleta, cinética de liberação e efeitos de matriz para fornecer uma referência abrangente de desempenho. Esses estudos de validação analítica são pré-requisitos essenciais para submissão regulatória e forneceriam evidências quantitativas para fundamentar alegações de utilidade clínica e eventual translação para a prática diagnóstica."
        }
      ]
    },
    {
      "id": "sec-methods",
      "title": "Materiais e Métodos / Materials and Methods",
      "blocks": [
        {
          "id": "h-met-1",
          "type": "subheading",
          "en": "Swab acquisition and Preparation",
          "pt": "Aquisição e preparação dos swabs"
        },
        {
          "id": "p-met-1",
          "type": "paragraph",
          "category": "method",
          "noteId": "note-11",
          "en": "Heicon-type swabs (Heicon swabs) were manufactured via one-step injection by Plastinovo S.A.S. (La Estrella, Colombia) and sterilized using ethylene oxide (100%, 100 g, 18 h, 38–55 °C). Commercial nylon flocked swabs (Commercial swabs) were purchased from HanChang Medic Co. Ltd (Seoul, Korea) and from Changzhou Munk Foam Technology Co. Ltd (Jiangsu, China). The swabs were directly taken from the original sterilized packaging for immediate testing. Swab use and the overall protocol of the study are summarized in Fig. 5.",
          "pt": "Swabs do tipo Heicon (swabs Heicon) foram fabricados por injeção em etapa única pela Plastinovo S.A.S. (La Estrella, Colômbia) e esterilizados com óxido de etileno (100%, 100 g, 18 h, 38–55 °C). Swabs comerciais flocados de náilon (swabs comerciais) foram adquiridos da HanChang Medic Co. Ltd (Seul, Coreia) e da Changzhou Munk Foam Technology Co. Ltd (Jiangsu, China). Os swabs foram retirados diretamente da embalagem esterilizada original para testagem imediata. O uso dos swabs e o protocolo geral do estudo estão resumidos na Fig. 5."
        },
        {
          "id": "h-met-2",
          "type": "subheading",
          "en": "SISMA hydrogel preparation",
          "pt": "Preparação do hidrogel SISMA"
        },
        {
          "id": "p-met-2",
          "type": "paragraph",
          "category": "method",
          "noteId": "note-6",
          "en": "<strong>Pre-gel preparation and biochemical modification:</strong> Porcine small intestinal submucosa (SIS) powder was prepared and modified following the protocol previously reported¹². Briefly, SIS powder (obtained following the protocol described in²⁹) was solubilized at 4 mg/mL in a solution of 0.5 M glacial acetic acid (PanReac AppliChem, Chicago, IL, USA) and 1 mg/mL porcine pepsin (PanReac AppliChem, Chicago, IL, USA) under vigorous magnetic stirring at room temperature for 48 h. A functional solution of methacrylic acid (MA, Sigma-Aldrich, St. Louis, MO, USA; 1:20 molar excess with respect to free amines in SIS), 1-ethyl-3-(3-dimethylaminopropyl) carbodiimide hydrochloride (EDC, Sigma-Aldrich, St. Louis, MO, USA; 1:1 molar ratio with respect to MA) and N-hydroxysuccinimide (NHS, Sigma-Aldrich, St. Louis, MO, USA; 1:1 molar ratio with respect to MA) was prepared in N,N-dimethylformamide (DMF, Sigma-Aldrich, St. Louis, MO, USA) and heated for 15 min at 40 °C under constant magnetic stirring. The functional solution was mixed with the SIS pre-gel (1:1 volume ratio) for 24 h under constant magnetic stirring at 4 °C. The MA-modified SIS hydrogel (SISMA) was dialyzed against 0.25 M acetic acid for 48 h with 100 times the volume of SISMA and lyophilized for 96 h.",
          "pt": "<strong>Preparação do pré-gel e modificação bioquímica:</strong> O pó de submucosa de intestino delgado suíno (SIS) foi preparado e modificado seguindo o protocolo relatado anteriormente¹². Resumidamente, o pó de SIS (obtido conforme o protocolo descrito em²⁹) foi solubilizado a 4 mg/mL em solução de ácido acético glacial 0,5 M (PanReac AppliChem, Chicago, IL, EUA) e 1 mg/mL de pepsina suína (PanReac AppliChem, Chicago, IL, EUA) sob agitação magnética vigorosa à temperatura ambiente por 48 h. Uma solução funcional de ácido metacrílico (MA, Sigma-Aldrich, St. Louis, MO, EUA; excesso molar de 1:20 em relação às aminas livres no SIS), cloridrato de 1-etil-3-(3-dimetilaminopropil)carbodiimida (EDC, Sigma-Aldrich; razão molar de 1:1 em relação ao MA) e N-hidroxissuccinimida (NHS, Sigma-Aldrich; razão molar de 1:1 em relação ao MA) foi preparada em N,N-dimetilformamida (DMF) e aquecida por 15 min a 40 °C sob agitação magnética constante. A solução funcional foi misturada ao pré-gel de SIS (razão volumétrica de 1:1) por 24 h sob agitação magnética constante a 4 °C. O hidrogel de SIS modificado com MA (SISMA) foi dialisado contra ácido acético 0,25 M por 48 h com 100 vezes o volume de SISMA e liofilizado por 96 h."
        },
        {
          "id": "p-met-3",
          "type": "paragraph",
          "category": "method",
          "noteId": "note-6",
          "en": "<strong>Hydrogel preparation:</strong> The formulation and the measurement of rheological properties of the SISMA hydrogel have been previously reported by our research group¹². Briefly, a functional solution (pH 8.5) consisting of DMEM Low Glucose (BioWest S.A.S., Nuaillé, França) suplementado com 0.1% (w/v) riboflavin (RF, Sigma-Aldrich) and 0.1 M Tris-HCl (PanReac AppliChem) was prepared. Lyophilized SISMA was resuspended at 40 mg/mL in 0.02 M glacial acetic acid. The DMEM and SISMA solutions were mixed at a 1:1 volume ratio for 15 min under constant magnetic stirring at 4 °C. Rheological properties were measured using a Discovery Series Hybrid Rheometer-1 (TA Instruments, New Castle, DE, USA) with parallel plate geometry, 20 mm gap between plates, shear rates from 0.01 to 200 1/s at 1% strain and room temperature. The resulting plot of viscosity (η) versus shear rate (γ) was fit to the power law η = Kγⁿ⁻¹, where η corresponds to the viscosity, γ to the shear rate, and K and n to shear thinning coefficients.",
          "pt": "<strong>Preparação do hidrogel:</strong> A formulação e a medição das propriedades reológicas do hidrogel SISMA foram relatadas anteriormente pelo nosso grupo de pesquisa¹². Resumidamente, preparou-se uma solução funcional (pH 8,5) composta por DMEM de baixa glicose (BioWest S.A.S., Nuaillé, França) suplementado com 0,1% (p/v) de riboflavina (RF, Sigma-Aldrich) e Tris-HCl 0,1 M (PanReac AppliChem). O SISMA liofilizado foi ressuspenso a 40 mg/mL em ácido acético glacial 0,02 M. As soluções de DMEM e SISMA foram misturadas na razão volumétrica de 1:1 por 15 min sob agitação magnética constante a 4 °C. As propriedades reológicas foram medidas utilizando um reômetro Discovery Series Hybrid Rheometer-1 (TA Instruments, New Castle, DE, EUA) com geometria de placas paralelas, espaçamento de 20 mm entre as placas, taxas de cisalhamento de 0,01 a 200 1/s a 1% de deformação e temperatura ambiente. O gráfico resultante da viscosidade (η) versus taxa de cisalhamento (γ) foi ajustado à lei de potência η = Kγⁿ⁻¹, onde η corresponde à viscosidade, γ à taxa de cisalhamento e K e n aos coeficientes de pseudoplasticidade."
        },
        {
          "id": "h-met-3",
          "type": "subheading",
          "en": "Binding of the SISMA hydrogel to the viral material",
          "pt": "Ligação do hidrogel SISMA ao material viral"
        },
        {
          "id": "p-met-4",
          "type": "paragraph",
          "category": "method",
          "noteId": "note-14",
          "en": "<strong>Yellow fever virus vaccine (YFV):</strong> YFV (Stamaril, Sanofi Pasteur, Lyon, France) containing live attenuated virus strain 17D-204 propagated in chick embryos with 1000 infectious units (IU) LD50 was diluted to a concentration of 5000 copies/mL using Eqs. (1) and (2)³⁰: 1 IU = 1.91 PFU (Eq. 1); Log10 PFU/mL = (0.974 × Log10 copies/mL) − 2.807 (Eq. 2). A YFV to DMEM-SISMA (20:80 (v/v)) mixture was made and stored at −20 °C until further use. <mark class='hl hl-method' data-note='note-14'>This concentration was selected to simulate a clinically relevant viral load commonly observed in early symptomatic stages of infection and lies above the lower detection threshold of standard RT-qPCR assays³¹,³², ensuring reliable detection while avoiding signal saturation.</mark><br/><br/><strong>SARS-CoV-2 viral material (SARS-CoV-2):</strong> SARS-CoV-2 (AccuPlex™ SARS-CoV-2 Reference Material Kit, SeraCare Life Sciences Inc., Milford, MA, USA) at a concentration of 5000 copies/mL was mixed with DMEM-SISMA (20:80 (v/v)). The final solution was stored at −20 °C until further use. The selected viral load corresponds to the working dilution of the certified reference material and mirrors the concentration used for YFV to ensure consistency across assays and traceability to international reference standards.",
          "pt": "<strong>Vacina contra o vírus da febre amarela (YFV):</strong> A vacina YFV (Stamaril, Sanofi Pasteur, Lyon, França), contendo cepa viral viva atenuada 17D-204 propagada em embriões de galinha com 1.000 unidades infecciosas (UI) DL50, foi diluída para uma concentração de 5.000 cópias/mL utilizando as Eqs. (1) e (2)³⁰: 1 UI = 1,91 UFP (Eq. 1); Log10 UFP/mL = (0,974 × Log10 cópias/mL) − 2,807 (Eq. 2). Preparou-se uma mistura de YFV para DMEM-SISMA (20:80 (v/v)), armazenada a −20 °C até o uso posterior. <mark class='hl hl-method' data-note='note-14'>Essa concentração foi selecionada para simular uma carga viral clinicamente relevante comumente observada nos estágios sintomáticos iniciais da infecção e situa-se acima do limiar inferior de detecção dos ensaios padrão de RT-qPCR³¹,³², assegurando detecção confiável e evitando saturação de sinal.</mark><br/><br/><strong>Material viral de SARS-CoV-2 (SARS-CoV-2):</strong> O SARS-CoV-2 (AccuPlex™ SARS-CoV-2 Reference Material Kit, SeraCare Life Sciences Inc., Milford, MA, EUA) na concentração de 5.000 cópias/mL foi misturado com DMEM-SISMA (20:80 (v/v)). A solução final foi armazenada a −20 °C até o uso posterior. A carga viral selecionada corresponde à diluição de trabalho do material de referência certificado e espelha a concentração utilizada para o YFV, garantindo consistência entre os ensaios e rastreabilidade aos padrões internacionais de referência."
        },
        {
          "id": "h-met-4",
          "type": "subheading",
          "en": "3D printed nasopharyngeal cavity & Standardized collection/release protocols",
          "pt": "Cavidade nasofaríngea impressa em 3D e protocolos padronizados de coleta/liberação"
        },
        {
          "id": "p-met-5",
          "type": "paragraph",
          "category": "method",
          "noteId": "note-6",
          "en": "<strong>3D printed nasopharyngeal cavity:</strong> A three-dimensional digital reconstruction of the nasopharyngeal cavity was built from computed tomography (CT) images of anonymous adult patients from the open-access NIH Database (USA), using Mimics and 3-Matic software packages (Materialise, Belgium). Soft tissue structures and bones were segmented considering Hounsfield radiodensity units of +700 for cancellous bone and +3000 for dense bone³³. The anatomical model was co-printed on the Stratasys Objet260 Connex 1 3D printer (Stratasys, MN) at the Center for Modeling and 3D Printing (Fundación Cardioinfantil - Instituto de Cardiología, Bogotá, Colombia). Flexible, translucent material (Agilus30™) was used for the soft tissues, and rigid, blue material (VeroBlue™) was used for the bones.<br/><br/><strong>Standardization of collection test in the 3D printed cavity and tube:</strong> 200 µL of SISMA hydrogel was deposited on the nasopharyngeal area within the cavity (or in an Eppendorf tube for benchmarking). Following CDC recommendations for upper respiratory tract sampling³⁴, each swab was weighed before insertion through the nostril, parallel to the palate, until resistance indicated correct positioning. Once in contact with the hydrogel, the swabs were rotated 5 times clockwise and counter-clockwise, maintaining contact with the cavity wall for 10 s. Post-rotation, swabs were carefully removed and reweighed. Sample collection efficacy was calculated by the mass difference between pre- and post-swabbing (Student's t-test, n = 5).<br/><br/><strong>Release test standardization:</strong> Both Heicon and commercial swabs, post-collection, were broken at the predesign breakpoint and immersed in 300 µL of viral transport medium (VTM). The VTM mixtures were transferred into a FLUOstar Omega microplate for absorbance (Abs) reading at 405 nm. Released percentage was calculated as: ((Sample Abs − NC Abs) / (PC Abs − NC Abs)) × 100 (n = 5).",
          "pt": "<strong>Cavidade nasofaríngea impressa em 3D:</strong> Uma reconstrução digital tridimensional da cavidade nasofaríngea foi construída a partir de imagens de tomografia computadorizada (TC) de pacientes adultos anônimos do banco de dados de acesso aberto do NIH (EUA), utilizando os pacotes de software Mimics e 3-Matic (Materialise, Bélgica). As estruturas de tecidos moles e ossos foram segmentadas considerando unidades de radiodensidade de Hounsfield de +700 para osso esponjoso e +3.000 para osso denso³³. O modelo anatômico foi coimpresso na impressora 3D Stratasys Objet260 Connex 1 (Stratasys, MN) no Centro de Modelagem e Impressão 3D (Fundación Cardioinfantil - Instituto de Cardiología, Bogotá, Colômbia). Utilizou-se material flexível e translúcido (Agilus30™) para os tecidos moles e material rígido azul (VeroBlue™) para os ossos.<br/><br/><strong>Padronização do teste de coleta na cavidade impressa em 3D e em tubo:</strong> Depositaram-se 200 µL de hidrogel SISMA na área nasofaríngea no interior da cavidade (ou em um tubo Eppendorf como referência comparativa). Seguindo as recomendações do CDC para amostragem do trato respiratório superior³⁴, cada swab foi pesado antes da inserção através da narina, paralelamente ao palato, até que a resistência indicasse o posicionamento correto. Uma vez em contato com o hidrogel, os swabs foram rotacionados 5 vezes no sentido horário e anti-horário, mantendo contato com a parede da cavidade por 10 s. Após a rotação, foram cuidadosamente removidos e pesados novamente. A eficácia de coleta foi calculada pela diferença de massa antes e após a coleta (teste t de Student, n = 5).<br/><br/><strong>Padronização do teste de liberação:</strong> Após a coleta, tanto os swabs Heicon quanto os comerciais foram quebrados no ponto de quebra pré-projetado e imersos em 300 µL de meio de transporte viral (VTM). As misturas foram transferidas para uma microplaca FLUOstar Omega para leitura de absorbância (Abs) a 405 nm. A porcentagem de liberação foi calculada por: ((Abs da Amostra − Abs do CN) / (Abs do CP − Abs do CN)) × 100 (n = 5)."
        },
        {
          "id": "h-met-5",
          "type": "subheading",
          "en": "Viral RNA extraction & RT-qPCR testing",
          "pt": "Extração de RNA viral e testes de RT-qPCR"
        },
        {
          "id": "p-met-6",
          "type": "paragraph",
          "category": "method",
          "noteId": "note-9",
          "en": "<strong>Viral RNA extraction:</strong> 200 µL of VTM-SISMA-YFV or VTM-SISMA-SARS-CoV-2 were treated with 25 µL of proteinase K at room temperature and 200 µL of lysis buffer (vortexed 15 s, incubated at 56 °C for 15 min). RNA purification followed the Monarch Total RNA Miniprep kit protocol (gDNA removal column at 16,000 × g for 30 s, 97% ethanol precipitation, RNA wash buffers, DNase I treatment for 15 min, priming buffer, and final elution in 30 µL nuclease-free water). RNA concentration was quantified at 260/280 nm using a DS-11 spectrophotometer (DeNovix, USA; n = 10).<br/><br/><strong>RT-qPCR testing:</strong> For YFV, a 15 µL reaction comprised 0.6 µL forward primer (GGGACTAGCGTGATCATTGA), 0.6 µL reverse primer (GAATAACTTTTTCCCGCTATCCGT)³⁵ (0.4 µM), 0.75 µL enzyme mix, 7.5 µL reaction mix, and 5.25 µL YFV RNA (Luna Universal One-Step RT-qPCR Kit; green channel). For SARS-CoV-2, the Luna SARS-CoV-2 RT-qPCR Multiplex Assay Kit was used (3.75 µL enzyme mix, 1.5 µL primer/probe mix, 2.25 µL nuclease-free water, and 7.5 µL SARS-CoV-2 RNA, alongside positive plasmid N-gene control and negative control). Cycling: reverse transcription at 55 °C for 10 min, initial denaturation at 95 °C for 1 min, followed by 40 cycles of 95 °C for 10 s and 60 °C for ~30 s. Fluorophores for SARS-CoV-2 monitored N2 (green/FAM), human RNase P (red/Cy5), and N1 (yellow/HEX) (n = 10 for YFV; n = 3 for SARS-CoV-2).",
          "pt": "<strong>Extração de RNA viral:</strong> Trataram-se 200 µL de VTM-SISMA-YFV ou VTM-SISMA-SARS-CoV-2 com 25 µL de proteinase K à temperatura ambiente e 200 µL de tampão de lise (vórtex por 15 s, incubação a 56 °C por 15 min). A purificação seguiu o protocolo do kit Monarch Total RNA Miniprep (coluna de remoção de gDNA a 16.000 × g por 30 s, etanol a 97%, lavagens de RNA, tratamento com DNase I por 15 min, tampão de preparação e eluição final em 30 µL de água livre de nucleases). A concentração foi quantificada em densidade óptica de 260/280 no espectrofotômetro DS-11 (DeNovix, EUA; n = 10).<br/><br/><strong>Testes de RT-qPCR:</strong> Para o YFV, o volume total de reação de 15 µL compreendeu 0,6 µL de primer forward (GGGACTAGCGTGATCATTGA), 0,6 µL de primer reverse (GAATAACTTTTTCCCGCTATCCGT)³⁵ (0,4 µM), 0,75 µL de mistura enzimática, 7,5 µL de mistura de reação e 5,25 µL de RNA de YFV (kit Luna Universal One-Step RT-qPCR; canal verde). Para o SARS-CoV-2, utilizou-se o kit Luna SARS-CoV-2 RT-qPCR Multiplex Assay (3,75 µL de mistura enzimática, 1,5 µL de mistura de primers/sondas, 2,25 µL de água livre de nucleases e 7,5 µL de RNA de SARS-CoV-2, além de controle positivo plasmidial do gene N e controle negativo). Ciclagem: transcrição reversa a 55 °C por 10 min, desnaturação inicial a 95 °C por 1 min, seguida de 40 ciclos de 95 °C por 10 s e extensão a 60 °C por ~30 s. Fluoróforos monitorados para SARS-CoV-2: região N2 (verde/FAM), gene humano RNase P (vermelho/Cy5) e região N1 (amarelo/HEX) (n = 10 para YFV e n = 3 para SARS-CoV-2)."
        }
      ]
    },
    {
      "id": "sec-references",
      "title": "Disponibilidade de Dados, Ética & Referências",
      "blocks": [
        {
          "id": "p-ref-1",
          "type": "paragraph",
          "category": "method",
          "noteId": "note-5",
          "en": "<strong>Data availability:</strong> The datasets generated during and/or analyzed during the current study are available from the corresponding author (ic.orjuela@uniandes.edu.co) on reasonable request.<br/><strong>Funding & Competing interests:</strong> Funded by Universidad de los Andes, Universidad del Rosario, Pontificia Universidad Javeriana, and MinCiencias Colombia (contract 744-2021, #223989785090). The authors declare no competing interests. Licensed under Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0).<br/><strong>Key References:</strong> [1] Hartigan et al., ACS Omega 2022; [2] Ghezzi et al., Diagnostics 2022; [3] Lai et al., Adv. Drug Deliv. Rev. 2009; [12] Rueda-Gensini et al., Int. J. Bioprint. 2021 (SISMA hydrogel); [14] Tay et al., JAMA Otolaryngol. 2021; [34] CDC Interim Guidelines for Collecting and Handling of Clinical Specimens for COVID-19 Testing (2022); [35] Fischer et al., Emerg. Infect. Dis. 2017 (YFV RT-qPCR).",
          "pt": "<strong>Disponibilidade de dados:</strong> Os conjuntos de dados gerados e/ou analisados durante o presente estudo estão disponíveis mediante solicitação razoável ao autor correspondente (ic.orjuela@uniandes.edu.co).<br/><strong>Financiamento e Conflitos de interesse:</strong> Financiado por Universidad de los Andes, Universidad del Rosario, Pontificia Universidad Javeriana e MinCiencias Colômbia (contrato 744-2021, #223989785090). Os autores declaram não haver conflitos de interesse. Licenciado sob Creative Commons CC BY-NC-ND 4.0.<br/><strong>Referências-chave:</strong> [1] Hartigan et al., ACS Omega 2022; [2] Ghezzi et al., Diagnostics 2022; [3] Lai et al., Adv. Drug Deliv. Rev. 2009; [12] Rueda-Gensini et al., Int. J. Bioprint. 2021 (hidrogel SISMA); [14] Tay et al., JAMA Otolaryngol. 2021; [34] Diretrizes Interinas do CDC para Coleta e Manuseio de Espécimes Clínicos para Testagem de COVID-19 (2022); [35] Fischer et al., Emerg. Infect. Dis. 2017 (RT-qPCR para YFV)."
        }
      ]
    }
  ]
};
