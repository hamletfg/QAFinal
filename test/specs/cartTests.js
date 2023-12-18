import ProductPage from '../pageobjects/productPage.js';
import Cart from '../pageobjects/cart.js';

describe('Product on Costco Website', () => {
    it('should open the Macbook Pro 14" Product Page', async () => {
        await ProductPage.openMacBook()
    })
})

describe ('Click add item to cart', () => {
    it('should add item to cart and click "view cart" in modal', async () => {
        await ProductPage.selectItemOption()
        await ProductPage.addToCart()
    })
})

describe ('Click View Cart button', () => {
    it('should click the View Cart button to proceed to Cart', async () => {
        await ProductPage.addedToCartModal()
    })
})

describe ('Select Express Shipping', () => {
    it('should select express shipping option', async () => {
        await Cart.expressShippingBtnClick()
    })
})

/*describe ('Checkout', () => {
    it('click on Checkout button and proceed to payment page', async () => {
        await Cart.checkout()
    })
})*/
