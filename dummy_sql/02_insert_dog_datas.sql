INSERT INTO products(kor_name, eng_name, price, category_id, subcategory_id,is_new, sale) 
VALUES
("강아지 사료","dog's food",12000,1,true,15),(),(),(); 

//for main
INSERT INTO images(url, is_main, product_id) 
VALUES
(
  "www.alibaba.com/imgags/....", true, 1
),
(
  "www.aliaba.com/images/doghouse...url", true, 2    
)


//for extra images
INSERT INTO images(url, product_id) 
VALUES
("www///",1);