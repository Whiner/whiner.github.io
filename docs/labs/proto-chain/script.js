import { o3 } from 'goss_proto';

const prototypeChain = [];

const getInnerPrototypes = (obj) => {
  prototypeChain.push(obj.name);
  let proto = Object.getPrototypeOf(obj);

  while (proto) {
    prototypeChain.push(proto.name);
    proto = Object.getPrototypeOf(proto);
  }

  prototypeChain.reverse();
};

console.log(getInnerPrototypes(o3));
