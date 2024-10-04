//DNS module with sample coding
const dns = require('dns');
function performDNSLookup(domain) {
    dns.lookup(domain, (err, address, family) => {
        if (err) {
            console.error(`Error: ${err.message}`);
            return;
        }
        console.log(`Address: ${address}`);
        console.log(`Family: ${family}`);
    });
}

const domain = 'example.com';  
console.log(`Performing DNS lookup for: ${domain}`);
performDNSLookup(domain);

/*output:
Performing DNS lookup for: example.com
Address: 93.184.216.34
Family: 4
*/