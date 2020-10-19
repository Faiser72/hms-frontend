import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-surgeryhome',
  templateUrl: './surgeryhome.component.html',
  styleUrls: ['./surgeryhome.component.scss']
})
export class SurgeryhomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  routeTOsurgery(){
    this.router.navigate(['/surgeryhome/surgerylist'])
  }
  
}
