import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [MatFormFieldModule, MatIconModule, MatCardModule],
  exports: [MatFormFieldModule, MatIconModule, MatCardModule],
})
export class MaterialModule {}
