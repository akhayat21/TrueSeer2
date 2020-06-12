import { AuthData } from './../models/auth-data.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: "root"})
export class AuthService{
    private token: String;

    constructor(private http: HttpClient) {}

    getToken(){
        return this.token;
    }

    createUser(email: String, password: String) {
        const authData: AuthData = {email: email, password: password}
        this.http.post("http://localhost:3000/api/user/signup", authData)
        .subscribe(response => {
            console.log(response)
        })
    }

    loginUser(email: String, password: String) {
        const authData: AuthData = {email: email, password: password}
        this.http.post<{token: string}>("http://localhost:3000/api/user/login", authData)
        .subscribe(response => {
            const token = response.token
            this.token = token;
        })
    }
}