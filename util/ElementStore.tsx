import type { Element } from 'lib/elements';
import type { ReactNode } from 'react';
import { useMemo, createContext, useContext, useState } from 'react';

type ActiveElement = [Element, Element];
type HandleSettingActiveElement = (type: 'first' | 'second', element: Element) => void;

type ElementValue = {
  activeElement: ActiveElement;
  handleSettingActiveElement: HandleSettingActiveElement;
};

export const ElementContext = createContext<ElementValue | ActiveElement>([
  'normal',
  'normal',
]);
ElementContext.displayName = 'Current active ElementValue-Context';

export function ElementStore({ children }: { children: ReactNode }): JSX.Element {
  const [activeElement, setActiveElement] = useState<ActiveElement>(['normal', 'normal']);

  const handleSettingActiveElement: HandleSettingActiveElement = useMemo(() => {
    return (type, element) => {
      if (type === 'first') {
        setActiveElement([element, activeElement[1]]);
      }
      if (type === 'second') {
        setActiveElement([activeElement[0], element]);
      }
    };
  }, [activeElement]);

  const value = useMemo(
    () => ({
      activeElement,
      handleSettingActiveElement,
    }),
    [activeElement, handleSettingActiveElement]
  );

  return <ElementContext.Provider value={value}>{children}</ElementContext.Provider>;
}

export const useElement = (): ActiveElement | ElementValue => {
  const context = useContext(ElementContext);
  if (!context) {
    throw new Error('useElement must be used within an ElementStore');
  }

  if (Array.isArray(context)) {
    throw new TypeError('Context is the default value and was not set up correctly.');
  }
  return context;
};
