import { browser } from '@wdio/globals'

export default class OpenURL {

    openURLwithEndPoint (endPoint) {
        return browser.url(`https://www.costco.com/${endPoint}`)
    }

    openURL () {
        return browser.url('https://www.costco.com')
    }
}