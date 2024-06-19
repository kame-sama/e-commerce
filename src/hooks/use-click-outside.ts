import { Dispatch, RefObject, SetStateAction, useEffect } from 'react';

export function useClickOutside(
  ref: RefObject<HTMLElement>,
  state: boolean,
  setState: Dispatch<SetStateAction<boolean>>,
) {
  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (state && ref.current && !ref.current.contains(target)) {
        setState(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [state]);
}
