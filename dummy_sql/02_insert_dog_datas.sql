INSERT INTO products(kor_name, eng_name, price, category_id, subcategory_id,is_new, sale_rate)
VALUES
("비바람에 끄떡 없는 개집", "sturdy house", 48343, 1, 3, true, 35),
("편안한 쿠션 집", "cozy cushion house", 32210, 1, 3, false, null),
("접이식 쿠션 집", "foldable cushion house", 25000, 1, 3, false, null),
("영양 가득 중국산 개 사료", "High nutrition dog food made in China", 12200, 1, 1, true, 21),
("영양 높은 건식 개 사료", "Nutritional dry dog food", 16780, 1, 1, true, 17 ),
("프리미엄 건식 개 사료", "Priminum dry dog food", 1290, 1, 1, false,null),
("삑삑이 강아지 장난감", "squeaky puppy toy", 1220, 1, 2, true, 11),
("강아지 점심모양 장난감", "Lunch set puppy toy", 67880, 1, 2, false, 89),
("개 목 보호대","dog neck protection",60900,1,4,true,20),
("개 멀티비타민", "dog multivitamin", 432221, 1, 4, false,null);



INSERT INTO images(url, is_main,product_id) 
VALUES
("https://ae01.alicdn.com/kf/H4cda1c2d4acf4fc2b449f6d6298ad4b1g/-.jpg_640x640.jpg", true, 1),
("https://ae01.alicdn.com/kf/Hf8dfc2a187bb4e27b1f4290c2f8a41137/-.jpg_Q90.jpg_.webp", true, 2),
("https://ae01.alicdn.com/kf/Ha4b44ef2c6364b609b8498531d221c86O/-.jpg_Q90.jpg_.webp",true,3),
("https://sc04.alicdn.com/kf/H9008081e97ca40f2a157519c0068c8b1S.jpg", true, 4),
("https://sc04.alicdn.com/kf/H2cd11cb1907f49ae9faa03c4e16a4b9ec.jpg",true, 5),
("https://sc04.alicdn.com/kf/Hf2ff8e0c1ecf4ce8b3e9adcd8e558ba3L.jpg",true, 6),
("https://sc04.alicdn.com/kf/H3018792b9a574ce3b3062089e00dde1cz.jpg",true, 7),
("https://sc04.alicdn.com/kf/Hef4335f07c344c458e13f718d17caa55v.jpg",true, 8),
("https://sc04.alicdn.com/kf/Ha710205e8d664567b52d6801648512791.png", true, 9),
("https://sc04.alicdn.com/kf/Hf79c53f729c2483a81f57d81544384dbj.jpg",true,10)

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
("https://sc04.alicdn.com/kf/Hcfced8b631824c72a66d27c337cb7dd8Z.jpg", 10)