import { useDispatch } from "react-redux";
import { IAlertState } from "../../types/types";
import { hideAlert } from "../../redux/actions";
import "./style.css";

interface IAlertProps { 
    props: IAlertState
}

export const Alert = ({ props }: IAlertProps) => { 
    const dispach = useDispatch()

    const handleAlertClose = () => dispach(hideAlert());
    return (
        <div className={`alert alert-wrapper alert-${props.alertStatus}`}>
            {props.alertText}
            <button onClick={handleAlertClose} className="btn-close alert-btn"/>
        </div>
    )
}