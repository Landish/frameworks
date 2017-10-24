import { toInstall } from '../../core/utils';

describe('utils.js test case', () => {
  it('should return install name if nothing is specified', () => {
    const framework = {
      install: '',
    };
    expect(toInstall(framework)).toBe('Not Available');
    expect(toInstall(framework, 'bower')).toBe('Not Available');
    expect(toInstall(framework, 'npm')).toBe('Not Available');
    expect(toInstall(framework, 'yarn')).toBe('Not Available');
  });

  it('should return install name if string was provided', () => {
    const framework = {
      install: 'package_name',
    };

    expect(toInstall(framework, 'npm')).toBe('npm i package_name -S');
    expect(toInstall(framework, 'yarn')).toBe('yarn add package_name');
    expect(toInstall(framework, 'bower')).toBe('bower i package_name -S');
  });

  it('should return install name if object was provided', () => {
    const framework = {
      install: {
        npm: 'npm_package_name',
        yarn: 'yarn_package_name', // yarn and npm use same name
        bower: 'bower_package_name',
      },
    };

    expect(toInstall(framework, 'npm')).toBe('npm i npm_package_name -S');
    expect(toInstall(framework, 'yarn')).toBe('yarn add yarn_package_name');
    expect(toInstall(framework, 'bower')).toBe('bower i bower_package_name -S');
  });
});
