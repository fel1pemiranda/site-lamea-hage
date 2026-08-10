# Site-base - Lamea Hage

Este é um modelo de landing page estática para abrir diretamente no VS Code. Ele foi criado a partir do manual de identidade visual enviado, usando a paleta da marca:

- Taupe: `#9F8E7D`
- Cinza frio: `#4A4A4A`
- Bege suave: `#E5D9CB`

## Como abrir no VS Code

1. Extraia a pasta ou abra esta pasta no VS Code.
2. Abra o arquivo `index.html`.
3. Instale a extensão **Live Server** no VS Code.
4. Clique com o botão direito no `index.html` e escolha **Open with Live Server**.

Pronto: o navegador abrirá a primeira versão do site.

## O que você deve trocar antes de publicar

No arquivo `index.html`, use `Ctrl + F` e procure por:

- `(00) 00000-0000` - telefone e link do WhatsApp;
- `contato@seusite.com` - e-mail;
- `Rua da Clínica, 000` e `Sua cidade - UF` - endereço;
- `CRO-UF 00000` - registro profissional;
- os quatro cards da seção **Tratamentos** - adapte aos serviços verdadeiros da clínica.

O botão do WhatsApp está apenas como exemplo. Além de trocar o número visível, troque também o número dentro deste trecho:

```html
https://wa.me/5500000000000
```

Use somente números: `55` + DDD + telefone. Exemplo: um número com DDD 11 ficaria `5511999999999`.

## Arquivos principais

| Arquivo | Para que serve |
| --- | --- |
| `index.html` | Estrutura e textos da página. |
| `style.css` | Cores, tamanhos, layout e versão para celular. |
| `script.js` | Abre e fecha o menu no celular e mostra o ano atual. |
| `assets/images/clinica-lamea.png` | Imagem do consultório usada na primeira dobra da página. |

## Publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo `site-lamea-hage`.
2. Envie **todos** os arquivos desta pasta para ele. A pasta `assets` também precisa ser enviada.
3. No repositório, abra **Settings** > **Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main`, a pasta `/(root)` e clique em **Save**.
6. Aguarde alguns instantes. O GitHub mostrará o endereço público do site nessa mesma tela.

## Observação sobre a fonte

O manual informa a fonte Filson Soft. Neste modelo foi usada a combinação **Nunito Sans** (textos) + **Cormorant Garamond** (títulos), ambas do Google Fonts e parecidas com a sensação leve e elegante da identidade. Para usar uma fonte licenciada da marca no futuro, você precisará ter os arquivos da fonte e adicioná-los à pasta do projeto.
