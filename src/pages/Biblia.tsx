import React from 'react';

const Biblia: React.FC = () => {
  return (
    <main className="pt-20 px-8">
      <h2 className="text-4xl font-bold mb-6 text-center">Bíblia Online</h2>
      <iframe
        src="https://www.bible.com/pt/bible/127/GEN.1.ARC"
        title="Bíblia Online"
        className="w-full h-[80vh] border-0 rounded-lg shadow-lg"
      ></iframe>
      <p className="text-center mt-4 text-gray-600 text-sm">
        Visualização fornecida pela YouVersion Bible
      </p>
    </main>
  );
};

export default Biblia;
