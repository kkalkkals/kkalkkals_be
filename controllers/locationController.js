import { getCleanhouseLocations, getRecycleCenterLocations, getLocationsWithinBounds } from "../models/locationModel.js";


// 클린하우스 데이터 조회 컨트롤러
export const getCleanhouseController = async (req, res) => {
    try {
        const cleanhouses = await getCleanhouseLocations();

        res.status(200).json({
            status: "success",
            data: cleanhouses
        });
    } catch (error) {
        console.error("클린하우스 데이터 조회 실패:", error);
        res.status(500).json({ status: "error", message: "서버 에러 발생" });
    }
};

// 재활용 도움센터 데이터 조회 컨트롤러
export const getRecycleCenterController = async (req, res) => {
    try {
        const recycleCenters = await getRecycleCenterLocations();

        res.status(200).json({
            status: "success",
            data: recycleCenters
        });
    } catch (error) {
        console.error("재활용 도움센터 데이터 조회 실패:", error);
        res.status(500).json({ status: "error", message: "서버 에러 발생" });
    }
};

export const getLocationsByBounds = async (req, res) => {
    try {
        const { minLat, maxLat, minLng, maxLng } = req.query;

        if (!minLat || !maxLat || !minLng || !maxLng) {
            return res.status(400).json({ status: "error", message: "잘못된 요청: 바운더리 값이 필요합니다." });
        }

        const locations = await getLocationsWithinBounds(minLat, maxLat, minLng, maxLng);
        res.status(200).json({ status: "success", data: locations });
    } catch (error) {
        console.error("지도 바운더리 내 데이터 조회 실패:", error);
        res.status(500).json({ status: "error", message: "서버 에러 발생" });
    }
};