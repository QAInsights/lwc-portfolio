import { LightningElement } from "lwc";
export default class Project extends LightningElement {
    projects = [
        {
            "id": 1,
            "name": "Kel",
            "description": "AI - CLI Tool",
            "tags": ["AI", "Python", "CLI"]
        },
        {
            "id": 2,
            "name": "Validate Thread Group",
            "description": "Quickly validate your Thread Group in JMeter in one click.",
            "tags": ["JMeter", "Performance Testing"]
        },
        {
            "id": 3,
            "name": "PerfGPT",
            "description": "AI tools designed for performance testing and engineering.",
            "tags": ["AI", "Python", "Performance Testing", "Automation Testing"]
        },
        {
            "id": 4,
            "name": "Hamster",
            "description": "Launch JMeter and your recent test plan swiftly from your Windows status bar.",
            "tags": ["JMeter", "Performance Testing"]
        }
    ];
    
}