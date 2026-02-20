import React from 'react';

const Home: React.FC = () => {
  return (
    <main className="pt-20">
      <section className="hero-section h-[90vh] flex items-center justify-center bg-gray-100">
        <h1 className="text-5xl font-bold text-center">Bem-vindo ao Evangelho Eterno</h1>
      </section>
      <section className="py-20 text-center">
        <p>Conteúdo inicial da Home. Aqui você pode adicionar slides, mensagens e chamadas de ação.</p>
      </section>
    </main>
  );
};

export default Home;
