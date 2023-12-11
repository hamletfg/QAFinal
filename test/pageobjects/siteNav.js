import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import Page from './page.js';

class siteNav extends Page {

    get searchField () { return $('#search-field'); }
    get returnSearch () { return $('#searchWidgetButton'); }

    async navSearch (searchText) {
        await siteNav.searchField.click()
        await siteNav.searchField.setValue(searchText)
        browser.pause(3000)
        await siteNav.siteNav.returnSearch.click()
        brwoser.pause(3000)    
    }

}
