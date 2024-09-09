<?php
header('Content-Type: application/json');

$servername = 'localhost';
$dbusername = 'root';
$dbpassword = '';
$dbname = 'kaysmusic';

$conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

if ($conn->connect_error) {
    echo json_encode(['success' => false, 'error' => 'Database connection failed']);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? null;
    $password = $_POST['password'] ?? null;

    if (!$username || !$password) {
        echo json_encode(['success' => false, 'error' => 'Missing username or password']);
        exit();
    }

    // Query the database to find the user
    $sql = "SELECT * FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    if ($user && password_verify($password, $user['password'])) {
        // Successful login
        echo json_encode(['success' => true]);

        // Redirect to kaysmusic.html
        header('Location: kaysmusic.html');
        exit();
    } else {
        // Invalid credentials
        echo json_encode(['success' => false, 'error' => 'Invalid username or password']);
    }

    $stmt->close();
    $conn->close();
}
?>
