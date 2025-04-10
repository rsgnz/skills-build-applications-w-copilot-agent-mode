use octofit_db;

db.users.createIndex({ "email": 1 }, { unique: true });
db.createCollection("teams");
db.createCollection("activity");
db.createCollection("leaderboard");
db.createCollection("workouts");
