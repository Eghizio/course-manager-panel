const getRandomArrayElements = <T>(arr: T[], upTo: number = arr.length): T[] => {
    if(arr.length <= 0 || upTo <= 0) return [];

    // const randomElements: T[] = arr.reduce((acc: T[], el) => (Math.random() < Math.random()) ? [...acc, el] : acc, []);

    const limit: number = Math.ceil(Math.random()*upTo);

    // could just assume that students sign for 1-3 courses and make some probabilities 60/30/10
    const randomElements = new Set<T>();
    while(randomElements.size < limit){
        const rndElement = arr[Math.floor(Math.random()*arr.length)];
        if(!randomElements.has(rndElement)) randomElements.add(rndElement);
    }

    return Array.from(randomElements);
};

export default getRandomArrayElements;