import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  projects = [
    {
      name: "Country App",
      description: "A country finder made with Angular using the RestCountriesApi.",
      img: "../assets/img/imagen-countryapp.png",
      keyWords: "angular, Bootstrap, api",
      link: "https://bucolic-sunflower-2cf0e7.netlify.app/"
    },
    {
      name: "Pipes Cheatsheet",
      description: "Angular pipes cheatsheet made with Angular and primeng.",
      img: "../assets/img/pipesimage.png",
      keyWords: "angular, primeng",
      link: "https://silly-cobbler-879619.netlify.app/"
    },
    {
      name: "Instagram clone",
      description: "My Instagram profile page cloned with Angular.",
      img: "../assets/img/imagen-instagram.png",
      keyWords: "angular, css",
      link: "https://rainbow-figolla-d42e29.netlify.app/"
    },
    {
      name: "Grade Calculator",
      description: "Percentage grade calculator made with Angular.",
      img: "../assets/img/calculadoradenotas.png",
      keyWords: "Angular, Bootstrap, api",
      link: "https://notasporporcentajes.000webhostapp.com/"
    },
    {
      name: "Survey",
      description: "A survey example made in the Responsive Web Desing in freeCodeCamp course.",
      img: "../assets/img/imagen-encuesta.png",
      keyWords: "html, css",
      link: "#"
    },
    {
      name: "JS Documentation",
      description: "JS basic docs made in the Responsive Web Desing in freeCodeCamp course.",
      img: "../assets/img/imagen-documentacion.png",
      keyWords: "html, css",
      link: "#"
    },
    {
      name: "Tribute Page",
      description: "A basic page made in the Responsive Web Desing in freeCodeCamp course.",
      img: "../assets/img/imagen-tributo.png",
      keyWords: "html, css",
      link: "#"
    },
  ]
}
