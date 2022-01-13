INSERT INTO products(kor_name, eng_name, price, category_id, subcategory_id, is_new, sale_rate)
VALUES 
("거북이 바위 쉘터","Turtle Rock Shelter",25000,3,2,true,15), 
("파충류 먹이 귀뚜라미","Reptile Feed Crickets",8500,3,1,true,15), 
("파충류 테라리움","Reptile Terrarium",45000,3,3,true,20), 
("거북이 딜라이트","Turtle Delite",5000,3,4,true,null), 
("껍질 보호 약품","REPTISAFE",10000,3,4,true,10), 
("파충류 물그릇","Reptile Water Dish",10000,3,3,true,15), 
("파충류 & 물고기 어항","Reptile & Fish Bowl",50000,3,3,true,25), 
("파충류 수족관(어항)","Reptile Water Tank",8000,3,3,true,10), 
("파충류 먹이","Reptile Feed",15000,3,1,true,20), 
("거북이 모자","Turtle Hat",7500,3,2,true,null);


INSERT INTO images(url, is_main, product_id) 
VALUES 
("/images/productListMain/turtle/rockshield.png",true,21), 
("/images/productListMain/turtle/crickets.png", true, 22), 
("/images/productListMain/turtle/rocks.png", true, 23), 
("/images/productListMain/turtle/delites.png", true, 24), 
("/images/productListMain/turtle/reptilesafe.png", true, 25), 
("/images/productListMain/turtle/waterbowl.png", true, 26), 
("/images/productListMain/turtle/fishbowl.png", true, 27), 
("/images/productListMain/turtle/reptilehome.png", true, 28), 
("/images/productListMain/turtle/feeds.png", true, 29), 
("/images/productListMain/turtle/turtle_10.png", true, 30);


INSERT INTO images(url, product_id)
VALUES
("https://sc04.alicdn.com/kf/H191c8671814f46618c406538d60972c74.jpg",21), 
("https://sc04.alicdn.com/kf/H92ceb2d7126e43699a71394ed97f860e3.jpg",21), 
("https://sc04.alicdn.com/kf/Hd5af50dc326b4f4aac10912ec3b82567W.jpg",21), 
("https://sc04.alicdn.com/kf/Hda004772a97048acbef9a89e28b2945bb.jpg",22), 
("https://sc04.alicdn.com/kf/Hcbf7d145b19e466b84cb401c76e4f4a7T.jpg",22), 
("https://sc04.alicdn.com/kf/Hbd02746508ec4e7d89aebf8de5fc07d7M.jpg",22), 
("https://sc04.alicdn.com/kf/H0bba2a3efbbb45b58d7cccbb4ac1be82P.jpg",23), 
("https://sc04.alicdn.com/kf/H1441d9df445146b0bd469d0548ff8bb5y.jpg",23), 
("https://sc04.alicdn.com/kf/H00bede227a684718801a1746d1c43d1c8.jpg",23), 
("https://sc04.alicdn.com/kf/H603a3a44d83e4e7a947214e79bdac378z.jpg",24), 
("https://sc04.alicdn.com/kf/Hedbdb9c1c22c4879b96f0bef017969fdM.jpg",24), 
("https://sc04.alicdn.com/kf/Hbda8cacfb5e24eb6bb4d8a668c7e17f41.jpg",24), 
("https://sc04.alicdn.com/kf/HTB1_LXWIVXXXXcoXXXXq6xXFXXXn.jpg",25), 
("https://sc04.alicdn.com/kf/H9aa9a0e89fa04e218e64648676330b87F.jpg",25), 
("https://sc04.alicdn.com/kf/H10986a1d808546249f50419f6d38c371K.jpg",25), 
("https://sc04.alicdn.com/kf/HTB18kVAWcbpK1RjSZFyq6x_qFXaV.jpg",26), 
("https://sc04.alicdn.com/kf/HTB1VEFAWjTpK1RjSZKPq6y3UpXae.jpg",26), 
("https://sc04.alicdn.com/kf/HTB1MRtzWkzoK1RjSZFlq6yi4VXaM.jpg",26), 
("https://sc04.alicdn.com/kf/H56689f5e53e343b7a21bc0c48c2974ebm.jpg",27), 
("https://sc04.alicdn.com/kf/Hc2a79dadeded4f209ed9bf030eea9df5C.jpg",27), 
("https://sc04.alicdn.com/kf/H1ad2c46111e444e48848325de038fca6m.jpg",27), 
("https://sc04.alicdn.com/kf/Hcd9e25e6597c412fb91adc45c117acb1s.jpg",28), 
("https://sc04.alicdn.com/kf/H8d1dcd46e16e45a88779fbc57cf253aaR.jpg",28), 
("https://sc04.alicdn.com/kf/HTB1TH75bBKw3KVjSZFOq6yrDVXam.jpg",29), 
("https://sc04.alicdn.com/kf/HTB1WUzmbA5E3KVjSZFCq6zuzXXa9.jpg",29), 
("https://sc04.alicdn.com/kf/HTB1bzosbv1H3KVjSZFBq6zSMXXar.jpg",29), 
("https://sc04.alicdn.com/kf/UT8Q5uhXEXXXXagOFbX5.jpg_50x50.jpg",30), 
("https://sc04.alicdn.com/kf/UT8099hXz0XXXagOFbXY.jpg",30);
