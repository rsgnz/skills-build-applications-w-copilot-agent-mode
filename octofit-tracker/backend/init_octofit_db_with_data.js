use octofit_db;

// Add explicit print statements to confirm execution
print('Dropping existing collections...');
db.users.drop();
db.teams.drop();
db.activity.drop();
db.leaderboard.drop();
db.workouts.drop();

print('Inserting data into users collection...');
db.users.insertMany([
    { email: "user1@example.com", name: "User One", age: 20 },
    { email: "user2@example.com", name: "User Two", age: 25 }
]);

print('Inserting data into teams collection...');
db.teams.insertOne({
    name: "Team Alpha",
    members: [
        { email: "user1@example.com", name: "User One", age: 20 },
        { email: "user2@example.com", name: "User Two", age: 25 }
    ]
});

print('Inserting data into activity collection...');
db.activity.insertMany([
    { user_email: "user1@example.com", activity_type: "Running", duration: 30, date: "2025-04-01" },
    { user_email: "user2@example.com", activity_type: "Cycling", duration: 45, date: "2025-04-02" }
]);

print('Inserting data into leaderboard collection...');
db.leaderboard.insertMany([
    { user_email: "user1@example.com", score: 100 },
    { user_email: "user2@example.com", score: 150 }
]);

print('Inserting data into workouts collection...');
db.workouts.insertMany([
    { name: "Workout A", description: "Test workout A description" },
    { name: "Workout B", description: "Test workout B description" }
]);

print('Data insertion complete.');
