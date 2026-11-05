# Biblioteca de Beco

Plataforma pessoal de leitura, offline, em um único arquivo HTML. O acervo foi montado a partir do pensamento do canal **Baka Gaijin**.

- 64 livros de não ficção, numa trilha em 8 fases
- 90 livros de ficção: sci-fi, cyberpunk, terror, Dostoiévski, literatura japonesa e clássicos brasileiros
- Meta de 30 min/dia para cada trilha, com cronômetro, sequência de dias e heatmap
- Para cada livro: lido, nota, favorito, quero ler, anotações e citações
- Mapa dos conceitos do Baka com links para os vídeos
- Salvamento automático no navegador e backup em .json, .md ou num arquivo vinculado
- Sincronização entre aparelhos (PC, iPad, celular) por um gist secreto do GitHub

## Como usar

- **Online:** https://laramva.github.io/biblioteca-de-beco/. No iPad ou iPhone, use Compartilhar → Adicionar à Tela de Início. Depois da primeira visita, ele abre também sem internet.
- **Offline no PC:** abra `Biblioteca de Beco.html` no Chrome ou no Edge.

Para ter os mesmos dados em todos os aparelhos, ligue a sincronização na aba **Backup → Disquete D**.

## Estrutura

- `Biblioteca de Beco.html`: o app completo, gerado a partir de `fonte/`
- `fonte/app.html`: interface e lógica
- `fonte/dados.js`: acervo, fases, conceitos e vídeos
- `index.html`, `manifest.webmanifest`, `sw.js`, `icon-*.png`: site publicado, ícone e funcionamento offline

Para regerar o arquivo final, substitua `/*__DADOS__*/` em `fonte/app.html` pelo conteúdo de `fonte/dados.js`.
