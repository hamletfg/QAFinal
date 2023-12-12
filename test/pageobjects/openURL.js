import { browser } from '@wdio/globals'

export default class OpenURL {
    openURL () {
        return browser.url('https://www.costco.com')
    }
}