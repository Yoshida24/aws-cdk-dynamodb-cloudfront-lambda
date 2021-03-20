import { Print } from './print';
import '../css/style.css';
import { PrintJs } from './jsfile';

((): void => {
  const msg = 'hello';
  new Print().print(`Check: TypeScript: msg is ${msg}`);

  const includes = [1, 2, 3].includes(3);
  console.log(`Check: Polyfill: [1,2,3].includes(3) is ${includes}`);

  new PrintJs().print('Check: JS file: message by js');

  console.log(`Check: babel-trandsform-runtime: _babelPolyfill is ${window._babelPolyfill}`);
})();
