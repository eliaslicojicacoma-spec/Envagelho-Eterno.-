import React from 'react';
import { Container } from '../components/layout/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { motion } from 'framer-motion';

const Sobre: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <Container>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <SectionTitle 
            title="Nossa Missão" 
            subtitle="Proclamar o Evangelho Eterno a cada nação, tribo, língua e povo."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
            <div>
              <img src="https://picsum.photos/800/1000?seed=mission" alt="Mission" className="rounded-3xl shadow-2xl"/>
            </div>
            <div className="space-y-8">
              <h3 className="text-3xl font-serif">Quem Somos</h3>
              <p className="text-gray-700 leading-relaxed">
                Ministério Evangelho Eterno compartilha as verdades bíblicas fundamentais para o tempo do fim.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Sobre;
