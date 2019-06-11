import GithubService from './service/github_service'
import BitbucketService from './service/bitbucket_service'
import GitSource, { SecretType } from './service/modal/gitsource'

const gr = new GitSource(
    "https://bitbucket.org/siminsights/cts-web-app",
    SecretType.NO_AUTH
)

const gs = new BitbucketService(gr)
gs.isRepoReachable()
    .then(r => console.log("Is Reachable ", r))
    .catch(err => console.log("Is not reachable", err))