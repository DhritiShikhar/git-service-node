import assert from 'power-assert';

import GithubService from '../src/service/github_service'
import BitbucketService from '../src/service/bitbucket_service'
import GitSource, { SecretType } from '../src/service/modal/gitsource'
import pkg from '../package.json';


describe(pkg.name, function() {

  it('should return ok on existing public bitbucket repo', () => {
    const gr = new GitSource(
        "https://bitbucket.org/akshinde/testgitsource",
        SecretType.NO_AUTH
    )

    const gs = new BitbucketService(gr)
    gs.isRepoReachable()
        .then(r => {
            assert.ok("Repo is reachable")
        })
        .catch(err => {
          assert.fail("Repo is existing")
        })
  })

  it('should return ok on existing public github repo', () => {
      const gr = new GitSource(
          "https://github.com/redhat-developer/devconsole-git",
          SecretType.NO_AUTH
      )

      const gs = new GithubService(gr)
      gs.isRepoReachable()
          .then(r => {
              assert.ok("Repo is reachable")
          })
          .catch(err => {
              assert.fail("Repo is existing")
          })
  })

});
