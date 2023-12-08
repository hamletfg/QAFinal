import LoginPage from '../pageobjects/login.js'

describe ('Costco Login', () => {
    it('should log in using valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('hamlet.gordillo9541@stu.mtec.edu', '@TestPas5forM3')
    })
})