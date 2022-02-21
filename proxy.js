const person = {
  firstname: "Ankit",
  lastname: "satoniya",
  age: 25,
};
const goodperson = new Proxy(person, {
  set: function (target, key, value) {
    Object.freeze(goodperson);
    console.log("Set the value of ", key, "to", value + new Date());
    const isfreeze = Object.isFrozen(target);
    console.log({isfreeze});
    if (isfreeze) {
      localStorage.setItem("key", value);
      throw new Error("Object is freeze");
    } else {
      throw new Error("Object is not freeze");
    }
  },
  deleteProperty(target, key) {
    Object.freeze(goodperson);
    if (key in target) {
      delete target[key];
      console.log("This item delete:", key, new Date());
      const isfreeze = Object.isFrozen(target);
      console.log({isfreeze});
      if (isfreeze) {
        localStorage.setItem("Key", key);
        throw new Error("Object is freeze you can not delete");
      } else {
        throw new Error("Object is not freeze you delete the values");
      }
    }
  },
});

// goodperson.age = 53;
// delete goodperson.age;
