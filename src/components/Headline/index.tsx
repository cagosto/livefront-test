import { PropsWithChildren } from 'react';

type headers = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadlineProps {
  /** The HTML heading element to render (semantic structure) */
  type: headers;
  /** The visual styling variant to apply (visual appearance) */
  variant: headers;
  /** Additional CSS classes to apply to the heading */
  classes?: string;
}

/**
 * A flexible heading component that separates semantic HTML structure from visual appearance.
 *
 * This component allows you to specify both the HTML element type and the visual styling variant
 * independently, enabling proper heading hierarchy while maintaining desired visual design.
 *
 * @example
 * ```tsx
 * // Basic usage - semantic and visual alignment
 * <Headline type="h1" variant="h1">Main Title</Headline>
 *
 * // Semantic vs visual separation for proper hierarchy
 * <Headline type="h2" variant="h1">Section Title That Looks Like Main Title</Headline>
 *
 * // With additional custom classes
 * <Headline type="h3" variant="h2" classes="text-blue-600 mb-4">
 *   Custom Styled Heading
 * </Headline>
 * ```
 */
export default function Headline({
  type,
  variant,
  children,
  classes = '',
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
  const titleStyles = `${styles} ${classes}`.trim();

  switch (type) {
    case 'h1':
      return <h1 className={titleStyles}>{children}</h1>;
    case 'h2':
      return <h2 className={titleStyles}>{children}</h2>;
    case 'h3':
      return <h3 className={titleStyles}>{children}</h3>;
    case 'h4':
      return <h4 className={titleStyles}>{children}</h4>;
    case 'h5':
      return <h5 className={titleStyles}>{children}</h5>;
    case 'h6':
      return <h6 className={titleStyles}>{children}</h6>;
    default:
      return <h2 className={titleStyles}>{children}</h2>;
  }
}

