# Reformou

Site de portfólio de uma empresa fictícia de reformas residenciais, desenvolvido para demonstrar habilidades em React e design de interfaces. O conceito central é a comparação visual antes e depois de ambientes reformados, apresentada de forma interativa.

**Link do site:** https://guibuenoc.github.io/Reformou/

## Sobre o projeto

O site simula a página de uma empresa de reformas chamada Reformou, com foco em mostrar transformações reais de ambientes. O visitante consegue comparar o antes e o depois de cada ambiente deslizando uma barra sobre a imagem, além de explorar investimento estimado, prazos e uma linha do tempo completa da obra.

## Funcionalidades

- **Slider de comparação antes/depois** no hero e em cada ambiente, com moldura fixa e imagens centralizadas
- **Tour por ambientes:** cozinha, sala, banheiro, fachada e quarto, com abas de navegação
- **A obra em números:** indicadores com contagem animada ao entrar na tela
- **Calculadora de orçamento:** seleção de ambiente e área em m² com estimativa de valor em tempo real
- **Linha do tempo da obra:** quatro fases apresentadas em caixas conectadas
- **Seção da equipe:** três profissionais com foto, cargo e apresentação
- **Formulário de contato** com validação de campos e mensagem de sucesso
- **Menu fixo** com logo e navegação por seções
- **Layout responsivo** adaptado para celular

## Tecnologias

- React 18
- Vite
- CSS puro (sem frameworks, com variáveis customizadas)
- img-comparison-slider (biblioteca para o comparador de imagens)
- Git e GitHub para versionamento
- GitHub Pages para hospedagem

## Identidade visual

Paleta extraída do logotipo:

| Cor | Uso |
| --- | --- |
| `#233830` | Verde escuro principal, cor de ação |
| `#18221E` | Verde profundo, textos e detalhes |
| `#EFEADD` | Creme/sand, fundo das caixas |
| `#F7F4EC` | Off-white, fundo geral |

Tipografia: Archivo Black para títulos e Space Grotesk para o corpo.

## Como rodar o projeto

É necessário ter o Node.js instalado na máquina.

```bash
# clonar o repositório
git clone https://github.com/SEU-USUARIO/nome-do-repositorio.git

# entrar na pasta
cd nome-do-repositorio

# instalar as dependências
npm install

# rodar em modo de desenvolvimento
npm run dev
