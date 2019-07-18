import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {isBoolean} from 'util';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent implements OnInit {
  col1Result = 5;
  col2Result = 7;
  col3Result = 8;
  col4Result = 9;

  Id1 = [{id: 1, value: '1.00', checked: false}, {id: 2, value: '1.00', checked: false}, {id: 3, value: '1.00', checked: false}, {
    id: 4,
    value: '1.00',
    checked: false
  }];

  Id2 = [{id: 1, value: '0.50', checked: false}, {id: 2, value: '0.50', checked: false}, {id: 3, value: '0.50', checked: false}, {
    id: 4,
    value: '0.50',
    checked: false
  }];

  Id3 = [{id: 1, value: '1.00', checked: false}, {id: 2, value: '1.00', checked: false}, {id: 3, value: '1.00', checked: false}, {
    id: 4,
    value: '1.00',
    checked: false
  }];

  Id4 = [{id: 1, value: '1.20', checked: false}, {id: 2, value: '1.20', checked: false}, {id: 3, value: '1.20', checked: false}, {
    id: 4,
    value: '1.20',
    checked: false
  }];

  Id5 = [{id: 1, value: '0.75', checked: false}, {id: 2, value: '0.75', checked: false}, {id: 3, value: '0.75', checked: false}, {
    id: 4,
    value: '0.75',
    checked: false
  }];

  Id6 = [{id: 1, value: '1.00', checked: false}, {id: 2, value: '1.00', checked: false}, {id: 3, value: '1.00', checked: false}, {
    id: 4,
    value: '1.00',
    checked: false
  }];

  Id7 = [{id: 1, value: '2.00', checked: false}, {id: 2, value: '2.00', checked: false}, {id: 3, value: '2.00', checked: false}, {
    id: 4,
    value: '2.00',
    checked: false
  }];

  Id8 = [{id: 1, value: '3.00', checked: false}, {id: 2, value: '3.00', checked: false}, {id: 3, value: '3.00', checked: false}, {
    id: 4,
    value: '3.00',
    checked: false
  }];

  @ViewChild('col1', {static: isBoolean() }) col1: ElementRef;
  @ViewChild('col2', {static: isBoolean() }) col2: ElementRef;
  @ViewChild('col3', {static: isBoolean() }) col3: ElementRef;
  @ViewChild('col4', {static: isBoolean() }) col4: ElementRef;
  @ViewChild('col5', {static: isBoolean() }) col5: ElementRef;
  @ViewChild('col6', {static: isBoolean() }) col6: ElementRef;
  @ViewChild('col7', {static: isBoolean() }) col7: ElementRef;
  @ViewChild('col8', {static: isBoolean() }) col8: ElementRef;

  ngOnInit() {

  }

  selectCheckbox(col: ElementRef, ind: number) {
    // tslint:disable-next-line:max-line-length
    col.children[ind].firstElementChild.checked ?
      this.generateBill(ind, Number(col.children[ind].firstElementChild.value), true) :
      this.generateBill(ind, Number(col.children[ind].firstElementChild.value), false);
  }

  generateBill(index: number, val: number, flag: boolean) {
    switch (index) {
      case 0:
        if (flag) {
          this.col1Result += val;
        } else {
          this.col1Result -= val;
          if (this.col1Result <= 0) {
            this.col1Result = 0;
          }
        }
        break;

      case 1:
        if (flag) {
          this.col2Result += val;
        } else {
          this.col2Result -= val;
          if (this.col2Result <= 0) {
            this.col2Result = 0;
          }
        }
        break;

      case 2:
        if (flag) {
          this.col3Result += val;
        } else {
          this.col3Result -= val;
          if (this.col3Result <= 0) {
            this.col3Result = 0;
          }
        }
        break;

      case 3:
        if (flag) {
          this.col4Result += val;
        } else {
          this.col4Result -= val;
          if (this.col4Result <= 0) {
            this.col4Result = 0;
          }
        }
        break;
    }
  }

  roundN(num, n) {
    return parseFloat(Math.round(num * Math.pow(10, n)) / Math.pow(10, n)).toFixed(n);
  }

  sub(a, b) {
    return Number(a - b);
  }
}
