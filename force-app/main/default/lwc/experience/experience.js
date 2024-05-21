import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import ROLE_FIELD from '@salesforce/schema/Experience__c.Role__c';

const FIELDS = [
    'Experience__c.Role__c'
];

export default class Experience extends LightningElement {
    @api theme;
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    experienceObject;

    myname;

    connectedCallback() {
        console.log('ConnectedCallback executed');
        this.myname = this.recordId || 'No Record ID';
        console.log('Experience.js: ', this.theme);
    }

    get customExperience() {
        console.log(getFieldValue(this.experienceObject.data, ROLE_FIELD));
        return this.experienceObject.data ? this.experienceObject.data.fields.Name.value : '';
    }

    get customRole() {
        console.log('customRole: ', this.experienceObject.data);
        return this.experienceObject.data ? this.experienceObject.data.fields.Role__c.value : '';
    }

    get customMonthYear() {
        console.log('customMonthYear: ', this.experienceObject.data);
        return this.experienceObject.data ? this.experienceObject.data.fields.MonthYear__c.value : '';
    }

    experience = [
        {
            id: 1,
            company: 'Infosys Limited',
            year: '2006-2019',
            role: 'Technical Test Lead',
            tags: ['Selenium', 'JMeter', 'LoadRunner', 'Performance Testing', 'Automation Testing', 'Manual Testing']
        },
        {
            id: 2,
            company: 'Kaplan',
            year: '2019-2019',
            role: 'Performance Engineer',
            tags: ['Selenium', 'JMeter', 'LoadRunner', 'Performance Testing', 'Automation Testing', 'Manual Testing']
        },
        {
            id: 3,
            company: 'Ascendum Solutions',
            year: '2019-2021',
            role: 'Performance Engineer',
            tags: ['Selenium', 'JMeter', 'LoadRunner', 'Performance Testing', 'Automation Testing', 'Manual Testing']
        },
        {
            id: 4,
            company: 'Salesforce',
            year: '2022-Present',
            role: 'Full Stack Developer',
            tags: ['Selenium', 'JMeter', 'LoadRunner', 'Performance Testing', 'Automation Testing', 'Manual Testing']
        }
    ];
}
