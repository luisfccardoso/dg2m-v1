import React, { useState } from 'react';
import { NavLink, Link, Routes, Route, useLocation } from 'react-router-dom';
import './Main.css';

const dimensions = [
  {
    id: 'quality',
    title: 'Qualidade dos Dados',
    description:
      'Esta dimensão avalia a capacidade organizacional de garantir alta qualidade dos dados por meio de critérios bem definidos e práticas padronizadas. Seu escopo inclui avaliação, melhoria contínua, conscientização e monitoramento da qualidade dos dados, considerando disponibilidade, acessibilidade, confiabilidade, perfilamento de dados, políticas de privacidade e segurança, mecanismos de feedback e integração com ferramentas de plataformas de dados. Também considera o alinhamento com estruturas de governança, expectativas de qualidade e práticas de melhoria.',
    people:
      'Conscientização e treinamento sobre critérios de qualidade de dados, expectativas e impacto da qualidade na tomada de decisão.',
    policies:
      'Diretrizes e padrões para manter a qualidade dos dados, incluindo privacidade, segurança e alinhamento com a governança.',
    capabilities:
      'Ferramentas e processos para monitorar, perfilar, avaliar e melhorar a qualidade dos dados, incluindo plataformas de dados e mecanismos de feedback.',
    levels: [
      {
        title: 'Nível 0: Não Iniciado',
        content:
          'Neste nível, não existem iniciativas formais para avaliar ou gerenciar a qualidade dos dados. A organização carece de conscientização, práticas e ferramentas para lidar com dimensões básicas como disponibilidade e confiabilidade.',
        people:
          'Não há conscientização sobre a importância da qualidade dos dados.',
        policies:
          'Não existem diretrizes ou padrões de qualidade.',
        capabilities:
          'Não há ferramentas ou sistemas para monitorar ou garantir a qualidade dos dados.',
        improvement:
          'Promover a conscientização sobre o impacto da baixa qualidade dos dados. Identificar áreas críticas onde problemas de qualidade afetam o desempenho do negócio.',
      },
      {
        title: 'Nível 1: Inicial – Ad Hoc, Não Estruturado e/ou em Aprendizado',
        content:
          'Neste estágio, a organização reconhece problemas de qualidade dos dados, mas os aborda de forma reativa e sem processos estruturados. Os esforços iniciais são desconectados das normas de governança ou privacidade/segurança.',
        people:
          'Equipes técnicas identificam problemas, mas não compreendem suas causas raízes.',
        policies:
          'Diretrizes rudimentares podem existir, mas não são aplicadas de forma consistente.',
        capabilities:
          'A qualidade é avaliada apenas de forma reativa, sem métricas ou processos consistentes.',
        improvement:
          'Mapear as fontes de dados e identificar possíveis causas de problemas de qualidade. Introduzir diretrizes básicas de qualidade e critérios como consistência e completude. Iniciar programas de treinamento para aumentar a conscientização técnica sobre qualidade dos dados. Realizar benchmarking com líderes em governança de dados para descobrir práticas eficazes.',
      },
      {
        title: 'Nível 2: Repetível – Práticas Emergentes, Iniciativas Incipientes e Transformação de Ativos',
        content:
          'Além das melhorias dos níveis anteriores, a organização começa a medir e monitorar aspectos específicos da qualidade dos dados, como perfilamento, disponibilidade e acessibilidade. Ferramentas de plataformas de dados e mecanismos iniciais de feedback podem ser introduzidos.',
        people:
          'Equipes técnicas e de negócios reconhecem a importância da qualidade dos dados para a eficiência e eficácia organizacional.',
        policies:
          'Critérios iniciais como completude e precisão são estabelecidos para avaliação.',
        capabilities:
          'Ferramentas básicas para perfilamento e validação de dados começam a ser implementadas, e o impacto da baixa qualidade em áreas de negócio específicas começa a ser avaliado.',
        improvement:
          'Desenvolver métricas claras e mensuráveis para avaliar a qualidade dos dados. Implementar ferramentas de perfilamento para identificar problemas. Ampliar os critérios de qualidade para incluir impacto nos negócios, confiabilidade e acessibilidade. Estabelecer processos formais para limpeza e validação regulares dos dados.',
      },
      {
        title: 'Nível 3: Definido – Estruturado e Padronizado',
        content:
          'Além das melhorias dos níveis anteriores, a qualidade dos dados torna-se um processo gerenciado e sistemático com diretrizes organizacionais alinhadas com políticas de governança, privacidade e segurança.',
        people:
          'As partes interessadas compreendem os impactos financeiros e reputacionais da baixa qualidade dos dados.',
        policies:
          'Diretrizes e padrões organizacionais claros são definidos e alinhados com políticas de privacidade, segurança e estruturas de governança.',
        capabilities:
          'Sistemas de benchmarking e monitoramento contínuo são introduzidos. Mecanismos de feedback são integrados para apoiar melhorias na qualidade.',
        improvement:
          'Formalizar os processos de avaliação e melhoria contínua da qualidade dos dados. Expandir o uso de ferramentas para monitoramento em tempo adequado. Garantir que os padrões sejam amplamente comunicados e aplicados. Utilizar mecanismos de feedback para orientar ajustes na qualidade.',
      },
      {
        title: 'Nível 4: Gerenciado – Medido e Preditivo',
        content:
          'Além das melhorias dos níveis anteriores, a organização monitora a qualidade dos dados com métricas e ferramentas estabelecidas, garantindo processos previsíveis e alinhamento com a governança interna e externa.',
        people:
          'As equipes compreendem as causas dos problemas de qualidade e como resolvê-los utilizando dados de desempenho.',
        policies:
          'As políticas organizacionais são alinhadas e baseadas em indicadores quantitativos e revisadas periodicamente para garantir alinhamento.',
        capabilities:
          'Ferramentas preditivas, dashboards de desempenho e sistemas automatizados de perfilamento apoiam a gestão proativa da qualidade.',
        improvement:
          'Realizar auditorias regulares para avaliar e ajustar métricas de qualidade. Implementar sistemas preditivos para antecipar e resolver problemas de qualidade. Monitorar expectativas e tendências de feedback de forma sistemática.',
      },
      {
        title: 'Nível 5: Otimizado – Inovação e Melhoria Contínua',
        content:
          'Além das melhorias dos níveis anteriores, a organização promove inovação contínua na qualidade dos dados utilizando tecnologias avançadas, quando necessário, e alinha as práticas de qualidade aos objetivos estratégicos.',
        people:
          'Equipes capacitadas promovem melhoria contínua e inovação na qualidade dos dados em diferentes domínios.',
        policies:
          'Diretrizes dinâmicas e adaptáveis evoluem com mudanças organizacionais e tecnológicas.',
        capabilities:
          'Tecnologias de ponta aprimoram o perfilamento, a confiabilidade e o monitoramento em tempo real da qualidade. Ferramentas de plataformas de dados e mecanismos de feedback são totalmente integrados para sustentar a melhoria contínua.',
        improvement:
          'Investir em tecnologias emergentes para apoiar iniciativas de qualidade dos dados. Desenvolver parcerias para benchmarking de boas práticas em qualidade. Criar programas avançados de capacitação para equipes sobre práticas de qualidade. Avaliar continuamente o alinhamento com a governança e a relevância estratégica das métricas de qualidade.',
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
            <li>
              <NavLink to="/quality" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Qualidade dos Dados
              </NavLink>
            </li>
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
