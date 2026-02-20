import { cn } from '@/src/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className, hover = true }: CardProps) => {
  return (
    <div className={cn(
      'bg-white p-8 rounded-2xl border border-brand-primary/5 shadow-sm transition-all duration-300',
      hover && 'hover:shadow-xl hover:-translate-y-1',
      className
    )}>
      {children}
    </div>
  );
};
