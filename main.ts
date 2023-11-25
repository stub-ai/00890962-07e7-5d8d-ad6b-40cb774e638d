import { EventBus } from './EventBus';
import { SomeEvent } from './SomeEvent';
import { OtherEvent } from './OtherEvent';

const bus = new EventBus();

bus.subscribe(SomeEvent, event => console.log('SomeEvent:', event.data));
bus.subscribe(OtherEvent, event => console.log('OtherEvent:', event.data));

bus.publish(new SomeEvent('some data')); // logs: 'SomeEvent: some data'
bus.publish(new OtherEvent('other data')); // logs: 'OtherEvent: other data'