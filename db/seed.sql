INSERT INTO fighters (name, photo, is_your_character, difficulty, hp, character_type)
VALUES 
('Marisa', 'https://static.wikia.nocookie.net/streetfighter/images/1/17/SF6_Marisa.png/revision/latest/scale-to-width-down/1000?cb=20221209022823', true, 1, 10100, 'brawler');


INSERT INTO moves (fighter_id, move_type, on_hit_frame_data, on_block_frame_data)
VALUES
    (1, 'LP', 0, -2),
    (1, 'MP', 2, -1),
    (1, 'HP', 3, -3),
    (1, 'LK', 0, -2),
    (1, 'MK', 4, -2),
    (1, 'HK', 1, -3);

INSERT INTO notes (content, fighter_id)
VALUES ('Marisa is da best', 1);
