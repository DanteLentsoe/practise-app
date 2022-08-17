# FinDome

This is an Expense tracker application, with mordern UI and UX considerations, fuzzy search etc.

### FULLY CODED COMPONENTS

| HTML | React-Native |
| ---- | ------------ |


## Documentation

No official documentation issued as yet for the UI kit, currently in the works

## Architecture

A basic architecture diagram or description of the chosen architecture should be detailed here.

## File Structure/ Project Structure

Within the download you'll find the following directories and files:

```
ExpenseTrackerApp/
├── App.tsx
├── README.md
├── app.json
├── assets
├── babel.config.js
├── package.json
├── components
│   ├── _tests_
│   ├── buttons
│   ├── modals
│   ├── searchbar
│   ├── Editscreeninfo.tsx
│   ├── StyledText.tsx
│   ├── Themed.tsx
├── constants
│   ├── Colors.ts
│   ├── Layout.ts
│   ├── types.ts
│   │
├── hooks
│   ├── useCachedResources.ts
│   ├── useColorScheme.ts
│   │
├── navigation
│   ├── index.tsx
│
└── screens
│       ├── ExpenseAdditionScreen.tsx
│       ├── ExpenseAnalytics.tsx
│       ├── HomeScreen.tsx
│       ├── index.tsx
│       ├── NotFoundScreen.tsx
├── store
│   ├── ExenpenseProvider.tsx
├── utils
│   ├── theme.ts
    ├── validation.ts
│
└── tsconfig.json
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node](https://nodejs.org/en/download/) minimum v12.18.0
- [Typescript](https://www.typescriptlang.org/download)
- [Expo CLI](https://github.com/angular/angular-cli](https://docs.expo.dev/workflow/expo-cli/) version 44 =>
- [Yarn](https://yarnpkg.com/)
- Your preferred text editor or IDE

### Preferred package manager

The preferred package manager for this project is `yarn`

### Installing

- Clone the repository using SSH

```
git clone git@github.com:dantelentsoe/ExpenseTrackerApp.git


```

- Navigate to the cloned repo

```
cd ExpenseTrackerApp
```

- Install dependencies

```
yarn
```

- Run the server locally

```
yarn start
```

## Running the tests

- To run tests normally, use

```
yarn test
```

### Detail testing methods

- To run tests with coverage reporting, use

```
yarn run coverage
```

- To run tests with coverage reporting and update snapshots, use

```
yarn run coverage:update
```

- For more testing scripts, have a look at the `scripts` section in the `package.json` file

## Environments

There are 1 environments each corresponding to a branch on the repository:

- Production - `master` branch

## Deployment

N/A

## Built With

Details of the tech stack that has been used.

- [Expo](https://expo.dev/) - The client framework used
- [React Native](https://reactnative.dev/) - The component library
- [TypeScript](https://www.typescriptlang.org/) - Programming Language
- [Native Base](https://nativebase.io/) - Mobile Styling Library

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/DanteLentsoe/Help-an-en-eye-gee-gee-ay) for details on the followed standards standard for commit messages and the accepted pull request process.

## Authors

- **Dante Lentsoe** <dllentsoe@gmail.com>

## Licenses

Results from `npx license-checker --summary`

```
├─ MIT: 953
├─ ISC: 78
├─ BSD-3-Clause: 37
├─ BSD-2-Clause: 29
├─ Apache-2.0: 26
├─ MIT*: 8
├─ BSD: 5
├─ (MIT OR CC0-1.0): 5
├─ CC0-1.0: 4
├─ WTFPL: 2
├─ Unlicense: 2
├─ 0BSD: 2
├─ Custom: https://github.com/tmcw/jsonlint: 1
├─ BSD-3-Clause OR MIT: 1
├─ (MIT OR Apache-2.0): 1
├─ CC-BY-4.0: 1
├─ Public Domain: 1
├─ AFLv2.1,BSD: 1
├─ (MIT AND Zlib): 1
├─ (MIT AND BSD-3-Clause): 1
└─ CC-BY-3.0: 1
```

## Troubleshooting

Here is a list of common errors and possible solutions:

Failed to push to Github due to out of date snapshots:

- Run

  > yarn test:update

- or
  > yarn coverage:update

## Meta

| Version | Author                              | Date       |
| ------- | ----------------------------------- | ---------- |
| 0.6<img width="537" alt="Screenshot 2022-08-17 at 22 16 27" src="https://user-images.githubusercontent.com/65385487/185234991-bcd1eb23-1962-4020-84c6-b72994caf1ad.png">
<img width="530" alt="Screenshot 2022-08-17 at 22 16 34" src="https://user-images.githubusercontent.com/65385487/185235015-1b2cc269-942b-4b7a-ab65-a48839cf35fa.png">
.1   | Dante Lentsoe <dllentsoe@gmail.com> | 17/08/2022 |


