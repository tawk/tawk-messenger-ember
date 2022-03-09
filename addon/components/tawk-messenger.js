import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { get } from '@ember/object';

export default class TawkMessengerComponent extends Component {
	@service tawkMessenger;

	constructor(...args) {
		super(...args);

		console.log('asd');

		this.tawkMessenger.load();
	}
}
