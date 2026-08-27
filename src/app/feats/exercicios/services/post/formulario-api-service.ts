import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Usuario } from '../../formulario-api/usuario';
import { PostUsuario } from '../../formulario-api/post-usuario';


@Service()
export class FormularioApiService {

    private readonly httpClient = inject(HttpClient);

    private readonly urlApi = 'https://jsonplaceholder.typicode.com/posts';
    
    cadastrarPostDoService(usuarioCadastrado: Usuario) {
        return this.httpClient.post<PostUsuario>(this.urlApi, usuarioCadastrado)
    }


}
