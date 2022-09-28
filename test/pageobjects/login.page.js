

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get volvoQuotes () {
        return $('(//h2)[1]');
    }

    get models () {
        return $(`//h2[text()='Explore our models']/following::div[9]//a//h3`);
    }

    get volvoLogo () {
        return $(`(//a[@aria-label='Volvo Homepage'])[1]`);
    }

    get parentMenu(){
        return $('button #sitenav-sidenav-toggle');
    
    }
    get childElements(){
        return this .parentMenu.$$('em')
    }
    get getTextForEm(){
        return this.childElements.filter(element=>{
        console.log(element.getText());

        });
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

export default new LoginPage();
