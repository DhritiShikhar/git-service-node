export default class GitSource {
    constructor(url, secretType, secretContent) {
        this.url = url;
        this.secretType = secretType ? secretType : SecretType.NO_AUTH;
        this.secretContent = secretContent;
    }
};

export const SecretType = {
    NO_AUTH: 0,
    BASIC_AUTH: 1,
    SSH: 2,
    PERSONAL_ACCESS_TOKEN: 3,
    OAUTH: 4,
}