import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, Capacitor, FileSystemDirectory, CameraPhoto, CameraSource } from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  public async addNewToGallery() {
    // Take a photo
    const capturePhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  }
}
