import { browser } from '@wdio/globals'

export default class OpenURL {

    openURL (endPoint) {
        return browser.url(`https://www.costco.com/${endPoint}`)
    }

    // openURLtest () {
    //     return browser.url('https://www.costco.com')
    // }
}