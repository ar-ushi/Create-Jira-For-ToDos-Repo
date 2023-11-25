import * as core from '@actions/core';
import * as fs from 'fs';

export default async function fetchToDosFromCommit(changedFiles:any) {
    try {
        const matches = [{}];
        core.info('fetching details...');
        changedFiles.forEach((file) => {
            const fileContent = fs.readFileSync(file, 'utf-8')
            const rx = /^\+.*(?:\/\/|#)\s+TODO:(.*)$/gm;
            //One File may contain multiple ToDos - return an array with key : File Name and value : Matched comment 
            let match;
            while ((match = rx.exec(fileContent)) !== null){
                core.info(match[0]);
                const matchedLine = match[0];
                matches.push({
                    file: file,
                    todo: matchedLine,
                })}})
        return matches;
    } catch (error) {
        core.setFailed(error.message)
    }
}