import fetch from "node-fetch";
import { parse } from "node-html-parser";
import Department from "./department.js"

export const DIRECTORY_URL = "https://directory.middlebury.edu/";


export class DepartmentScraper{
  code: string;
  name: string;

  static async getDepartments(season: string = "F"): Promise<Department[]> {
      return Department.getDepartments(season);
  }
}
