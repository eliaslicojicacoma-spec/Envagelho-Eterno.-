import { Container } from '@/src/components/layout/Container';
import { SectionTitle } from '@/src/components/ui/SectionTitle';
import { motion } from 'motion/react';

export const Sobre = () => {
  return (
    <div className="pt-32 pb-20">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <SectionTitle 
            title="Nossa Missão" 
            subtitle="Proclamar o Evangelho Eterno a cada nação, tribo, língua e povo."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-20">
            <div>
              <img 
                src="https://picsum.photos/seed/mission/800/1000" 
                alt="Mission" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-8">
              <h3 className="text-3xl font-serif">Quem Somos</h3>
              <p className="text-brand-primary/70 leading-relaxed text-lg">
                O ministério Evangelho Eterno nasceu com o propósito de compartilhar as verdades bíblicas fundamentais para o tempo do fim. Acreditamos que as Três Mensagens Angélicas de Apocalipse 14 são o último convite de Deus para a humanidade.
              </p>
              <p className="text-brand-primary/70 leading-relaxed text-lg">
                Nosso foco é o estudo profundo das profecias, a reforma de saúde e a preparação espiritual para o segundo advento de Jesus Cristo.
              </p>
              <div className="pt-8 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-4xl font-serif text-brand-accent mb-2">100%</h4>
                  <p className="text-sm uppercase tracking-widest font-bold opacity-50">Bíblico</p>
                </div>
                <div>
                  <h4 className="text-4xl font-serif text-brand-accent mb-2">Global</h4>
                  <p className="text-sm uppercase tracking-widest font-bold opacity-50">Alcance</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};
