import * as Octokit from "@octokit/core";

const octokit = new Octokit({
  auth: 'YOUR-TOKEN'
})

await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
  owner: 'nxoscloud',
  repo: 'nxos-apps',
  path: 'apps-packages.json',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})