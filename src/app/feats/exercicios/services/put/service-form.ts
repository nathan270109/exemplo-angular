import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Usuario } from '../../formulario-put/usuario';

@Service()
export class ServiceForm {

    private readonly httpClient = inject(HttpClient);

    private readonly urlApi = 'https://jsonplaceholder.typicode.com/posts';

    atualizarPost(postAtualizado: Usuario) {
        return this.httpClient.put(this.urlApi + '/' + postAtualizado.id, postAtualizado)
    }
 


}
