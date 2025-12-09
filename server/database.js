import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DB_FILE = join(__dirname, 'database.json');

// Initialize database structure
const initDB = () => {
  return {
    users: [],
    sessions: []
  };
};

// Load database from file
const loadDB = () => {
  if (!existsSync(DB_FILE)) {
    const db = initDB();
    saveDB(db);
    return db;
  }
  try {
    const data = readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading database:', error);
    return initDB();
  }
};

// Save database to file
const saveDB = (db) => {
  try {
    writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf8');
  } catch (error) {
    console.error('Error saving database:', error);
  }
};

// Database operations
class Database {
  constructor() {
    this.data = loadDB();
  }

  // User operations
  createUser(fullName, email, password) {
    const user = {
      id: this.data.users.length + 1,
      fullName,
      email,
      password,
      createdAt: new Date().toISOString(),
      lastLogin: null
    };
    this.data.users.push(user);
    saveDB(this.data);
    return user;
  }

  findUserByEmail(email) {
    return this.data.users.find(u => u.email === email);
  }

  findUserById(id) {
    return this.data.users.find(u => u.id === id);
  }

  updateUserLastLogin(userId) {
    const user = this.findUserById(userId);
    if (user) {
      user.lastLogin = new Date().toISOString();
      saveDB(this.data);
    }
  }

  // Session operations
  createSession(userId, token, expiresAt) {
    const session = {
      id: this.data.sessions.length + 1,
      userId,
      token,
      expiresAt,
      createdAt: new Date().toISOString()
    };
    this.data.sessions.push(session);
    saveDB(this.data);
    return session;
  }

  deleteSession(token) {
    this.data.sessions = this.data.sessions.filter(s => s.token !== token);
    saveDB(this.data);
  }

  findSessionByToken(token) {
    return this.data.sessions.find(s => s.token === token);
  }

  // Clean up expired sessions
  cleanExpiredSessions() {
    const now = new Date().toISOString();
    this.data.sessions = this.data.sessions.filter(s => s.expiresAt > now);
    saveDB(this.data);
  }
}

const db = new Database();

console.log('✅ JSON Database initialized successfully');

export default db;
