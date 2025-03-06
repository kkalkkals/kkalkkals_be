import { getCleanhouseLocations, getRecycleCenterLocations } from "../models/locationModel.js";

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