export default class Department {
    code;
    name;
    constructor(code, name) {
        this.code = code;
        this.name = name;
    }
    static parseDepartmentHTML(el) {
        var el_name = el.childNodes[0].rawText;
        var el_code = el.rawAttrs.substring(el.rawAttrs.length - 5, el.rawAttrs.length - 1);
        if (el_code == "=ART") {
            el_code = "ART";
        }
        return new Department(el_code, el_name);
    }
}
