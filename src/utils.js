/***
 * Returns command for framework installation.
 *
 * @param framework
 * @param manager
 * @returns String
 */
export function toInstall(framework, manager) {
  let pkg,
    prefix = '',
    suffix = '';

  switch (manager) {
    case 'bower':
      prefix = 'bower i';
      suffix = '-S';
      break;
    case 'npm':
      prefix = 'npm i';
      suffix = '-S';
      break;
    default:
      prefix = 'yarn add';
  }

  if (framework.install[manager]) {
    pkg = framework.install[manager];
  }
  if (framework.install.length) {
    pkg = framework.install;
  }

  return pkg ? [prefix, pkg, suffix].join(' ').trim() : 'Not Available';
}
