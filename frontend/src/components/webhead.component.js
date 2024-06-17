import React from 'react';
import { Helmet } from 'react-helmet';
import { Author, AuthorURL, SiteTitle } from './constants.component';

function WebHead({ headInsiders }) {

    const keywordsMaker = () =>{
        var keywords = headInsiders.keywords;
        const keywordString = keywords.join(', ');
        return keywordString;
    }

    return (
        <>
            <Helmet>
                <title>{headInsiders.page_title ? (headInsiders.page_title+" - " + SiteTitle) : SiteTitle}</title>
                <meta name="keywords" content={keywordsMaker()} />
                <meta name="description" content={headInsiders.description} />

                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="author" content={Author} />
                <meta name="author-url" content={AuthorURL} />
                {/* <link rel="icon" href={favicon} type="image/png" /> */}
                <link href="https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap" rel="stylesheet" />
            </Helmet>
        </>
    );
}

export default WebHead;
