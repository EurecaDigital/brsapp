import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { CepService } from '../services/cep.service';
import { UserService } from '../services/user.service';
import { ToastComponent } from '../shared/toast/toast.component';






@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss']
})

export class CepComponent implements OnInit {



  isLoading = true;
  isEditing = false;
  isLinear = true;

  users = [];
  cepForm: FormGroup;
  cep = new FormControl('', [
    Validators.required
  ]);
  bairro = new FormControl('', [
    Validators.required
  ]);
  cidade = new FormControl('', [
    Validators.required
  ]);
  logradouro = new FormControl('', [
    Validators.required
  ]);
  complemento = new FormControl('', [
    Validators.required
  ]);
  uf = new FormControl('', [
    Validators.required
  ]);
  numero = new FormControl('', [
    Validators.required
  ]);




  constructor(private cepService: CepService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    public toast: ToastComponent) { }



  ngOnInit() {
    this.getUsers();
    this.cepForm = this.formBuilder.group({
      cep: this.cep,
      logradouro: this.logradouro,
      numero: this.numero,
      complemento: this.complemento,
      bairro: this.bairro,
      cidade: this.cidade,
      uf: this.uf
    });
  }

  getCeps(cep) {
    this.cepService.getCeps(this.cep)
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      data => this.users = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }
}