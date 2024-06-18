import styled from 'styled-components';

interface ButtonProps {
  $variant: 'primary' | 'outline' | 'secondary' | 'tertiary';
  $big?: boolean;
}

export const Button = styled.button<ButtonProps>`
  color: ${(p) => {
    if (p.$variant === 'primary') return p.theme.colors.primaryText;
    if (p.$variant === 'outline') return p.theme.colors.primary;
    if (p.$variant === 'secondary') return p.theme.colors.secondaryText;
    if (p.$variant === 'tertiary') return p.theme.colors.tertiaryText;
  }};
  background-color: ${(p) => {
    if (p.$variant === 'primary') return p.theme.colors.primary;
    if (p.$variant === 'outline') return p.theme.colors.primaryText;
    if (p.$variant === 'secondary') return p.theme.colors.secondary;
    if (p.$variant === 'tertiary') return p.theme.colors.tertiary;
  }};
  border: ${(p) => {
    if (p.$variant === 'outline') return `1px solid`;
    return `1px solid ${p.theme.colors[p.$variant]}`;
  }};
  border-radius: 4px;
  font-size: 1.15rem;
  font-weight: ${(p) => {
    if (p.$big) return p.theme.fontWghts.regular;
    return p.theme.fontWghts.medium;
  }};
  min-width: ${(p) => {
    if (p.$big) return '350px';
    return '150px';
  }};
  padding: 8px 44px;
`;
