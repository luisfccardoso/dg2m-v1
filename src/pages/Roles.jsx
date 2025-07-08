import React from 'react';
import './Main.css';

const Roles = () => {
  return (
    <div className="main-page">
      <header className="main-header">
        <h1>Principais Papéis no DG2M</h1>
        <p>Compreendendo Responsabilidades no Modelo de Maturidade</p>
      </header>

      <section className="main-section">
        <h2>Visão Geral</h2>
        <p>
          Uma governança de dados eficaz requer papéis e responsabilidades definidos.
          Cada papel contribui de forma única para o sucesso das iniciativas de governança,
          garantindo que os dados sejam gerenciados como um ativo importante na organização.
        </p>
      </section>

      <section className="main-section">
        <h2>Nível Estratégico</h2>
        <p>
          No nível estratégico, o <strong>CDO</strong> (Chief Data Officer ou Diretor/a de Governança de Dados) é responsável por alinhar as iniciativas de dados aos objetivos de negócio e supervisionar a implementação da governança.
          Esse papel colabora com patrocinadores executivos e conselhos de qualidade de dados para garantir que os ativos de dados apoiem as metas organizacionais.
        </p>
        <p>  
          <strong>Comitês de Dados</strong>—como Comitês Diretivos e Conselhos de Qualidade—supervisionam a qualidade dos dados, a aplicação de políticas e decisões estratégicas.
        </p>
        <p>
          <strong>Especialistas em Privacidade e Conformidade</strong> (por exemplo, Encarregados de Proteção de Dados) garantem a conformidade com as leis de proteção de dados e os protocolos internos de segurança,
          assegurando o uso legal e ético dos dados.
        </p>
      </section>

      <section className="main-section">
        <h2>Nível Operacional/Tático</h2>
        <p>
          <strong>Curadores/as de Dados</strong> gerenciam a qualidade, as definições e o ciclo de vida dos dados nos domínios de negócio—garantindo consistência e confiabilidade.
        </p>
        <p>
          <strong>Gerentes de Equipes de Dados</strong> coordenam as equipes de projetos de dados, gerenciando recursos, cronogramas e entregas.
        </p>
        <p>
          <strong>Consumidores de Dados</strong> utilizam os produtos de dados para análise, tomada de decisão e operações. Seus feedbacks frequentemente orientam as prioridades da governança e melhorias nos sistemas.
        </p>
      </section>

      <section className="main-section">
        <h2>Nível Técnico</h2>
        <p>
          <strong>Analistas de Dados e Cientistas de Dados</strong> analisam, interpretam e modelam dados para gerar relatórios e documentos que informam e fortalecem as estratégias de negócio. Esses profissionais geralmente atuam em equipes de analytics sob a liderança de profissionais de ciência de dados ou da gestão estratégica.
        </p>
        <p>
          <strong>Especialistas em TI e Bancos de Dados</strong> garantem o desempenho, a disponibilidade e a segurança da infraestrutura de dados.
          Eles também oferecem suporte essencial aos Curadores/as de Dados e outros papéis.
        </p>
      </section>

      <section className="main-section">
        <h2>Integração de Papéis ao Longo dos Níveis de Maturidade</h2>
        <p>
          À medida que a organização evolui, esses papéis tornam-se cada vez mais definidos, integrados e fortalecidos—contribuindo para uma cultura de dados mais ágil, ética e orientada por valor.
        </p>
      </section>
    </div>

  );
};

export default Roles;