function samplePromise() {
    return Promise.resolve("Ucok");
}
const name = await samplePromise();
console.info(name);