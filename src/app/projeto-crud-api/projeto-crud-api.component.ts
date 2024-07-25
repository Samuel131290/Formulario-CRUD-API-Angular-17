import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../Models/Produto';
import { ProdutoService } from '../servico/produto.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-projeto-crud-api',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './projeto-crud-api.component.html',
  styleUrl: './projeto-crud-api.component.scss'
})

export class Component13Component {
  vetor: Produto[] = [];
  btnCadastrar: boolean = true;
  inputId: boolean = false;

  formulario = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(''),
    valor: new FormControl(null)
  });

  //Contrutor
  constructor(private servico: ProdutoService) { }

  ngOnInit() {
    this.selecionar();
  }

  produtoCadastrado(nome: string) {
    return this.vetor.some(produto => produto.nome === nome);
  }

  cadastrar() {
    const nome = this.formulario.value.nome;
    if (this.produtoCadastrado(nome)) {
      alert("Produto já cadastrado!");
      return;
    } else {
      this.servico.cadastrar(this.formulario.value as Produto).subscribe(retorno => {
        this.vetor.push(retorno);
        this.formulario.reset()
      })
    };
  }

  selecionar() {
    this.servico.selecionar().subscribe(retorno => { this.vetor = retorno });
  }

  selecionarEspecifico(i: number) {
    this.formulario.setValue({
      id: this.vetor[i].id,
      nome: this.vetor[i].nome,
      valor: this.vetor[i].valor
    });
    this.btnCadastrar = false;
  }

  alterar() {
    this.servico.alterar(this.formulario.value as Produto).subscribe(retorno => {
      let iAlterado = this.vetor.findIndex(obj => {
        return this.formulario.value.id === obj.id;
      });
      this.vetor[iAlterado] = retorno;
      this.formulario.reset();
      this.btnCadastrar = true;
    });
  }

  remover() {
    this.servico.remover(this.formulario.value.id).subscribe(() => {
      let iRemover = this.vetor.findIndex(obj => {
        return obj.id === this.formulario.value.id;
      });
      this.vetor.splice(iRemover, 1);
      this.formulario.reset();
      this.btnCadastrar = true;
    });
  }
}
