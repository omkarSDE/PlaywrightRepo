import { expect, test } from '@playwright/test';
import { HomePage, type ParaBankCustomer } from '../Pages/HomePage';
import { Actions } from '../Utils/Actions';

test('register and log in to ParaBank', async ({ page }) => {
  const customer: ParaBankCustomer = {
    firstName: 'Test',
    lastName: 'Customer',
    street: '123 Test Street',
    city: 'Test City',
    state: 'CA',
    zipCode: '90210',
    phoneNumber: '5551234567',
    ssn: '123456789',
    username: await new Actions(page).CreateRandomName(),
    password: 'TestPassword123',
  };
  const homePage = new HomePage(page);

  await homePage.open();
  await homePage.register(customer);
  await expect(homePage.welcomeHeading()).toHaveText(/Welcome\s*Test Customer/);

  await homePage.logout();
  await homePage.login(customer);
  await expect(homePage.welcomeHeading()).toHaveText(/Welcome\s*Test Customer/);
});