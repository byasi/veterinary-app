import { subDays, subHours } from 'date-fns';

const now = new Date();

class ProductsApi {
  getProducts() {
    const products = [
      {
        id: '5ece2c077e39da27658aa8a9',
        attributes: ['Dog'],
        category: 'dog',
        createdAt: subDays(now, 1).getTime(),
        image: '/static/mock-images/products/product_1.png',
        name: 'Roberts',
        price: 23.99,
        quantity: 85,
        status: 'published',
        updatedAt: subHours(now, 6).getTime(),
        variants: 2
      },
      {
        id: '5ece2c0d16f70bff2cf86cd8',
        attributes: ['Cat'],
        category: 'cat',
        createdAt: subDays(now, 3).getTime(),
        image: '/static/mock-images/products/product_2.png',
        name: 'puma',
        price: 95.00,
        quantity: 0,
        status: 'published',
        updatedAt: subDays(subHours(now, 8), 2).getTime(),
        variants: 1
      },
      {
        id: '5ece2c123fad30cbbff8d060',
        attributes: ['Dog'],
        category: 'dog',
        createdAt: subDays(now, 6).getTime(),
        image: null,
        name: 'Gafield',
        price: 155.00,
        quantity: 48,
        status: 'draft',
        updatedAt: subDays(subHours(now, 2), 1).getTime(),
        variants: 5
      },
      {
        id: '5ece2c1be7996d1549d94e34',
        attributes: ['Cat'],
        category: 'cat',
        createdAt: subDays(now, 12).getTime(),
        image: '/static/mock-images/products/product_4.png',
        name: 'Mr. Picos',
        price: 17.99,
        quantity: 5,
        status: 'published',
        updatedAt: subDays(subHours(now, 7), 1).getTime(),
        variants: 1
      },
      {
        id: 'b393ce1b09c1254c3a92c827',
        attributes: ['Dog'],
        category: 'dog',
        createdAt: subDays(now, 4).getTime(),
        image: '/static/mock-images/products/product_5.png',
        name: 'Soja',
        price: 65.99,
        quantity: 10,
        status: 'draft',
        updatedAt: subDays(subHours(now, 1), 1).getTime(),
        variants: 1
      },
      {
        id: 'a6ede15670da63f49f752c89',
        attributes: ['Dog'],
        category: 'dog',
        createdAt: subDays(now, 6).getTime(),
        image: '/static/mock-images/products/product_6.png',
        name: 'Bob',
        price: 76.99,
        quantity: 22,
        status: 'draft',
        updatedAt: subDays(subHours(now, 3), 3).getTime(),
        variants: 1
      },
      {
        id: 'bcad5524fe3a2f8f8620ceda',
        attributes: ['Cat'],
        category: 'cat',
        createdAt: subDays(now, 7).getTime(),
        image: '/static/mock-images/products/product_7.png',
        name: 'Spark',
        price: 115.20,
        quantity: 15,
        status: 'published',
        updatedAt: subDays(subHours(now, 5), 6).getTime(),
        variants: 1
      }
    ];

    return Promise.resolve(products);
  }
}

export const productApi = new ProductsApi();
