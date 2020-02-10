import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}
  getUsuarios() {
    return this.http.get("");
  }
}
