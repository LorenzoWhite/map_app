import { Component, OnInit } from '@angular/core';
import { MapsService } from '../../maps.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  lat: string = '';
  lng: string = '';

  constructor(private maps: MapsService) { }

  ngOnInit() {
    this.maps.getLocation().subscribe(data => {
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
      console.log(this.lat, this.lng);
    });
  }

}
