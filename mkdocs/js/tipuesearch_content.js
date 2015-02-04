var tipuesearch = {
    "pages": [
        {
            "loc": "/", 
            "tags": "", 
            "text": "Review Analysis\n\n\nReview Analysis is a project for analysing code review data to\nlook find interesting data and create pretty graphs.\n\n\nThis project is under heavy development and currently rough\naround the edges. Pull requests are more than welcome. At the\nmoment we only look at all the projects under the OpenStack\ngerrit review data.\n\n\nInstall\n\n\nThis currently requires a few steps at the moment.\n\n\ngit clone https://github.com/d0ugal/review_analysis.git;\ncd mkdocs;\npip install -r requirements.txt;\npython setup.py install;\n\n\n\n\nUsage\n\n\nFirst time setup\n\n\nFirst you will need some data to work with. At the moment we\ncurrently only support the OpenStack deployment of Gerrit which\nhas over 140,000 reviews. You will need to create \nan\naccount\n and take note of the\nusername and password under \nHTTP Password\n in the settings.\n\n\nAfter you do this, you will need to follow these steps to fetch\nthe data.\n\n\nexport GERRIT_USERNAME=$USERNAME;\nexport GERRIT_PASSWORD=$PASSWORD;\nreview_analaysis warm_cache;\n\n\n\n\nThis will download around 5.3 Gb of JSON and store it under a\n\n_cache\n. After this is finished (it will take a while) you are\nset to examine the data. The cache doesn't invalidate and needs\nto be manually busted by deleting the \n_cache\n directory.\n\n\nViewing the data\n\n\nAfter you have all the data, run the following command:\n\n\nreview_analaysis report;\nmkdocs serve;\n\n\n\n\nThen go to \nlocalhost:8000\n in your browser to see the data.", 
            "title": "Home"
        }, 
        {
            "loc": "/#review-analysis", 
            "tags": "", 
            "text": "Review Analysis is a project for analysing code review data to\nlook find interesting data and create pretty graphs.  This project is under heavy development and currently rough\naround the edges. Pull requests are more than welcome. At the\nmoment we only look at all the projects under the OpenStack\ngerrit review data.", 
            "title": "Review Analysis"
        }, 
        {
            "loc": "/#install", 
            "tags": "", 
            "text": "This currently requires a few steps at the moment.  git clone https://github.com/d0ugal/review_analysis.git;\ncd mkdocs;\npip install -r requirements.txt;\npython setup.py install;", 
            "title": "Install"
        }, 
        {
            "loc": "/#usage", 
            "tags": "", 
            "text": "", 
            "title": "Usage"
        }, 
        {
            "loc": "/#first-time-setup", 
            "tags": "", 
            "text": "First you will need some data to work with. At the moment we\ncurrently only support the OpenStack deployment of Gerrit which\nhas over 140,000 reviews. You will need to create  an\naccount  and take note of the\nusername and password under  HTTP Password  in the settings.  After you do this, you will need to follow these steps to fetch\nthe data.  export GERRIT_USERNAME=$USERNAME;\nexport GERRIT_PASSWORD=$PASSWORD;\nreview_analaysis warm_cache;  This will download around 5.3 Gb of JSON and store it under a _cache . After this is finished (it will take a while) you are\nset to examine the data. The cache doesn't invalidate and needs\nto be manually busted by deleting the  _cache  directory.", 
            "title": "First time setup"
        }, 
        {
            "loc": "/#viewing-the-data", 
            "tags": "", 
            "text": "After you have all the data, run the following command:  review_analaysis report;\nmkdocs serve;  Then go to  localhost:8000  in your browser to see the data.", 
            "title": "Viewing the data"
        }, 
        {
            "loc": "/reports/comments/", 
            "tags": "", 
            "text": "Comments\n\n\nNo. comments vs the no. +2's\n\n\nNone\n\n\n\n\nNo. comments vs the no. +1's\n\n\nNone\n\n\n\n\nNo. comments vs the no. -1's\n\n\nNone\n\n\n\n\nNo. comments vs the no. -2's\n\n\nNone", 
            "title": "Comments"
        }, 
        {
            "loc": "/reports/comments/#comments", 
            "tags": "", 
            "text": "", 
            "title": "Comments"
        }, 
        {
            "loc": "/reports/comments/#no-comments-vs-the-no-2s", 
            "tags": "", 
            "text": "None", 
            "title": "No. comments vs the no. +2's"
        }, 
        {
            "loc": "/reports/comments/#no-comments-vs-the-no-1s", 
            "tags": "", 
            "text": "None", 
            "title": "No. comments vs the no. +1's"
        }, 
        {
            "loc": "/reports/comments/#no-comments-vs-the-no-1s_1", 
            "tags": "", 
            "text": "None", 
            "title": "No. comments vs the no. -1's"
        }, 
        {
            "loc": "/reports/comments/#no-comments-vs-the-no-2s_1", 
            "tags": "", 
            "text": "None", 
            "title": "No. comments vs the no. -2's"
        }, 
        {
            "loc": "/reports/developer/", 
            "tags": "", 
            "text": "developer\n\n\nDeveloper rating\n\n\nNone\n\n\n\n\nDevelopers with the most timezones\n\n\nNone", 
            "title": "Developer"
        }, 
        {
            "loc": "/reports/developer/#developer", 
            "tags": "", 
            "text": "", 
            "title": "developer"
        }, 
        {
            "loc": "/reports/developer/#developer-rating", 
            "tags": "", 
            "text": "None", 
            "title": "Developer rating"
        }, 
        {
            "loc": "/reports/developer/#developers-with-the-most-timezones", 
            "tags": "", 
            "text": "None", 
            "title": "Developers with the most timezones"
        }, 
        {
            "loc": "/reports/duration/", 
            "tags": "", 
            "text": "Duration\n\n\nThe fastest developer\n\n\nNone\n\n\n\n\nThe fastest project\n\n\nNone\n\n\n\n\nThe fastest Project Group\n\n\nNone\n\n\n\n\nThe fastest hour (UTC)\n\n\nNone", 
            "title": "Duration"
        }, 
        {
            "loc": "/reports/duration/#duration", 
            "tags": "", 
            "text": "", 
            "title": "Duration"
        }, 
        {
            "loc": "/reports/duration/#the-fastest-developer", 
            "tags": "", 
            "text": "None", 
            "title": "The fastest developer"
        }, 
        {
            "loc": "/reports/duration/#the-fastest-project", 
            "tags": "", 
            "text": "None", 
            "title": "The fastest project"
        }, 
        {
            "loc": "/reports/duration/#the-fastest-project-group", 
            "tags": "", 
            "text": "None", 
            "title": "The fastest Project Group"
        }, 
        {
            "loc": "/reports/duration/#the-fastest-hour-utc", 
            "tags": "", 
            "text": "None", 
            "title": "The fastest hour (UTC)"
        }, 
        {
            "loc": "/reports/general/", 
            "tags": "", 
            "text": "general\n\n\nnumber_of_reviews\n\n\nNone", 
            "title": "General"
        }, 
        {
            "loc": "/reports/general/#general", 
            "tags": "", 
            "text": "", 
            "title": "general"
        }, 
        {
            "loc": "/reports/general/#number_of_reviews", 
            "tags": "", 
            "text": "None", 
            "title": "number_of_reviews"
        }, 
        {
            "loc": "/reports/sloc/", 
            "tags": "", 
            "text": "sloc\n\n\nsize_vs_reviews\n\n\nNone\n\n\n\n\nsize_vs_hour\n\n\nNone\n\n\n\n\nsize_vs_commit_message\n\n\nNone\n\n\n\n\nsize_vs_comment_count\n\n\nNone", 
            "title": "SLOC"
        }, 
        {
            "loc": "/reports/sloc/#sloc", 
            "tags": "", 
            "text": "", 
            "title": "sloc"
        }, 
        {
            "loc": "/reports/sloc/#size_vs_reviews", 
            "tags": "", 
            "text": "None", 
            "title": "size_vs_reviews"
        }, 
        {
            "loc": "/reports/sloc/#size_vs_hour", 
            "tags": "", 
            "text": "None", 
            "title": "size_vs_hour"
        }, 
        {
            "loc": "/reports/sloc/#size_vs_commit_message", 
            "tags": "", 
            "text": "None", 
            "title": "size_vs_commit_message"
        }, 
        {
            "loc": "/reports/sloc/#size_vs_comment_count", 
            "tags": "", 
            "text": "None", 
            "title": "size_vs_comment_count"
        }, 
        {
            "loc": "/reports/timezones/", 
            "tags": "", 
            "text": "timezones\n\n\nspread\n\n\nNone", 
            "title": "Timezones"
        }, 
        {
            "loc": "/reports/timezones/#timezones", 
            "tags": "", 
            "text": "", 
            "title": "timezones"
        }, 
        {
            "loc": "/reports/timezones/#spread", 
            "tags": "", 
            "text": "None", 
            "title": "spread"
        }
    ]
};
for (var i=0; i < tipuesearch.pages.length; i++){
    tipuesearch.pages[i].loc = base_url + tipuesearch.pages[i].loc;
}