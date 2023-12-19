import NavigationDropdown from '../pageobjects/navigationDropdown.js'

describe ('Search for item by dropdown menu', () => {
    it('should search for the computer category through dropdown menu', async () => {
        await NavigationDropdown.openURL()
        await navDropDownBtn.click()
        await dropdownComputer.click()
    })
})