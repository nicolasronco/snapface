import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landind-page-component',
  templateUrl: './landind-page-component.component.html',
  styleUrls: ['./landind-page-component.component.scss']
})
export class LandindPageComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onContinue(): void {
    this.router.navigateByUrl('facesnaps');
  }

}
