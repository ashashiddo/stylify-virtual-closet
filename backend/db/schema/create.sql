CREATE TABLE Users (
    user_id CHAR(50) PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE Categories (
    category_id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE Clothing (
    clothing_id INT PRIMARY KEY,
    image_url VARCHAR(255),
    name VARCHAR(100) NOT NULL,
    description TEXT,
    category_id INT,
    user_id CHAR(50) NOT NULL,
    FOREIGN KEY (category_id) REFERENCES Categories(category_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Matches (
    match_id INT PRIMARY KEY,
    user_id CHAR(50) NOT NULL,
    clothing_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (clothing_id) REFERENCES Clothing(clothing_id)
);
