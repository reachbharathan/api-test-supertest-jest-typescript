class GitHubTestConfig {
  static get baseUrl(): string {
    return "https://api.github.com/";
  }

  static typescriptRepoBaseUrl(): string {
    const lpBaseUrl = `${this.baseUrl}repos/Microsoft/TypeScript/`;
    return lpBaseUrl;
  }
}

export default GitHubTestConfig;
