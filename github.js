class GitHub {
    constructor(){
        this.client_ID = 'f7a0ab258b18c248d948';
        this.client_secret = '9b9ba952858c20628a85a761325220764a5bf9ab';
        this.repos_count = 10;
        this.repos_sort = 'created: asc';
        this.user = 'Re1o';
        this.apiUrl = 'https://api.github.com/users/';
    }

    async getUserData(){
        let urlProfile = `${this.apiUrl}${this.user}?client_id=${this.client_ID}&client_secret=${this.client_secret}`;
        let urlRepos = `${this.apiUrl}${this.user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_ID}&client_secret${this.client_secret}`;

        const profileResponse  = await fetch(urlProfile);
        const reposResponse = await fetch(urlRepos);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }

    


}