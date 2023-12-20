import SearchBoxComponent from '../pageobjects/searchBox.js'

describe ('Search for item by search field', () => {
    it('should search for text entered in search field', async () => {
        await SearchBoxComponent.openURL('')
        await SearchBoxComponent.searchTextBox('Apple Macbook Pro')
    })
})

describe ('Verify top search result', () => {
    it('should verify that top item is correct', async () => {
        await SearchBoxComponent.returnItem('MacBook Pro (14-inch) - Apple M3 Pro chip with 11-core CPU and 14-core GPU, 512GB SSD')
    })
})
