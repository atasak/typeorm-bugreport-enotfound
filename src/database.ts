/**
 * @module server.backend
 */

import {Connection, ConnectionOptions, createConnection, getConnectionOptions} from 'typeorm';

export type Class = { new(): any }
export let dbConnection: Connection;

export async function initDatabase(entityClasses: Class[]): Promise<void> {
    console.log('Initializing database');
    const baseConnectionOptions                = await getConnectionOptions();
    const connectionOptions: ConnectionOptions = {
        ...baseConnectionOptions,
        entities: entityClasses,
    };
    console.log(connectionOptions);
    dbConnection = await createConnection(connectionOptions);
}
