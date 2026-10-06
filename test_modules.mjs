import('./js/pages/home.js')
  .then(() => console.log('home: SUCCESS'))
  .catch(e => console.error('home: FAIL', e));

import('./js/pages/invoice.js')
  .then(() => console.log('invoice: SUCCESS'))
  .catch(e => console.error('invoice: FAIL', e));

import('./js/pages/calculators.js')
  .then(() => console.log('calculators: SUCCESS'))
  .catch(e => console.error('calculators: FAIL', e));

import('./js/pages/blog.js')
  .then(() => console.log('blog: SUCCESS'))
  .catch(e => console.error('blog: FAIL', e));
