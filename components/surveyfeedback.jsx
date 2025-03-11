import Box from "./box";
import EmptyStar from "@/public/Empty-star.png";

const SurveyFeedback = function () {
    return (
        <div>
            <Box className="px-[20px] pt-[18px] max-w-[600px]">
                <div className="font-medium pb-[55px]">
                    No Feedback
                </div>
                <div className="flex justify-center pb-[169px]">
                    <img src={EmptyStar.src} alt="star"/>
                    <img src={EmptyStar.src} alt="star"/>
                    <img src={EmptyStar.src} alt="star"/>
                    <img src={EmptyStar.src} alt="star"/>
                    <img src={EmptyStar.src} alt="star"/>
                </div>
            </Box>
        </div>
    );
}

export default SurveyFeedback;