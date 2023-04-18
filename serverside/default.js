import { data } from "./constants/data.js";

import News from "./models/newsSchema.js";

const DefaultData = async () => {
    try {
        await News.deleteMany({});
        await News.insertMany(data);
        console.log("Data Imported Successfully");
    } catch (err) {
        console.log("Error : ", err.message);
    }
}

export default DefaultData;