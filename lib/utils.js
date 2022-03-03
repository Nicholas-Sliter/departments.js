//https://ssb-prod.ec.middlebury.edu/PNTR/saturn_midd.course_catalog_utlq.catalog_page_by_dept?p_term=202210&
const DEPARTMENTS_URL = "https://ssb-prod.ec.middlebury.edu/PNTR/saturn_midd.course_catalog_utlq.catalog_page_by_dept";
const seasons = {
    "F": "90",
    "W": "10",
    "S": "20",
};
const getTermCodeFromSeason = (season) => {
    return `20${season.substring(1)}${seasons[season.substring(0, 1)]}`;
};
export function getDepartmentsURL(season) {
    return `${DEPARTMENTS_URL}?p_term=${getTermCodeFromSeason(season)}`;
}
export const abbreviationsMap = {
    "Int'l": "International",
    "Fem": "Feminist",
};
