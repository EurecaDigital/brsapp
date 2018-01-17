import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';

import { CepComponent } from "../cep/cep.component";
import { ToastComponent } from '../shared/toast/toast.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})


export class RegisterComponent implements OnInit {

  isLinear = true;

  registerForm: FormGroup;
  cep = new FormControl('', [Validators.required]);
  bairro = new FormControl('', [Validators.required]);
  localidade = new FormControl('', [Validators.required]);
  logradouro = new FormControl('', [Validators.required]);
  complemento = new FormControl('', [Validators.required]);
  uf = new FormControl('', [Validators.required]);
  numero = new FormControl('', [Validators.required]);

  username = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
  role = new FormControl('', [
    Validators.required
  ]);
  sexo = new FormControl('', [
    Validators.required
  ]);
  datanascimento = new FormControl('', [
    Validators.required
  ]);
  celular = new FormControl('', [
    Validators.required
  ]);
  duvidas = new FormControl('', [
    Validators.required
  ]);
  perfil = new FormControl('', [
    Validators.required
  ]);
  pessoas = new FormControl('', [
    Validators.required
  ]);
  animais = new FormControl('', [
    Validators.required
  ]);
  veiculos = new FormControl('', [
    Validators.required
  ]);
  construcao = new FormControl('', [
    Validators.required
  ]);
  ocupacao = new FormControl('', [
    Validators.required
  ]);
  duvidasii = new FormControl('', [
    Validators.required
  ]);
  opiniao = new FormControl('', [
    Validators.required
  ]);
  comentario = new FormControl('', [
    Validators.required
  ]);
  agradecimento = new FormControl('', [
    Validators.required
  ]);

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    public toast: ToastComponent,
    private userService: UserService) { }

  ngOnInit() {
    
    this.registerForm = this.formBuilder.group({
      cep: this.cep,      
      username: this.username,
      email: this.email,
      password: this.password,
      role: this.role,

      sexo: this.sexo,
      datanascimento: this.datanascimento,
      celular: this.celular,
      duvidas: this.duvidas,
      perfil: this.perfil,
      pessoas: this.pessoas,
      animais: this.animais,
      veiculos: this.animais,
      construcao: this.animais,
      ocupacao: this.animais,
      duvidasii: this.duvidasii,
      opiniao: this.opiniao,
      comentario: this.comentario,
      agradecimento: this.comentario
    });
  }

  setClassUsername() {
    return { 'has-danger': !this.username.pristine && !this.username.valid };
  }
  setClassEmail() {
    return { 'has-danger': !this.email.pristine && !this.email.valid };
  }
  setClassPassword() {
    return { 'has-danger': !this.password.pristine && !this.password.valid };
  }


  register() {
    this.userService.register(this.registerForm.value).subscribe(
      res => {
        this.toast.setMessage('you successfully registered!', 'success');
        /*this.router.navigate(['/login']);*/
      },
      error => this.toast.setMessage('email already exists', 'danger')
    );
  }
}