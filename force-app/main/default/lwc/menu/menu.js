import { LightningElement, track, api } from "lwc";
import { getRecord, updateRecord } from 'lightning/uiRecordApi';

export default class Menu extends LightningElement {

    showAbout = true;
    showContact = false;
    showExperience = false;
    showProjects = false;
    showSkills = false;
    @track theme = 'default';
    selectedTheme;

    handleOnClickEvent(event){
        const menu = event.currentTarget.dataset.id;

        if(menu == 'about'){
            this.showExperience = false;
            this.showProjects = false;
            this.showSkills = false;
            this.showContact = false;
            this.showAbout = true;
        }
        if(menu == 'experience'){
            this.showExperience = true;
            this.showProjects = false;
            this.showSkills = false;
            this.showContact = false;
            this.showAbout = false;
        }
        if(menu == 'project'){
            this.showExperience = false;
            this.showProjects = true;
            this.showSkills = false;
            this.showContact = false;
            this.showAbout = false;
        }
    }
    
    themeHandler(event){
        this.theme = event.target.checked ? 'sf-look' : 'default';
        console.log('Menu.js: ', this.theme);
        if(this.theme == 'sf-look'){
            this.selectedTheme = true;
        }
        if(this.theme == 'default'){
            this.selectedTheme = false;
        }
    }
}