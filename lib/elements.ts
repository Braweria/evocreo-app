export const elementsAndClasses: ElementsAndClasses = {
  elements: [
    'fire',
    'water',
    'nature',
    'dark',
    'light',
    'normal',
    'electric',
    'earth',
    'air',
  ],
  classes: [],
  distribution: {
    fire: {
      advantages: ['air', 'nature'],
      disadvantages: ['water', 'earth'],
    },
    water: {
      advantages: ['earth', 'fire'],
      disadvantages: ['electric', 'nature'],
    },
    nature: {
      advantages: ['earth', 'water'],
      disadvantages: ['fire', 'air'],
    },
    dark: {
      advantages: ['light'],
      disadvantages: ['light'],
    },
    light: {
      advantages: ['dark'],
      disadvantages: ['dark'],
    },
    normal: {
      advantages: [],
      disadvantages: [],
    },
    electric: {
      advantages: ['water'],
      disadvantages: ['earth'],
    },
    earth: {
      advantages: ['electric', 'fire'],
      disadvantages: ['water', 'nature'],
    },
    air: {
      advantages: ['nature'],
      disadvantages: ['fire'],
    },
  },
};

export type Element =
  | 'fire'
  | 'water'
  | 'nature'
  | 'dark'
  | 'light'
  | 'normal'
  | 'electric'
  | 'earth'
  | 'air';

export type ElementsAndClasses = {
  elements: Element[];
  classes: string[];
  distribution: {
    fire: {
      advantages: ['air', 'nature'];
      disadvantages: ['water', 'earth'];
    };
    water: {
      advantages: ['earth', 'fire'];
      disadvantages: ['electric', 'nature'];
    };
    nature: {
      advantages: ['earth', 'water'];
      disadvantages: ['fire', 'air'];
    };
    dark: {
      advantages: ['light'];
      disadvantages: ['light'];
    };
    light: {
      advantages: ['dark'];
      disadvantages: ['dark'];
    };
    normal: {
      advantages: [];
      disadvantages: [];
    };
    electric: {
      advantages: ['water'];
      disadvantages: ['earth'];
    };
    earth: {
      advantages: ['electric', 'fire'];
      disadvantages: ['water', 'nature'];
    };
    air: {
      advantages: ['nature'];
      disadvantages: ['fire'];
    };
  };
};
