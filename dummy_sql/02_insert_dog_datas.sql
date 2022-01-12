INSERT INTO products(kor_name, eng_name, price, category_id, subcategory_id,is_new, sale_rate)
VALUES
("비바람에 끄떡 없는 개집", "Sturdy House", 48343, 1, 3, true, 35),
("편안한 쿠션 집", "Cozy Cushion House", 32210, 1, 3, false, null),
("접이식 텐트 집", "Tepee Tent House", 25000, 1, 3, false, null),
("영양 가득 중국산 개 사료", "High nutrition Dog food made in China", 12200, 1, 1, true, 21),
("영양 높은 건식 개 사료", "Nutritional Dry Dog food", 16780, 1, 1, true, 17 ),
("프리미엄 건식 개 사료", "Premium Dry Dog food", 1290, 1, 1, false, null),
("삑삑이 강아지 장난감", "Squeaky puppy toy", 1220, 1, 2, true, 11),
("강아지 점심모양 장난감", "Lunch set puppy toy", 67880, 1, 2, false, 89),
("개 목 보호대","Dog neck protection",60900,1,4, true, 20),
("개 멀티비타민", "Dog multivitamin", 432221, 1, 4, false, null);



INSERT INTO images(url, is_main,product_id) 
VALUES
("/images/productListMain/dog/dog_house_01.png", true, 1),
("/images/productListMain/dog/dog_house_02.png", true, 2), 
("/images/productListMain/dog/dog_house_03.png", true,3),
("/images/productListMain/dog/dog_food_01.png", true, 4),
("/images/productListMain/dog/dog_food_02.png", true, 5),
("/images/productListMain/dog/dog_food_03.png", true, 6),
("/images/productListMain/dog/dog_toy_squeeky.png", true, 7),
("/images/productListMain/dog/dog_toy_lunch.png", true, 8),
("/images/productListMain/dog/dog_toy_flower.png", true, 9),
("/images/productListMain/dog/dog_health_01.png", true,10);

INSERT INTO images(url, product_id)
VALUES
("https://ae01.alicdn.com/kf/H94d1a3fcc00e48dba095ae7d9d253b54r/-.jpg_Q90.jpg_.webp", 1),
("https://ae01.alicdn.com/kf/H67d74b798e7e4358a2f8ab8651596104A/-.jpg_Q90.jpg_.webp", 1),
("https://ae01.alicdn.com/kf/H79ba03b37a414569af59f30e91e150fev/-.jpg_Q90.jpg_.webp", 1),
("https://ae01.alicdn.com/kf/H175522aab32a46549bb69668e3b03247U/-.jpg_Q90.jpg_.webp", 1),
("https://ae01.alicdn.com/kf/H5098255cba874443bca7453d76e710fbV/-.jpg_Q90.jpg_.webp", 2),
("https://ae01.alicdn.com/kf/H8debf1b4e60b4565aeb5f6e1920971f1S/-.jpg_Q90.jpg_.webp", 2),
("https://ae01.alicdn.com/kf/Hd3456218cc1b49dcbcf1a6aa47e878c5K/-.jpg_Q90.jpg_.webp", 2),
("https://ae01.alicdn.com/kf/Hf70c97c2633b41eb9cfd33e0012f8c8fR/-.jpg_Q90.jpg_.webp", 3),
("https://ae01.alicdn.com/kf/Hada2317fdd7f4ce0a68d4f2369e2bfa2i/-.jpg_Q90.jpg_.webp", 3),
("https://ae01.alicdn.com/kf/Hb744d70afe2b4b96b266b4dafa560779U/-.jpg_640x640.jpg", 3),
("https://sc04.alicdn.com/kf/H7565b6d9024341a3b16a027eed2e799aq.jpg", 4),
("https://sc04.alicdn.com/kf/H6ed010ad530c413a9dff57edc26fcc4dE.jpg", 4),
("https://sc04.alicdn.com/kf/H5130cfb48b8845da8133a7dd2f0dd6134.jpg", 4),
("https://sc04.alicdn.com/kf/H7ff7166712834cbeb27a53843668fc135.jpg", 5),
("https://sc04.alicdn.com/kf/H607ec30885cb4035b08691d0538f6bafr.jpg", 5),
("https://sc04.alicdn.com/kf/H58873e0083ad41e68df3b3ff903ede7be.jpg", 5),
("https://sc04.alicdn.com/kf/Hcc70cb22d7544021ba2b47686b9c8a3fU.jpg", 6),
("https://sc04.alicdn.com/kf/Ha23852d86d7b4e62857601c355008e46a.jpg", 6),
("https://sc04.alicdn.com/kf/Hf16111fcf58a4900baf903d22ad59704i.jpg", 6),
("https://sc04.alicdn.com/kf/Hbb0004d007e048f7a9c21a3f6065b14cR.png",7),
("https://sc04.alicdn.com/kf/He18416d53bae4d0783e11e21733460e9L.png",7),
("https://sc04.alicdn.com/kf/H031670453b674fa1abed5eaf0ff220157.png",7),
("https://sc04.alicdn.com/kf/Hc8d495292b6a4c4f88a451b8e9fa5a7dk.jpg", 8),
("https://sc04.alicdn.com/kf/H20bcdc129e014e9594a9d7c09ab026f5D.jpg",8),
("https://sc04.alicdn.com/kf/H874433bc953943c2b9828215c250b76aa.jpg", 8),
("https://sc04.alicdn.com/kf/H2968b63471c1427c809c26a34846de3ag.png", 9),
("https://sc04.alicdn.com/kf/H65d04485ee714c0c91dd7950e3286760H.png", 9),
("https://sc04.alicdn.com/kf/Hd981efca5f734939bc182bf17ad001bdV.png", 9),
("https://sc04.alicdn.com/kf/H1a13d0f9a6bc4f7d883971b58a8f6d528.jpg",10),
("https://sc04.alicdn.com/kf/H85ac25fdbec5460690c15d11182ada21Z.jpg", 10),
("https://sc04.alicdn.com/kf/Hcfced8b631824c72a66d27c337cb7dd8Z.jpg", 10);