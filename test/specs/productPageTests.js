import ProductPage from '../pageobjects/productPage.js'

describe('Product on Costco Website', () => {
    it('should open the Macbook Pro 14" Product Page', async () => {
        await ProductPage.openMacBook()
    })
})

describe ('Add item to cart', () => {
    it('should add item to cart', async () => {
        await ProductPage.selectItemOption()
        await ProductPage.addToCart()
    })
})