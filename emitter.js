const axios = require('axios');

// Define the webhook URL where events will be sent
const webhookUrl = 'http://localhost:3000/webhook';

// Sample event data (customize this as needed)
const eventData = {
  event: 'example_event',
  data: {
    message: 'Hello, webhook listener!',
  },
};

// Send the event data as an HTTP POST request to the webhook URL
axios
  .post(webhookUrl, eventData)
  .then((response) => {
    console.log('Webhook event sent successfully');
  })
  .catch((error) => {
    console.error('Error sending webhook event:', error);
  });
