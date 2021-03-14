let callstack = [];
let testA = 0;
let testB = 0;
let prevArgs = [];

const log = (text) => {
  const container = document.createElement('div');
  container.innerHTML = text;
  container.classList.add('log-item');

  document.getElementById('log')
    .appendChild(container);
};

const printCallstack = () => {
  let counter = 0;
  let currValue = callstack[0];
  callstack.forEach((value) => {
    if (currValue !== value) {
      log(`"${currValue}" calls ${counter} times`);
      currValue = value;
      counter = 0;
    } else {
      counter += 1;
    }
  });
};

const sec = (a) => {
  callstack.push(sec.name);
  return 1 + a;
};

const add = (a, b) => {
  callstack.push(add.name);
  if (b === 0) {
    return a;
  }

  return sec(add(a, b - 1));
};

const mpy = (a, b) => {
  callstack.push(mpy.name);
  if (b === 1) {
    return a;
  }
  return add(a, mpy(a, b - 1));
};

const pwr = (a, b) => {
  callstack.push(pwr.name);
  if (b === 0) {
    return 1;
  }

  if (b === 1) {
    return a;
  }

  return mpy(a, pwr(a, b - 1));
};

try {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    callstack = [];
    prevArgs = [testA, testB];
    if (testA > testB) {
      testB += 1;
      log(`${testA} ** ${testB} = ${pwr(testA, testB)}`);
    } else {
      testA += 1;
      log(`${testA} ** ${testB} = ${pwr(testA, testB)}`);
    }
  }
} catch (err) {
  log(err.message);
  log('Amount of powers: ', callstack.filter((x) => x === 'pwr').length);
  log('Amount of multiplications: ', callstack.filter((x) => x === 'mpy').length);
  log('Amount of additions: ', callstack.filter((x) => x === 'add').length);
  log('Amount of sequences: ', callstack.filter((x) => x === 'sec').length);
  log(`Arguments of last iteration: a = ${prevArgs[0]}, b = ${prevArgs[1]}`);
  log('Callstack');
  printCallstack();
}
