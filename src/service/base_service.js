import { SecretType } from './modal/gitsource'
// eslint-disable-next-line no-unused-vars
export default class BaseService {

    constructor(gitsource) {
        this.gitsource = gitsource;
    }

    getRepoMetadata(){

    }

    getRepoLanguageList(){

    }

    getRepoBranchList(){

    }

    isPrivateRepo(){

    }

    isRepoReachable() {

    }

    getAuth() {
        switch (this.gitsource.secretType) {
            case SecretType.BASIC_AUTH:
                return {
                    username: this.gitsource.secretContent.username,
                    password: this.gitsource.secretContent.password,
                }
            default:
                return null;
        }
    }

}