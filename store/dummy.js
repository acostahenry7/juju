const db = {
  user: [
    {
      id: "1",
      name: "Juan",
    },
    {
      id: "2",
      name: "Pedro",
    },
    {
      id: "3",
      name: "Pablo",
    },
  ],
};

async function list(table) {
  return db[table];
}
async function get(table, id) {
  let col = await list(table);
  console.log(col);
  return col.filter((item) => item.id === id)[0] || null;
}
async function upsert(table, data) {
  if (!db[table]) {
    db[table] = [];
  }

  db[table].push(data);
  return await list(table);
}
async function remove(table, id) {
  let index = db[table].map((item) => item.id).indexOf(id);

  db[table].splice(index, 1);

  return await list(table);
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
