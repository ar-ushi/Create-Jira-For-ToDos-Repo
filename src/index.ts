import createIssue from "./actions"; 
import * as core from '@actions/core';

createIssue().catch(e =>
    core.setFailed(e.message))