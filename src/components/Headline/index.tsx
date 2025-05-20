import { PropsWithChildren } from 'react';

type headers = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadlineProps {
  type: headers;
  variant: headers;
  classes?: string;
}

export default function Headline({
  type,
  variant,
  children,
  classes,
}: PropsWithChildren<HeadlineProps>) {
  const variantStyles = {
    h1: 'text-2xl md:text-3xl lg:text-4xl font-bold',
    h2: 'text-xl md:text-2xl lg:text-3xl font-bold',
    h3: 'text-lg md:text-xl lg:text-2xl font-semibold',
    h4: 'text-base md:text-lg lg:text-xl font-semibold',
    h5: 'text-sm md:text-base lg:text-lg font-medium',
    h6: 'text-xs md:text-sm lg:text-base font-medium',
  };
  // Get the styles based on variant
  const styles = variantStyles[variant];

  switch (type) {
    case 'h1':
      return <h1 className={`${styles} ${classes}`}>{children}</h1>;
    case 'h2':
      return <h2 className={`${styles} ${classes}`}>{children}</h2>;
    case 'h3':
      return <h3 className={`${styles} ${classes}`}>{children}</h3>;
    case 'h4':
      return <h4 className={`${styles} ${classes}`}>{children}</h4>;
    case 'h5':
      return <h5 className={`${styles} ${classes}`}>{children}</h5>;
    case 'h6':
      return <h6 className={`${styles} ${classes}`}>{children}</h6>;
    default:
      return <h2 className={`${styles} ${classes}`}>{children}</h2>;
  }
}

