import { Container } from '@/src/components/layout/Container';
import { SectionTitle } from '@/src/components/ui/SectionTitle';
import { Button } from '@/src/components/ui/Button';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contacto = () => {
  return (
    <div className="pt-32 pb-20">
      <Container>
        <SectionTitle 
          title="Entre em Contacto" 
          subtitle="Estamos aqui para ouvir você e estudar juntos a Palavra de Deus."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20">
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-brand-accent/10 rounded-xl">
                <Mail className="w-6 h-6 text-brand-accent" />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Email</h4>
                <p className="text-brand-primary/70">eliaslicojicacoma@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-brand-accent/10 rounded-xl">
                <MapPin className="w-6 h-6 text-brand-accent" />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Localização</h4>
                <p className="text-brand-primary/70">Disponível Online para o Mundo</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-50">Nome</label>
                <input type="text" className="w-full bg-white border border-brand-primary/10 rounded-xl p-4 focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-50">Email</label>
                <input type="email" className="w-full bg-white border border-brand-primary/10 rounded-xl p-4 focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-50">Mensagem</label>
                <textarea rows={6} className="w-full bg-white border border-brand-primary/10 rounded-xl p-4 focus:outline-none focus:border-brand-accent transition-colors resize-none"></textarea>
              </div>
              <div className="md:col-span-2">
                <Button className="w-full md:w-auto rounded-none px-12">Enviar Mensagem</Button>
              </div>
            </motion.form>
          </div>
        </div>
      </Container>
    </div>
  );
};
