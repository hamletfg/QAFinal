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

}

export default new NavigationDropdown();