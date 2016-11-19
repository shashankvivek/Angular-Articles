import { Injectable } from '@angular/core';
import { IntegralStateType } from 'app/types';

@Injectable()
export class AppState {
  public _state: IntegralStateType = { };

  constructor() {

  }

  // already return a clone of the current state
  get state() {
    return this._state = this._clone(this._state);
  }
  // never allow mutation
  set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }


  public get(prop?: any) {
    // use our state getter for the clone
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : state;
  }

  public set(prop: string, value: any) {
    // internally mutate our state
    return this._state[prop] = value;
  }


  private _clone(object: IntegralStateType) {
    // simple object clone
    return JSON.parse(JSON.stringify( object ));
  }
}