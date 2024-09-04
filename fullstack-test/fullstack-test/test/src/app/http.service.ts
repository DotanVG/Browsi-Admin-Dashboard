import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publisher, Domain } from "./types";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    private apiUrl = (window as any).API_URL || 'http://localhost:4300/api';

    constructor(private http: HttpClient) {}

    getPublishers(): Observable<Publisher[]> {
        return this.http.get<Publisher[]>(`${this.apiUrl}/publishers`);
    }

    addPublisher(publisherName: string): Observable<Publisher> {
        console.log('HttpService: Adding publisher:', publisherName);
        return this.http.post<Publisher>(`${this.apiUrl}/publishers`, { publisher: publisherName });
    }

    getDomains(publisherName: string): Observable<Domain[]> {
        console.log('HttpService: Getting domains for publisher:', publisherName);
        return this.http.get<Domain[]>(`${this.apiUrl}/domains/${publisherName}`);
    }
}