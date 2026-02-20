import { cn } from '@/src/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionTitle = ({ title, subtitle, centered = true, className }: SectionTitleProps) => {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <h2 className="text-4xl md:text-5xl font-serif mb-4 tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-brand-primary/60 max-w-2xl mx-auto text-lg italic font-serif">
          {subtitle}
        </p>
      )}
      <div className={cn('h-px w-24 bg-brand-accent mt-6', centered && 'mx-auto')} />
    </div>
  );
};
