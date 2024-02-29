import {posterService} from "../../services/posterService";
import {useEffect} from "react";


const PosterPreview = ({img_url}) => {

    useEffect(() => {
        posterService.getPoster(img_url).then(({data}) => {
            console.log(data)
        })
    }, [])

    return (
        <div>

        </div>
    );
};

export {PosterPreview};