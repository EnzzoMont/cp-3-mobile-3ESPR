# 🚀 FIAP - Checkpoint 3 (CP 3) - Cadastro de Alunos e Professores

Este projeto é uma aplicação mobile desenvolvida em **React Native com Expo** para a entrega do Checkpoint 3, utilizando navegação guiada passo a passo (multi-step form) e gerenciamento de estado avançado.

## ✨ Destaques da Implementação

* **Estrutura Profissional:** Organização do código em pastas `components`, `screens`, `navigation`, `context`, e `styles`.
* **Gerenciamento de Estado:** Uso da **Context API** (Hooks) para armazenar os dados do formulário de forma global e persistente.
* **Navegação:** Implementação de **Bottom Tab Navigator** para separar Alunos e Professores, e **Stack Navigators** para gerenciar os fluxos de 3 passos.
* **Estilização:** Aplicação de um tema baseado nas cores da **FIAP** e componentes reutilizáveis para consistência de design.

## 📋 Campos Essenciais do Formulário

| Sessão | Passos | Campos Chave |
| :--- | :--- | :--- |
| **Aluno** | 3 Passos (Dados Pessoais, Contato, Curso) | Foto, Nome, RM, Telefone, Email, Endereço, Turma, Estágio |
| **Professor** | 3 Passos (Dados Pessoais, Contato, Acadêmico) | Foto, Nome, RP, Telefone, Email, Disciplina, Unidade, Tipo de avaliação |

## 🛠️ Como Executar o Projeto

1.  **Instalação de Dependências (no terminal):**
    ```bash
    npm install
    ```

2.  **Iniciar o Servidor:**
    ```bash
    npx expo start
    ```

3.  **Visualizar:** Use o aplicativo Expo Go no seu dispositivo móvel ou um emulador.
