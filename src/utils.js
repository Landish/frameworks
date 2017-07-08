/***
 * Returns `installable` name for framework.
 *
 * @param framework
 * @param manager
 * @returns String
 */
export function toInstall(framework, manager) {
  return framework.install && framework.install[manager]
    ? framework.install[manager]
    : framework.install ? framework.install : framework.slug;
}
