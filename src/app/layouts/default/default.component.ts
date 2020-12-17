import { Component, OnInit, Inject, Renderer2 } from "@angular/core";
import { Router } from "@angular/router";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-default",
  templateUrl: "./default.component.html",
  styleUrls: ["./default.component.scss"],
})
export class DefaultComponent implements OnInit {
  sideBarOpen;
  isSmallMobileDevice: MediaQueryList = window.matchMedia("(max-width: 599px)");
  hasBackValue: boolean = true;


  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {
    if (!this.isSmallMobileDevice.matches) {
      this.sideBarOpen = true;
    }
    else {
      this.sideBarOpen = false;
    }
  }

  hasBack() {
    if (!this.isSmallMobileDevice.matches) {
      return this.hasBackValue = false;

    }
    else {
      return this.hasBackValue = true;

    }
  }

  ngOnInit() { }

  switchMode(isDarkMode: boolean) {
    const hostClass = isDarkMode ? "theme-dark" : "theme-light";
    localStorage.setItem('theme', hostClass);
    let theme_local = localStorage.getItem('theme');
    this.renderer.setAttribute(this.document.body, "class", theme_local);
    // this.isDark = isDarkMode;
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
