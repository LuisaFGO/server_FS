const htmlTemplate = (name: string, phone: string, email: string, message: string) => {
  return `
    <h1>New message</h1>
    <p><strong>From:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
};

export default htmlTemplate;