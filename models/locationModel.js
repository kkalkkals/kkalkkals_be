import pool from "../config/db.js";

// 클린하우스 데이터 조회
export const getCleanhouseLocations = async () => {
    try {
        const [locations] = await pool.query(`
            SELECT id, address, latitude, longitude, operation_hours
            FROM cleanhouse;
        `);

        return locations;
    } catch (error) {
        console.error("클린하우스 데이터 조회 오류:", error);
        throw error;
    }
};

// 재활용 도움센터 데이터 조회
export const getRecycleCenterLocations = async () => {
    try {
        const [locations] = await pool.query(`
            SELECT id, address, latitude, longitude, operation_hours
            FROM recycle_center;
        `);

        return locations;
    } catch (error) {
        console.error("재활용 도움센터 데이터 조회 오류:", error);
        throw error;
    }
};

// 바운더리 내 시설 조회
export const getLocationsWithinBounds = async (minLat, maxLat, minLng, maxLng) => {
    try {
        const [locations] = await pool.query(`
            SELECT id, address, latitude, longitude, operation_hours, 'cleanhouse' AS type
            FROM cleanhouse
            WHERE latitude BETWEEN ? AND ? AND longitude BETWEEN ? AND ?
            
            UNION ALL
            
            SELECT id, address, latitude, longitude, operation_hours, 'recycling' AS type
            FROM recycle_center
            WHERE latitude BETWEEN ? AND ? AND longitude BETWEEN ? AND ?;
        `, [minLat, maxLat, minLng, maxLng, minLat, maxLat, minLng, maxLng]);

        return locations;
    } catch (error) {
        console.error("바운더리 내 데이터 조회 오류:", error);
        throw error;
    }
};