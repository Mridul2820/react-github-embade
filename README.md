#

<div align="center">
    <h1>React Github Embed</h1>
</div>

<div align="center">
    <p>Quick Links</p>
    <a href="CONTRIBUTING.md">Contributing Guide</a> •
    <a href="https://github.com/Mridul2820/react-github-embed/issues">Issues</a> •
    <a href="https://github.com/Mridul2820/react-github-embed/pulls">Pull Requests</a> •
    <a href="LICENSE">License</a>
</div>

<br />

![Demo-Image](./doc/Demo.png)

## How to Install

```
npm i react-github-embed
```

Get your `Personal Access Token` by signing in to your github account and then go to your **setting -> developer setting -> Personal access tokens -> Generate new token**. Add it to `.env` file in the root directory.

```
REACT_APP_GITHUB_TOKEN = <YOUR_GITHUB_TOKEN>
```

## Demo & Playground

[Demo & Playground](https://react-github-embed.mridul.tech/)

## Components

- [Repository](#repository)
- [Star Count](#star-count)
- [Fork Count](#fork-count)

## Repository

```jsx
import React from 'react';
import { Repository } from 'react-github-embed';

const RepositoryCard = () => {
  return (
    <div>
      <Repository
        username="facebook"
        repository="react"
        theme="light"
        showStarCount={true}
        showForkCount={true}
        showLanguage={true}
        showDescription={true}
        showType={true}
      />
      <Repository username="Mridul2820" repository="css-js" theme="light" />
      <Repository
        username="Mridul2820"
        repository="next-template"
        theme="dark"
      />
    </div>
  );
};

export default RepositoryCard;
```

### Options

| Property                    |  Type  | Description                                                                                                                            |
| :-------------------------- | :----: | :------------------------------------------------------------------------------------------------------------------------------------- |
| username<br/>_(required)_   | string | Username of the Github User                                                                                                            |
| repository<br/>_(required)_ | string | Repository of the Github User                                                                                                          |
| theme<br/>                  | string | Theme of the card `"light"` or `"dark"`<br/>Deafults to `"light"`                                                                      |
| showStarCount               |  bool  | When `true`, shows the total star count of repository.<br/>Defaults to `true`                                                          |
| showForkCount               |  bool  | When `true`, shows the total fork count of repository.<br/>Defaults to `true`                                                          |
| showLanguage                |  bool  | When `true`, shows the main language of repository.<br/>Defaults to `true`                                                             |
| showDescription             |  bool  | When `true`, shows the description of repository.<br/>Defaults to `true`                                                               |
| showType                    |  bool  | When `true`, shows the type of repository.<br/>`Public template` `Private template` `Private` `Public` `Forked`<br/>Defaults to `true` |

## Star Count

```jsx
import React from 'react';
import { StarCount } from 'react-github-embed';

const StarCountCard = () => {
  return (
    <StarCount
      username="facebook"
      repository="react"
      theme="light"
      iconText="Star"
      formatNumber={true}
    />
  );
};

export default RepositoryCard;
```

### Options

| Property                    |  Type  | Description                                                               |
| :-------------------------- | :----: | :------------------------------------------------------------------------ |
| username<br/>_(required)_   | string | Username of the Github User                                               |
| repository<br/>_(required)_ | string | Repository of the Github User                                             |
| theme                       | string | Theme of the card `"light"` or `"dark"`<br/>Deafults to `"light"`         |
| iconText                    | string | Text to display on the card.<br/>Defaults to `Star`                       |
| formatNumber                |  bool  | When `true`, shows the total star count formatted.<br/>Defaults to `true` |

## Fork Count

```jsx
import React from 'react';
import { ForkCount } from 'react-github-embed';

const ForkCountCard = () => {
  return (
    <ForkCount
      username="facebook"
      repository="react"
      theme="light"
      iconText="Fork"
      formatNumber={true}
    />
  );
};

export default RepositoryCard;
```

### Options

| Property                    |  Type  | Description                                                               |
| :-------------------------- | :----: | :------------------------------------------------------------------------ |
| username<br/>_(required)_   | string | Username of the Github User                                               |
| repository<br/>_(required)_ | string | Repository of the Github User                                             |
| theme                       | string | Theme of the card `"light"` or `"dark"`<br/>Deafults to `"light"`         |
| iconText                    | string | Text to display on the card.<br/>Defaults to `Star`                       |
| formatNumber                |  bool  | When `true`, shows the total fork count formatted.<br/>Defaults to `true` |

## Browser Compatibility

| Browser | Works? |
| :------ | :----- |
| Chrome  | Yes    |
| Firefox | Yes    |
| Safari  | Yes    |
| IE 11   | Yes    |

<br/>

Pull requests are welcome!
<br/>

See [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## License

<a href="LICENSE">MIT</a>
