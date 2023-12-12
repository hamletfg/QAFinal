import SearchBox from '../pageobjects/searchBox.js'

describe ('Search for item by search field', () => {
    it('should search for text entered in search field', async () => {
        await SearchBox.openURL()
        await SearchBox.searchBox('Apple Macbook Pro')
    })
})

describe ('Verify top search result', () => {
    it('should verify that top item is correct', async () => {
        await SearchBox.returnItem('MacBook Pro (14-inch) - Apple M3 Pro chip with 11-core CPU and 14-core GPU, 512GB SSD (2023)')
    })
})
