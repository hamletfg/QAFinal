import { $ } from '@wdio/globals';
import { browser } from '@wdio/globals';
import OpenURL from './openURL.js';

class ProductPage extends OpenURL {

    get selectSilver () { return $('//span[@automation-id="selectionItem_7000000000000000779"]') }
    get addToCartBtn () { return $('input[automation-id="addToCartButton"]') }
    get addToCartModal () { return $('h2[automation-id="modalTitle"]') }
    get viewCartBtn () { return $('button[automation-id="viewCartButton"]') }
    get continueShoppingBtn () { return $('button[automation-id="continueShoppingButton"]') }
    get appleCareFromModal () { return $('button[id="addRelatedItemToCartBtn_1"]') }


    async openMacBook () {
      await this.openURL('macbook-pro-14-inch---apple-m3-pro-chip-with-11-core-cpu-and-14-core-gpu%2c-512gb-ssd.product.4000225276.html')  
    }

    async selectItemOption () {
        await this.selectSilver.waitForDisplayed()
        await browser.pause(500)
        await this.selectSilver.click()
        await browser.pause(500)
    }

    async addToCart () {
        await this.addToCartBtn.waitForDisplayed()
        await this.addToCartBtn.click()
    }

    async addedToCartModal () {
        await this.viewCartBtn.waitForClickable({ timeout: 12000 })
        await this.viewCartBtn.click()
    }

}

export default new ProductPage();
