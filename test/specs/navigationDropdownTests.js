import NavigationDropdown from '../pageobjects/navigationDropdown.js'

describe ('Search for item by dropdown menu', () => {
    it('should take you to Macbooks', async () => {
        await NavigationDropdown.openPage();
        await NavigationDropdown.dropdownMacbookPro();
    })
})

describe ('Decrease item qty below 1 to get error', () => {
    it('should give Quantity error', async () => {
         await NavigationDropdown.DecreaseTest('Quantity must be 1 or more to add to cart.');    
    })
})

describe ('Click on increase button & add to cart', () => {
    it('should increase number of MBP to 2 and add to cart', async () => {
        await NavigationDropdown.increaseTest();
        await NavigationDropdown.addMPBtoCart();
    })
})