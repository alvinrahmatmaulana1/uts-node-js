function samplePromise() {
    return Promise.resolve("Udin");
}

async function run() {
    const name = await samplePromise();
    console.info(name);
}

run();