import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import Page from './page.js';

class SiteNav extends Page {

    get searchField () { return $('#search-field'); }
    get returnSearch () { return $('#searchWidgetButton'); }

    async searchBox (searchText) {
        await browser.pause(1000)
        await this.searchField.click()
        await this.searchField.setValue(searchText)
        await browser.pause(1000)
        await this.returnSearch.click()
        await browser.pause(1000)    
    }

}

export default new SiteNav();
