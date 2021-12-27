INSERT INTO categories(name) VALUES("dog"),("cat"),("turtle"),("hamster"),("bird");

INSERT INTO subcategories(name) VALUES("food","toy","house","health");

INSERT INTO users(name, gender, phone_number, nickname, password, email) VALUES("관리자","중성","010-1234-5678","admin","1234","admin@wetown.com");

INSERT INTO policies(is_essential_agreed,is_optional_agreed,user_id) VALUES(true, true, 1);