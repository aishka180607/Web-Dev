import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService, Album } from '../albums/albums.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  updatedTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe((album) => {
      this.album = album;
      this.updatedTitle = album.title;
    });
  }

  saveTitle(): void {
    if (!this.album) return;
    this.album.title = this.updatedTitle;
    this.albumsService.updateAlbum(this.album).subscribe(() => {
      alert('Title updated successfully!');
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
