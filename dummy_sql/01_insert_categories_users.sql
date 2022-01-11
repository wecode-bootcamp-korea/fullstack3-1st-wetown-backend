INSERT INTO categories(name) VALUES
("dog"),("cat"),("turtle"),("hamster"),("bird");

INSERT INTO subcategories(name,category_id)
VALUES
("food",1),("toy",1),("house",1),("health",1),
("food",2),("toy",2),("house",2),("health",2),
("food",3),("toy",3),("house",3),("health",3),
("food",4),("toy",4),("house",4),("health",4),
("food",5),("toy",5),("house",5),("health",5);

INSERT INTO users(name, gender, phone_number, nickname, password, email) VALUES("관리자","중성","010-1234-5678","admin","1234","admin@wetown.com");

INSERT INTO policies(is_essential_agreed,is_optional_agreed,user_id) VALUES(true, true, 1);