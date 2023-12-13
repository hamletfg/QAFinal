import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import OpenURL from './openURL.js';

class SearchBoxComponent extends OpenURL {
    get searchField () { return $('#search-field'); }
    get searchIcon () { return $('i[automation-id="searchWidgetButton"]'); }
    get topItemLabel () { return $('span[automation-id="productDescriptionLabel_0"]') }

    async searchTextBox (searchText) {
        await this.searchField.waitForDisplayed()
        await this.searchField.setValue(searchText)
        await this.searchIcon.waitForDisplayed()
        await this.searchIcon.click()
        await browser.pause(500)
    }

    async returnItem (item) {
        await expect(this.topItemLabel).toHaveText(item)        
    }
}

export default new SearchBoxComponent();