import deepFreeze from '../utils/deepFreeze.js';

const EVENT_DATE = deepFreeze({
  december: {
    start: 1,
    end: 31,
  },
  xMas: {
    start: 1,
    end: 25,
  },
});

export default EVENT_DATE;
