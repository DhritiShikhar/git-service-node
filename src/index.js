import GithubService from './service/github_service'
import GitSource, { SecretType } from './service/modal/gitsource'

const gr = new GitSource(
    "https://github.com/IonicaBizau/git-url-parse",
    SecretType.NO_AUTH
)

const gs = new GithubService(gr)
gs.isRepoReachable()
    .then(r => console.log("Is Reachable ", r))
    .catch(err => console.log("Is not reachable", err))