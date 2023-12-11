import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import Page from './page.js';


class LoginPage extends Page {
    
    get signIn () { return $('#header_sign_in'); }
    get signInName () { return $('#signInName'); }
    get signInPassword () { return $('#password'); }
    get signInButton () { return $('#next'); }
    get nonMemberShopBtn () { return $('#shopAsNonMemberBtn') }
    get headerCostcoLogo () { return $('//img[@automation-id="headerCostcoLogo"]'); }
    get searchField () { return $('#search-field'); }

    async login (userName, password) {
        //await browser.pause(500)
        //await this.signIn.click()
        await browser.pause(50000)
        await this.signInName.setValue(userName)
        await browser.pause(3000)
        await this.signInPassword.setValue(password)
        await browser.pause(3000)
        await this.signInButton.waitForClickable({setTimeout:500})
        await this.signInButton.click()
        await browser.pause(50000)
        //await expect(this.nonMemberShopBtn).toExist
        //await this.nonMemberShopBtn.click()
        //await expect(this.searchField).toExist
        //await expect(this.headerCostcoLogo).toExist
        //await browser.pause(500)
    }

}

export default new LoginPage();


/* hamlet.gordillo9541@stu.mtec.edu; password: @TestPas5forM3 */