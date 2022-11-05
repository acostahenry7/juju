const TABLA = "auth";

module.exports = (indjectedStore) => {
  let store = indjectedStore;

  if (!store) {
    store = require("../../../store/dummy");
  }

  function upsert(data) {
    const authData = {
      id: data.id,
    };

    if (data.username) {
      authData.username = data.username;
    }

    if (data.password) {
      authData.password = data.password;
    }

    return store.upsert(TABLA, authData);
  }

  return {
    upsert,
  };
};
