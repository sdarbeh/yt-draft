//https://github.com/nfl/react-helmet#readme
import { Helmet } from "react-helmet";

interface props {
    title: string;
    metaName?: string;
    metaContent?: string;
    children?: any;
}

export default ({ title, metaName, metaContent, children }: props) => {
    title = title.charAt(0).toUpperCase() + title.slice(1)
    return (
        <Helmet>
            <title>{title + ' | YT Properties'}</title>
            <meta name={metaName} content={metaContent} />
            { children }
        </Helmet>
    )
}