[![TypeORM](https://img.shields.io/badge/TypeORM-^0.2.33-blue.svg)](https://typeorm.io/)
[![Node.js](https://img.shields.io/badge/Node.js-^14.17.0-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-^17.0.2-blue.svg)](https://reactjs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-^8.0.0-blue.svg)](https://www.mysql.com/)
[![Axios](https://img.shields.io/badge/Axios-^0.21.4-yellow.svg)](https://axios-http.com/)

# Projeto de API em Rest

Este é um projeto de exemplo de uma API REST feito em Django, desenvolvido como parte do desafio proposto pela Generation Brasil e Potencia Tech.

## Link de acesso ao projeto

https://django-potencia-tech.onrender.com/api/v1/docs/

## Sumário:

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Setup](#setup)
- [Abordagem](#abordagem)
- [License](#license)

## Sobre o Projeto

Este projeto demonstra a criação de uma API RESTful usando o framework Django. O objetivo é fornecer um exemplo simples para configurar e executar o projeto, bem como detalhes sobre a integração contínua com o GitHub Actions.

## Tecnologias

Este projeto faz uso de diversas tecnologias e ferramentas, incluindo:

- **Django**: Um framework web em Python amplamente utilizado para o desenvolvimento de aplicações web.

- **Docker**: Uma plataforma que permite a criação, implantação e execução de aplicativos em contêineres.

- **GitHub Actions**: Uma funcionalidade do GitHub que permite a automação de fluxos de trabalho, como integração contínua e implantação contínua.

- **Swagger**: Uma estrutura de código aberto que ajuda a projetar, construir, documentar e consumir serviços da web RESTful.

- **Django Rest Framework (DRF)**: Uma poderosa e flexível toolkit para criar Web APIs em Django.

- **Pytest**: Uma estrutura de teste que torna mais fácil escrever testes simples e escaláveis em Python.

- **Poetry**: Uma ferramenta para gerenciar dependências e ambientes virtuais em projetos Python.

- **Render**: Uma plataforma de implantação e hospedagem para aplicativos web e serviços.

- **Makefile**: Um arquivo de configuração que define comandos e alvos personalizados, como construção, execução de testes e linting, simplificando tarefas de desenvolvimento.

## Setup

### Iniciando o Projeto Localmente

Para iniciar o projeto localmente, siga as instruções abaixo:

1. **Clone o Repositório**: Faça uma cópia deste repositório em sua máquina local.

2. **Configuração do Ambiente Python**: Certifique-se de que você possui um ambiente Python configurado. Use algum gerenciador de pacotes para instalar as dependências.

   > Como `pip`:
   >
   > ```bash
   > pip install -r requirements.txt
   > ```
   >
   > Ou `poetry`:
   >
   > ```bash
   > poetry install
   > ```

3. **Migrações do Banco de Dados**: Aplique as migrações para configurar o banco de dados:

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

4. **Inicie o Servidor de Desenvolvimento do Django**:

   ```bash
   python manage.py runserver
   ```

5. Agora, você pode acessar o projeto em [http://localhost:8000/](http://localhost:8000/).

### Iniciando o Projeto com Docker

Se preferir usar Docker, siga estas etapas:

1. **Clone o Repositório**: Clone o repositório em sua máquina local.

2. Certifique-se de que o Docker e o Docker Compose estejam instalados.

3. Execute o seguinte comando para construir o ambiente de desenvolvimento:

   ```bash
   make build
   ```

4. Após a conclusão da construção, inicie o servidor do Django com o seguinte comando:

   ```bash
   make start
   ```

5. Agora, você pode acessar o projeto em [http://localhost:8000/](http://localhost:8000/).

## Abordagem

- **Test-Driven Development (TDD)**: Implementamos a abordagem TDD com Pytest, escrevendo testes unitários antes de desenvolver a funcionalidade real. E também separamos o banco de dados de prod e de testes. Isso ajudou a garantir a confiabilidade do código e facilitou futuras modificações. 

- **Design Patterns**: Aplicamos padrões de design reconhecidos, como o modelo MTV (Model-Template-View) do Django, que promove a separação de responsabilidades em nossa aplicação.

- **Versionamento de API**: Para garantir a estabilidade e compatibilidade, adotamos um sistema de versionamento de API. Isso permite a evolução controlada da API sem impactar os clientes existentes.

- **Estilo de Código**: Seguimos um estilo de código consistente e claro, aderindo às diretrizes PEP 8 para Python. Utilizamos nomes de variáveis descritivos e optamos pelo uso de comentários significativos quando necessário.

- **Integração Contínua**: Implementamos um pipeline de integração contínua usando o GitHub Actions. Isso nos permitiu automatizar testes, análise de código e implantação.

- **Commits Semânticos**: Adotamos a prática de commits semânticos para manter um histórico de alterações legível e informativo.

## LICENÇAS DE UTILIZAÇÃO

Este projeto é distribuído sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter detalhes completos sobre os termos da licença.

Sinta-se à vontade para contribuir com melhorias ou correções para este projeto. Basta abrir uma issue ou enviar um pull request.
