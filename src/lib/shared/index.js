import HeadHrefLangs from './ui/HeadHrefLangs.svelte';
import LocaleSwitcher from './ui/LocaleSwitcher.svelte';

// no svelte
import replaceLocaleInUrl from './utils/replaceLocaleInUrl.ts';

import bel from './data/bel';
import deu from './data/deu';
import eng from './data/eng';
import rus from './data/rus';

import answersNumbers from './data/answersNumbers';

export { bel, rus, eng, deu, answersNumbers, replaceLocaleInUrl, HeadHrefLangs, LocaleSwitcher };
