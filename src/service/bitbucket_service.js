import Bitbucket from 'bitbucket'
import BaseService from "./base_service";
import RepoMetadata from './modal/repo_metadata'
import parseBitbucketUrl from 'parse-bitbucket-url'

export default class BitbucketService extends BaseService {
    constructor(gitsource) {
        super(gitsource)
        this.client = new Bitbucket()
    }

    async isRepoReachable() {
        try {
            this.metadata = this.getRepoMetadata();
            const resp = await this.client.repositories.get({
                repo_slug: this.metadata.repoName,
                username: this.metadata.owner
            })
            return resp;
        }catch (e) {
            throw e;
        }
    }


    getRepoMetadata() {
        const metadata = parseBitbucketUrl(this.gitsource.url)
        return new RepoMetadata(
            metadata.owner,
            metadata.source,
            metadata.ref,
            metadata.name
        )
    }
}