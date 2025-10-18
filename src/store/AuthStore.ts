import {makeAutoObservable} from "mobx";

export default class AuthStore {
    constructor() {
        makeAutoObservable(this);
    }
}