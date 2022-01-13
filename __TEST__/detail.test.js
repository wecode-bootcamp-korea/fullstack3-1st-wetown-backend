import { productDetailController } from '../controllers';

describe('Detail', () => {
  const req = {
    params: { productId: 2 },
  };
  const res = {
    status: jest.fn(() => res),
    send: jest.fn(),
  };
  test('2번 상품의 값이 잘 받아져오는가?', async () => {
    await productDetailController.productDetail(req, res);
    expect(res.send).toBeCalledWith({
      id: 2,
      eng_name: 'Cozy Cushion House',
      price: 32210,
      is_new: 0,
      is_main: 1,
      quantity: 1000,
      sale_rate: null,
      cate_name: 'dog',
      subcate_name: 'house',
      url: [
        {
          id: 2,
          image: '/images/productListMain/dog/dog_house_02.png',
        },
        {
          id: 15,
          image:
            'https://ae01.alicdn.com/kf/H5098255cba874443bca7453d76e710fbV/-.jpg_Q90.jpg_.webp',
        },
        {
          id: 16,
          image:
            'https://ae01.alicdn.com/kf/H8debf1b4e60b4565aeb5f6e1920971f1S/-.jpg_Q90.jpg_.webp',
        },
        {
          id: 17,
          image:
            'https://ae01.alicdn.com/kf/Hd3456218cc1b49dcbcf1a6aa47e878c5K/-.jpg_Q90.jpg_.webp',
        },
      ],
      image_id: 2,
    });
  });
});
