import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import Page from './page.js';

class siteNav extends Page {

    get searchField () { return $('#search-field'); }
    get returnSearch () { return $('#searchWidgetButton'); }

}
