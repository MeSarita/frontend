import {Component, OnInit, OnDestroy, AfterViewInit, ViewEncapsulation} from '@angular/core';
import {Observable, Observer, Subscription} from 'rxjs';
import { UploadService } from '../upload.service';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';

export interface ExampleTab {
  label: string;
  content: string;
}


@Component({
  selector: 'app-tview',
  templateUrl: './tview.component.html',
  styleUrls: ['./tview.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TviewComponent implements OnInit, AfterViewInit, OnDestroy {



  tabColor = 'red';

  dataset: any = [];
  keys = [];

  asyncTabs: Observable<ExampleTab[]>;
  // asyncTabs: any;
  subscription = Subscription;

  // constructor(private uploadservice: UploadService) {
  //   this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
  //     setTimeout(() => {
  //       observer.next([
  //         {label: 'First', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
  //         {label: 'Second', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
  //         {label: 'Third', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
  //       ]);
  //     }, 1000);
  //   });
  // }

  constructor(private uploadService: UploadService, private http: HttpClient) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    
  }
  getDataSet(a) {
    console.log(a.index)

    if (a.index === 1) {
      console.log("First CLicked")
      var subscription = this.http.get("http://localhost:8000/api/dataset/").subscribe((data) => {
        console.log(data)
        this.dataset = JSON.parse(data)

        // this.dataset = JSON.parse(data)
        var key = this.dataset[0]
        for (var i in key) {
          if ( key.hasOwnProperty( i ) ) { 
            this.keys.push(i);
          } 
        }

        console.log(this.dataset);
        console.log(this.keys);

      });
    } else if (a.index === 2) {
      console.log("2nd tab")
    } else if (a.index === 3 ) {
      console.log("3rd Tab")
    }

  }

}
