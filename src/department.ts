import { getDepartmentsURL } from "./utils.js";
import { parse } from "node-html-parser";
import fetch from "node-fetch";

export default class Department {
  code: string;
  name: string;

  constructor(code: string, name: string) {
      this.code = code;
      this.name = name;
  }

  static parseDepartmentHTML(el) {
    const el_name: string = el.childNodes[0].rawText;
    let el_code: string = el.rawAttrs.substring(el.rawAttrs.length - 5, el.rawAttrs.length-1);
    if (el_code == "=ART") {
        el_code = "ART";
    }
    return new Department(el_code, el_name);
  }
}
