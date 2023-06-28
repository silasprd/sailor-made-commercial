import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.scss']
})
export class ConceptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  images = [
    'assets/amazoniaazul.jpg',
    'assets/SisGAAz.jpg',
    'assets/boatsInSea.jpg',
    'assets/logo.jpg',
  ]

}
