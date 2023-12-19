import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import OpenURL from './openURL.js';

class NavigationDropdown extends OpenURL {

    get navDropdownBtn () {
        return $('#navigation-dropdown')
    }

    get dropdownComputer () {
        return $('//li[@id=5]')
    }

    get laptops () {
        return $('div[automation-id="categoryLaptops"]')
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

    get decreaseError () {
        return $('//span[@id="errordiv-10"][contains(text(), "Quantity")]')
    }

    async dropdownMacbookPro () {
        await this.navDropdownBtn.click()
        await this.dropdownComputer.click()
        await this.laptops.click()
        await this.macBookImg.click()
        await this.increaseButton.click()
    }

}

export default new NavigationDropdown();