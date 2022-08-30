import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  buttonLabel!: string;

  constructor (
    private faceSnapService: FaceSnapsService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.buttonLabel = 'Oh snap !';
  }

  onViewFaceSnap(): void {
    this.router.navigateByUrl('facesnaps/' + this.faceSnap.id);
  }

  onSnap() {
    if (this.faceSnap.snapped) {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonLabel = 'Oh snap !';
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonLabel = 'Oops unSnap !';
    }
  }
}
