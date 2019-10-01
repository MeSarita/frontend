import {Component, OnInit, OnDestroy, AfterViewInit,ViewEncapsulation} from '@angular/core';
import {Observable, Observer, Subscription} from 'rxjs';
import { UploadService } from '../upload.service';

export interface ExampleTab {
  label: string;
  content: string;
}


@Component({
  selector: 'app-tview',
  templateUrl: './tview.component.html',
  styleUrls: ['./tview.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class TviewComponent implements OnInit,AfterViewInit, OnDestroy {

  

  tabColor = 'red';

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

  constructor(private uploadService: UploadService){
    this.asyncTabs = this.uploadService.getTabStatus();
  }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
  }

  ngOnDestroy(){

  }

}
