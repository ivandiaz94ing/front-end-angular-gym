import { Cliente } from './../interfaces/clientes.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroments } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl: string = enviroments.baseUrl; // Reemplaza con la URL de tu API
  // private apiUrl = 'https://tu-api.com/Clientes';


  constructor(private http: HttpClient) {}

   // Obtener todos los Clientes
   getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl + '/clients');
  }

  // Obtener un Cliente por ID
  getCliente(id: number): Observable<Cliente> {
    const url = `${this.baseUrl}/clients/${id}`;
    return this.http.get<Cliente>(url);
  }

  // Crear un nuevo Cliente
  crearCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente);
  }

  // Actualizar un Cliente
  actualizarCliente(id: number, cliente: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Cliente>(url, cliente);
  }

  // Eliminar un Cliente
  eliminarCliente(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}


