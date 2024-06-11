import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historialEtiquetas: string[] = [];
  private apiKey:     string = '0O2v462QZEYQlBRZPPZDIYrWqqXdGk6c';
  private serviceUrl: string = 'http://api.giphy.com/v1/gifs';

  constructor( private httpService: HttpClient ) { }


  get historialEtiquetas(){
    return [...this._historialEtiquetas];
  }


  private organizarHistorial ( etiqueta:string ) {

    etiqueta = etiqueta.toLowerCase();

    if ( this._historialEtiquetas.includes(etiqueta) ) {
      this._historialEtiquetas = this._historialEtiquetas.filter( (etiquetaVieja) => etiquetaVieja !== etiqueta )
    }

    this._historialEtiquetas.unshift( etiqueta );

    this._historialEtiquetas = this._historialEtiquetas.splice(0,10);

    

  }

  buscarEtiqueta( etiqueta: string ): void {

    if (etiqueta.length === 0) return;
    this.organizarHistorial(etiqueta)


    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', etiqueta)
    
    this.httpService.get(`${this.serviceUrl}/search`, { params: params })

      .subscribe( response => {
        console.log( response );

      } )
    
    
  }



}
