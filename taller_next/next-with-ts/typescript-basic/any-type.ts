
const apiCall = {} => {
    return new Promise((resolve, reject)) => {
        resolve("ok fine");
    });
};

const fun = async () => {
    try {
        await apiCall();
    } catch (error: unkown) { // <-- when the type can not be known this is recommended not all the time but this can be useful
        console.log(error.mensage);
    }
};
