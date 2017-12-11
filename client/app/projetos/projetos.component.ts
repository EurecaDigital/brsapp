import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ProjetoService } from '../services/projeto.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent implements OnInit {
  projeto = {};
  projetos = [];
  isLoaading = true;
  isEditing = false;

  addProjetoForm: FormGroup;
  projetoDestino = new FormControl('', Validators.required);
  tipo = new FormControl('', Validators.required);
  nome = new FormControl('', Validators.required);
  assinatura = new FormControl('', Validators.required);

  constructor(private projetoService: ProjetoService,
    private formBuilder: FormBuilder,
    public toast: ToastComponent) { }

  ngOnInit() {
    this.getProjetos();
    this.addProjetoForm = this.formBuilder.group({
      projetoDestino: this.projetoDestino,
      nome: this.nome,
      tipo: this.tipo,
      assinatura: this.assinatura
    });
  }

  getProjetos() {
    this.projetoService.getProjetos().subscribe(
      data => this.projeto = data,
      error => console.log(error),
      () => this.isLoaading = false
    );
  }

  addProjeto() {
    this.projetoService.addProjeto(this.addProjetoForm.value).subscribe(
      res => {
        const newProjeto = res.json();
        this.projetos.push(newProjeto);
        this.addProjetoForm.reset();
        this.toast.setMessage('item adicionado com sucesso.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(projeto) {
    this.isEditing = true;
    this.projeto = projeto;
  }

  cancelEditing() {
    this.isEditing = false;
    this.projeto = {};
    this.toast.setMessage('Edição do item cancelada.', 'warning');
    // reload the projetos to reset the editing
    this.getProjetos();
  }

  editProjeto(projeto) {
    this.projetoService.editProjeto(projeto).subscribe(
      res => {
        this.isEditing = false;
        this.projeto = projeto;
        this.toast.setMessage('item editado com sucesso.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteProjeto(projeto) {
    if (window.confirm('Tem certeza que deseja deletar este item?')) {
      this.projetoService.deleteProjeto(projeto).subscribe(
        res => {
          const pos = this.projetos.map(elem => elem._id).indexOf(projeto._id);
          this.projetos.splice(pos, 1);
          this.toast.setMessage('item deletado com sucesso.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}

