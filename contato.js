gapi.load('client:auth2', () => {
    gapi.client.init({
      apiKey: 'YOUR_API_KEY',
      clientId: 'YOUR_CLIENT_ID',
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
      scope: 'https://www.googleapis.com/auth/gmail.send',
    })
  })
  
  const sendEmail = () => {
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const assunto = document.querySelector('#assunto').value;
    const mensagem = document.querySelector('#mensagem').value;
  
    gapi.client.load('gmail', 'v1', () => {
      const message = [
        'Content-Type: text/plain; charset="UTF-8"\n',
        'MIME-Version: 1.0\n',
        'Content-Transfer-Encoding: 7bit\n',
        `to: <${to}>\n`,
        `subject: ${assunto}\n\n`,
        `${mensagem}\n`,
      ].join('');
  
      const base64EncodedEmail = btoa(message).replace(/\+/g, '-').replace(/\//g, '_');
      const request = gapi.client.gmail.users.messages.send({
        userId: 'me',
        resource: {
          raw: base64EncodedEmail,
        },
      });
  
      request.execute((response) => {
        console.log(response);
      });
    });
  };
  
  /*Lembre-se de substituir YOUR_API_KEY e YOUR_CLIENT_ID pelas suas próprias credenciais geradas na Console API do Google. Além disso, é necessário definir a variável to com o endereço de e-mail do destinatário.

Este código envia um e-mail usando a conta do usuário autenticado no navegador. Se você quiser enviar um e-mail usando uma conta específica, será necessário obter as credenciais de acesso da conta e usá-las para autenticar a chamada da API.*/