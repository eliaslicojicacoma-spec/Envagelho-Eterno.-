import React from 'react';
import { Container } from '../components/layout/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Shield, Globe, Bell } from 'lucide-react';

const Home: React.FC = () => {
  const messages = [
    { icon: <Bell />, title: "Mensagem 1", desc: "Detalhes da primeira mensagem" },
    { icon: <Globe />, title: "Mensagem 2", desc: "Detalhes da segunda mensagem" },
    { icon: <Shield />, title: "Mensagem 3", desc: "Detalhes da terceira mensagem" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?blur=2" 
            alt="Hero" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>
        <Container className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl font-serif leading-none mb-8">Evangelho Eterno</h1>
            <p className="text-xl md:text-2xl text-gray-700 italic mb-10">Levar a palavra de Deus a cada nação, tribo e língua</p>
            <Button>Começar Estudo</Button>
          </motion.div>
        </Container>
      </section>

      {/* Messages Section */}
      <section className="section-padding bg-white">
        <Container>
          <SectionTitle title="Mensagens" subtitle="Apocalipse 14:6-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {messages.map((msg, idx) => (
              <Card key={idx} className="text-center p-6">
                <div className="mb-6">{msg.icon}</div>
                <h3 className="text-2xl font-serif mb-4">{msg.title}</h3>
                <p className="italic text-gray-500">{msg.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
