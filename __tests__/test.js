import {test} from 'uvu';
import * as assert from 'uvu/assert';
import Scraper from "../lib/scraper.js";

test("Departments scrape", async () => {
    const S = new Scraper('F21');
    await S.init();
    const D = S.departments;
    
    assert.is(D[0].code, "ANTH");
    assert.is(D[0].name, "Anthropology");
});


test.run();
