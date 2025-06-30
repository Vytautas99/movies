// console.log(process.argv[2].split('=')[1]);

const argList = process.argv.slice(2);
const args   = {};


for (const str of argList) {
    const [key, value] = str.split('=');
    

    if (key && value && key.startsWith('--')) {
        args[key.slice(2)] = value;
    }
    
    
    
}
console.log(args);


export const PORT = 1317;