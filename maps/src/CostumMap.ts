import faker from 'faker';
import { User } from './User';
import { Company } from './Company';

export interface mappable {
	location: {
		lat: number;
		lng: number;
	};

	content(): string;
}
export class CostumMap {
	private googleMap: google.maps.Map;

	constructor(divID: string) {
		this.googleMap = new google.maps
			.Map(document.getElementById(divID), {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0,
			},
		});
	}

	addMarker(mappable: mappable): void {
		let marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng,
			},
		});

		marker.addListener('click', () => {
			const infoWindow = new google.maps.InfoWindow({
				content: mappable.content(),
			});

			infoWindow.open(this.googleMap, marker);
		});
	}
}
