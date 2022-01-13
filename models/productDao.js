import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const updateQuantity = async (product_id, quantity) => {
  return await prisma.$queryRaw`
    UPDATE
      products
    SET
      quantity = quantity - ${quantity}
    WHERE
      id = ${product_id};
  `;
};

export default { updateQuantity };
