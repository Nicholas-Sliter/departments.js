import fetch from "node-fetch";
import { parse } from "node-html-parser";
import Department from "./department.js"
import {getDepartmentsURL} from "./utils.js"


export default class Scraper {
  season: string;
  departments: Department[] = [];
  private _prefixChar: string;
  
  constructor(season:string, prefixChar: string = " ") {
    this.season = season ?? null;
    this._prefixChar = prefixChar;
  }
  
  public async init(){
    this.departments = await Scraper.getDepartments(this.season, this._prefixChar); 
  }
  
  static async getDepartments(season: string, prefixChar: string): Promise<Department[]> {
    const departments: Department[] = [];
    const res = await fetch(getDepartmentsURL(season));
    const html = await res.text();
    const root = parse(html);
    root.querySelectorAll("li > a").forEach(el => departments.push(Department.parseDepartmentHTML(el, prefixChar)));
    return departments;
  }
}
