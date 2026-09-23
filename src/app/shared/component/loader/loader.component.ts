import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../../core/services/loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  loading = false;

  constructor(
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {

    this.loadingService.loading$
      .subscribe(isLoading => {
        this.loading = isLoading;
      });

  }

}
