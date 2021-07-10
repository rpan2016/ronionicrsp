import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from '@ruf/idp-auth';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  destroy$ = new Subject<boolean>();
  claim: any;
  @Input() title: string;
  dropdown = false;
  @ViewChild('productbtn', { read: ElementRef }) productbtn: ElementRef;

  constructor(private auth: AuthService) { }

  ngOnInit() { }

  hideDropdown(event) {
    const xTouch = event.clientX;
    const yTouch = event.clientY;

    const rect = this.productbtn.nativeElement.getBoundingClientRect();
    const topBoundary = rect.top + 2;
    const leftBoundary = rect.left + 2;
    const rightBoundary = rect.right - 2;

    if (xTouch < leftBoundary || xTouch > rightBoundary || yTouch < topBoundary) {
      this.dropdown = false;
    }
  }
  logout() {
    this.auth.logout(true);
  }

  clearIdToken() {
    this.auth._clearIdToken();
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
