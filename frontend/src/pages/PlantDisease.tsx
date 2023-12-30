import { useParams} from "react-router-dom";

export default function IndexPage(){
    const {id} = useParams();

    // make request to api get json of data
    return(
        <>
        {id}
        </>
    )
}


