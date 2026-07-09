<h1 align="center">Porsche Sales Dashboard</h1>

<p align="center">
  <strong>Dashboard interativo de vendas Porsche com tratamento de dados e visualização inteligente</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white" alt="Excel">
  <img src="https://img.shields.io/badge/Claude_Code-5A0FC8?style=for-the-badge&logo=anthropic&logoColor=white" alt="Claude Code">
</p>

---

## 📚 Sobre o Curso

Este projeto foi desenvolvido como parte do curso **"Aceleração: AI Reports com Excel, GPT Agents e Claude Code"**, um conteúdo exclusivo para inscritos no programa **Santander — Excel com IA e Claude**, desenvolvido especialmente para o período de seleção.

### O que aprendi no curso:

| Módulo | Conteúdo |
|--------|----------|
| **Módulo 01 — Introdução a AI Reports** | Entendimento sobre o que são AI Reports e como Excel, GPT Agents e Claude Code transformam a forma de analisar, estruturar e apresentar dados. Um novo paradigma de relatórios com IA e suas possibilidades práticas no dia a dia. |
| **Módulo 02 — Criando Agentes de Tratamento de Dados e Dashboards** | Criação de agentes que tratam bases de dados automaticamente e geram dashboards completos no Excel e em páginas compartilháveis, utilizando GPT Agents e Claude Code. |

### Competências desenvolvidas:

- 📊 **AI Reports** — Entendimento do novo paradigma de relatórios com inteligência artificial
- 📁 **Integração com Excel** — Tratamento e sanitização de bases de dados em `.xlsx`
- 🤖 **Implementação de IA** — Uso de GPT Agents e Claude Code para automatizar a criação de dashboards e o tratamento de dados

---

## 🏁 Sobre o Projeto

O **Porsche Sales Dashboard** é um dashboard web interativo e responsivo que analisa uma base de dados de vendas de veículos Porsche. O projeto contém duas versões que foram construído inteiramente com o auxílio do **Claude Code / ChatGPT / Antigravity**, que atuaram como agente de IA para:

1. **Ler e interpretar** a base de dados do Excel (`porshe_database_sanitized.xlsx`)
2. **Tratar e transformar** os dados brutos em métricas de negócio
3. **Gerar automaticamente** um dashboard completo em HTML, CSS e JavaScript
4. **Aplicar design premium** inspirado no site oficial da Porsche Brasil

### 🔍 O que o Dashboard responde:

| Pergunta de Negócio | Visualização |
|----------------------|--------------|
| Quais modelos geram maior faturamento? | Gráfico de barras horizontais (Top 10) |
| Como o método de pagamento influencia as vendas? | Gráfico Donut com distribuição |
| Existem cidades com preferência por determinados modelos? | Heatmap (8 cidades × 6 famílias) |
| Qual faixa de anos concentra mais vendas? | Timeline com barras verticais |
| Quais modelos possuem maior ticket médio? | Ranking dos Top 10 |

### 📌 KPIs Principais:

- **Total de Vendas** — Quantidade de transações registradas
- **Receita Total** — Faturamento acumulado
- **Ticket Médio** — Valor médio por transação
- **Cidade com Maior Faturamento** — Destaque geográfico
- **Modelo Mais Vendido** — Veículo com maior volume
- **Método de Pagamento Predominante** — Forma mais utilizada

---

## 🎨 Design & UI/UX

O design foi inspirado no [site oficial da Porsche Brasil](https://www.porsche.com/brazil/pt/), priorizando uma estética premium e sofisticada:

- 🖤 **Fundo grafite** (`#1B1B1B`) — identidade visual sóbria e elegante
- ✨ **Detalhes dourados** — gradientes `#C8A951 → #E8D48B` para acentos e destaques
- 🪟 **Glassmorphism** — cards com vidro fosco usando `backdrop-filter: blur()`
- 🔤 **Tipografia Inter** — fonte moderna importada do Google Fonts
- 💫 **Animações suaves** — transições com `cubic-bezier` e `fadeInUp`
- 📱 **Layout responsivo** — adaptável a desktop, tablet e mobile


## 🚀 Como Executar

1. **Clone ou baixe** este repositório
2. **Abra o arquivo** `index.html` diretamente no navegador

> Não requer servidor, instalação de dependências ou build. Basta abrir o HTML! 🎉

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso no Projeto |
|------------|----------------|
| **HTML5** | Estrutura semântica da página |
| **CSS3** | Estilização com glassmorphism, gradientes e animações |
| **JavaScript** | Processamento de dados, cálculos e renderização de gráficos |
| **Excel (.xlsx)** | Fonte de dados original das vendas |
| **Claude Code** | Agente de IA utilizado para desenvolver todo o projeto |
| **GPT Agents** | Conceitos de agentes aplicados ao tratamento de dados |

---

## 📊 Base de Dados

A base `porshe_database_sanitized.xlsx` contém **100 registros de vendas** com os seguintes campos:

| Campo | Descrição |
|-------|-----------|
| `sale_id` | Identificador único da venda |
| `SaleDateSanitized` | Data da venda |
| `customer_name` | Nome do cliente |
| `PorscheModelSanitized` | Modelo do veículo Porsche |
| `ModelYearSanitized` | Ano do modelo |
| `SalesPriceSanitized` | Preço de venda |
| `VehicleMileageSanitized` | Quilometragem do veículo |
| `PayMethodSanitized` | Método de pagamento |
| `CitySanitized` | Cidade |
| `StateSanitized` | Estado |
| `salesperson` | Vendedor responsável |
| `DeliveryStatusSanitized` | Status de entrega |

---

<p align="center">
  Desenvolvido com 🤖 <strong>Claude Code / ChatGPT / Antigravity</strong> durante o curso<br>
  <em>"Aceleração: AI Reports com Excel, GPT Agents e Claude Code"</em><br>
  Programa <strong>Santander — Excel com IA e Claude</strong>
</p>
