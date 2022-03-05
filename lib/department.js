import { abbreviationsMap } from "./utils.js";
export default class Department {
    code;
    name;
    constructor(obj) {
        const [code, name] = [...Object.values(obj)];
        this.code = code;
        this.name = name;
    }
    static parseDepartmentHTML(el, prefixChar = " ") {
        const el_name = el.childNodes[0].rawText;
        let el_code = el.rawAttrs.substring(el.rawAttrs.length - 5, el.rawAttrs.length - 1);
        if (el_code == "=ART") {
            el_code = "ART";
        }
        const code = Department.parseCode(el_code, prefixChar);
        const name = Department.parseName(el_name);
        return new Department({ code, name });
    }
    static parseCode(code, prefixChar = " ") {
        const parsedCode = code.padStart(4, prefixChar);
        return parsedCode;
    }
    static parseName(name) {
        //list of abbreviations from utils
        //if there is no space between any & symbol and the next word, add a space
        name = name.replace(/&([^\s])/g, "& $1");
        //remove periods from the name
        name = name.replace(/\./g, "");
        //remove multiple spaces
        name = name.replace(/\s+/g, " ");
        //use regex with word boundaries to find and replace the abbreviations
        for (const [abbreviation, fullName] of Object.entries(abbreviationsMap)) {
            const regex = new RegExp(`\\b${abbreviation}\\b`, "g");
            name = name.replace(regex, fullName);
        }
        return name;
    }
}
