import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: Array<object>;
  data2: Array<object>;
  initial: number;
  final: number;
  total: number;
  nextButton: boolean;
  preButton: boolean;
  pageValue: number;
  constructor() {
    this.pageValue = 5;
    this.data = [
      {
        title: 'sasdasdasdas1',
        date: 'sdadasdasdad1'
      },
      {
        title: 'sasdasdasdas2',
        date: 'sdadasdasdad2'
      },
      {
        title: 'sasdasdasdas3',
        date: 'sdadasdasdad3'
      },
      {
        title: 'sasdasdasdas4',
        date: 'sdadasdasdad4'
      },
      {
        title: 'sasdasdasdas5',
        date: 'sdadasdasdad5'
      },
      {
        title: 'sasdasdasdas6',
        date: 'sdadasdasdad6'
      },
      {
        title: 'sasdasdasdas7',
        date: 'sdadasdasdad7'
      },
      {
        title: 'sasdasdasdas8',
        date: 'sdadasdasdad8'
      },
      {
        title: 'sasdasdasdas9',
        date: 'sdadasdasdad9'
      },
      {
        title: 'sasdasdasdas10',
        date: 'sdadasdasdad10'
      },
      {
        title: 'sasdasdasdas11',
        date: 'sdadasdasdad11'
      },
      {
        title: 'sasdasdasdas12',
        date: 'sdadasdasdad12'
      },
      {
        title: 'sasdasdasdas13',
        date: 'sdadasdasdad13'
      },
      {
        title: 'sasdasdasdas14',
        date: 'sdadasdasdad14'
      },
      {
        title: 'sasdasdasdas15',
        date: 'sdadasdasdad15'
      },
      {
        title: 'sasdasdasdas16',
        date: 'sdadasdasdad16'
      },
      {
        title: 'sasdasdasdas17',
        date: 'sdadasdasdad17'
      }];
    this.initial = 0;
    if (this.data.length < this.pageValue) {
      this.final = this.data.length;
    } else {
      this.final = this.pageValue;
    }
    this.nextButton = true;
    this.preButton = false;
    this.total = this.data.length;
    this.pager();
  }

  next() {
    if ((this.total - this.final) < this.pageValue) {
      this.initial = this.final;
      this.final = this.total;
      this.nextButton = false;
    } else {
      this.initial = this.final;
      this.final += this.pageValue;
    }
    this.preButton = true;
    this.pager();
  }

  pager() {
    this.data2 = [];
    // console.log(this.data2);
    // console.log(this.initial);
    if (this.final === this.total) {
      this.nextButton = false;
    }
    this.data2 = this.data.slice(this.initial, this.final);
  }

  pre() {
    if ((this.initial - this.pageValue) > 0) {
      this.final = this.initial;
      this.initial -= this.pageValue;
    } else {
      this.initial = 0;
      this.final = this.pageValue;
      this.preButton = false;
    }
    this.nextButton = true;
    this.pager();
  }

}
