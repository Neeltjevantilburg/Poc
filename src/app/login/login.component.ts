import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'pim-dashboard',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  // HTML formGroup
  public loginForm!: FormGroup;
  // hulp property wachtwoord tonen / verbergen
  public hide = true;

  constructor(
    // formulier opbouwen
    private formBuilder: FormBuilder,
    // navigeren na inloggen
    private router: Router
    ) { }
    
    ngOnInit(): void {
      // formulier opbouwen
      this.loginForm = this.formBuilder.group({
        // gebruikersnaam veld met validatie
        userName: ['', Validators.required],
        // wachtwoord veld met validatie
        password: ['', Validators.required]
      });
    };    
    
    login() {
    // credentials afvangen
    const userName = this.loginForm.controls['userName'].value;
    const password = this.loginForm.controls['password'].value;
      
    console.log(`username: ${userName}, password: ${password}`);
      
    // navigeren na inloggen
    this.router.navigate(['/dashboard']);
  };

}