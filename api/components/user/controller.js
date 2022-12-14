const { nanoid } = require("nanoid");
const auth = require("../auth");
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

  async function upsert(data) {
    const user = {
      name: data.name,
      username: data.username,
    };

    if (data.id) {
      user.id = data.id;
    } else {
      user.id = nanoid();
    }

    if (data.username || data.password) {
      await auth.upsert({
        id: user.id,
        username: data.username,
        password: data.password,
      });
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
