import { Component, ElementRef, OnInit } from '@angular/core';
import { Logger, LoggingService } from "ionic-logging-service";
//import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation, Position } from '@capacitor/geolocation';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private logger: Logger;
  myImage = null;
  position: Position = null;
  constructor(
    loggingService: LoggingService) {
      this.logger = loggingService.getLogger("MyApp.MyComponent");
      const methodName = "ctor";
    this.logger.entry(methodName);
    this.logger.exit(methodName);
  }
  
  // constructor(private _browser : InAppBrowser,
  //   private _element : ElementRef) { }
  private _link: string;
  public snippet : string = `<h1>Top 5 tech companies</h1>
                              <ul>
                                 <li>
                                    <a href="http://www.apple.com">Apple</a>
                                 </li>
                                 <li>
                                    <a href="http://www.facebook.com">Facebook</a>
                                 </li>
                                 <li>
                                    <a href="http://www.google.com">Google</a>
                                 </li>
                                 <li>
                                    <a href="http://www.microsoft.com">Microsoft</a>
                                 </li>
                                 <li>
                                    <a href="http://www.twitter.com">Twitter</a>
                                 </li>
                              </ul>`;
  
  ngOnInit() {
    const methodName = "ngOnInit";
    this.logger.entry(methodName);
    this.logger.info("==test==")
    //  this._enableDynamicHyperlinks();
  }
  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

    this.myImage = image.webPath;
  }
  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();

    this.position = coordinates;
  }

  async share() {
    await Share.share({
      title: 'Come and find me',
      text: `Here's my current location: 
        ${this.position.coords.latitude}, 
        ${this.position.coords.longitude}`,
      url: 'https://fisglobal.com/'
    });
  }
  // private _enableDynamicHyperlinks() : void
  // {
  //    // Provide a minor delay to allow the HTML to be rendered and 'found'
  //    // within the view template
  //    setTimeout(() => 
  //    {
  //       // Query the DOM to find ALL occurrences of the <a> hyperlink tag
  //       const urls : any    = this._element.nativeElement.querySelectorAll('a');

  //       // Iterate through these
  //       urls.forEach((url) => 
  //       {
  //          // Listen for a click event on each hyperlink found
  //          url.addEventListener('click', (event) => 
  //          {
  //             // Retrieve the href value from the selected hyperlink
  //             event.preventDefault();
  //             this._link = event.target.href;

  //             // Log values to the console and open the link within the InAppBrowser plugin
  //             console.log('Name is: ' + event.target.innerText);
  //             console.log('Link is: ' + this._link);
  //             this._launchInAppBrowser(this._link);
  //          }, false);
  //       });
  //    }, 2000);
  // }
  // private _launchInAppBrowser(link : string) : void
  //  {
  //     let opts : string = "location=yes,clearcache=yes,hidespinner=no"
  //     this._browser.create(link, '_blank', opts);
  //  }
}
