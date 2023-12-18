import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import OpenURL from './openURL.js';

class Cart extends OpenURL {

    get increaseBtninCart () { return $('button[automation-id="increaseButton_0"]') }
    get appleCareFromCart () { return $('//div[@id="ProtectionPlan_1073399_90075009"]') }
    get expressShipping () { return $('span[data-shipmodeid="11153"]') }
    get checkoutBtn () { return $('input[automation-id="shopCartCheckoutButton"]') }

    async expressShipping () {
        await this.expressShipping.waitForDisplayed()
        await this.expressShipping.click()
    }

    async checkout () {
        await this.checkoutBtn.waitForDisplayed()
        await this.checkoutBtn.click()
    }




}   

export default new Cart();