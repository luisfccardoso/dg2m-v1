import React, { useState } from 'react';
import { NavLink, Link, Routes, Route, useLocation } from 'react-router-dom';
import './Main.css';

const dimensions = [
  {
    id: 'infrastructure',
    title: 'Infraestrutura de Dados',
    description:
      'Esta dimensão avalia a capacidade tecnológica da organização para armazenar, processar e integrar dados de forma eficiente. A avaliação abrange aspectos relacionados à escalabilidade, segurança e conformidade da infraestrutura de TI utilizada na gestão de dados. Além disso, inclui a avaliação da prontidão da infraestrutura, agilidade, escalabilidade, consistência arquitetural, uso de plataformas em nuvem (quando necessário), adoção de padrões de metadados e mecanismos de registro e relatórios. Considerações sobre privacidade, segurança, gestão de riscos e capacidades de integração também são essenciais para garantir robustez e alinhamento regulatório.',
    people:
      'Capacidade técnica das equipes para gerenciar e evoluir a infraestrutura em conformidade com os requisitos da arquitetura de dados.',
    policies:
      'Existência de diretrizes que garantam escalabilidade, privacidade, segurança, integração e conformidade da infraestrutura com padrões internos e externos.',
    capabilities:
      'Disponibilidade, prontidão e adequação das tecnologias e plataformas de TI — incluindo registro e gestão de metadados — para suportar operações de dados seguras, escaláveis e integradas.',
    levels: [
      {
        title: 'Nível 0: Não Iniciado',
        content:
          'Neste nível, a infraestrutura é fragmentada, desatualizada e incapaz de lidar com grandes volumes de dados. Não há prontidão, integração ou consistência arquitetural para sustentar operações escaláveis com dados.',
        people:
          'Falta de conhecimento sobre ferramentas de dados, plataformas e boas práticas arquiteturais.',
        policies:
          'Não existem políticas formais para governança de TI, integração ou prontidão da infraestrutura.',
        capabilities:
          'Infraestrutura fragmentada com múltiplas fontes de dados isoladas, ausência de mecanismos de registro/relatórios e tecnologias desatualizadas.',
        improvement:
          'Promover workshops para aumentar a conscientização técnica sobre governança de dados e prontidão da infraestrutura. Mapear os recursos tecnológicos existentes e identificar lacunas críticas em escalabilidade e integração.',
      },
      {
        title: 'Nível 1: Inicial – Ad Hoc, Não Estruturado e/ou em Aprendizado',
        content:
          'Neste estágio, a organização começa a experimentar componentes básicos de infraestrutura de forma reativa e exploratória, sem consistência arquitetural.',
        people:
          'Algumas equipes técnicas experimentam soluções de armazenamento, análise e serviços em nuvem ou "on premises".',
        policies:
          'Diretrizes rudimentares existem para uso de ferramentas, mas sem padronização ou cobertura de riscos/segurança.',
        capabilities:
          'Soluções isoladas e localizadas são implementadas com integração ou escalabilidade limitadas.',
        improvement:
          'Estabelecer um comitê inicial para definir diretrizes de uso de ferramentas. Documentar práticas relacionadas à infraestrutura e monitoramento de logs. Explorar práticas iniciais de gestão de metadados e controles de segurança.',
      },
      {
        title: 'Nível 2: Repetível – Práticas Emergentes, Iniciativas Incipientes e Transformação de Ativos',
        content:
          'Além das melhorias dos níveis anteriores, a infraestrutura começa a amadurecer. Plataformas de dados, padrões de metadados e controles de risco são introduzidos para apoiar uma integração mais ampla.',
        people:
          'As equipes recebem treinamentos sobre plataformas de dados.',
        policies:
          'Políticas básicas para integração de dados, privacidade e gestão de riscos são adotadas.',
        capabilities:
          'Ferramentas de análise gerenciadas centralmente e soluções de metadados são introduzidas; o registro e relatório começam a ser implementados.',
        improvement:
          'Investir em plataformas de dados e infraestrutura integrada para análise. Definir padrões para consistência arquitetural e registro/relatórios. Reforçar práticas de risco e segurança.',
      },
      {
        title: 'Nível 3: Definido – Estruturado e Padronizado',
        content:
          'Além das melhorias dos níveis anteriores, a infraestrutura torna-se padronizada e alinhada à arquitetura corporativa, requisitos de privacidade e padrões de desempenho.',
        people:
          'As equipes colaboram proativamente no monitoramento de desempenho e no alinhamento arquitetural.',
        policies:
          'Diretrizes bem definidas garantem privacidade dos dados, escalabilidade da infraestrutura, recuperação de desastres e segurança.',
        capabilities:
          'Uso de plataformas de dados, registro e relatórios centralizados e gestão de metadados sustentam a consistência em nível corporativo.',
        improvement:
          'Implementar KPIs para monitoramento da agilidade, disponibilidade e desempenho da infraestrutura. Realizar auditorias regulares sobre conformidade, privacidade e controles de risco. Alinhar a infraestrutura com estratégias de continuidade de negócios.',
      },
      {
        title: 'Nível 4: Gerenciado – Medido e Preditivo',
        content:
          'Além das melhorias dos níveis anteriores, a infraestrutura é monitorada por métricas preditivas. Agilidade, gestão de riscos e capacidades de integração são continuamente avaliadas.',
        people:
          'As equipes utilizam dashboards para acompanhar desempenho, registros e indicadores de risco em tempo real ou quase real.',
        policies:
          'As políticas de governança são atualizadas com base em métricas de desempenho e revisões de conformidade.',
        capabilities:
          'Uma infraestrutura de dados suporta operações seguras e escaláveis; o monitoramento automatizado está em operação.',
        improvement:
          'Otimizar sistemas de monitoramento preditivo e de alertas. Refinar estratégias de integração com plataformas e serviços de terceiros, quando necessário. Automatizar fluxos de trabalho de segurança, conformidade e mitigação de riscos.',
      },
      {
        title: 'Nível 5: Otimizado – Inovação e Melhoria Contínua',
        content:
          'Além das melhorias dos níveis anteriores, a infraestrutura é tratada como um habilitador estratégico dinâmico de inovação. Integra-se perfeitamente com operações e suporta escalabilidade autônoma e conformidade.',
        people:
          'As equipes pesquisam, adotam e refinam continuamente tecnologias e práticas emergentes de infraestrutura.',
        policies:
          'Políticas adaptativas governam atualizações de infraestrutura, privacidade, segurança e integração em tempo real.',
        capabilities:
          'Soluções otimizam os serviços computacionais com agilidade, escalabilidade e desempenho; os sistemas de metadados e registros são totalmente automatizados, quando necessário.',
        improvement:
          'Realizar benchmarking com líderes em agilidade, segurança e integração de infraestrutura. Investir em ferramentas de orquestração de infraestrutura com tecnologias adequadas para melhorar escalabilidade e resposta. Promover aprendizado contínuo para equipes de infraestrutura e DevOps.',
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
            <li>
              <NavLink to="/infrastructure" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Infraestrutura de Dados
              </NavLink>
            </li>
            <li><Link to="/open">Dados Abertos</Link></li>
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
