import EventHandlerInterface from '../../../@shared/event/event-handler.interface'
import CustomerCreatedEvent from '../customer-created.event'

export default class EnviaConsoleLog1Handler
	implements
		EventHandlerInterface<CustomerCreatedEvent>
{
	handle(
		event: CustomerCreatedEvent
	): void {
		// console.log(`Customer id: "${event.eventData.id}" and name: "${event.eventData.name}"`)
		console.log(
			'Esse é o primeiro console.log do evento: CustomerCreated'
		)
	}
}
