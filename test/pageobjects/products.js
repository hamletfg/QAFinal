import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import OpenURL from './openURL.js';

class Products extends OpenURL {

    get searchField () { return $('#search-field'); }
    get returnSearch () { return $('i[automation-id="searchWidgetButton"]'); }
    //get returnSearch () { return $('//i[@automation-id="searchWidgetButton"]') }
    get returnTopItem () { return $('span[automation-id="productDescriptionLabel_0"]') }
    //get returnSearch () { return $('//span[@automation-id="productDescriptionLabel_0"]') }

    async searchBox (searchText) {
        await browser.pause(500)
        await this.searchField.setValue(searchText)
        await browser.pause(500)
        await this.returnSearch.click()
        await browser.pause(500)
    }

    async returnItem (item) {
        await expect(this.returnTopItem).toHaveText(item)        
    }

}

export default new Products();
