import { useTranslation } from 'react-i18next';
import { Container } from '@/src/components/layout/Container';
import { Button } from '@/src/components/ui/Button';
import { SectionTitle } from '@/src/components/ui/SectionTitle';
import { Card } from '@/src/components/ui/Card';
import { motion } from 'motion/react';
import { Shield, Globe, Bell } from 'lucide-react';

export const Home = () => {
  const { t } = useTranslation();

  const messages = [
    {
      icon: <Bell className="w-8 h-8 text-brand-accent" />,
      title: t('messages.first.title'),
      desc: t('messages.first.desc'),
    },
    {
      icon: <Globe className="w-8 h-8 text-brand-accent" />,
      title: t('messages.second.title'),
      desc: t('messages.second.desc'),
    },
    {
      icon: <Shield className="w-8 h-8 text-brand-accent" />,
      title: t('messages.third.title'),
      desc: t('messages.third.desc'),
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/spiritual/1920/1080?blur=2" 
            alt="Hero background" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-paper via-transparent to-brand-paper" />
        </div>
        
        <Container className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-7xl md:text-9xl font-serif leading-none mb-8 tracking-tighter">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-brand-primary/70 font-serif italic mb-10 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <Button size="lg" className="rounded-none px-12">
              {t('hero.cta')}
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Messages Section */}
      <section className="section-padding bg-white">
        <Container>
          <SectionTitle 
            title={t('messages.title')} 
            subtitle="Apocalipse 14:6-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-full bg-brand-accent/10">
                    {msg.icon}
                  </div>
                  <h3 className="text-2xl font-serif mb-4">{msg.title}</h3>
                  <p className="text-brand-primary/60 leading-relaxed italic">
                    "{msg.desc}"
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <Container>
          <div className="bg-brand-primary text-white p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-serif mb-8">Preparado para o que vem?</h2>
              <p className="text-white/60 max-w-2xl mx-auto mb-12 text-lg">
                Junte-se a nós no estudo das profecias e na preparação para o breve retorno de Cristo.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary rounded-none px-12">
                Começar Estudo
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
