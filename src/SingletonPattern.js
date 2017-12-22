let instance = null;

class Cache {
    constructor() {
        if(!instance) {
            instance = this;
        }

        this.time = new Date();

        return instance;
    }
}

setInterval(() => {
    let cache = new Cache();
    console.log(cache.time);
},4000)