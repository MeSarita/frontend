import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Subject, Observable, Observer } from 'rxjs';

const url = "http://127.0.0.1:8000/api/"

export interface ExampleTab {
  label: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private tabStatus = new Subject<any>();

  constructor(private http: HttpClient) { }


  setTabStatus() {
    this.tabStatus.next([
              {label: 'First', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
              {label: 'Second', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
              {label: 'Third', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            ]);
  }

  getTabStatus():Observable<any> {
    return this.tabStatus.asObservable();
  }


  public upload(files: Set<File>) {
    const status: { [key: string]: { progress: Observable<number> } } = {};

    files.forEach(file => {
      // /* Upload logic to a real server*/
      const formData: FormData = new FormData();
      formData.append('file',file,file.name);

      const req = new HttpRequest('POST', url,formData,{reportProgress:true});

      const progress = new Subject<number>();

      this.http.request(req).subscribe(event => {
        if(event.type===HttpEventType.UploadProgress) {
          const percentageDone = Math.round(100*event.loaded/event.total);
          progress.next(percentageDone);
        } else if(event instanceof HttpResponse){
          progress.complete();
        }
      });

      status[file.name] = {
        progress:progress.asObservable()
      };

      /* Demo upload behavior*/
      // const progress = new Subject<number>();
      // let percentageDone = 0;
      // let timerId = setInterval(() => { percentageDone = percentageDone + 25; progress.next(percentageDone); console.log(percentageDone) }, 1000)
      // setTimeout(() => { clearInterval(timerId); progress.complete(); console.log(progress) }, 4000)
      // status[file.name] = {
      //   progress: progress.asObservable()
      // }
    })
    return status;
  }
}
