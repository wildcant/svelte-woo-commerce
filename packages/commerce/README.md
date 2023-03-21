### Steps to run the wordpress project.

1. run `pnpm --filter commerce dev`
2. Initialize wordpress admin account.
3. Install woocommerce and wp-graphql plugins, activate and initialize.
4. Download the following plugins from github, upload to wordpress and activate:

- [wp-graphql-woocommerce](https://github.com/wp-graphql/wp-graphql-woocommerce/releases)
- [wp-graphql-jwt-authentication](https://github.com/wp-graphql/wp-graphql-jwt-authentication/releases)
- [wompi-woocommerce](https://github.com/wompi-co/plugin-woocommerce/releases).

5. Update permalink settings from simple to input name.
6. Update graphql settings `Enable Public Introspection`.
7. Setup wompi:

- Go to woocommerce -> Settings -> Payments -> WOMPI and check `Enable Wompi`.
- Go to [comercios.wompi.co/developers](comercios.wompi.co/developers) and copy paste the keys in woocommerce settings page.
- Save changes.

8. Add products.

##### Dev Only Notes:

- In order to easily register a new customer go to Woocommerce -> Settings -> Accounts and privacy
  - check `Allows customers to create an account on the "My Account" page.`
  - uncheck `When creating an account, send the new user a link to set their password`
    Note we should not use this mechanism in prod.

### Related to orders:

- Only customers can retrieve their own orders, so you'll have to create an account and login in order to fetch orders
  (the order request must include the Authorization header with the Bearer token).

### Related to customers:

- When a new customer registers the new record will appear in the wordpress clients section, and it will appear in the
  woocommerce customers section only after the user enter his address.
