import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-printreport',
  templateUrl: './printreport.component.html',
  styleUrls: ['./printreport.component.scss']
})
export class PrintreportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // print(printReport){
  //   let printContents = document.getElementById(printReport).innerHTML;
  //   let originalContents = document.body.innerHTML;
  //   document.body.innerHTML = printContents;
  //   window.print();
  //   document.body.innerHTML = originalContents;
  //   location.reload();
  // }

  print(cmpName) {
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    location.reload();
  }
}
