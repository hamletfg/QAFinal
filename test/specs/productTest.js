import LoginPage from '../pageobjects/login.js'
import siteNav from '../pageobjects.siteNav.js'

describe ('Costco Login', () => {
    it('should log in using valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('hamlet.gordillo9541@stu.mtec.edu', '@TestPas5forM3')
    })
})

describe ('Search for Apple in search field', () => {
    it('should search for text entered in search field', async () => {

    })
})
