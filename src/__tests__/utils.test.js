import { toInstall } from '../utils';

describe('utils.js test case', () => {
  it('should return install name if nothing is specified', () => {
    const framework = {
      // install: 'package_name',
      slug: 'package_slug'
    };

    expect(toInstall(framework)).toBe('package_slug');
  });

  it('should return install name if string was provided', () => {
    const framework = {
      install: 'package_name',
      slug: 'package_slug'
    };

    expect(toInstall(framework)).toBe('package_name');
  });

  it('should return install name if object was provided', () => {
    const framework = {
      install: {
        npm: 'npm_package_name',
        yarn: 'yarn_package_name', // yarn and npm use same name
        bower: 'bower_package_name'
      },
      slug: 'package_slug'
    };

    expect(toInstall(framework, 'npm')).toBe('npm_package_name');
    expect(toInstall(framework, 'yarn')).toBe('yarn_package_name');
    expect(toInstall(framework, 'bower')).toBe('bower_package_name');
  });
});
