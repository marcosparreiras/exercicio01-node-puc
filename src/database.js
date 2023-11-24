const fs = require('node:fs/promises');
const path = require('node:path');

const databasePath = path.resolve(__dirname, 'db.json');

class Database {
  #database = {
    products: [],
  };

  constructor() {
    fs.readFile(databasePath, 'utf8')
      .then((data) => {
        this.#database = JSON.parse(data);
      })
      .catch(() => {
        this.#persist();
      });
  }

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database));
  }

  selectAll(table) {
    const data = this.#database[table] ?? [];
    return data;
  }

  selectById(table, id) {
    if (!Array.isArray(this.#database[table])) {
      return;
    }
    const data = this.#database[table].find((row) => row.id === id);
    return data;
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }

    this.#persist();

    return data;
  }

  update(table, id, data) {
    if (!Array.isArray(this.#database[table])) {
      return;
    }
    const rowIndex = this.#database[table].findIndex((row) => row.id === id);

    if (rowIndex > -1) {
      const row = this.#database[table][rowIndex];
      this.#database[table][rowIndex] = { id, ...row, ...data };
      this.#persist();
    }
  }

  delete(table, id) {
    if (!Array.isArray(this.#database[table])) {
      return;
    }
    const rowIndex = this.#database[table].findIndex((row) => row.id === id);

    if (rowIndex > -1) {
      this.#database[table].splice(rowIndex, 1);
      this.#persist();
    }
  }
}

module.exports = Database;
