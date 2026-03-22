const http = require('http');

const testContact = () => {
  const data = JSON.stringify({
    firstName: 'Local',
    lastName: 'Test',
    email: 'test@example.com',
    topic: 'Free Audit',
    message: 'Local test message'
  });

  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/contact',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  };

  const req = http.request(options, (res) => {
    console.log(`Contact Status: ${res.statusCode}`);
    res.on('data', (d) => process.stdout.write(d));
  });

  req.on('error', (error) => console.error('Contact Error:', error));
  req.write(data);
  req.end();
};

const testAudit = () => {
  const data = JSON.stringify({
    fullName: 'Local Auditor',
    email: 'auditor@example.com',
    companyName: 'Local Corp',
    trade: 'Plumbing',
    primaryGoal: 'Get more leads'
  });

  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/audit',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  };

  const req = http.request(options, (res) => {
    console.log(`\nAudit Status: ${res.statusCode}`);
    res.on('data', (d) => process.stdout.write(d));
  });

  req.on('error', (error) => console.error('Audit Error:', error));
  req.write(data);
  req.end();
};

setTimeout(testContact, 1000);
setTimeout(testAudit, 3000);
