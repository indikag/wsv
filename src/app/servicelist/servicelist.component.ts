import { Component, OnInit } from '@angular/core';

import { Constants } from '../util/constants';
import { Service } from '../model/activeservice.model';
import { ServiceUser } from '../model/serviceuser.model';

@Component({
	selector: 'app-servicelist',
	templateUrl: './servicelist.component.html',
	styleUrls: ['./servicelist.component.css']
})
export class ServicelistComponent implements OnInit {
	public constants = Constants

	constructor() {
		
	}

	ngOnInit() {
	}



}
