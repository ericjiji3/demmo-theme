export const createCustomer = /* GraphQL */ `
  mutation customerCreate($input: CustomerInput!) {
    customerCreate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        id
        email
        phone
        taxExempt
        acceptsMarketing
        firstName
        lastName
        ordersCount
        totalSpent
        smsMarketingConsent {
          marketingState
          marketingOptInLevel
        }
        addresses {
          address1
          city
          country
          phone
          zip
        }
      }
    }
  }
`;
