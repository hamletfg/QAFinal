import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import OpenURL from './openURL.js';

class Cart extends OpenURL {

    get addToCartModal () { return $('h2[automation-id="modalTitle"]') }
    get viewCartBtn () { return $('button[automation-id="viewCartButton"]') }
    get increaseBtn () { return $('button[automation-id="increaseButton_0"]') }
    get appleCareFromModal () { return $('button[id="addRelatedItemToCartBtn_1"]') }
    get appleCareFromCart () { return $('//div[@id="ProtectionPlan_1073399_90075009"]') }
    get standardShipping () { return $('input#ship-mode-radio_1_11152') }
    get checkoutBtn () { return $('input[automation-id="shopCartCheckoutButton"]') }
}   