DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS categories CASCADE; 
DROP TABLE IF EXISTS clothing CASCADE;  
DROP TABLE IF EXISTS matches CASCADE; 

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE clothing (
    id SERIAL PRIMARY KEY NOT NULL,
    image_url VARCHAR(255),
    name VARCHAR(100) NOT NULL,
    description TEXT,
    category_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE matches (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    randomGenerateString VARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);


-- const randomGenerateString = //6 character random string 

-- [
--     {
--         name: shirt,
--         colour: blue
        
--     }
--     {
--         name: pants
--         colour: red
--     }

-- ]

-- //for loop take the name and colour and random string as data that will be sent to the db, such that the db matchclothinglist you will have the name and the randomGenerateString and user id 
