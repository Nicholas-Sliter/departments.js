import fetch from "node-fetch";
import { parse } from "node-html-parser";
import Department from "./department.js"
import {getDepartmentsURL} from "./utils.js"


export default class Scraper {
  season: string;
  departments: Department[] = [];
  
  constructor(season:string) {
    this.season = season ?? null;
  }
  
  public async init(){
    this.departments = await Scraper.getDepartments(this.season); 
  }
  
  static async getDepartments(season: string): Promise<Department[]> {
    const departments: Department[] = [];
    const res = await fetch(getDepartmentsURL(season));
    const html = await res.text();
    const root = parse(html);
    root.querySelectorAll("li > a").forEach(el => departments.push(Department.parseDepartmentHTML(el)));
    return departments;
  }
}
