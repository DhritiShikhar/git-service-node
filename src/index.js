import GithubService from './service/github_service'
import BitbucketService from './service/bitbucket_service'
import GitSource, { SecretType } from './service/modal/gitsource'

const gr = new GitSource(
    "https://akshinde@bitbucket.org/akshinde/testgitsource.git",
    SecretType.NO_AUTH
)

const gs = new BitbucketService(gr)
gs.getRepoBranchList()
    .then(r => console.log("Is Reachable ", r.data.values))
    .catch(err => console.log("Is not reachable", err))