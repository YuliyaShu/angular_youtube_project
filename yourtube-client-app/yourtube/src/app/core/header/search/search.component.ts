import {
  Component, Injectable, OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { ResponseService } from '../../../youtube/main/response.service';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  search: String = '';
  submitted = false;

  constructor(
    private searchService: SearchService,
    private responseService: ResponseService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this.searchService.setSubmitted(true);
    this.responseService.getItemsList().subscribe((value) => {
      if (Array.isArray(value)) {
        this.responseService.setItems(value);
      }
    });
    this.router.navigateByUrl('');
  }
}
