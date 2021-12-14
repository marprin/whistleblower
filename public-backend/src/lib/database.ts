import mysql, { Pool } from 'mysql2';

declare interface Database {
    createConnection(): Promise<void>;
    get(q: string, args: Array<any>): void;
};

export declare interface DatabaseConfiguration {
    host: string | undefined;
    port: number;
    user: string | undefined;
    password: string | undefined;
    database: string | undefined;
    debug: boolean | undefined;
    connectionLimit: number | undefined;
    queueLimit: number | undefined;
};


export class Mysql implements Database {
	private conn: Pool;
    private config: DatabaseConfiguration;

    constructor(config: DatabaseConfiguration) {
        this.config = config;
        this.defaultConfigForNull();
        this.createConnection();
    }

    private defaultConfigForNull(): void {
        this.config.queueLimit = 0;
    }

    public async testConnection(): Promise<Error | null> {
        const connection = await this.getConnection();
        return new Promise<Error | null>((resolve, reject) => {
            try {
                connection.query("select 1");
            } catch (err) {
                reject(err);
            }
        });
    }

    public async createConnection(): Promise<void> {
        this.conn = mysql.createPool({
            host: this.config.host,
            port: this.config.port,
            user: this.config.user,
            password: this.config.password,
            database: this.config.database,
            connectionLimit: this.config.connectionLimit,
            queueLimit: this.config.queueLimit,
            debug: this.config.debug,
        });
    }

    private getConnection(): Pool {
        if(!this.conn) {
            this.createConnection();
        }
        return this.conn;
    }

    public get(q: string, args: Array<any>): void {

    }
}