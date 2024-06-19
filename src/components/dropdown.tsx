import { useClickOutside } from '@/hooks/use-click-outside';
import { ChevronDown } from '@styled-icons/boxicons-regular';
import { ReactNode, useRef, useState } from 'react';
import styled from 'styled-components';

import { Button } from './button';

interface DropdownProps {
  variant: 'primary' | 'outline' | 'secondary' | 'tertiary' | 'link';
  toggleText: string;
  children?: ReactNode;
}

export const Dropdown = function ({
  variant,
  toggleText,
  children,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, isOpen, setIsOpen);
  return (
    <Wrapper
      ref={ref}
      style={{
        '--chevron-direction': isOpen ? '180deg' : '0deg',
        '--menu-scale': isOpen ? '1' : '0.85',
        '--menu-opacity': isOpen ? '1' : '0',
        '--menu-visibility': isOpen ? 'visible' : 'hidden',
      }}
    >
      <Button $variant={variant} onClick={clickHandler}>
        {toggleText}
        <Chevron />
      </Button>
      <Menu>{children}</Menu>
    </Wrapper>
  );
};

export const DropdownItem = styled.li`
  padding: 4px 12px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(p) => p.theme.colors.secondary};
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const Chevron = styled(ChevronDown)`
  color: inherit;
  width: 1.5rem;
  transition: all 0.25s ease;
  transform: rotate(var(--chevron-direction));
`;

const Menu = styled.ul`
  position: absolute;
  top: 115%;
  color: ${(p) => p.theme.colors.text};
  background-color: ${(p) => p.theme.colors.background};
  border: 1px solid ${(p) => p.theme.colors.secondary};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: calc(100vh - 250px);
  width: max-content;
  gap: 10px;
  padding: 10px;
  opacity: var(--menu-opacity);
  visibility: var(--menu-visibility);
  transition: all 0.25s ease;
  transform: scale(var(--menu-scale));
`;
