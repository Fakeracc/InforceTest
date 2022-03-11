import {TypedUseSelectorHook, useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
//import ActionCreators from '../store/action-creators/'
import {RootState} from "../store/reducers";
import ActionCreators from "../store/action-creators";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;


const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}

export {
    useTypedSelector,
    useActions
}