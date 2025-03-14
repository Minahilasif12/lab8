let users = [];

function registerUser(username, password) {
    if (users.find(user => user.username === username)) {
        return "User already exists";
    }
    users.push({ username, password });
    return "User registered successfully";
}

function loginUser(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    return user ? "Login successful" : "Invalid credentials";
}

module.exports = { registerUser, loginUser };
