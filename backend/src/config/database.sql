CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

-- für render psql:
CREATE TABLE IF NOT EXISTS todo( 
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)  
);