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
    this.departments = await this.getDepartments(this.season); 
  }
  
  static async getDepartments(season: string): Promise<Department[]> {
       const departments: Department[] = [];
    
      //do fetch here and split the list the departments class then parse the html for each department
    
    
   
     return departments;
  }
}
