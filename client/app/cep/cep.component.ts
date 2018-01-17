import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { CepService } from '../services/cep.service';
import { UserService } from '../services/user.service';
import { RegisterComponent } from "../register/register.component";
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss']
})

export class CepComponent implements OnInit {
  numero: FormControl;
  uf: FormControl;
  complemento: FormControl;
  logradouro: FormControl;
  localidade: FormControl;
  bairro: FormControl;
  cepForm: any;
  cep: any;

  isLoading = true;
  isEditing = false;
  isLinear = true;

  users = [];

  constructor(private cepService: CepService,
    private userService: UserService,
    private registerComponent: RegisterComponent,
    private formBuilder: FormBuilder,
    public toast: ToastComponent) {

    this.cepForm= FormGroup;
    this.cep = new FormControl('', [
      Validators.required
    ]);
    this.bairro = new FormControl('', [
      Validators.required
    ]);
    this.localidade = new FormControl('', [
      Validators.required
    ]);
    this.logradouro = new FormControl('', [
      Validators.required
    ]);
    this.complemento = new FormControl('', [
      Validators.required
    ]);
    this.uf = new FormControl('', [
      Validators.required
    ]);
    this.numero = new FormControl('', [
      Validators.required
    ]);
  }



  ngOnInit() {

    this.cepForm = this.formBuilder.group({
      cep: this.cep,
      logradouro: this.logradouro,
      numero: this.numero,
      complemento: this.complemento,
      bairro: this.bairro,
      localidade: this.localidade,
      uf: this.uf
    });
  }

  getCep(cep) {
    console.log('Cep procurado:' + cep);
    this.cepService.getCep(cep).subscribe(
      data => this.cep = data,
      error => console.log(error),
      () => this.isLoading = false
    );

  }

}