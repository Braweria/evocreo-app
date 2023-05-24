import type { Element } from 'lib/elements';
import { elementsAndClasses, ElementsAndClasses } from 'lib/elements';
import { useEffect, useState } from 'react';
import styles from 'styles/ChooseElement.module.css';
import { useElement } from 'util/ElementStore';

export function DisplayResults(): JSX.Element {
  const [advantages, setAdvantages] = useState<string[]>([]);
  const [disadvantages, setDisadvantages] = useState<string[]>([]);
  // @ts-expect-error - I don't know how to fix this
  const { activeElement } = useElement();

  const { distribution } = elementsAndClasses;

  useEffect(() => {
    const [first, second] = activeElement as Element[];

    const advantages = [
      ...distribution[first].advantages,
      ...distribution[second].advantages,
    ];
    const disadvantages = [
      ...distribution[first].disadvantages,
      ...distribution[second].disadvantages,
    ];

    console.log(advantages);
    console.log(disadvantages);

    const containsElements = true;
    const index = 0;

    // while (containsElements) {
    //   if (
    //     firstAdvantages.length - 1 < index &&
    //     secondAdvantages.length - 1 < index &&
    //     firstDisadvantages.length - 1 < index &&
    //     secondDisadvantages.length - 1 < index
    //   ) {
    //     containsElements = false;
    //   }
    //   const currentElement;

    //   index++;
    // }
  }, [activeElement, distribution]);

  return (
    <section className={styles.elements}>
      <div className={styles.column}>
        <h2>Advantages</h2>
        {/*  */}
      </div>
      <div className={styles.column}>
        <h2>Disadvantages</h2>
        {/*  */}
      </div>
    </section>
  );
}
