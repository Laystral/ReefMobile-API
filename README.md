# ![Project Logo](https://via.placeholder.com/850x400?text=Free)

# Free Mobile API Wrapper

This project is a React Native wrapper for the Free Mobile API, providing seamless integration and interaction with Free Mobile services, managed by Laystral.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Methods](#api-methods)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the package, use the following command:

```sh
npm install reefmobile-api
```

## Usage

Here's a basic example of how to use the wrapper in a React Native application:

```javascript
import { 
  LoginWithoutTrustedUuid, 
  LoginWithTrustedUuid, 
  VerifySMSCode,
  fetchCompleteUserData,
  fetchPeriodUsageDetails,
  FetchInvoiceData,
  FetchUnpaidInvoices,
  fetchPlanAndDiscountInfo
} from 'freemobileapi';

// Example usage
const login = async () => {
  const response = await LoginWithoutTrustedUuid('your_login', 'your_password');
  const data = await response.json();
  console.log(data);
};
```

## API Methods

### Authentication

- `LoginWithoutTrustedUuid(login: string, password: string)`
- `LoginWithTrustedUuid(login: string, password: string, trustedUuid: string)`
- `VerifySMSCode(otpID: string, codeOtp: string, isTrusted: boolean, token: string)`

### User Data

- `fetchCompleteUserData(login: string, token: string)`

### Usage Details

- `fetchPeriodUsageDetails(login: string, token: string)`

### Invoices

- `FetchInvoiceData(login: string, token: string)`
- `FetchUnpaidInvoices(login: string, token: string)`

### Plan and Discounts

- `fetchPlanAndDiscountInfo(login: string, token: string)`

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

For more details, visit the [repository](https://github.com/tryon-dev/freemobileapi).
