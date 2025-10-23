import {makeAutoObservable} from "mobx";

export default class InternshipStore {

    constructor() {
        makeAutoObservable(this)
    }
}