import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('ImpressumComponent loaded'); // Debugging Ausgabe
  }
}
