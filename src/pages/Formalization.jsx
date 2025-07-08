import React, { useState } from 'react';
import { NavLink, Link, Routes, Route, useLocation } from 'react-router-dom';
import './Main.css';

const dimensions = [
  {
    id: 'formalization',
    title: 'Formalização e Processos de Gestão de Dados',
    description:
      'Esta dimensão avalia práticas relacionadas à gestão de metadados, dados mestres, arquitetura de dados, modelos de dados e proteção de dados. Seu objetivo é avaliar o nível de maturidade organizacional no uso e na governança de dados, promovendo eficiência operacional, alinhamento estratégico e conformidade regulatória. Além disso, esta dimensão inclui abordagens de desenvolvimento iterativas, práticas de metadados, controle de ciclo de vida, integração DevOps, padrões de documentação, licenciamento e identificação de riscos. Também enfatiza o alinhamento de processos internos com políticas internas e externas, bem como a implementação de mecanismos de monitoramento de processos e acompanhamento de desempenho.',
    people:
      'Avalia o conhecimento e a responsabilidade das equipes na aplicação de práticas de gestão de dados, incluindo documentação e controle de ciclo de vida.',
    policies:
      'Refere-se à existência de diretrizes e padrões claros para governança de dados, proteção, integração, práticas DevOps e licenciamento.',
    capabilities:
      'Envolve ferramentas, tecnologias e processos que apoiam a gestão de dados, integração, desenvolvimento iterativo, identificação de riscos e monitoramento de desempenho.',
    levels: [
      {
        title: 'Nível 0: Não Iniciado',
        content:
          'Neste nível, não existem práticas formais de gestão de dados ou políticas definidas. A organização carece de conscientização e infraestrutura para dar suporte a metadados, dados mestres ou controle de ciclo de vida.',
        people:
          'A equipe não possui conhecimento sobre conceitos básicos como metadados, dados mestres e proteção de dados.',
        policies:
          'Não existem políticas específicas para categorização, proteção ou integração de dados.',
        capabilities:
          'Não há ferramentas ou infraestrutura para gerenciar dados mestres ou metadados.',
        improvement:
          'Oferecer treinamentos básicos para conscientizar a equipe sobre a importância da gestão de dados. Realizar um levantamento inicial das fontes e formatos de dados existentes, identificando inconsistências e lacunas.',
      },
      {
        title: 'Nível 1: Inicial – Ad Hoc, Não Estruturado e/ou em Aprendizado',
        content:
          'Neste estágio, surgem esforços iniciais relacionados à gestão de dados de maneira fragmentada e reativa, sem alinhamento com políticas internas ou externas.',
        people:
          'Papéis começam a ser definidos em áreas isoladas, mas sem clareza ou alinhamento estratégico.',
        policies:
          'Políticas básicas são desenvolvidas, mas carecem de padronização, consideração de riscos ou foco em ciclo de vida.',
        capabilities:
          'Ferramentas básicas são utilizadas para atender a demandas pontuais de metadados e dados mestres.',
        improvement:
          'Criar uma equipe inicial de gestão de dados com apoio da alta gestão. Documentar processos existentes e identificar lacunas para formalização de políticas. Realizar benchmarking com líderes em governança de dados de outras organizações para descobrir práticas eficazes.',
      },
      {
        title: 'Nível 2: Repetível – Práticas Emergentes, Iniciativas Incipientes e Transformação de Ativos',
        content:
          'Além das melhorias dos níveis anteriores, práticas emergentes são introduzidas para metadados e dados mestres, juntamente com os primeiros passos em direção ao controle de ciclo de vida e padrões de documentação.',
        people:
          'As equipes reconhecem a importância de práticas padronizadas para eficiência organizacional.',
        policies:
          'Políticas básicas de gestão de dados mestres e proteção de dados começam a ser formalizadas.',
        capabilities:
          'Um repositório central para metadados e dados mestres é criado. Práticas de documentação começam a emergir.',
        improvement:
          'Implementar um repositório centralizado de metadados acessível a todas as áreas da organização. Desenvolver políticas organizacionais para governança e proteção de dados alinhadas às melhores práticas. Introduzir padrões iniciais de documentação e definir estágios do ciclo de vida dos dados.',
      },
      {
        title: 'Nível 3: Definido – Estruturado e Padronizado',
        content:
          'Além das melhorias dos níveis anteriores, as práticas de gestão de dados tornam-se estruturadas e padronizadas, com políticas para metadados, controle de ciclo de vida, integração com DevOps e identificação de riscos.',
        people:
          'As partes interessadas compreendem a importância de padrões claros para metadados, dados mestres e arquitetura integrada.',
        policies:
          'Políticas de qualidade, privacidade e segurança dos dados são formalizadas e amplamente adotadas. Considerações sobre riscos e licenciamento são incluídas.',
        capabilities:
          'Sistemas centralizados dão suporte à integração e ao monitoramento de metadados, dados mestres e pipelines DevOps.',
        improvement:
          'Expandir o uso de ferramentas para gestão de metadados e ciclo de vida. Criar um inventário central de fontes de dados e sistemas relacionados. Garantir que os padrões de documentação sejam aplicados de forma consistente entre as equipes.',
      },
      {
        title: 'Nível 4: Gerenciado – Medido e Preditivo',
        content:
          'Além das melhorias dos níveis anteriores, os processos de gestão de dados são governados por métricas de desempenho bem definidas e monitorados continuamente quanto à conformidade com políticas internas e externas.',
        people:
          'As equipes monitoram ativamente KPIs e métricas relacionadas à qualidade, uso e conformidade dos dados.',
        policies:
          'Políticas homogêneas são revisadas e atualizadas regularmente. O alinhamento com regulamentações internas e externas é assegurado.',
        capabilities:
          'Ferramentas possibilitam análise preditiva, monitoramento e integração de processos de avaliação de riscos, se necessário.',
        improvement:
          'Revisar periodicamente os KPIs para otimizar a gestão e integração de dados. Automatizar processos de documentação e auditoria. Reforçar mecanismos de controle de ciclo de vida e monitoramento de desempenho.',
      },
      {
        title: 'Nível 5: Otimizado – Inovação e Melhoria Contínua',
        content:
          'Além das melhorias dos níveis anteriores, a gestão de dados é tratada como uma função estratégica, continuamente aprimorada por meio de tecnologias inovadoras e integração total com DevOps.',
        people:
          'As equipes lideram iniciativas de inovação em modelagem de dados e integração com tecnologias emergentes.',
        policies:
          'As políticas são dinâmicas e continuamente adaptadas para apoiar o desenvolvimento ágil, novas regulamentações e processos iterativos.',
        capabilities:
          'Sistemas escaláveis dão suporte à integração em tempo real, acompanhamento de desempenho e mitigação de riscos por meio de tecnologias orientadas à automação, quando necessário.',
        improvement:
          'Realizar benchmarking com líderes do setor para aprimorar práticas de ciclo de vida e gestão de riscos. Investir em tecnologias que aprimorem automação e análise na governança. Otimizar fluxos de trabalho DevOps integrando gestão de metadados e monitoramento de desempenho ao longo do ciclo de desenvolvimento e análise de dados.',
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
            <li>
              <NavLink to="/formalization" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Formalização e Processos de Gestão de Dados
              </NavLink>
            </li>
            <li><Link to="/quality">Qualidade dos Dados</Link></li>
            <li><Link to="/infrastructure">Infraestrutura de Dados</Link></li>
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
