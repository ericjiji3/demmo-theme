// import { createACustomer } from 'lib/shopify';
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
export async function POST(request: NextRequest): Promise<NextResponse> {
  const customerKey = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN!;
  try {
    const body = await request.json();

    const { email } = body;

    // const address =
    //     {
    //         address1: '',
    //         city: '',
    //         province: '',
    //         phone: '',
    //         zip: '',
    //         lastName: '',
    //         firstName: '',
    //         country: 'US'
    //     };
    // const data = {
    //     email: email,
    //     phone: '',
    //     firstName: '',
    //     lastName: '',
    //     acceptsMarketing: true,
    //     addresses: address
    // } as CustomerInput;
    const address = [
      {
        address1: '412 fake st',
        city: 'Ottawa',
        province: 'ON',
        phone: '+16469999999',
        zip: 'A1A 4A1',
        lastName: 'Lastname',
        firstName: 'Steve',
        country: 'CA'
      }
    ];

    const customer = {
      customer: {
        email: 'carrel.lastnameson@example.com',
        phone: '+16465555555',
        firstName: 'Steve',
        lastName: 'Lastname',
        acceptsMarketing: true
      }
    };
    console.log(customer);
    // const res = await fetch("https://demmocorp.myshopify.com/admin/api/2024-01/customers.json?",{
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'X-Shopify-Storefront-Access-Token': customerKey,
    //     ...headers
    //   },
    //   body: JSON.stringify({
    //     query: `mutation customerCreate($input: CustomerInput!) {
    //       customerCreate(input: $input) {
    //         userErrors {
    //           field
    //           message
    //         }
    //         customer {
    //           id
    //           email
    //           phone
    //           taxExempt
    //           acceptsMarketing
    //           firstName
    //           lastName
    //           smsMarketingConsent {
    //             marketingState
    //             marketingOptInLevel
    //           }
    //           addresses {
    //             address1
    //             city
    //             country
    //             phone
    //             zip
    //           }
    //         }
    //       }
    //     }`,
    //     variables: {
    //       input: customer
    //     }
    //   })
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data);
    // })

    var graphql = JSON.stringify({
      query:
        'mutation customerCreate($input: CustomerInput!) {\r\n  customerCreate(input: $input) {\r\n    userErrors {\r\n      field\r\n      message\r\n    }\r\n    customer {\r\n      id\r\n      email\r\n      phone\r\n      taxExempt\r\n      acceptsMarketing\r\n      firstName\r\n      lastName\r\n      smsMarketingConsent {\r\n        marketingState\r\n        marketingOptInLevel\r\n      }\r\n      addresses {\r\n        address1\r\n        city\r\n        country\r\n        phone\r\n        zip\r\n      }\r\n    }\r\n  }\r\n}',
      variables: {
        input: {
          email: email,
          phone: '',
          firstName: '',
          lastName: '',
          acceptsMarketing: true,
          addresses: [
            {
              address1: '',
              city: '',
              province: '',
              phone: '',
              zip: '',
              lastName: '',
              firstName: '',
              country: ''
            }
          ]
        }
      }
    });
    var requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': customerKey,
        ...headers
      },
      body: graphql
    };

    const resp = await fetch(
      'https://demmocorp.myshopify.com/admin/api/2023-01/graphql.json?',
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
    return NextResponse.json({ resp });
    // const res = await createACustomer(
    //   {
    //     customer: customer
    //   }

    // )

    // if (res != null) {
    //   return NextResponse.json({ res }, { status: 200 });
    // }
    // return NextResponse.json({ res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
