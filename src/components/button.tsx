import styled from 'styled-components';

interface ButtonProps {
  $variant: 'primary' | 'outline' | 'secondary' | 'tertiary' | 'link';
  $big?: boolean;
}

export const Button = styled.button<ButtonProps>`
  color: ${(p) => {
    if (p.$variant === 'primary') return p.theme.colors.primaryText;
    if (p.$variant === 'outline') return p.theme.colors.primary;
    if (p.$variant === 'secondary') return p.theme.colors.secondaryText;
    if (p.$variant === 'tertiary') return p.theme.colors.tertiaryText;
    if (p.$variant === 'link') return p.theme.colors.text;
  }};
  background-color: ${(p) => {
    if (p.$variant === 'primary') return p.theme.colors.primary;
    if (p.$variant === 'outline') return p.theme.colors.primaryText;
    if (p.$variant === 'secondary') return p.theme.colors.secondary;
    if (p.$variant === 'tertiary') return p.theme.colors.tertiary;
    if (p.$variant === 'link') return 'transparent';
  }};
  border: ${(p) => {
    if (p.$variant === 'outline') return `1px solid`;
    if (p.$variant === 'link') return 'none';
    return `1px solid ${p.theme.colors[p.$variant]}`;
  }};
  border-radius: 4px;
  font-size: ${(p) => {
    if (p.$variant === 'link') return 'inherit';
    return '1.15rem';
  }};
  font-weight: ${(p) => {
    if (p.$big) return p.theme.fontWghts.regular;
    return p.theme.fontWghts.medium;
  }};
  min-width: ${(p) => {
    if (p.$variant === 'link') return 'max-content';
    if (p.$big) return '350px';
    return '150px';
  }};
  padding: ${(p) => {
    if (p.$variant === 'link') return 'unset';
    return '8px 44px';
  }};
`;
