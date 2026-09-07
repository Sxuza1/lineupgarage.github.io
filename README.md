# LineUP Garage — Portfólio Profissional

Portfólio oficial da **LineUP Garage**, marca especializada em Vehicle Development para FiveM / Cfx.re, e do seu desenvolvedor **Lucas Souza**.

O site possui uma arquitetura estática leve, design editorial, foco tipográfico (Inter) e estética puramente focada no setor automotivo e 3D.

---

## 🗂 Estrutura do Projeto

```
/
├── index.html                 ← Página principal (Single-Page Application)
├── assets/
│   ├── css/style.css          ← Sistema de design e layout grid
│   ├── js/main.js             ← Interações (scroll, lightbox, idioma)
│   └── images/
│       ├── photos/            ← Imagens do portfólio automotivo
│       └── ...                ← Futuras expansões de assets
└── README.md
```

---

## ✏️ Como Atualizar o Conteúdo

### Atualizar Imagens do Portfólio (Seção Work)
Para inserir os trabalhos finalizados no portfólio:
1. Adicione a imagem na pasta `/assets/images/photos/`.
2. No arquivo `index.html`, procure a seção `<section id="work"...>`.
3. Substitua a `<div class="img-placeholder">...</div>` pela tag da imagem:
```html
<div class="work-item size-large reveal">
  <img src="assets/images/photos/nome-da-imagem.jpg" alt="Descrição" />
</div>
```
O sistema Grid automaticamente ajustará a imagem. O clique para abrir (Lightbox) funcionará automaticamente caso a tag `<img>` esteja presente.

### Atualizar Projetos / Servidores
Na seção `Projects & Servers`:
Basta duplicar o bloco `<div class="project-item reveal">...</div>` e preencher com o `Ano`, `Cargo/Função`, `Nome do Servidor` e `Descrição`.

### Adicionar as Logos da LineUP Garage
A nova estrutura removeu a aba isolada de logos para integrar a marca de forma orgânica. 
Para adicionar a logo real no topo do site:
1. No `<header class="navbar">`, substitua a tag `<span class="brand-name">LINEUP GARAGE</span>` por:
```html
<img src="assets/images/logo-horizontal.png" alt="LineUP Garage" height="30" />
```
*(Repita o mesmo processo no Footer, se desejar substituir o texto pela imagem).*

---

## 🌐 Hospedagem (GitHub Pages)

O site está preparado para ser hospedado gratuitamente via GitHub Pages:
1. Crie um repositório no GitHub (ex: `seuusuario.github.io`).
2. Envie todos os arquivos desta pasta para a branch `main`.
3. Vá em **Settings → Pages**.
4. Em **Source**, selecione a branch `main` e a raiz (`/ (root)`).
5. Salve. O site estará disponível na URL fornecida.

---

## 🚀 Visualização Local

Não é necessário rodar servidores locais (`npm run`, `php artisan`, etc.). 
Apenas dê um duplo clique no arquivo `index.html` e ele abrirá perfeitamente no navegador, consumindo os assets de forma relativa.
