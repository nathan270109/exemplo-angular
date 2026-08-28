import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { ListUsers } from './request-get/list-users';
import { Users } from './cadastro-users/users';

@Service()
export class UserService {

    private readonly httpClient = inject(HttpClient);

    private readonly urlApi = ' https://jsonplaceholder.typicode.com/users';

    readonly userDetails = httpResource<ListUsers[]>(
        () => this.urlApi,
        { defaultValue: [] } 
    )

    cadastrarPostDoService(postCadastrado: Users) {
            return this.httpClient.post<Users>(this.urlApi, postCadastrado);
        }

}
