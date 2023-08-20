import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MatConfirmDialogComponent } from '../components/mat-confirm-dialog/mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DataConfirmDialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog():MatDialogRef<MatConfirmDialogComponent> {
    return this.dialog.open(MatConfirmDialogComponent);
  }
}
