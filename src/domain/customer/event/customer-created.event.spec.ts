import EventDispatcher from '../../@shared/event/event-dispatcher'
import EventInterface from '../../@shared/event/event.interface'
import Customer from '../entity/customer'
import CustomerCreatedEvent from './customer-created.event'
import EnviaConsoleLog1Handler from './handler/envia-console-log-1.handler'
import EnviaConsoleLog2Handler from './handler/envia-console-log-2.handler'

describe('Customer Created Event tests', () => {
	it('should notify all event handlers', () => {
		const eventDispatcher =
			new EventDispatcher()
		const eventHandler1 =
			new EnviaConsoleLog1Handler()
		const eventHandler2 =
			new EnviaConsoleLog2Handler()
		const spyEventHandler1 =
			jest.spyOn(
				eventHandler1,
				'handle'
			)
		const spyEventHandler2 =
			jest.spyOn(
				eventHandler2,
				'handle'
			)

		eventDispatcher.register(
			CustomerCreatedEvent.name,
			eventHandler1
		)
		eventDispatcher.register(
			CustomerCreatedEvent.name,
			eventHandler2
		)

		expect(
			eventDispatcher
				.getEventHandlers[
				CustomerCreatedEvent
					.name
			][0]
		).toMatchObject(eventHandler1)
		expect(
			eventDispatcher
				.getEventHandlers[
				CustomerCreatedEvent
					.name
			][1]
		).toMatchObject(eventHandler2)

		const customer = new Customer(
			'123',
			'Customer 1'
		)
		const event: EventInterface =
			new CustomerCreatedEvent({
				id: customer.id,
				name: customer.name
			})

		eventDispatcher.notify(event)

		expect(
			spyEventHandler1
		).toHaveBeenCalled()
		expect(
			spyEventHandler2
		).toHaveBeenCalled()
	})
})
