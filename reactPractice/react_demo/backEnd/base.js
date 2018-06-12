class BaseHelper  {
    trimData = (obj) => {
        Object.keys(obj).forEach((key) => {
        if (typeof (obj[key]) === 'string') {
        obj[key] = obj[key].trim();
        }
        });
        return obj;
        };
}

export default new BaseHelper();