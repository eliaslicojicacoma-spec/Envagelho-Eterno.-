import { Container } from './Container';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-brand-primary text-white py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-serif mb-6">Evangelho Eterno</h3>
            <p className="text-white/60 leading-relaxed">
              Dedicados a proclamar a verdade presente e as mensagens dos três anjos de Apocalipse 14.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Contacto</h4>
            <p className="text-white/60">eliaslicojicacoma@gmail.com</p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Siga-nos</h4>
            <div className="flex space-x-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all cursor-pointer">F</div>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all cursor-pointer">I</div>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all cursor-pointer">Y</div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} Evangelho Eterno. {t('footer.rights')}
        </div>
      </Container>
    </footer>
  );
};
