# departments.js
JavasScript / TypeScript API for the Middlebury Department Directory at https://ssb-prod.ec.middlebury.edu/PNTR/saturn_midd.course_catalog_utlq.catalog_page_by_dept?p_term=202210&


Use it like this
```js

import { Scraper } from 'departments.js';

const season = "F21"; //Fall 2021

//an optional custom prefix padding for department names which are not 4 characters long, default is " ".
const prefixChar = "_";
const S = new Scraper(season, prefixChar);

async () => {
  await S.init();
  const departments = S.departments;
}






```

