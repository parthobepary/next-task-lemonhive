CREATE DATABASE todoapp;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    time VARCHAR(255),
    name VARCHAR(255),
    distance VARCHAR(255)
);