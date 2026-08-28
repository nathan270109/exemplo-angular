import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { UsuarioPut } from '../exercicios/formulario-put/usuario-put';
import { UsuarioPost } from '../exercicios/formulario-api/usuario-post';
import { PostResponse } from '../exercicios/metodo-get/post-response';

@Service()
export class ServiceApi {

   private readonly httpClient = inject(HttpClient); 

    private readonly urlApi = 'https://jsonplaceholder.typicode.com/posts';

    
    cadastrarPostDoService(postCadastrado: UsuarioPut) {
        return this.httpClient.post<UsuarioPost>(this.urlApi, postCadastrado);
    }

    atualizarPost(postAtualizado: UsuarioPut) {
        return this.httpClient.put<UsuarioPut>(this.urlApi + '/' + postAtualizado.id, postAtualizado);
    }

    deletarPost(id: number) {
        return this.httpClient.delete(this.urlApi + '/' + id);
    }

    readonly postsDetails = httpResource<PostResponse[]>(
        () => this.urlApi,
        { defaultValue: [] }
    )

}
