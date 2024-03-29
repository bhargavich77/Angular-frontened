
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, Input, OnDestroy} from '@angular/core';
import {  Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  text='';
  
  mobileQuery: MediaQueryList;
  grid = false;
  formatGridList = false;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher ,private data:DataService,private router:Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onKeyUp(x:any){
    // this.text += x.target.value + '|';
    console.log(x.target.value)
    this.data.changeMessage(x.target.value)
  }
  logout(event:any){
    
    localStorage.clear();
    this.router.navigateByUrl('/signin')
  }
  FormatView() {
    if (this.formatGridList == false) {
      this.formatGridList = true
      return this.formatGridList
    }
    else {
      this.formatGridList = false
      return this.formatGridList
    }
  }

  formatListView() {
    this.grid = true
    this.data.nextDataUpdate(this.FormatView().valueOf())
    console.log("value= ", this.FormatView().valueOf())
  }

  formatGridView() {
    this.grid = false
    this.data.nextDataUpdate(this.FormatView().valueOf())
    console.log("value ", this.FormatView())
  }

  
}


