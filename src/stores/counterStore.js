import {makeAutoObservable} from "mobx";

export class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this)
  }

  increase() {
    this.count = this.count + 1;
  }

  decrease() {
    this.count = this.count - 1;
  }
}