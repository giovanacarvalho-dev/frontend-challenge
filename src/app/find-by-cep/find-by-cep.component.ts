import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Address } from '../models/address';
import { FindByCepService } from '../find-by-cep.service';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-find-by-cep',
  templateUrl: './find-by-cep.component.html',
  styleUrl: './find-by-cep.component.scss'
})
export class FindByCepComponent {
  cep: string = '';
  address: Address | null = null;
  constructor(private findByCep: FindByCepService) {

  }

  search(cep: string) {
    if (!/^\d{5}-?\d{3}$/.test(cep)) {
      alert("Por favor, digite um CEP válido no formato 12345-678.");
      return;
    }
    this.findByCep.findAddress(cep.replace(/\D/g, '')).subscribe(
      (address: any) => {
          this.address = address;
      },
      (error: HttpErrorResponse) => {
          if (error.status === 400) {
              alert("O CEP informado é inválido.");
          } else if (error.status === 404) {
              alert("O CEP informado não existe.");
          } else if (error.status === 500) {
              alert("Erro interno no servidor.");
          } else {
              alert("Ocorreu um erro inesperado.");
          }
      }
  );
  }

  applyMask(event: any) {
    const input = event.target as HTMLInputElement;
    let trimmed = input.value.replace(/\D/g, '');
    
    if (trimmed.length > 5) {
        trimmed = trimmed.substring(0, 5) + '-' + trimmed.substring(5);
    }

    input.value = trimmed;
}
}
