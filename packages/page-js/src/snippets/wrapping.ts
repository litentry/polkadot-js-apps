// Copyright 2017-2025 @polkadot/app-js authors & contributors
// SPDX-License-Identifier: Apache-2.0

export function makeWrapper (isDevelopment: boolean): string {
  const args = `api, hashing, ${isDevelopment ? 'keyring, ' : ''}types, util`;

  return `// All code is wrapped within an async closure,
// allowing access to ${args}.
// (async ({ ${args} }) => {
//   ... any user code is executed here ...
// })();

`;
}
