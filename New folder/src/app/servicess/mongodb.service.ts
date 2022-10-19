import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MongodbService {

  constructor( private http: HttpClient) { }
  createPost(data: any){
   return  this.http.post('/api/posts',data)
  }
  adminPost(data:any){
    return this.http.post('/api/admins',data)

  }
  getAllPosts(){
    return this.http.get('/api/posts')
  }
  deletePosts(){
    
  }
  
}
