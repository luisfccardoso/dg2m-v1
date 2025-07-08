import React from 'react';
import './Main.css'; 

const maturityLevels = [
  {
    title: 'Nível 0: Não Iniciado',
    description:
      'Neste estágio, a organização não possui iniciativas nem consciência em relação à governança de dados ou à ciência de dados. Não há reconhecimento do valor estratégico dos dados, e as decisões são tomadas sem qualquer apoio informacional estruturado.\n\nOrganizações neste nível carecem completamente de práticas e estruturas para a gestão de dados. A ausência de processos e de qualquer esforço voltado à governança dificulta que se obtenham os benefícios que uma gestão eficaz de dados poderia proporcionar.',
  },
  {
    title: 'Nível 1: Inicial – Ad Hoc, Não Estruturado e/ou em Aprendizado',
    description:
      'No nível inicial, as primeiras iniciativas relacionadas à gestão de dados começam a surgir, mas de maneira desorganizada e sem alinhamento estratégico. A organização está em uma fase de aprendizado, explorando ferramentas e tecnologias sem uma visão estruturada de longo prazo.\n\nAs decisões são reativas e baseadas na intuição, com projetos exploratórios ocasionais voltados à compreensão dos possíveis usos dos dados. No entanto, a falta de documentação e de processos padronizados limita a evolução dessas iniciativas.',
  },
  {
    title: 'Nível 2: Repetível – Práticas Emergentes, Iniciativas Incipientes e Transformação de Ativos',
    description:
      'Além dos avanços do estágio anterior, neste nível os dados passam a ser reconhecidos como um ativo estratégico, e a organização começa a utilizar ferramentas como dashboards e processos básicos para apoiar a tomada de decisões.\n\nO desenvolvimento de protótipos e os primeiros investimentos tecnológicos caracterizam esse nível. Algumas áreas começam a padronizar processos, e as decisões passam a se basear em informações extraídas dos dados. Contudo, a adoção dessas práticas ainda ocorre de maneira isolada dentro da organização, sem uma governança formal consolidada.',
  },
  {
    title: 'Nível 3: Definido – Estruturado e Padronizado',
    description:
      'Com base nos avanços dos estágios anteriores, neste nível a governança de dados torna-se parte integrante da estratégia organizacional, com processos bem definidos e documentados. A organização estabelece papéis e responsabilidades claros para a gestão de dados, promovendo uma abordagem estruturada e integrada entre diferentes áreas.\n\nA padronização dos processos permite maior eficiência e confiabilidade no uso dos dados. Além disso, ferramentas avançadas de análise e monitoramento começam a ser implementadas, aumentando a capacidade da organização de tomar decisões baseadas em dados.',
  },
  {
    title: 'Nível 4: Gerenciado – Medido e Preditivo',
    description:
      'Além dos avanços dos estágios anteriores, neste nível a organização atinge um controle significativo sobre seus processos de governança de dados, utilizando métricas quantitativas e indicadores estatísticos para monitorar, gerenciar e prever resultados.\n\nAs decisões tornam-se totalmente orientadas por dados, eliminando a subjetividade e reduzindo os riscos operacionais. A governança baseia-se em indicadores-chave de desempenho (KPIs), assegurando conformidade contínua e eficiência. Sistemas e processos são monitorados em tempo real para garantir que o desempenho esteja adequado e alinhado às necessidades do negócio.',
  },
  {
    title: 'Nível 5: Otimizado – Inovação e Melhoria Contínua',
    description:
      'Avançando, no nível mais avançado a governança de dados e a ciência de dados tornam-se ativos estratégicos, impulsionando a inovação e promovendo um ciclo de melhoria contínua baseado em aprendizado e análise preditiva.\n\nA organização utiliza processos altamente refinados, com métricas, indicadores e análises constantemente aprimorados para atender aos objetivos estratégicos. Soluções inovadoras são integradas entre os stakeholders e as cadeias de valor, promovendo colaboração e alinhamento em toda a estrutura organizacional. Além disso, tecnologias avançadas e automação são amplamente utilizadas para otimizar operações e gerar vantagem competitiva.',
  },
];

const Level = () => {
  return (
    <div className="main-content">
      <header className="main-header">
        <h1>Níveis de Maturidade em Governança de Dados</h1>
        <p>
          Este modelo define seis níveis de maturidade que ajudam as organizações a avaliar e aprimorar suas práticas de governança de dados. Cada nível representa uma etapa na jornada que vai de práticas de dados não estruturadas até uma governança de dados totalmente otimizada e orientada pela inovação.
        </p>
      </header>
      
      <div className="level-container">
        {maturityLevels.map((level, index) => (
          <section className="main-section">
            <div key={index} className="level-box">
              <h2>{level.title}</h2>
              <p>{level.description}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Level;
