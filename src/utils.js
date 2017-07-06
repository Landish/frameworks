export function toInstall(framework, manager) {
  return framework.install && framework.install[manager] ? framework.install[manager] : (framework.install ? framework.install : framework.slug);
}
