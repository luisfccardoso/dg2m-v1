import React, { useState } from 'react';
import { NavLink, Link, Routes, Route, useLocation } from 'react-router-dom';
import './Main.css';

const dimensions = [
  {
    id: 'open',
    title: 'Dados Abertos',
    description:
      'Esta dimensão não é obrigatória e é particularmente relevante para organizações do setor público ou empresas comprometidas com a transparência. Avalia a maturidade da organização na gestão, publicação e uso estratégico de dados abertos. A avaliação considera aspectos essenciais para garantir a transparência, reutilização, acessibilidade e interoperabilidade dos dados — fomentando a inovação e gerando impacto social positivo. Abrange áreas políticas, organizacionais e técnicas. Além disso, considera planejamento, priorização, licenciamento, versionamento e mecanismos de transparência ao longo do ciclo de vida dos dados abertos.',
    people:
      'Capacitação e engajamento organizacional em práticas e iniciativas de dados abertos.',
    policies:
      'Regras e diretrizes para padronizar, gerenciar, licenciar e disponibilizar dados de forma transparente e responsável.',
    capabilities:
      'Infraestrutura e ferramentas que apoiam a governança, o planejamento, o controle de versões e a publicação eficaz dos dados abertos.',
    levels: [
      {
        title: 'Nível 0: Não Iniciado',
        content:
          'Neste nível, não existem práticas ou políticas formais relacionadas a dados abertos. A organização carece de planejamento, priorização e compreensão do valor da transparência ou reutilização de dados.',
        people:
          'Não há papéis, responsabilidades ou treinamentos definidos relacionados a dados abertos.',
        policies:
          'Não existem políticas documentadas, padrões ou mecanismos de licenciamento para governança de dados abertos.',
        capabilities:
          'A infraestrutura é inexistente ou insuficiente para publicação, monitoramento ou promoção da transparência dos dados.',
        improvement:
          'Realizar sessões de treinamento iniciais sobre o valor e os propósitos dos dados abertos. Iniciar a identificação e organização de dados adequados para publicação e transparência.',
      },
      {
        title: 'Nível 1: Inicial – Ad Hoc, Não Estruturado e/ou em Aprendizado',
        content:
          'Iniciativas iniciais de dados abertos surgem de forma limitada e sem estrutura, muitas vezes desconectadas de estruturas organizacionais ou políticas mais amplas.',
        people:
          'Alguns papéis começam a ser definidos em áreas isoladas. Atividades de conscientização são realizadas, mas não institucionalizadas.',
        policies:
          'Licenças e diretrizes básicas são adotadas informalmente, mas sem consistência ou transparência.',
        capabilities:
          'Os dados são publicados de forma esporádica, com ferramentas limitadas para versionamento, feedback ou monitoramento de acesso.',
        improvement:
          'Estruturar e documentar iniciativas e processos existentes. Priorizar conjuntos de dados para publicação com base em impacto e potencial de reutilização. Estabelecer diretrizes mínimas de versionamento e licenciamento.',
      },
      {
        title: 'Nível 2: Repetível – Práticas Emergentes, Iniciativas Incipientes e Transformação de Ativos',
        content:
          'Além das melhorias dos níveis anteriores, as práticas de dados abertos começam a se consolidar com responsabilidades organizacionais mais definidas e padrões emergentes de planejamento e publicação.',
        people:
          'Papéis e responsabilidades para dados abertos são estabelecidos nos departamentos relevantes. Programas iniciais de treinamento são implementados.',
        policies:
          'Padrões de metadados, políticas de licenciamento e publicação são introduzidos.',
        capabilities:
          'Ferramentas são adotadas para apoiar a publicação de dados, coleta de feedback e monitoramento da transparência.',
        improvement:
          'Expandir os programas de treinamento para incluir metodologias de planejamento e priorização. Adotar ferramentas que apoiem fluxos de publicação, versionamento e automação de licenciamento. Iniciar o alinhamento das práticas com padrões reconhecidos de dados abertos.',
      },
      {
        title: 'Nível 3: Definido – Estruturado e Padronizado',
        content:
          'Além das melhorias dos níveis anteriores, a publicação de dados abertos passa a ser sustentada por processos padronizados em toda a organização e alinhada com os objetivos estratégicos.',
        people:
          'As equipes são treinadas e participam consistentemente de iniciativas de dados abertos em diferentes departamentos.',
        policies:
          'As políticas são abrangentes e incorporam padrões nacionais ou internacionais de dados abertos. O planejamento e o versionamento fazem parte do ciclo de vida dos dados.',
        capabilities:
          'A infraestrutura permite publicação contínua, rastreamento, versionamento e integração com sistemas externos.',
        improvement:
          'Definir indicadores (KPIs) para medir impacto, transparência e reutilização dos dados. Realizar revisões periódicas de políticas para garantir conformidade com licenciamento e padrões. Promover colaboração interna e planejamento de conjuntos de dados futuros.',
      },
      {
        title: 'Nível 4: Gerenciado – Medido e Preditivo',
        content:
          'Além das melhorias dos níveis anteriores, os processos de dados abertos são monitorados continuamente e refinados com base em métricas. O planejamento estratégico e a coordenação entre departamentos estão consolidados.',
        people:
          'As equipes contribuem ativamente em ciclos de feedback e utilizam dashboards para monitorar o desempenho dos dados abertos.',
        policies:
          'As políticas são atualizadas regularmente com base em desempenho, feedback e evolução dos padrões.',
        capabilities:
          'A infraestrutura automatizada dá suporte à publicação em tempo real, controle de versões e relatórios de transparência.',
        improvement:
          'Expandir análises preditivas para antecipar demandas por dados, quando necessário. Aprimorar mecanismos de colaboração para priorização estratégica de conjuntos de dados. Reforçar o alinhamento da governança por meio de atualizações de políticas orientadas por feedback.',
      },
      {
        title: 'Nível 5: Otimizado – Inovação e Melhoria Contínua',
        content:
          'Além das melhorias dos níveis anteriores, os dados abertos são usados como ativo estratégico para impulsionar inovação, engajamento público e transparência sistêmica.',
        people:
          'As equipes promovem uma cultura de abertura e inovação baseada em dados tanto internamente quanto em redes externas.',
        policies:
          'As políticas são dinâmicas, com princípio de abertura por padrão ("open-by-default"), quando possível, e são comparadas regularmente com padrões globais.',
        capabilities:
          'A infraestrutura sustenta estratégias adaptativas de publicação, integração em tempo real de dados e APIs abertas com garantias claras de licenciamento e transparência.',
        improvement:
          'Fomentar parcerias para inovar com dados abertos. Investir em ferramentas adequadas para automação, análise de impacto e engajamento com o público. Evoluir continuamente a governança com base no feedback da sociedade e da organização.',
      },
    ],
  },
];

const Dimensions = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLevel, setActiveLevel] = useState(0);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      <header className="main-header">
        <h1>Dimensões do DG2M</h1>
        <p>
          Para avaliar os níveis de maturidade, foram desenvolvidas seis dimensões as quais estão disponíveis abaixo.
        </p>
      </header>

      <div className="dimensions-wrapper">
        <button className="hamburger" onClick={toggleMenu}>
          ☰ Dimensões
        </button>

        <nav className={`sidebar ${menuOpen ? 'open' : 'closed'}`}>
          <ul className="nav-links1">
            <li><Link to="/strategy">Estratégia e Governança de Dados</Link></li>
            <li><Link to="/people">Equipes, Pessoas e Estrutura Organizacional</Link></li>
            <li><Link to="/formalization">Formalização e Processos de Gestão de Dados</Link></li>
            <li><Link to="/quality">Qualidade dos Dados</Link></li>
            <li><Link to="/infrastructure">Infraestrutura de Dados</Link></li>
            <li>
              <NavLink to="/open" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Dados Abertos
              </NavLink>
            </li>
          </ul>
        </nav>

        <main className="dimension-content">
          {(
            <>
              {dimensions.map((dim) => (
                <section key={dim.id}>
                  <h2>{dim.title}</h2>
                  <p>{dim.description}</p>

                  <p><strong>Aspectos principais avaliados:</strong></p>
                  <ul>
                    <li><strong>Pessoas:</strong> {dim.people}</li>
                    <li><strong>Políticas:</strong> {dim.policies}</li>
                    <li><strong>Capacidades:</strong> {dim.capabilities}</li>
                  </ul>

                  <div className="level-selector">
                    {dim.levels.map((level, index) => (
                      <button
                        key={index}
                        className={index === activeLevel ? 'selected' : ''}
                        onClick={() => setActiveLevel(index)}
                      >
                        {`Nível ${index}`}
                      </button>
                    ))}
                  </div>

                  <div className="level-detail">
                    <h4>{dim.levels[activeLevel].title}</h4>
                    <p>{dim.levels[activeLevel].content}</p>
                    <ul>
                      <li><strong>Pessoas:</strong> {dim.levels[activeLevel].people}</li>
                      <li><strong>Políticas:</strong> {dim.levels[activeLevel].policies}</li>
                      <li><strong>Capacidades:</strong> {dim.levels[activeLevel].capabilities}</li>
                    </ul>
                    <p><strong>Melhorias e práticas sugeridas:</strong> {dim.levels[activeLevel].improvement}</p>
                  </div>
                </section>
              ))}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dimensions;
