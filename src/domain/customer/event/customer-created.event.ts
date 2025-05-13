import EventInterface from '../../@shared/event/event.interface'

type Data = {
	id: string
	name: string
}

export default class CustomerCreatedEvent
	implements EventInterface<Data>
{
	dataTimeOccurred: Date
	eventData: Data

	constructor(eventData: Data) {
		this.dataTimeOccurred =
			new Date()
		this.eventData = eventData
	}
}
