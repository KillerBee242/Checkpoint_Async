async function functionOne() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Function One Completed');
}

async function functionTwo() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Function Two Completed');
}

async function functionThree() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Function Three Completed');
}

async function ChainedAsyncFunctions() {
    await functionOne();
    await functionTwo();
    await functionThree();
}

ChainedAsyncFunctions();