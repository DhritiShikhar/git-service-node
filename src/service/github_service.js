import BaseService from './base_service'
import Octokit from '@octokit/rest'
import GitUrlParse from 'git-url-parse'
import RepoMetadata from './modal/repo_metadata'
import { Gitlab } from 'gitlab'
import Bitbucket from 'bitbucket'

export default class GithubService extends BaseService {
    constructor(gitsource) {
        super(gitsource)
        this.client = new Octokit()
    }

    async isRepoReachable() {
        const metadata = this.getRepoMetadata();
        try {
            const resp = await this.client.repos.get({
                owner: metadata.owner,
                repo: metadata.repoName,
            })
            return resp;
        }catch (e) {
            console.log(e)
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