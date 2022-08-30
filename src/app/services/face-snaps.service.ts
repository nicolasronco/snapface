import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      snapped: false,
      title: 'Yoshi',
      description: 'Mon meilleur ami depuis tout petit !',
      createdDate: new Date(),
      snaps: 70,
      imageUrl: '../assets/yoshi.png'
    }, {
      id: 2,
      snapped: false,
      title: 'Mario',
      description: 'Le chef !',
      createdDate: new Date(),
      snaps: 180,
      imageUrl: '../assets/mario.png',
      location: 'Château de Bowser'
    }, {
      id: 3,
      snapped: false,
      title: 'Pacman',
      description: 'Le mangeur de fantômes !',
      createdDate: new Date(),
      snaps: 250,
      imageUrl: '../assets/pacman.png',
      location: 'Château des fantômes'
    }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find((snapFaceElt) => snapFaceElt.id === faceSnapId);
    if (faceSnap) {
      return faceSnap;
    } else {
      throw new Error('FaceSnap not found !');
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);

    if (snapType === 'unsnap') {
      faceSnap.snapped = false;
      faceSnap.snaps--;
    } else if (snapType === 'snap') {
      faceSnap.snapped = true;
      faceSnap.snaps++;
    }
  }
}