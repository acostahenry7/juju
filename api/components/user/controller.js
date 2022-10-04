const { nanoid } = require("nanoid");
const TABLA = "user";

module.exports = (indjectedStore) => {
  let store = indjectedStore;
  if (!store) {
    store = require("../../../store/dummy");
  }

  function list() {
    return store.list(TABLA);
  }

  function get(id) {
    return store.get(TABLA, id);
  }

  function upsert(data) {
    const user = {
      name: data.name,
    };

    if (data.id) {
      user.id = data.id;
    } else {
      user.id = nanoid();
    }

    return store.upsert(TABLA, user);
  }

  function remove(id) {
    return store.remove(TABLA, id);
  }

  return {
    list,
    get,
    upsert,
    remove,
  };
};