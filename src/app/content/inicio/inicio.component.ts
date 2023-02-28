import { Component } from '@angular/core';
import { CargarscriptsService } from 'src/app/cargarscripts.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor (private Cargarscripts: CargarscriptsService){
    Cargarscripts.cargar ([
      "assets/vendor/purecounter/purecounter_vanilla.js",
      "assets/vendor/aos/aos.js",
      "assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
      "assets/vendor/glightbox/js/glightbox.min.js",
      "assets/vendor/isotope-layout/isotope.pkgd.min.js",
      "assets/vendor/swiper/swiper-bundle.min.js",
      "assets/vendor/waypoints/noframework.waypoints.js",
      "assets/vendor/php-email-form/validate.js",
     "assets/js/main.js"
        ])
      }
    }

