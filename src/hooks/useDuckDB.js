import { useEffect, useState } from 'react';
import DuckDB from 'duckdb';

const useDuckDB = () => {
    const [db, setDb] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const initializeDB = async () => {
            try {
                const duckdb = new DuckDB.Database();
                setDb(duckdb);
            } catch (err) {
                setError(err);
            }
        };

        initializeDB();
    }, []);

    const query = async (sql) => {
        if (!db) {
            throw new Error('Database not initialized');
        }

        return new Promise((resolve, reject) => {
            db.all(sql, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    };

    return { db, query, error };
};

export default useDuckDB;