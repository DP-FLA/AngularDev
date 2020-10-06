import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.scss'],
})
export class TestpageComponent implements OnInit {
  color: ThemePalette = 'accent';
  public zweiteProp : string;
  constructor() {}

  ngOnInit(): void {
    this.zweiteProp = 'Test123';

    let a = 'twer';
    const t = 'adasd';
  }
}
