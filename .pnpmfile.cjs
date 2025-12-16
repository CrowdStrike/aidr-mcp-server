function afterAllResolved(lockfile) {
  // Remove any tarball URLs from the lockfile.
  // <https://github.com/pnpm/pnpm/issues/6667#issuecomment-2971121163>
  for (const key in lockfile.packages) {
    if (lockfile.packages[key].resolution?.tarball) {
      delete lockfile.packages[key].resolution.tarball;
    }
  }
  return lockfile;
}

module.exports = {
  hooks: {
    afterAllResolved,
  },
};
