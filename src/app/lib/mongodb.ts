import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
    const client = new MongoClient(uri)
    try {
        await client.connect();
        return client
    } catch (error) {
        throw error
    }
};
// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default connectDB;
