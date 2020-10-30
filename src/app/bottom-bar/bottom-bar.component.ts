import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html'
})
export class BottomBarComponent {

  componentName='TestComponent';
  chkStatus = false;

  ngOnInit() {
    setTimeout(() => this.chkStatus = true, 4000);
  }
  
}