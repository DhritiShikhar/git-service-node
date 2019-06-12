import Gitlab from 'gitlab'
import BaseService from "./base_service"
import RepoMetadata from './modal/repo_metadata'
import GitUrlParse from 'git-url-parse'

export default class GitlabService extends BaseService {
    constructor(gitsource) {
        super(gitsource)
        this.client = new Gitlab()
    }

    async isRepoReachable() {
        try {
            this.metadata = this.getRepoMetadata();
            const resp = await this.client.repositories.get({
                repo: this.metadata.repoName,
                owner: this.metadata.owner
            })
            return resp;
        }catch (e) {
            throw e;
        }
    }

    async getRepoBranchList() {
        const metadata = this.getRepoMetadata();
        try {
            const resp = await this.client.refs.listBranches({
                repo: metadata.repoName,
                owner: metadata.owner
            })
            return resp;
        }catch (e) {
            throw e;
        }
    }

    getRepoMetadata() {
        const metadata = GitUrlParse(this.gitsource.url)
        return new RepoMetadata(
            metadata.owner,
            metadata.source,
            metadata.ref,
            metadata.name
        )
    }
}

