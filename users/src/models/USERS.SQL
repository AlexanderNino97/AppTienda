CREATE TABLE USERS (
    id NUMBER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    phone VARCHAR(15) NOT NULL
);

INSERT INTO USERS (name, last_name, email, contrasena, phone) 
VALUES ('Brayan', 'Martínez', 'brayan.martinez@example.com', '12345segura', '3001234567');
I