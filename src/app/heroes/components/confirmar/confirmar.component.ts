import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent {

  constructor( 
    private dialogRef : MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data : Heroe
  ){}

  borrar(){
    this.dialogRef.close(true)
  }
  
  cancelar(){
    this.dialogRef.close(false)
  }
}
