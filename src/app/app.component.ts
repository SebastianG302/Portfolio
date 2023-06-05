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
      name: "Country App (2023)",
      description: "A country finder made with Angular using the RestCountriesApi.",
      img: "../assets/img/imagen-countryapp.png",
      alt: "Image of a country finder made with Angular using the RestCountriesApi.",
      keyWords: "angular, Bootstrap, api",
      link: "https://bucolic-sunflower-2cf0e7.netlify.app/"
    },
    {
      name: "Pipes Cheatsheet (2023)",
      description: "Angular pipes cheatsheet made with Angular and primeng.",
      img: "../assets/img/pipesimage.png",
      alt: "Image of Angular pipes cheatsheet made with Angular and primeng.",
      keyWords: "angular, primeng",
      link: "https://silly-cobbler-879619.netlify.app/"
    },
    {
      name: "Instagram clone (2023)",
      description: "My Instagram profile page cloned with Angular.",
      img: "../assets/img/imagen-instagram.png",
      alt: "Image of my Instagram profile page cloned with Angular.",
      keyWords: "angular, css",
      link: "https://rainbow-figolla-d42e29.netlify.app/"
    },
    {
      name: "Grade Calculator (2023)",
      description: "Percentage grade calculator made with Angular.",
      img: "../assets/img/calculadoradenotas.png",
      alt: "Image of percentage grade calculator made with Angular.",
      keyWords: "Angular, Bootstrap, api",
      link: "https://notasporporcentajes.000webhostapp.com/"
    },
    {
      name: "Survey (2022)",
      description: "A survey made in the Responsive Web Desing in freeCodeCamp.",
      img: "../assets/img/imagen-encuesta.png",
      alt: "Image of a survey example made in the Responsive Web Desing in freeCodeCamp course.",
      keyWords: "html, css",
      link: "https://survey-page-fcc.netlify.app"
    },
    {
      name: "JS Documentation (2022)",
      description: "JS basic docs made in the Responsive Web Desing in freeCodeCamp course.",
      img: "../assets/img/imagen-documentacion.png",
      alt: "Image of JS basic docs made in the Responsive Web Desing in freeCodeCamp course.",
      keyWords: "html, css",
      link: "https://documentation-js-fcc.netlify.app"
    },
    {
      name: "Tribute Page (2022)",
      description: "A basic page made in the Responsive Web Desing in freeCodeCamp course.",
      img: "../assets/img/imagen-tributo.png",
      alt: "Image of a basic page made in the Responsive Web Desing in freeCodeCamp course.",
      keyWords: "html, css",
      link: "https://fcc3-tribute-page.netlify.app"
    },
    {
      name: "Landing Page (2022)",
      description: "A simple landing page from freeCodeCamp course.",
      img: "../assets/img/landing.png",
      alt: "Image of a simple landing page project",
      keywords: "html, css",
      link: "https://landing-pagefcc.netlify.app"
    }
  ]
}
