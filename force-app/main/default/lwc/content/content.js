import { LightningElement, api } from "lwc";
export default class Content extends LightningElement {
    @api showExperience = false;
    @api showProjects = false;

    handleEvent(event){
        console.log('Content.js: ', event.detail);
    }
}