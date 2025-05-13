import EventInterface from '../../@shared/event/event.interface'

type Data = {
	id: string
	name: string
	address: string
}

export default class CustomerAddressChangedEvent
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
