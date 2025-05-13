import { Sequelize } from 'sequelize-typescript'
import Order from '../../../../domain/checkout/entity/order'
import OrderItem from '../../../../domain/checkout/entity/order_item'
import Customer from '../../../../domain/customer/entity/customer'
import Address from '../../../../domain/customer/value-object/address'
import Product from '../../../../domain/product/entity/product'
import CustomerModel from '../../../customer/repository/sequelize/customer.model'
import CustomerRepository from '../../../customer/repository/sequelize/customer.repository'
import ProductModel from '../../../product/repository/sequelize/product.model'
import ProductRepository from '../../../product/repository/sequelize/product.repository'
import OrderItemModel from './order-item.model'
import OrderModel from './order.model'
import OrderRepository from './order.repository'

describe('Order repository test', () => {
	let sequelize: Sequelize

	beforeEach(async () => {
		sequelize = new Sequelize({
			dialect: 'sqlite',
			storage: ':memory:',
			logging: false,
			sync: { force: true }
		})

		await sequelize.addModels([
			CustomerModel,
			OrderModel,
			OrderItemModel,
			ProductModel
		])
		await sequelize.sync()
	})

	afterEach(async () => {
		await sequelize.close()
	})

	it('should create a new order', async () => {
		const customerRepository =
			new CustomerRepository()
		const customer = new Customer(
			'123',
			'Customer 1'
		)
		const address = new Address(
			'Street 1',
			1,
			'Zipcode 1',
			'City 1'
		)
		customer.changeAddress(address)
		await customerRepository.create(
			customer
		)

		const productRepository =
			new ProductRepository()
		const product = new Product(
			'123',
			'Product 1',
			10
		)
		await productRepository.create(
			product
		)

		const orderItem = new OrderItem(
			'1',
			product.name,
			product.price,
			product.id,
			2
		)

		const order = new Order(
			'123',
			'123',
			[orderItem]
		)

		const orderRepository =
			new OrderRepository()
		await orderRepository.create(
			order
		)

		const orderModel =
			await OrderModel.findOne({
				where: { id: order.id },
				include: ['items']
			})

		expect(
			orderModel.toJSON()
		).toStrictEqual({
			id: '123',
			customer_id: '123',
			total: order.total(),
			items: [
				{
					id: orderItem.id,
					name: orderItem.name,
					price: orderItem.price,
					quantity:
						orderItem.quantity,
					order_id: '123',
					product_id: '123'
				}
			]
		})
	})

	it('should update a order', async () => {
		const customerRepository =
			new CustomerRepository()
		const customer = new Customer(
			'123',
			'Customer 1'
		)
		const address = new Address(
			'Street 1',
			1,
			'Zipcode 1',
			'City 1'
		)
		customer.changeAddress(address)
		await customerRepository.create(
			customer
		)

		const productRepository =
			new ProductRepository()
		const product = new Product(
			'123',
			'Product 1',
			10
		)
		const product2 = new Product(
			'234',
			'Product 2',
			20
		)
		const product3 = new Product(
			'345',
			'Product 3',
			30
		)
		const product4 = new Product(
			'456',
			'Product 4',
			40
		)
		await productRepository.create(
			product
		)
		await productRepository.create(
			product2
		)
		await productRepository.create(
			product3
		)
		await productRepository.create(
			product4
		)

		const order = new Order(
			'123',
			customer.id,
			[
				new OrderItem(
					'1',
					product.name,
					product.price,
					product.id,
					2
				)
			]
		)
		const orderRepository =
			new OrderRepository()
		await orderRepository.create(
			order
		)

		order.addItems(
			new OrderItem(
				'2',
				product2.name,
				product2.price,
				product2.id,
				2
			)
		)
		await orderRepository.update(
			order
		)

		let orderModel =
			await OrderModel.findOne({
				where: { id: order.id },
				include: ['items']
			})
		expect(
			orderModel.toJSON()
		).toStrictEqual({
			id: '123',
			customer_id: '123',
			total: 60,
			items: [
				{
					id: '1',
					name: 'Product 1',
					price: 10,
					quantity: 2,
					order_id: '123',
					product_id: '123'
				},
				{
					id: '2',
					name: 'Product 2',
					price: 20,
					quantity: 2,
					order_id: '123',
					product_id: '234'
				}
			]
		})

		order.addItems(
			new OrderItem(
				'3',
				product3.name,
				product3.price,
				product3.id,
				3
			),
			new OrderItem(
				'4',
				product4.name,
				product4.price,
				product4.id,
				4
			)
		)
		await orderRepository.update(
			order
		)

		orderModel =
			await OrderModel.findOne({
				where: { id: order.id },
				include: ['items']
			})
		expect(
			orderModel.toJSON()
		).toStrictEqual({
			id: '123',
			customer_id: '123',
			total: 310,
			items: [
				{
					id: '1',
					name: 'Product 1',
					price: 10,
					quantity: 2,
					order_id: '123',
					product_id: '123'
				},
				{
					id: '2',
					name: 'Product 2',
					price: 20,
					quantity: 2,
					order_id: '123',
					product_id: '234'
				},
				{
					id: '3',
					name: 'Product 3',
					price: 30,
					quantity: 3,
					order_id: '123',
					product_id: '345'
				},
				{
					id: '4',
					name: 'Product 4',
					price: 40,
					quantity: 4,
					order_id: '123',
					product_id: '456'
				}
			]
		})
	})

	it('should find an order', async () => {
		const customerRepository =
			new CustomerRepository()
		const customer = new Customer(
			'123',
			'Customer 1'
		)
		const address = new Address(
			'Street 1',
			1,
			'Zipcode 1',
			'City 1'
		)
		customer.changeAddress(address)
		await customerRepository.create(
			customer
		)

		const productRepository =
			new ProductRepository()
		const product = new Product(
			'123',
			'Product 1',
			10
		)
		await productRepository.create(
			product
		)

		const order = new Order(
			'123',
			customer.id,
			[
				new OrderItem(
					'1',
					product.name,
					product.price,
					product.id,
					2
				)
			]
		)
		const orderRepository =
			new OrderRepository()
		await orderRepository.create(
			order
		)

		const orderResult =
			await orderRepository.find(
				order.id
			)

		expect(
			orderResult
		).toStrictEqual(order)
	})

	it('should find all orders', async () => {
		const customerRepository =
			new CustomerRepository()
		const customer = new Customer(
			'123',
			'Customer 1'
		)
		const customer2 = new Customer(
			'1234',
			'Customer 2'
		)
		const address = new Address(
			'Street 1',
			1,
			'Zipcode 1',
			'City 1'
		)
		const address2 = new Address(
			'Street 2',
			2,
			'Zipcode 2',
			'City 2'
		)
		customer.changeAddress(address)
		customer2.changeAddress(
			address2
		)
		await customerRepository.create(
			customer
		)
		await customerRepository.create(
			customer2
		)

		const productRepository =
			new ProductRepository()
		const product = new Product(
			'123',
			'Product 1',
			10
		)
		const product2 = new Product(
			'1232',
			'Product 2',
			20
		)
		await productRepository.create(
			product
		)
		await productRepository.create(
			product2
		)

		const orderRepository =
			new OrderRepository()
		const order = new Order(
			'123',
			customer.id,
			[
				new OrderItem(
					'1',
					product.name,
					product.price,
					product.id,
					2
				)
			]
		)
		const order2 = new Order(
			'1232',
			customer2.id,
			[
				new OrderItem(
					'2',
					product2.name,
					product2.price,
					product2.id,
					4
				)
			]
		)
		await orderRepository.create(
			order
		)
		await orderRepository.create(
			order2
		)

		const orders =
			await orderRepository.findAll()

		expect(orders).toHaveLength(2)
		expect(orders).toContainEqual(
			order
		)
		expect(orders).toContainEqual(
			order2
		)
	})
})
