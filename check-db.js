const Database = require('better-sqlite3');
const db = new Database('./.tmp/data.db');
const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'strapi_%' AND name NOT LIKE 'up_%'").all();
console.log('--- TABLES IN SUKOON DATABASE ---');
for (const t of tables) {
  try {
    const count = db.prepare(`SELECT count(*) as c FROM "${t.name}"`).get().c;
    console.log(`${t.name}: ${count} rows`);
  } catch (e) {
    console.log(`${t.name}: error reading`);
  }
}
