
/**
 * page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */

    get loginLogo(){
        return $('.login_logo');
    }
    get inputUsername() {
        return $('#user-name');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnLogin() {
        return $('#login-button');
    }

    /**
     * a method to set username
     */
    async enterUserName (username) {
        await this.inputUsername.waitForDisplayed({
            timeout: 6000*10,
            interval:1000,
            timeoutMsg: `inputUsername is not clickable even after timeout`
        });
        await this.inputUsername.click();
        await this.inputUsername.setValue(username);
    }

    /**
     * a method to set password
     */
    async enterPassword (password) {
        await this.inputPassword.waitForDisplayed({
            timeout: 6000*10,
            interval:1000,
            timeoutMsg: `inputPassword is not clickable even after timeout`
        });
        await this.inputPassword.click();
        await this.inputPassword.addValue(password);
    }

    /**
     * a method to click Login button.
     */

    async clickLoginBtn () {
        await this.btnLogin.click();
    }

}

module.exports = new LoginPage();
