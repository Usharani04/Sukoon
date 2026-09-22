const Database = require('better-sqlite3');
const db = new Database('./.tmp/data.db');

console.log('--- DOCTORS ---');
const docs = db.prepare('SELECT id, document_id, name, published_at FROM doctors').all();
console.log(docs);

console.log('--- SERVICES ---');
const serv = db.prepare('SELECT id, document_id, name, published_at FROM services').all();
console.log(serv);

console.log('--- LOCATIONS ---');
const locs = db.prepare('SELECT id, document_id, name, published_at FROM locations').all();
console.log(locs);
