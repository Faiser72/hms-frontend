import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  showPatientmenu: boolean = false;
  showDoctorSubmenu: boolean = false;
  showMasterSubmenu: boolean = false;
  showInternalReference: boolean = false;
  showBirthReport: boolean = false;
  showLaboratorySubmenu: boolean = false;
  showIpdSubmenu: boolean = false;


  togglePatientSubmenu(submenu: string) {
    let element = document.getElementById(submenu);
    if (element.style.display == '' || element.style.display == 'none') {
      element.style.display = 'block';
    }
    else {
      element.style.display = 'none';
    }
  }
  toggleSubmenu(submenu: string) {
    let element = document.getElementById(submenu);
    if (element.style.display == '' || element.style.display == 'none') {
      element.style.display = 'block';
    }
    else {
      element.style.display = 'none';
    }
  }

  toggleDoctorSubmenu(submenu: string) {
    let element = document.getElementById(submenu);
    if (element.style.display == '' || element.style.display == 'none') {
      element.style.display = 'block';
    }
    else {
      element.style.display = 'none';
    }
  }

  toggleInternalReference(submenu: string) {
    let element = document.getElementById(submenu);
    if (element.style.display == '' || element.style.display == 'none') {
      element.style.display = 'block';
    }
    else {
      element.style.display = 'none';
    }
  }

  toggleBirthReport(submenu: string) {
    let element = document.getElementById(submenu);
    if (element.style.display == '' || element.style.display == 'none') {
      element.style.display = 'block';
    }
    else {
      element.style.display = 'none';
    }
  }

  toggleLaboratorySubmenu(submenu: string) {
    let element = document.getElementById(submenu);
    if (element.style.display == '' || element.style.display == 'none') {
      element.style.display = 'block';
    }
    else {
      element.style.display = 'none';
    }
  }

  toggleIpdSubmenu(submenu: string) {
    let element = document.getElementById(submenu);
    if (element.style.display == '' || element.style.display == 'none') {
      element.style.display = 'block';
    }
    else {
      element.style.display = 'none';
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
