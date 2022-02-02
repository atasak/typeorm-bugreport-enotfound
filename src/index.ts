import {dbConnection, initDatabase} from './database';
import {TestEntity}                 from './entities/TestEntity';

async function main() {
    await initDatabase([TestEntity]);

    const testEntity = new TestEntity();
    testEntity.text  = 'hello world';
    await dbConnection.manager.save(testEntity);
    const entity = await dbConnection.getRepository(TestEntity).findOne({id: testEntity.id});
    console.log(entity);
}

void main();