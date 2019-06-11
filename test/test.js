import assert from 'power-assert';

import GithubService from '../src/service/github_service'
import BitbucketService from '../src/service/bitbucket_service'
import GitSource, { SecretType } from '../src/service/modal/gitsource'
import pkg from '../package.json';


describe(pkg.name, function() {
    this.timeout(1000*20)

  it('should return ok on existing public bitbucket repo', (done) => {
    const gr = new GitSource(
        "https://bitbucket.org/akshinde/testgitsource",
        SecretType.NO_AUTH
    )

    const gs = new BitbucketService(gr)
    gs.isRepoReachable()
        .then(r => {
            assert.ok("Repo is reachable");
            done();
        })
        .catch(err => {
            assert.fail("Repo is existing");
            done();
        })
  })

  it('should return ok on existing public github repo', (done) => {
      const gr = new GitSource(
          "https://github.com/redhat-developer/devconsole-git",
          SecretType.NO_AUTH
      )

      const gs = new GithubService(gr)
      gs.isRepoReachable()
          .then(r => {
              assert.ok("Got")
              done();
          })
          .catch(err => {
              assert.fail("Repo is existing")
              done();
          })
  })

    it('should list all branches of existing public github repo', (done) => {
        const gr = new GitSource(
            "https://github.com/redhat-developer/devconsole-git",
            SecretType.NO_AUTH
        )

        const gs = new GithubService(gr)
        gs.getRepoBranchList()
            .then(r => {
                assert.ok("Repo is reachable")
            })
            .catch(err => {
                done(err)
                assert.fail("Repo is existing")
            })
    })

});
