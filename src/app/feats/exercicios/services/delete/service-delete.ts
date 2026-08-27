import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { InterfaceDelete } from '../../formulario-delete/interface-delete';

@Service()
export class ServiceDelete {
    private readonly httpClient = inject(HttpClient);

    private readonly urlApi = 'https://jsonplaceholder.typicode.com/posts'

    deletarPostService(id: number) {
        return this.httpClient.delete(this.urlApi + '/' + id);
    }
}
