import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public isToggleMenu: boolean = false;

	constructor(private router: Router, private dataService: DataService) { }

	ngOnInit() {
	}

	public showToggleMenu() {
		this.isToggleMenu = !this.isToggleMenu;
	}

	onNewButtonClick() {
		// if you want to pass any additional data pls use dataService.
		this.router.navigateByUrl('service');
	}
}
