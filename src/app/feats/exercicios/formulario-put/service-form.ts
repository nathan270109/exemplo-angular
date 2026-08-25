import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Usuario } from './usuario';

@Service()
export class ServiceForm {

    private readonly httpClient = inject(HttpClient);

    private readonly urlApi = 'https://jsonplaceholder.typicode.com/posts';

    updatePutDoService(usuarioUpdate: Usuario) {
        return this.httpClient.put(this.urlApi, usuarioUpdate);
    }

}
