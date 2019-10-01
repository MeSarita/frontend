import {Component, OnInit} from '@angular/core';
import {Observable, Observer} from 'rxjs';
import { UploadService } from '../upload.service';

export interface ExampleTab {
  label: string;
  content: string;
}


@Component({
  selector: 'app-tview',
  templateUrl: './tview.component.html',
  styleUrls: ['./tview.component.css']
})
export class TviewComponent implements OnInit {

  asyncTabs: Observable<ExampleTab[]>;

  constructor(private uploadservice: UploadService) { 
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'First', content: 'Content 1'},
          {label: 'Second', content: 'Content 2'},
          {label: 'Third', content: 'Content 3'},
        ]);
      }, 1000);
    });
  }

  ngOnInit() {
  }

}
