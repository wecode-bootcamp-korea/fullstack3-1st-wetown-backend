INSERT INTO products(kor_name, eng_name, price, category_id, subcategory_id, is_new, sale_rate)
  VALUES
  ("햄스터 해먹 침대 ", "Hamster Bed Hanging Hammock House", 5000, 4, 3, true,null),
  ("햄스터 나무 장난감", "Hamster Natural Wooden Chew Toys", 15000, 4, 2, true,null),
  ("예술적인 나의 햄스터", "Easel for Hamsters",45000, 4, 2, true,null),
  ("햄스터 치아 건강 관리 간식", "Hamster Teeth Molar Chew Snack", 5000, 4, 4, true,null),
  ("햄스터 패스트 푸드", "Quik Hamster Food", 4500, 4, 1, true, 10),
  ("햄스터 씹는 간식", "Hamster Chew Treat", 2000, 4, 1, false,null),
  ("햄스터 저높이 이동 다리", " Hamster House Bridge", 10000, 4, 1, true, 10),
  ("햄스터 급냉동 고기간식 10종", "Hamster 10 kinds of meat freeze-dried", 15000, 4, 1, true, 15),
  ("햄스터 마른 곡식 간식", "Hamster Assorted Wheat Snacks", 8500, 4, 1, true, null),
  ("햄스터 조깅 운동 롤러", "Hamster Playing Jogging Exercise Ball", 2500, 4, 4, true, null);

INSERT INTO images(url, is_main, product_id)
  VALUES
    ("/images/productListMain/hamster/hamster_house_31.png", true, 31),
    ("/images/productListMain/hamster/hamster_toy_32.png", true, 32),
    ("/images/productListMain/hamster/hamster_toy_33.png", true, 33),
    ("/images/productListMain/hamster/hamster_food_34.png", true, 34),
    ("/images/productListMain/hamster/hamster_food_35.png", true, 35),
    ("/images/productListMain/hamster/hamster_food_36.png", true, 36),
    ("/images/productListMain/hamster/hamster_toy_37.png", true, 37),
    ("/images/productListMain/hamster/hamster_food_38.png", true, 38),
    ("/images/productListMain/hamster/hamster_food_39.png", true, 39),
    ("/images/productListMain/hamster/hamster_toy_40.png", true, 40);

INSERT INTO images(url, product_id) 
  VALUES
    ("https://sc04.alicdn.com/kf/Hb94294e8fca14ca282155fdbd16ef3a3C.jpg", 31),
    ("https://sc04.alicdn.com/kf/H7c7abb44797849849662a271dd084709K.jpg", 31),
    ("https://sc04.alicdn.com/kf/H60fc5b77ec8140ae87d94dd18189c854K.jpg", 31),
    ("https://sc04.alicdn.com/kf/H3faa4451a13747a289221f24ea8f2a58z.jpg", 31),

    ("https://sc04.alicdn.com/kf/H8192dfdb979b471f82aa323e463c8260M.jpg", 32),
    ("https://sc04.alicdn.com/kf/H511a494673d44faaa9201080f09be3caF.jpg", 32),
    ("https://sc04.alicdn.com/kf/H115bd5088d4548cc806bbaaa51faa536W.jpg", 32),
    ("https://sc04.alicdn.com/kf/Ha3352e08cc0940bb967d1580946464dd1.jpg", 32),
    ("https://sc04.alicdn.com/kf/H2fee847a2bd448f89ac5c3efe6a89610U.jpg", 32),
    ("https://sc04.alicdn.com/kf/Hc0639b8db2f844398b7599bedbafc4f5D.jpg", 32),

    ("https://sc04.alicdn.com/kf/H33e2753d53ca4b9cbcf08d84f11213e54.jpg", 33),
    ("https://sc04.alicdn.com/kf/H8f608bf1d5034bda9c2ae423c3420bd4B.jpg", 33),
    ("https://sc04.alicdn.com/kf/H308ed8561c1a4be18040560014df64290.png", 33),

    ("https://sc04.alicdn.com/kf/Ha672d55b7a464ffa80a763a0a7f6cc75S.jpg", 34),
    ("https://sc04.alicdn.com/kf/Hfe7333b1c1454359a45a9b4727bf8bbcg.jpg", 34),
    ("https://sc04.alicdn.com/kf/H5c653e872f8d4f548a17387f276a9595C.jpg", 34),

    ("https://sc04.alicdn.com/kf/Ud22c9445fbda472ba6dd0743595d71a5l.jpg", 35),
    ("https://sc04.alicdn.com/kf/U916b21b9d34043fe95b608302be294899.jpg", 35),
    ("https://sc04.alicdn.com/kf/U0e00b2555d8a44a18ff044b523391ec8r.jpg", 35),
    ("https://sc04.alicdn.com/kf/U12dec1193afe4dadbcda3495546bbd58l.jpg", 35),

    ("https://sc04.alicdn.com/kf/H9a198236374248e2bb2294c167f1808bv.jpg_480x480.jpg", 36),
    ("https://sc04.alicdn.com/kf/Hd1e992216d2744a5bfba831e7a5edb10N.jpg_480x480.jpg", 36),
    ("https://sc04.alicdn.com/kf/Hc75eeaa29f834758aeb37537f7d6f412y.jpg_480x480.jpg", 36),

    ("https://sc04.alicdn.com/kf/H84275b458f80494eb89a6f6c4fa764cdZ.jpg", 37),
    ("https://sc04.alicdn.com/kf/H81542a8967f94554b3471eb547af6cd8j.jpg", 37),
    ("https://sc04.alicdn.com/kf/H4c68282101a54d7eb756b903c89901c8h.jpg", 37),
    ("https://sc04.alicdn.com/kf/H8a5ad4b644fa4022ba9180fb0a2902afm.jpg", 37),
    ("https://sc04.alicdn.com/kf/Haf1a997359124b6496bf48c6d92528fcU.jpg", 37),


    ("https://sc04.alicdn.com/kf/H4504e703e850464d810854120915c8c8M.jpg_480x480.jpg", 38),
    ("https://sc04.alicdn.com/kf/H866ceda2b2be49f795e44f01bfa107a8M.jpg_480x480.jpg", 38),
    ("https://sc04.alicdn.com/kf/He0b0a55e7c994a7388d6bc5caf1f8d38P.jpg_480x480.jpg", 38),
    ("https://sc04.alicdn.com/kf/H9228914b00a94221b68951e487b24d5cd.jpg_480x480.jpg", 38),

    ("https://sc04.alicdn.com/kf/He5e10418b0114268a825ddf07f43d27cx.png_480x480.jpg", 39),
    ("https://sc04.alicdn.com/kf/Hb19d2f9cc8d94b2ca7444a0d3005361bR.png_480x480.jpg", 39),
    ("https://sc04.alicdn.com/kf/Hdf751040c9e74ea2854cfa7d5750f04ek.png_480x480.jpg", 39),

    ("https://sc04.alicdn.com/kf/H54a016c0ff7b421c9c11d03f3989c4a8b.jpg_480x480.jpg", 40),
    ("https://sc04.alicdn.com/kf/H83aae9c0e27e4d6da4497afca38171d1W.jpg_480x480.jpg", 40),
    ("https://sc04.alicdn.com/kf/Hd1f7e76a5f414dafbd56218f02c125f30.jpg_480x480.jpg", 40),
    ("https://sc04.alicdn.com/kf/H9e788edea83d472386517e64f29def50P.jpg_480x480.jpg", 40);