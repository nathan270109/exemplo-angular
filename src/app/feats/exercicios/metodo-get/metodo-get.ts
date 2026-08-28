import { Component, inject } from '@angular/core';
import { ServiceApi } from '../../services/service-api';

@Component({
  selector: 'app-metodo-get',
  imports: [],
  templateUrl: './metodo-get.html',
  styleUrl: './metodo-get.css',
})
export class MetodoGet {
   protected readonly consumoService = inject(ServiceApi);

  
}
