import { Component, OnInit } from '@angular/core';
import { AlbumsFacade } from '@ngrx-in-nx-mfe/albums/data-access';

@Component({
  selector: 'ngrx-in-nx-mfe-albums-container',
  templateUrl: './albums-container.component.html',
  styleUrls: ['./albums-container.component.scss']
})
export class AlbumsContainerComponent implements OnInit {

  albums$=this.albumsFacade.albums$;
  constructor(private albumsFacade:AlbumsFacade) { }

  ngOnInit(): void {
    this.albumsFacade.loadAllAlbums();
  }

}
