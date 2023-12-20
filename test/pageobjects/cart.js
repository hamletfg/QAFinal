import { $ } from '@wdio/globals';
import OpenURL from './openURL.js';

class Cart extends OpenURL {

    get increaseBtninCart () { 
        return $('button[automation-id="increaseButton_0"]') 
    }

    get appleCareFromCart () { 
        return $('//div[@id="ProtectionPlan_1073399_90075009"]') 
    }

    get expressShipping () { 
        return $('//span[@class="ship-type-and-cost"][contains(text(), "Express")]') 
    }
    get checkoutBtn () { 
        return $('input[automation-id="shopCartCheckoutButton"]') 
    }

    async expressShippingBtnClick () {
        await this.expressShipping.click()
    }

    async checkout () {
        await this.checkoutBtn.waitForDisplayed()
        await this.checkoutBtn.click()
    }

}   

export default new Cart();