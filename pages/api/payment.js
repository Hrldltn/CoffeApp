import paypal from '@paypal/checkout-server-sdk'

// Creating an environment
let clientId = process.env.CLIENTE_ID
let clientSecret =  process.env.CLIENTE_SECRET


// This sample uses SandboxEnvironment. In production, use LiveEnvironment
let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
let client = new paypal.core.PayPalHttpClient(environment);

export default async function handler(req,res){
  if (req.method === "POST"){
    const request = new paypal.orders.OrdersCreateRequest()
    request.requestBody({
      intent: "CAPTURE",
      purchase_units:[
        {
          amount:{
            currency_code:"USD",
            value:"100"
          },
        },
      ],
    })
    const response = await client.execute(request);

    return res.json({id: response.result.id})
  }
}
