import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import OpenURL from './openURL.js';

class NavigationDropdown extends OpenURL {

    get navDropdownBtn () {
        return $('a[id="navigation-dropdown"]')
    }

    get dropdownComputer () {
        return $('//li[@id=5]')
    }

    get laptopsAndNotebooks () {
        return $('li[id="5_6"]')
    }

    get macBookImg () {
        return $('//img[contains(@src, "mac-os.jpg")]')
    }

    get macBook () {
        return $('a[automation-id="productDescriptionLink_10"]')
    }

    get increaseButton () {
        return $('button[automation-id="increaseButton_10"]')
    }

    get decreaseButton () {
        return $('button[automation-id="decreaseButton_10"]')
    }

    get decreaseError () {
        return $('//span[@id="errordiv-10"][contains(text(), "Quantity")]')
    }

    get mbpAddToCartBtn () {
        return $('button[automation-id="addToCartButton_10"]')
    }

    async openPage () {
        await this.openURL();
    }

    async dropdownMacbookPro () {
        await this.navDropdownBtn.waitForClickable({ timeout: 1000 })
        await this.navDropdownBtn.click()
        await this.dropdownComputer.waitForClickable({ timeout: 1000 })
        await this.dropdownComputer.click()
        await this.laptopsAndNotebooks.click()
        await this.macBookImg.waitForClickable({ timeout: 1000 })
        await this.macBookImg.click()
        //await this.macBook.waitForClickable({ timeout: 1000 })
        //await this.macBook.click()
        await browser.pause(500)

    }

    async DecreaseTest (errorText) {
        await this.decreaseButton.click()
        await expect(this.decreaseError).toHaveText(errorText)
        await browser.pause(500)
    }

    async increaseTest () {
        await this.increaseButton.click()
    }

    async addMPBtoCart () {
        await this.mbpAddToCartBtn.click()
        await browser.pause(5000)
    }


}

export default new NavigationDropdown();