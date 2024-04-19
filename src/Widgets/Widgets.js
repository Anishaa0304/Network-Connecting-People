import React from 'react'
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{ subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>what you need to know now</h2>
            </div>

            {newsArticle("What today's job numbers mean for you ", "36 posts")}
            {newsArticle("Economy grew at fastest pase in 2 years", "2M talking about this")}
            {newsArticle("Network is the fastest growing platform", "Trending| 1.8M talking about this")}

        </div>
    );
}

export default Widgets;
