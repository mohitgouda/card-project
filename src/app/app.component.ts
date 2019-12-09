import {
	Component,
	OnInit,
	Renderer2,
	HostListener
} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	state: boolean = false;
	element: any;
	cardElement: any;
	constructor(private renderer: Renderer2) {

	}
	ngOnInit() {

	}

	@HostListener('click', ['$event'])
	onclick(event) {
		this.element = event.target;
		let more = this.element.classList.contains('more');
		this.cardElement = this.element.parentNode.parentNode.parentNode;
		this.renderer.addClass(this.cardElement, "selected");
		let close = this.element.classList.contains('close');
		if (more) {
			this.showReveal();
		} else if (close) {
			this.closeReveal();
		}
	}

	showReveal() {
		let selected = this.cardElement.classList.contains('selected');
		if (selected) {
			this.renderer.addClass(this.cardElement.querySelector('.card-reveal'), "show");
		}
	}

	closeReveal() {
		this.renderer.removeClass(this.cardElement.querySelector('.card-reveal'), "show");
		this.renderer.removeClass(this.cardElement, "selected");
	}
}
