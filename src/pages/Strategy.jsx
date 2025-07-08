import React, { useState } from 'react';
import { NavLink, Link, Routes, Route, useLocation } from 'react-router-dom';
import './Main.css';

const dimensions = [
  {
    id: 'dataStrategy',
    title: 'Estratégia e Governança de Dados',
    description:
      'Esta dimensão avalia como as organizações alinham seus objetivos estratégicos com práticas estruturadas de governança de dados. Esse alinhamento é essencial para garantir a segurança, privacidade, qualidade e uso ético dos dados, além de estabelecer estruturas e diretrizes que possibilitem uma governança eficiente e sustentável. Além disso, esta dimensão considera o desenvolvimento de metodologias para a implementação de projetos, a integração entre equipes de TI e de negócio, e a adoção de métricas que apoiam a tomada de decisões orientada por dados. Para refletir uma maturidade abrangente em governança, ela também incorpora indicadores como alocação orçamentária, patrocínio executivo, visão estratégica, planejamento de dados, alinhamento de políticas e integração na tomada de decisões. Inclui ainda a definição de papéis de curadoria, participação ativa na governança, gestão de riscos e conformidade, e aspectos de privacidade.',
    people:
      'Avalia o engajamento das equipes, competências e papéis na definição e aplicação de estratégias e práticas de governança de dados, incluindo curadoria e patrocínio executivo.',
    policies:
      'Refere-se a diretrizes e estruturas que garantem segurança dos dados, conformidade, privacidade e uso ético, ao mesmo tempo que promovem alinhamento estratégico e gestão de riscos.',
    capabilities:
      'Abrange ferramentas e tecnologias que apoiam a governança de dados, o planejamento de dados, a aplicação de políticas e sua integração nos processos de decisão organizacional.',
    levels: [
      {
        title: 'Nível 0: Não Iniciado',
        content:
          'A organização não possui políticas, reflexões éticas ou práticas estruturadas de governança de dados. A estratégia de dados não é considerada nos objetivos organizacionais. Não há orçamento, planejamento ou alinhamento estratégico voltado aos dados.',
        people:
          'Não existem equipes responsáveis ou engajadas na governança de dados. Falta consciência sobre os riscos éticos do uso inadequado dos dados, e não há papéis de curadoria definidos.',
        policies:
          'Inexistência de diretrizes para governança, ética, privacidade, gestão de riscos ou qualidade dos dados. Nenhum alinhamento de políticas ou visão estratégica está presente.',
        capabilities:
          'Não há infraestrutura ou ferramentas para suportar processos básicos de governança de dados. Não existe participação em estruturas de governança ou integração à tomada de decisão.',
        improvement:
          'Sensibilizar as equipes sobre a importância da governança de dados por meio de treinamentos básicos. Realizar um diagnóstico inicial das fontes e formatos de dados existentes para identificar lacunas. Iniciar discussões sobre patrocínio executivo e necessidade orçamentária para governança de dados.',
      },
      {
        title: 'Nível 1: Inicial – Ad Hoc, Não Estruturado e/ou em Aprendizado',
        content:
          'A organização inicia seus primeiros esforços para criar políticas e processos de governança de dados, mas de forma reativa e não estruturada. O apoio executivo ainda é limitado e o planejamento orçamentário não está alinhado às iniciativas de dados.',
        people:
          'Alguns papéis são definidos em áreas específicas, mas sem clareza, alinhamento estratégico ou funções dedicadas de curadoria.',
        policies:
          'Diretrizes rudimentares começam a surgir, mas não abordam privacidade, conformidade de riscos ou participação na governança de forma abrangente.',
        capabilities:
          'Ferramentas básicas são utilizadas de forma isolada e há pouca integração aos processos organizacionais ou estruturas de decisão.',
        improvement:
          'Estabelecer uma equipe inicial para gerenciar diretrizes de governança de dados e papéis de curadoria. Desenvolver um plano de governança inicial com base em frameworks reconhecidos. Começar a alinhar os esforços de governança com a estratégia, as políticas e o planejamento organizacional.',
      },
      {
        title: 'Nível 2: Repetível – Práticas Emergentes, Iniciativas Incipientes e Transformação de Ativos',
        content:
          'Além das ações dos níveis anteriores, a governança de dados começa a se consolidar. O planejamento estratégico e as iniciativas de gestão de dados passam a ser reconhecidos nas rotinas organizacionais.',
        people:
          'As equipes recebem treinamentos iniciais para aplicar processos de governança. Papéis como curador/a de dados começam a surgir com responsabilidades definidas.',
        policies:
          'Políticas básicas relacionadas à qualidade dos dados, privacidade, conformidade de riscos e uso ético passam a ser padronizadas.',
        capabilities:
          'Ferramentas para controle de acesso, monitoramento de dados e aplicação de políticas são introduzidas. A participação inicial em decisões de governança começa a tomar forma.',
        improvement:
          'Formalizar políticas de segurança dos dados, privacidade e gestão de riscos. Integrar a governança de dados ao planejamento organizacional mais amplo. Alocar orçamento inicial e definir papéis claros de patrocínio.',
      },
      {
        title: 'Nível 3: Definido – Estruturado e Padronizado',
        content:
          'Além das ações dos níveis anteriores, as práticas de governança são padronizadas e alinhadas aos objetivos organizacionais. A visão estratégica e o alinhamento de políticas orientam as iniciativas com dados. O orçamento e o patrocínio executivo estão estabelecidos.',
        people:
          'Equipes multidisciplinares colaboram na implementação e monitoramento da governança de dados. Papéis de curador/a de dados são integrados às estruturas de governança.',
        policies:
          'Políticas garantem conformidade com normas internas e externas, cobrindo privacidade, ética, risco e alinhamento estratégico.',
        capabilities:
          'Ferramentas dão suporte ao monitoramento contínuo e à aplicação da governança. A governança de dados é integrada aos processos de tomada de decisão.',
        improvement:
          'Ampliar o uso de métricas de desempenho e conformidade para avaliar a eficácia da governança. Melhorar a participação na governança por diferentes áreas de negócio. Estabelecer conselhos de governança para promover o alinhamento entre áreas.',
      },
      {
        title: 'Nível 4: Gerenciado – Medido e Preditivo',
        content:
          'Além das ações dos níveis anteriores, a maturidade em governança é gerida por meio de KPIs claros, alocação de recursos e conformidade com riscos. O planejamento estratégico de dados está profundamente incorporado às operações.',
        people:
          'Equipes de governança monitoram ativamente métricas por meio de dashboards. As funções de curadoria são revistas e adaptadas às necessidades do negócio.',
        policies:
          'As políticas são atualizadas regularmente com base em dados de desempenho e nas regulamentações de privacidade e ética.',
        capabilities:
          'Ferramentas de governança permitem análise preditiva e melhoria contínua em conformidade e planejamento de dados.',
        improvement:
          'Refinar KPIs relacionados à governança de dados, privacidade e conformidade. Automatizar processos de governança sempre que possível. Reforçar o planejamento orçamentário alinhado aos objetivos estratégicos de dados.',
      },
      {
        title: 'Nível 5: Otimizado – Inovação e Melhoria Contínua',
        content:
          'Além das ações dos níveis anteriores, a governança e a estratégia de dados evoluem continuamente, adaptando-se a novas regulamentações, tecnologias e metas de negócio. Há forte apoio executivo e compromisso com recursos.',
        people:
          'As equipes lideram projetos inovadores de governança de dados. A participação na governança está enraizada em toda a organização.',
        policies:
          'As políticas são dinâmicas, promovendo conformidade ágil com legislações de privacidade e metas estratégicas.',
        capabilities:
          'Análises avançadas apoiam automação, governança preditiva e a tomada de decisão estratégica.',
        improvement:
          'Criar laboratórios de inovação focados em modelos e tecnologias de governança. Fazer benchmarking com líderes em privacidade e estratégia de dados. Garantir a manutenção do patrocínio executivo e do orçamento para inovação contínua em governança.',
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
            <li>
              <NavLink to="/strategy" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Estratégia e Governança de Dados
              </NavLink>
            </li>
            <li><Link to="/people">Equipes, Pessoas e Estrutura Organizacional</Link></li>
            <li><Link to="/formalization">Formalização e Processos de Gestão de Dados</Link></li>
            <li><Link to="/quality">Qualidade dos Dados</Link></li>
            <li><Link to="/infrastructure">Infraestrutura de Dados</Link></li>
            <li><Link to="/open">Dados Abertos</Link></li>
          </ul>
        </nav>

        <main className="dimension-content">
          { (
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
