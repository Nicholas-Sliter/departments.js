import { getDepartmentsURL } from "./utils.js";
import { parse } from "node-html-parser";
import fetch from "node-fetch";
export default class Department {
    code;
    name;
    constructor(code, name) {
        this.code = code;
        this.name = name;
    }
    static async getDepartments(season) {
        const res = await fetch(getDepartmentsURL(season));
        const html = await res.text();
        const root = parse(html);
        const depts = [];
        var el_code;
        var el_name;
        root.querySelectorAll("li > a").forEach(el => {
            el_name = el.childNodes[0].rawText;
            el_code = el.rawAttrs.substring(el.rawAttrs.length - 5, el.rawAttrs.length - 1);
            if (el_code == "=ART") {
                el_code = "ART";
            }
            depts.push(new Department(el_code, el_name));
        });
        return depts;
    }
}
