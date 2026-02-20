import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from './Container';
import { motion } from 'motion/react';

export const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/sobre' },
    { name: t('nav.contact'), path: '/contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <Container>
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-serif font-bold tracking-tighter">
            EVANGELHO<span className="text-brand-accent">ETERNO</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className="relative text-sm font-medium uppercase letter-spacing-1 hover:text-brand-accent transition-colors"
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-accent"
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
};
