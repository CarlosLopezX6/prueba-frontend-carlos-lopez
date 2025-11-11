import { useNavigate } from "react-router";
import { CircleArrowLeft } from "lucide-react"
import { ActionBtn } from "./ActionBtn";


interface Props {
    goBackPath: string;
}
export const GoBackButton = ({ goBackPath }: Props) => {

    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-start">
            <ActionBtn
                icon={<CircleArrowLeft />}
                onClick={ () => navigate(`${ goBackPath }`)}
            >
                Volver
            </ActionBtn>
        </div>
    )
}