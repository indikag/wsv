import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public isToggleMenu: boolean = false

	constructor() { }

	ngOnInit() {
	}

	public showToggleMenu() {
		this.isToggleMenu = !this.isToggleMenu
	}

}
