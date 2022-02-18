import { useParams, useHistory, /* useRouteMatch, useLocation */ } from "react-router-dom";

export default function Movie() {
    const params = useParams();
    const history = useHistory();
    // const value = useRouteMatch();
    // const value2 = useLocation();

    // console.log(params);
    // console.log(history);
    // console.log(value);
    // console.log(value2);

    return (
        <>
            <h1>Some movie {params.title}</h1>
            <button 
                className="btn"
                onClick={history.goBack}
            >Go back</button>
        </>
    );
}