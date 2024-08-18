const fs = require('fs');

// Define the file path
const filePath = 'C:\\Users\\Win-10\\Desktop\\MERN\\backend\\export\\sample.json';

// Read the JSON file
const data = fs.readFileSync(filePath, 'utf8');

// Check if JSON data is empty or incomplete
if (!data.trim()) {
    console.error('JSON data is empty or incomplete');
    return;
}

// Parse JSON data
const jsonData = JSON.parse(data);


const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://pushpak:8655@cluster0.47eu6ju.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function main() {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');

        const database = client.db('test');
        const collection = database.collection('datas');

        // Insert data into the collection
        const result = await collection.insertMany(jsonData);
        console.log(`${result.insertedCount} documents inserted`);
    } finally {
        await client.close();
    }
}

main().catch(console.error);