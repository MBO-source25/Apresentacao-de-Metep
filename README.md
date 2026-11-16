# Leitor Interativo de Artigo Científico (GitHub Pages)

Este repositório contém o código-fonte completo do site interativo para estudo aprofundado do artigo:
**"A new in vitro pre-clinical method for testing SARS-CoV-2 nasopharyngeal swabs"** (*Scientific Reports*, 2025; 15:37101).

## Arquivos do Projeto
- `index.html` — Estrutura principal do site (Leitor Bilíngue, PICO, Tabelas de Dados e Análise Crítica).
- `style.css` — Estilização limpa e responsiva com grifos semânticos por categoria.
- `data.js` — Texto integral do artigo (Inglês original + Tradução em Português), grifos e anotações didáticas.
- `app.js` — Lógica de alternância de idioma, filtro de grifos, sincronização bidirecional entre texto e notas, busca e exportação JSON.

## Como colocar no ar pelo GitHub Pages
1. Crie um repositório no GitHub e envie os arquivos `index.html`, `style.css`, `data.js`, `app.js` e `README.md`.
2. Vá em **Settings > Pages**.
3. Em **Source**, selecione **Deploy from a branch**, escolha `main` e `/ (root)`, e clique em **Save**.
