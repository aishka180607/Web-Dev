import { Component, OnInit } from '@angular/core';
import { AlbumsService, Album } from './albums.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // 👈 Нужно для [(ngModel)]

@Component({
  selector: 'app-albums',
  standalone: true,
  templateUrl: './albums.component.html',
  imports: [CommonModule, RouterModule, FormsModule], // 👈 Добавили FormsModule
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  newAlbumTitle: string = '';  // 👈 Поле для ввода нового альбома

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe((data) => {
      this.albums = data;
    });
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }

  
}
