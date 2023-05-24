import { elementsAndClasses } from 'lib/elements';
import styles from 'styles/ChooseElement.module.css';
import { useElement } from 'util/ElementStore';

import { ElementButton } from '@/ElementButton';

export function ChooseElement(): JSX.Element {
  const { elements } = elementsAndClasses;
  const { activeElement, handleSettingActiveElement } = useElement();

  const [first, second] = activeElement;

  const handleFirst = (element: string) => {
    handleSettingActiveElement('first', element);
  };

  const handleSecond = (element: string) => {
    handleSettingActiveElement('second', element);
  };

  return (
    <section className={styles.elements}>
      <div className={styles.column}>
        <h2>First Element</h2>
        {elements.map((element) => (
          <ElementButton
            key={element}
            element={element}
            active={first}
            click={handleFirst}
          />
        ))}
      </div>
      <div className={styles.column}>
        <h2>Second Element</h2>
        {elements.map((element) => (
          <ElementButton
            key={element}
            element={element}
            active={second}
            click={handleSecond}
          />
        ))}
      </div>
    </section>
  );
}
