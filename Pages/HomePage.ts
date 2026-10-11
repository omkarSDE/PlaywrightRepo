import type { Locator, Page } from '@playwright/test';

export type ParaBankCustomer = {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  ssn: string;
  username: string;
  password: string;
};

export class HomePage {
  private readonly registerLink: Locator;
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly streetInput: Locator;
  private readonly cityInput: Locator;
  private readonly stateInput: Locator;
  private readonly zipCodeInput: Locator;
  private readonly phoneNumberInput: Locator;
  private readonly ssnInput: Locator;
  private readonly registrationUsernameInput: Locator;
  private readonly registrationPasswordInput: Locator;
  private readonly confirmPasswordInput: Locator;
  private readonly registerButton: Locator;
  private readonly logoutLink: Locator;
  private readonly loginUsernameInput: Locator;
  private readonly loginPasswordInput: Locator;
  private readonly loginButton: Locator;

  constructor(private readonly page: Page) {
    this.registerLink = page.getByRole('link', { name: 'Register' });
    this.firstNameInput = page.locator('[name="customer.firstName"]');
    this.lastNameInput = page.locator('[name="customer.lastName"]');
    this.streetInput = page.locator('[name="customer.address.street"]');
    this.cityInput = page.locator('[name="customer.address.city"]');
    this.stateInput = page.locator('[name="customer.address.state"]');
    this.zipCodeInput = page.locator('[name="customer.address.zipCode"]');
    this.phoneNumberInput = page.locator('[name="customer.phoneNumber"]');
    this.ssnInput = page.locator('[name="customer.ssn"]');
    this.registrationUsernameInput = page.locator('[name="customer.username"]');
    this.registrationPasswordInput = page.locator('[name="customer.password"]');
    this.confirmPasswordInput = page.locator('[name="repeatedPassword"]');
    this.registerButton = page.getByRole('button', { name: 'Register' });
    this.logoutLink = page.getByRole('link', { name: 'Log Out' });
    this.loginUsernameInput = page.locator('input[name="username"]');
    this.loginPasswordInput = page.locator('input[name="password"]');
    this.loginButton = page.getByRole('button', { name: 'Log In' });
  }

  async open(): Promise<void> {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
  }

  async register(customer: ParaBankCustomer): Promise<void> {
    await this.registerLink.click();
    await this.firstNameInput.fill(customer.firstName);
    await this.lastNameInput.fill(customer.lastName);
    await this.streetInput.fill(customer.street);
    await this.cityInput.fill(customer.city);
    await this.stateInput.fill(customer.state);
    await this.zipCodeInput.fill(customer.zipCode);
    await this.phoneNumberInput.fill(customer.phoneNumber);
    await this.ssnInput.fill(customer.ssn);
    await this.registrationUsernameInput.fill(customer.username);
    await this.registrationPasswordInput.fill(customer.password);
    await this.confirmPasswordInput.fill(customer.password);
    await this.registerButton.click();
  }

  async logout(): Promise<void> {
    await this.logoutLink.click();
  }

  async login(customer: Pick<ParaBankCustomer, 'username' | 'password'>): Promise<void> {
    await this.loginUsernameInput.fill(customer.username);
    await this.loginPasswordInput.fill(customer.password);
    await this.loginButton.click();
  }

  welcomeHeading(): Locator {
    return this.page.locator('#leftPanel p.smallText');
  }
}