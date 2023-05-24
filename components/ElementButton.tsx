import clsx from 'clsx';

import styles from '../styles/ElementButton.module.css';

export function ElementButton({
  element,
  active,
  click,
}: {
  element: string;
  active: string;
  click: (element: string) => void;
}): JSX.Element {
  const handleClick = () => {
    click(element);
  };

  return (
    <button
      className={clsx(styles.button, styles[element], {
        [styles.active]: active === element,
      })}
      onClick={handleClick}
      type="button"
    >
      <div className={styles.overlay} />
      <div className={styles.shade} />
      <div className={styles.indicator} />
      <span className={styles.content}>{element}</span>
    </button>
  );
}
