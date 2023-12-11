import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import Page from './page.js';


class LoginPage extends Page {
    
    get signIn () { return $('#header_sign_in'); }
    //get signInHeader () { return $('#signInHeader') }
    get signInName () { return $('#signInName'); }
    get signInPassword () { return $('#password'); }
    get signInButton () { return $('#next'); }

    async login (userName, password) {
        await browser.pause(500);
        await this.signIn.click();
        await browser.pause(500)
        await this.signInName.setValue(userName);
        await this.signInPassword.setValue(password);
        await browser.pause(500);
        await this.signInButton.click();
        await browser.pause(500)
    }

}

export default new LoginPage();


/* hamlet.gordillo9541@stu.mtec.edu; password: @TestPas5forM3 */