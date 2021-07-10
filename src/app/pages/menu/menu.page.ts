import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menuItems = [
    {
      title: 'Home',
      icon: 'home',
      path: '/'
    },
    {
      title: 'Products',
      icon: 'list',
      path: '/products'
    },
    {
      title: 'About',
      icon: 'information',
      path: '/about'
    }
  ];

  title = 'Home';

  constructor(private menuCtrl: MenuController, private plt: Platform,private router: Router,) { }

  ngOnInit() {
    const width = this.plt.width();
    this.toggleMenu(width);
  }

  setTitle(title) {
    this.title = title;
  }

  toggleMenu(width) {
    if (width > 768) {
      this.menuCtrl.enable(false, 'myMenu');
      console.log("=== URL:" + window.location.pathname);
      this.setTitle((window.location.pathname).substr(1))
     //this.router.navigateByUrl(window.location.pathname)
    } else {
      this.menuCtrl.enable(true, 'myMenu');
      this.setTitle((window.location.pathname).substr(1))
     //this.router.navigateByUrl('/tabs'+window.location.pathname)
    }
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    const newWidth = event.target.innerWidth;
    this.toggleMenu(newWidth)
  }
}
