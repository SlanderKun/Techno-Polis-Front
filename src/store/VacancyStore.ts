import {makeAutoObservable} from "mobx";

export default class VacancyStore {
    constructor() {
        makeAutoObservable(this)
    }
}