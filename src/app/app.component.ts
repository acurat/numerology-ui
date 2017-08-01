import {Component} from '@angular/core';
import _ from 'lodash';
import {Numerology} from "./name.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  value = 0;
  numerology = 0;
  name = "";
  alphabets: Map<string, number> = new Map();
  names: Numerology[] = [];

  constructor() {
    this.alphabets.set('A', 1);
    this.alphabets.set('B', 2);
    this.alphabets.set('C', 3);
    this.alphabets.set('D', 4);
    this.alphabets.set('E', 5);
    this.alphabets.set('F', 8);
    this.alphabets.set('G', 3);
    this.alphabets.set('H', 5);
    this.alphabets.set('I', 1);
    this.alphabets.set('J', 1);
    this.alphabets.set('K', 2);
    this.alphabets.set('L', 3);
    this.alphabets.set('M', 4);
    this.alphabets.set('N', 5);
    this.alphabets.set('O', 7);
    this.alphabets.set('P', 8);
    this.alphabets.set('Q', 1);
    this.alphabets.set('R', 2);
    this.alphabets.set('S', 3);
    this.alphabets.set('T', 4);
    this.alphabets.set('U', 6);
    this.alphabets.set('V', 6);
    this.alphabets.set('W', 6);
    this.alphabets.set('X', 5);
    this.alphabets.set('Y', 1);
    this.alphabets.set('Z', 7);


  }

  onKeyUp(name: string) {
    const len = name.length;
    let total = 0;
    const nameInUpper = _.upperCase(name);
    const onlyAlphabets = nameInUpper.replace(/[^a-z]/gi, '');

    for (let i = 0; i < len; i++) {
      if (this.alphabets.has(onlyAlphabets.charAt(i))) {
        total = total + this.alphabets.get(onlyAlphabets.charAt(i));
      }
    }

    this.name = name;
    this.value = total;
    this.sumDigits(total);
  }

  sumDigits(number: number) {
    const str = number.toString();
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
      sum += parseInt(str.charAt(i), 10);
    }

    this.numerology = sum;
  }

  save() {
    const name = new Numerology();
    name.name = this.name;
    name.total = this.value;
    name.value = this.numerology;

    this.names.push(name);
  }

}
