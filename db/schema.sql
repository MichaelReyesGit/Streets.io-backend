DROP DATABASE IF EXISTS streets_dev;

CREATE DATABASE streets_dev;

\c streets_dev;

DROP TABLE IF EXISTS fighters;

CREATE TABLE fighters (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    photo TEXT,
    is_your_character BOOLEAN DEFAULT false,
    difficulty INT DEFAULT 1,
    HP INT DEFAULT 10000,
    character_type VARCHAR(20)
);

DROP TABLE IF EXISTS moves;

CREATE TABLE moves (
    id SERIAL PRIMARY KEY,
    fighter_id INTEGER REFERENCES fighters(id) ON DELETE CASCADE, -- Added ON DELETE CASCADE
    move_type VARCHAR(20) NOT NULL,
    on_hit_frame_data INT,
    on_block_frame_data INT
);

DROP TABLE IF EXISTS notes;

CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    content TEXT,
    fighter_id INT REFERENCES fighters(id) ON DELETE CASCADE
);