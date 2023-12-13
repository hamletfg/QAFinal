import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import OpenURL from './openURL.js';

class ProductPage extends OpenURL {

    get selectSilver () { return $('//span[@automation-id="selectionItem_7000000000000000779"]') }
    get addToCartBtn () { return $('input[automation-id="addToCartButton"]') }

    async selectItemOption () {
        await this.selectSilver.waitForDisplayed()
        await this.selectSilver.click()
    }

    async addToCart () {
        await this.addToCartBtn.click()
    }

}

export default new ProductPage();
