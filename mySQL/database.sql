CREATE DATABASE
kaysmusic;

USE kaysmusic

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(225) UNIQUE NOT NULL,
    password VARCHAR(225) NOT NULL,  
    email VARCHAR(225)
);

INSERT INTO users (username, password, email)
VALUES 
('user1', MD5('akala'), 'email.com'),
('user2', MD5('moses'), 'mmail.com');
