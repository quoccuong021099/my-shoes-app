import { Box } from '@mui/material';
import { Email } from './smtp';

export default function ContactForm() {
  const sendEmail = () => {
    Email.send({
      SecureToken: '<your generated token>',
      To: 'quoccuong021099@gmail.com',
      From: 'cuongql021099@gmail.com',
      Subject: 'Test Email',
      Body: '<html><h2>Header</h2><strong>cccsss</strong><br></br><em>Italic</em></html>',
    }).then((message) => alert('mail sent successfully'));
  };
  return (
    <Box>
      <form
        action="mailto:cuongql021099@gmail.com"
        method="post"
        encType="text/plain"
      >
        <input type="text" name="FirstName" />
        <input type="text" name="Email" />
        <input type="button" value="Send Email" onClick={sendEmail} />
      </form>
    </Box>
  );
}
