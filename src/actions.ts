import * as core from'@actions/core';
import fetchToDosFromCommit from './fetchToDo';

export default async function createIssue(){
    try {
        const GHtoken = core.getInput('token', {required: true});
        const jiraId = core.getInput('jiraId', {required: true});
        const orgUrl = core.getInput('orgUrl', {required: true});
        const addedLines = core.getInput('addedLines', {required: true});
        const jiraToken = core.getInput('jiraToken', {required: true});  
        const username= core.getInput('username', {required: true});
        const authToken = Buffer.from(`${username}:${jiraToken}`).toString('base64');

        const toDo = fetchToDosFromCommit(addedLines);
        //Logic to include checking if ticket already exists else create one

    } catch (error) {
        
    }
}