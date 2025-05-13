import EventDispatcher from '../../@shared/event/event-dispatcher'
import EventInterface from '../../@shared/event/event.interface'
import Customer from '../entity/customer'
import Address from '../value-object/address'
import CustomerAddressChangedEvent from './customer-address-changed.event'
import EnviaConsoleLogHandler from './handler/envia-console-log.handler'

describe('Customer Address Changed Event tests', () => {
	it('should notify all event handlers', () => {
		const eventDispatcher =
			new EventDispatcher()
		const eventHandler =
			new EnviaConsoleLogHandler()
		const spyEventHandler =
			jest.spyOn(
				eventHandler,
				'handle'
			)

		eventDispatcher.register(
			CustomerAddressChangedEvent.name,
			eventHandler
		)

		expect(
			eventDispatcher
				.getEventHandlers[
				CustomerAddressChangedEvent
					.name
			][0]
		).toMatchObject(eventHandler)

		const customer = new Customer(
			'123',
			'Customer 1'
		)
		const address = new Address(
			'street',
			1,
			'zip',
			'city'
		)
		customer.changeAddress(address)
		const event: EventInterface =
			new CustomerAddressChangedEvent(
				{
					id: customer.id,
					name: customer.name,
					address:
						address.toString()
				}
			)

		eventDispatcher.notify(event)

		expect(
			spyEventHandler
		).toHaveBeenCalled()
	})
})
