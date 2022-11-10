import { Component, HostListener, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() {

  }
  scroll = new Subject<number>();
  ngOnInit() {
    this.scroll
      .pipe(debounceTime(200))
      .subscribe((y) => this.dealWithScroll(window.scrollY));
  }
  ngOnDestroy() {
    this.scroll.complete();
  }
  @HostListener('window:scroll') watchScroll() {
    this.scroll.next(window.scrollY);
  }
  dealWithScroll(y: number) {}
}

