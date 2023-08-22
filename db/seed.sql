\c streets_dev

INSERT INTO 
    fighters(name, photo, is_your_character, difficulty, hp, character_type)
VALUES 
    ('Marisa', 'https://www.streetfighter.com/6/assets/images/character/marisa/sns.jpg', true, 1, 10100, 'brawler'),
    ('Ken', 'https://www.streetfighter.com/6/assets/images/character/ken/sns.jpg', false, 2, 10000, 'shoto'),
    ('Jamie', 'https://www.streetfighter.com/6/assets/images/character/jamie/sns.jpg', true, 4, 10000, 'rushdown');


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
