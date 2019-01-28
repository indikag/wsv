import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav'

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	@ViewChild('sideNav') sideNav: MatSidenav;
	public sideNavType: string = 'my_profile'

	constructor() { }

	ngOnInit() {
	}



	public myProfileBtnClick() {
		this.sideNav.close()
		this.sideNavType = 'my_profile'
		this.sideNav.open()
	}

	public settingsBtnClick() {
		this.sideNav.close()
		this.sideNavType = 'settings'
		this.sideNav.open()
	}

}


