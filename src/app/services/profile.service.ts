import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = '/api/profiles';

  constructor(private http: HttpClient) { }

  getAllProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.apiUrl);
  }

  createProfile(profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(this.apiUrl, profile);
  }
}