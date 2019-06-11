export default class RepoMetadata{
    constructor(owner, host, defaultbranch, reponame) {
        this.owner = owner;
        this.host = host;
        this.defaultBranch = defaultbranch;
        this.repoName = reponame;
    }
}