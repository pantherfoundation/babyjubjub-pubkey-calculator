// @ts-ignore
import { babyjub } from 'circomlibjs';

function calculatePubKey(privateKey: bigint): [bigint, bigint] {
    return babyjub.mulPointEscalar(babyjub.Base8, privateKey) as [bigint, bigint];
}

function main() {
    if (process.argv.length < 3) {
        console.error('Please provide a private key as an argument');
        console.error('Usage: npm start <privateKey>');
        process.exit(1);
    }

    const privateKeyHex = process.argv[2].replace(/^0x/, '');
    const privateKey = BigInt(`0x${privateKeyHex}`);

    try {
        const [pubKeyX, pubKeyY] = calculatePubKey(privateKey);
        console.log('Public Key:');
        console.log('X:', pubKeyX.toString());
        console.log('Y:', pubKeyY.toString());
    } catch (error) {
        console.error('Error calculating public key:', error);
        process.exit(1);
    }
}

main();